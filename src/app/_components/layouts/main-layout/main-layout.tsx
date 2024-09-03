"use client";

import * as React from "react";

import { AnimatePresence } from "framer-motion";

export interface IMainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: IMainLayoutProps) {
  return (
    <AnimatePresence mode="wait">
      <div>{children}</div>
    </AnimatePresence>
  );
}
