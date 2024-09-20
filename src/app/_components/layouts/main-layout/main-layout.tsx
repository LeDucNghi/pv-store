"use client";

import "./main-layout.scss";

import * as React from "react";

import Footer from "../../common/footer/footer";
import Header from "../../common/header/header";
import Loader from "../../common/loader/loader";
import MainBanner from "../../common/banner/main-banner";
import useDebounce from "@/hooks/use-debounce";

export interface IMainLayoutProps {
  children: React.ReactNode;

  bannerBg: string;
  bannerTitle: string;
  bannerSubtitle?: string;
  color?: "red" | "cream";
}

export default function MainLayout({
  children,
  bannerBg,
  bannerTitle,
  bannerSubtitle,
  color,
}: IMainLayoutProps) {
  const { show } = useDebounce({ time: 3000 });

  if (!show) return <Loader />;

  return (
    <>
      <Header />

      <div className="main-layout">
        <MainBanner
          color={color}
          bannerBg={bannerBg!}
          bannerTitle={bannerTitle!}
          bannerSubtitle={bannerSubtitle}
        />

        {children}

        <Footer style={{ top: "0rem", zIndex: "-1" }} />
      </div>
    </>
  );
}
