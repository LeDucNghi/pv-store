"use client";

import "./home-layout.scss";

import * as React from "react";

import { AnimatePresence } from "framer-motion";
import Banner from "../../common/banner/banner";
import Image from "next/image";
import { images } from "@/app/constants";

export interface IHomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: IHomeLayoutProps) {
  return (
    <AnimatePresence mode="wait">
      <div className="home-layout">
        <div className="home-banner-img">
          <Image src={images.homeBg} alt="home background" />
        </div>

        <Banner />

        {children}
      </div>
    </AnimatePresence>
  );
}
