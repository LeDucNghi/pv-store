"use client";

import "./combo.scss";

import * as React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import LimitedProds from "@/app/_components/common/limited-prods/limited-prods";
import { homeMenu } from "@/_mock";
import { useProductList } from "@/hooks";

export interface IComboProps {}

export default function Combo(props: IComboProps) {
  const { data } = useProductList({});

  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div className="combo-wrapper">
      <Swiper
        autoplay
        onSlideChange={(swiper) => setActiveTab(swiper.realIndex)}
        className="mySwiper menu-products"
      >
        {data.data.map((prods, key) => {
          return (
            <SwiperSlide className="menu-slide" key={key}>
              <LimitedProds
                product={prods}
                className="slide-wrapper"
                key={activeTab ? activeTab : "empty"}
                style={{ backgroundSize: "cover" }}
                prodImgSize="70%"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
