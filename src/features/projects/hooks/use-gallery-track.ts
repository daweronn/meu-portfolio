"use client";

import { useRef, useState } from "react";

export function useGalleryTrack(count: number) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const goTo = (target: number) => {
    const track = trackRef.current;
    if (!track) {
      return;
    }
    const next = Math.min(Math.max(target, 0), count - 1);
    track.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) {
      return;
    }
    setIndex(Math.round(track.scrollLeft / track.clientWidth));
  };

  return { trackRef, index, goTo, onScroll };
}
