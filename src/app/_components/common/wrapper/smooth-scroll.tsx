"use client";

import { cancelFrame, frame } from "framer-motion";
import { useEffect, useRef } from "react";

import type { LenisRef } from "lenis/react";
import { ReactLenis } from "lenis/react";

export interface ISmoothScrollProps {
  children: React.ReactNode;
}

export const SmoothScroll = ({ children }: ISmoothScrollProps) => {
  //   const lenisRef = useRef<LenisRef>(null);

  //   useEffect(() => {
  //     function update(data: { timestamp: number }) {
  //       const time = data.timestamp;
  //       lenisRef.current?.lenis?.raf(time);
  //     }

  //     frame.update(update, true);

  //     return () => cancelFrame(update);
  //   }, []);

  return (
    <ReactLenis
      options={{ autoRaf: false, smoothWheel: true, lerp: 0.1, duration: 1.5 }}
      //   ref={lenisRef}
    >
      {children}
    </ReactLenis>
  );
};
