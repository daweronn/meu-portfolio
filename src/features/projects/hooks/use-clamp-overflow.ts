"use client";

import { useEffect, useRef, useState } from "react";

export function useClampOverflow<T extends HTMLElement>(enabled: boolean) {
  const ref = useRef<T>(null);
  const [overflowing, setOverflowing] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || !enabled) {
      return;
    }
    const measure = () =>
      setOverflowing(element.scrollHeight > element.clientHeight + 1);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, [enabled]);

  return { ref, overflowing };
}
