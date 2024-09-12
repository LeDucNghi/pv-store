import "./banner.scss";

import * as React from "react";

import Image from "next/image";
import { images } from "@/constants";

export interface IMainBannerProps {
  bannerBg: string;
  bannerTitle: string;
  bannerSubtitle?: string;

  color?: "red" | "cream";
}

export default function MainBanner({
  bannerBg,
  bannerTitle,
  bannerSubtitle,
  color,
}: IMainBannerProps) {
  return (
    <div className="main-banner-container">
      <Image
        className="main-banner-bg"
        src={bannerBg}
        alt="bg"
        width={1500}
        height={1500}
      />
      <div className="main-banner-content">
        <h1> {bannerTitle} </h1>
        <h4> {bannerSubtitle} </h4>

        <div className="banner-glass">
          <Image
            className="main-banner-bg"
            src={bannerBg}
            alt="bg"
            width={1500}
            height={1500}
          />
        </div>
      </div>

      <Image
        className="top-wave"
        src={color === "cream" ? images.creamBottomWave : images.redBottomWave}
        alt="wave"
      />
    </div>
  );
}
