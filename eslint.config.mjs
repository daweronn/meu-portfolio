// Fast lint tier. Everything here runs without type information, which is
// what keeps it quick enough for a pre-commit hook. The rules that need the
// type checker live in eslint.typed.config.mjs and run on their own script.
//
// Adapted to this project:
//   - no database client exists, so quality/no-direct-data-access is not
//     configured; the data boundary is the mock layer, enforced by import-x
//   - no log adapter exists, so no-direct-console has no "off" override
import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import { defineConfig, globalIgnores } from "eslint/config";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import importX from "eslint-plugin-import-x";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

import quality from "./eslint-rules/index.cjs";

const presentation = [
  "./src/app/**/*",
  "./src/components/**/*",
  "./src/hooks/**/*",
  "./src/features/*/components/**/*",
  "./src/features/*/hooks/**/*",
];

export default defineConfig([
  {
    languageOptions: {
      parserOptions: { tsconfigRootDir: import.meta.dirname },
      // js.configs.recommended turns on no-undef, which knows nothing about
      // the runtime this project targets -- without this, every console or
      // process reference is reported as an undefined variable. Declare what
      // the code actually uses. When the list outgrows a handful, install the
      // `globals` package and spread globals.node or globals.browser instead.
      globals: {
        console: "readonly",
        process: "readonly",
        fetch: "readonly",
        URL: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
      },
    },
  },
  js.configs.recommended,
  ...tseslint.configs.strict,

  nextPlugin.configs["core-web-vitals"],
  reactHooks.configs.flat.recommended,

  {
    // import-x resolves TypeScript path aliases so no-unresolved is accurate.
    // The zones encode this project's layering: app -> features -> services
    // -> lib, and presentation reaches data only through services.
    plugins: { "import-x": importX },
    settings: {
      "import-x/resolver-next": [createTypeScriptImportResolver()],
    },
    rules: {
      // baseline: 1 (src/app/layout.tsx, geist/font/mono)
      "import-x/no-unresolved": "warn",
      "import-x/no-duplicates": "error",
      "import-x/no-restricted-paths": [
        "error",
        {
          zones: [
            { target: presentation, from: "./src/features/*/data/**/*" },
            {
              target: "./src/services/**/*",
              from: [
                "./src/app/**/*",
                "./src/components/**/*",
                "./src/features/*/components/**/*",
                "./src/features/*/hooks/**/*",
              ],
            },
            {
              target: "./src/lib/**/*",
              from: [
                "./src/app/**/*",
                "./src/components/**/*",
                "./src/features/**/*",
                "./src/services/**/*",
              ],
            },
          ],
        },
      ],
    },
  },
  {
    files: ["src/**/*.{js,jsx,ts,tsx,mjs,cjs}"],
    plugins: { quality },
    rules: {
      "no-empty": ["error", { allowEmptyCatch: true }],
      "no-var": "error",
      "prefer-const": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      // The size and complexity budget is all "warn" on purpose. These
      // numbers are a conversation starter about factoring, not a gate --
      // promote one to "error" once the count for it reaches zero.
      complexity: ["warn", 12],
      "max-depth": ["warn", 4],
      "max-statements": ["warn", 20],
      "max-params": ["warn", 4],
      "max-lines-per-function": [
        "warn",
        { max: 150, skipBlankLines: true, skipComments: true },
      ],
      "max-nested-callbacks": ["warn", 3],
      // baseline: 1 (locale-provider.tsx)
      "react-hooks/set-state-in-effect": "warn",
      "quality/max-lines": ["error", { max: 350 }],
      "quality/no-direct-console": "error",
    },
  },
  {
    // The same file budget for test files, at "warn". Placed after the
    // "error" block: for a file matched by both, flat config applies the
    // later block last.
    files: [
      "**/*.test.{ts,tsx}",
      "**/{__tests__,__mocks__,fixtures,mocks}/**/*.{ts,tsx}",
    ],
    plugins: { quality },
    rules: {
      "quality/max-lines": ["warn", { max: 350, includeTests: true }],
    },
  },
  {
    files: ["**/*.test.{ts,tsx}"],
    rules: {
      "max-statements": "off",
      "max-lines-per-function": "off",
      "max-nested-callbacks": "off",
      "import-x/no-restricted-paths": "off",
    },
  },
  {
    files: ["eslint-rules/**/*.cjs"],
    languageOptions: {
      sourceType: "commonjs",
      globals: { module: "readonly", require: "readonly" },
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  globalIgnores([
    ".claude/**",
    "node_modules/**",
    ".next/**",
    "out/**",
    "build/**",
    "coverage/**",
    "next-env.d.ts",
    "**/*.tsbuildinfo",
    "package-lock.json",
  ]),
]);
