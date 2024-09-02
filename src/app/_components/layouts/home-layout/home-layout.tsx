import "./home-layout.scss";

import * as React from "react";

import Banner from "../../common/banner/banner";
import Image from "next/image";
import { images } from "@/app/constants";

export interface IHomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: IHomeLayoutProps) {
  return (
    <div className="home-layout">
      <div className="home-background"></div>

      <Banner />

      {children}
    </div>
  );
}
