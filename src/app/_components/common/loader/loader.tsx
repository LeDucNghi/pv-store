"use client";

import "./loader.scss";

import * as React from "react";

import { AnimatePresence, motion } from "framer-motion";

export interface ILoadingProps {
  height?: string;
  style?: React.CSSProperties;
}

export default function Loader({ height, style }: ILoadingProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-center loader-container"
        style={{ ...style, height: height ? height : "100vh" }}
      >
        <div className="loader"></div>
      </motion.div>
    </AnimatePresence>
  );
}
