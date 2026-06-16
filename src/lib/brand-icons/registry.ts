import {
  siTypescript,
  siJavascript,
  siPython,
  siReact,
  siNodedotjs,
  siNextdotjs,
  siTauri,
  siVite,
  siPostgresql,
  siDocker,
  siSupabase,
  siTailwindcss,
  siFramer,
  siGit,
} from "simple-icons";
import type { BrandIcon } from "@/types/brand-icon";
import { awsIcon } from "@/lib/brand-icons/aws-icon";

interface SimpleIconShape {
  title: string;
  hex: string;
  path: string;
}

function fromSimpleIcon(icon: SimpleIconShape): BrandIcon {
  return {
    title: icon.title,
    hex: icon.hex,
    path: icon.path,
    viewBox: "0 0 24 24",
  };
}

export const brandIcons: Record<string, BrandIcon> = {
  typescript: fromSimpleIcon(siTypescript),
  javascript: fromSimpleIcon(siJavascript),
  python: fromSimpleIcon(siPython),
  react: fromSimpleIcon(siReact),
  nodejs: fromSimpleIcon(siNodedotjs),
  nextdotjs: fromSimpleIcon(siNextdotjs),
  tauri: fromSimpleIcon(siTauri),
  vite: fromSimpleIcon(siVite),
  postgresql: fromSimpleIcon(siPostgresql),
  docker: fromSimpleIcon(siDocker),
  supabase: fromSimpleIcon(siSupabase),
  aws: awsIcon,
  tailwindcss: fromSimpleIcon(siTailwindcss),
  framermotion: fromSimpleIcon(siFramer),
  git: fromSimpleIcon(siGit),
};
