import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils/cn";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/features/navbar/components/navbar";
import "flag-icons/css/flag-icons.min.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "David Felicio - Desenvolvedor de Software Fullstack",
  description: "A complexidade reduzida à sua forma mais simples.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.variable,
          GeistMono.variable,
          "min-h-dvh bg-background font-sans",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
