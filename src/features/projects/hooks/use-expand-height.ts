"use client";

import { useLayoutEffect, useRef, useState } from "react";

const transitionValue = "height 300ms ease-out";

export function useExpandHeight<T extends HTMLElement>(collapsedHeight: string) {
  const ref = useRef<T>(null);
  const previousHeight = useRef<number | null>(null);
  const initialized = useRef(false);
  const [expanded, setExpanded] = useState(false);

  const toggle = () => {
    previousHeight.current = ref.current?.getBoundingClientRect().height ?? null;
    setExpanded((value) => !value);
  };

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }
    if (!initialized.current) {
      initialized.current = true;
      element.style.height = collapsedHeight;
      return;
    }
    if (previousHeight.current === null) {
      return;
    }
    const start = previousHeight.current;
    previousHeight.current = null;
    element.style.height = "auto";
    const target = expanded ? `${element.scrollHeight}px` : collapsedHeight;
    element.style.height = `${start}px`;
    void element.offsetHeight;
    element.style.transition = transitionValue;
    element.style.height = target;
    const finish = () => {
      element.style.transition = "";
      if (expanded) {
        element.style.height = "auto";
      }
      element.removeEventListener("transitionend", finish);
    };
    element.addEventListener("transitionend", finish);
    return () => element.removeEventListener("transitionend", finish);
  }, [expanded, collapsedHeight]);

  return { ref, expanded, toggle };
}
