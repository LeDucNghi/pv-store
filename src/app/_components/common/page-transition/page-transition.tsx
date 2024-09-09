"use client";

import "./page-transition.scss";

import * as React from "react";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export interface IPageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: IPageTransitionProps) {
  const pathname = usePathname();

  return (
    <motion.div className="page-transition-container" key={pathname}>
      {children}

      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      ></motion.div>

      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      ></motion.div>
    </motion.div>
  );
}
