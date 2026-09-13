"use client";

import type { MouseEvent } from "react";
import { useTheme } from "next-themes";
import { runViewTransition } from "@/lib/utils/view-transition";

const revealDuration = 720;
const revealEasing = "cubic-bezier(0.4, 0, 0.2, 1)";
const softEdgeStop = 0.62;

export function useThemeTransition() {
  const { resolvedTheme, setTheme } = useTheme();

  return (event: MouseEvent<HTMLElement>) => {
    const next = resolvedTheme === "dark" ? "light" : "dark";
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );
    const size = (radius * 2) / softEdgeStop;

    const transition = runViewTransition("theme", () => {
      document.documentElement.classList.toggle("dark", next === "dark");
      setTheme(next);
    });

    void transition?.ready.then(() => {
      const root = document.documentElement;
      const timing: KeyframeAnimationOptions = {
        duration: revealDuration,
        easing: revealEasing,
        fill: "forwards",
      };
      root.animate(
        {
          maskSize: ["0px 0px", `${size}px ${size}px`],
          maskPosition: [`${x}px ${y}px`, `${x - size / 2}px ${y - size / 2}px`],
        },
        { ...timing, pseudoElement: "::view-transition-new(root)" },
      );
      root.animate(
        [
          { filter: "blur(4px)" },
          { filter: "blur(0px)", offset: 0.55 },
          { filter: "blur(0px)" },
        ],
        { ...timing, pseudoElement: "::view-transition-new(root)" },
      );
      root.animate(
        { filter: ["blur(0px)", "blur(3px)"] },
        { ...timing, pseudoElement: "::view-transition-old(root)" },
      );
    });
  };
}
