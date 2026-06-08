"use client";

import { useEffect, type RefObject } from "react";

export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,
  handler: () => void,
) {
  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      const element = ref.current;
      if (!element || element.contains(event.target as Node)) {
        return;
      }
      handler();
    }

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [ref, handler]);
}
