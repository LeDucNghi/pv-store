"use client";

import "swiper/css";
import "./banner.scss";
import "../../../../app/_components/layouts/home-layout/home-layout.scss";

import HomeBanner from "./home-banner";
import MainBanner from "./main-banner";
import { useState } from "react";

export interface IBannerProps {
page: "home" | "main"

  bannerBg?: string;
  bannerTitle?: string;
  bannerSubtitle?: string; 
}

export default function Banner({page, bannerBg, bannerSubtitle, bannerTitle}: IBannerProps) {

  return (
    <>
      {page === "home" ? <HomeBanner /> : <MainBanner bannerBg={bannerBg!} bannerTitle={bannerTitle!} bannerSubtitle={bannerSubtitle} />}
    </>
  );
}
