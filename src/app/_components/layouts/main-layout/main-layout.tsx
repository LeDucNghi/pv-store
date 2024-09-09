"use client";

import "./main-layout.scss";

import * as React from "react";

import { AnimatePresence } from "framer-motion";
import Banner from "../../common/banner/banner";
import Footer from "../../common/footer/footer";

export interface IMainLayoutProps {
  children: React.ReactNode;

  bannerBg: string;
  bannerTitle: string;
  bannerSubtitle?: string;
}

export default function MainLayout({
  children,
  bannerBg,
  bannerTitle,
  bannerSubtitle,
}: IMainLayoutProps) {
  return (
    <AnimatePresence mode="wait">
      <div className="main-layout">
        <Banner
          page="main"
          bannerBg={bannerBg!}
          bannerTitle={bannerTitle!}
          bannerSubtitle={bannerSubtitle}
        />

        {children}

        <Footer style={{ top: "0rem", zIndex: "-1" }} />
      </div>
    </AnimatePresence>
  );
}
