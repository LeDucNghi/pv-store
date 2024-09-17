"use client";

import "./home-layout.scss";

import * as React from "react";

import Footer from "../../common/footer/footer";
import Header from "../../common/header/header";
import HomeBanner from "../../common/banner/home-banner";
import Loader from "../../common/loader/loader";
import useDebounce from "@/hooks/useDebounce";

export interface IHomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: IHomeLayoutProps) {
  const { show } = useDebounce({ time: 3000 });

  if (!show) return <Loader />;

  return (
    <>
      <Header />

      <div className="home-layout">
        <HomeBanner />

        {children}

        <Footer />
      </div>
    </>
  );
}
