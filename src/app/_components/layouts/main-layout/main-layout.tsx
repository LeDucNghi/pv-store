"use client";

import * as React from "react";

import { AnimatePresence } from "framer-motion";
import Footer from "../../common/footer/footer";

export interface IMainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: IMainLayoutProps) {
  return (
    <AnimatePresence mode="wait">
      <div>
        {children}

        <Footer />
      </div>
    </AnimatePresence>
  );
}
