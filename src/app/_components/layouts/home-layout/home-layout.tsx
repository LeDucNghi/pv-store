"use client";

import "./home-layout.scss";

import * as React from "react";

import { AnimatePresence } from "framer-motion";
import Banner from "../../common/banner/banner";
import Footer from "../../common/footer/footer";

export interface IHomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: IHomeLayoutProps) {
  return (
    <AnimatePresence mode="wait">
      <div className="home-layout">
        <Banner />

        {children}

        <Footer />
      </div>
    </AnimatePresence>
  );
}
