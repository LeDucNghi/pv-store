"use client";

import "./main-layout.scss";

import * as React from "react";

import Banner from "../../common/banner/banner";
import Footer from "../../common/footer/footer";
import Header from "../../common/header/header";
import Loader from "../../common/loader/loader";
import useDebounce from "@/hooks/useDebounce";

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
  const { show } = useDebounce({ time: 3000 });

  if (!show) return <Loader />;

  return (
    <>
      <Header />

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
    </>
  );
}
