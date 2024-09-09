"use client";

import "./home-layout.scss";

import * as React from "react";

import Banner from "../../common/banner/banner";
import Footer from "../../common/footer/footer";
import Header from "../../common/header/header";
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
        <Banner page="home" />

        {children}

        <Footer
          style={{
            top: "6rem",
          }}
        />
      </div>
    </>
  );
}
