"use client";

import "../../../../app/_components/layouts/home-layout/home-layout.scss";
import "./banner.scss";

import * as React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { bannerProducts, images } from "@/constants";

import CartButton from "../custom-button/cart-button";
import Image from "next/image";
import { motion } from "framer-motion";

export interface IHomeBannerProps {}

export default function HomeBanner(props: IHomeBannerProps) {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div className="parallax home-banner-container flex-center">
      <Image
        className="parallax-image"
        src={images.homeBg}
        alt="home background"
      />

      <Swiper
        autoplay
        onSlideChange={(swiper) => setActiveTab(swiper.realIndex)}
        className="mySwiper banner-products flex-center"
      >
        {bannerProducts.map((prods, key) => {
          return (
            <SwiperSlide className="banner-slide" key={key}>
              <motion.div
                className="slide-wrapper flex-center"
                key={activeTab ? activeTab : "empty"}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="prod-img flex-center"
                >
                  <Image
                    src={images.product1}
                    alt="product's image"
                    width={800}
                    height={800}
                  />
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="prod-info flex-center"
                >
                  <span className="product-name"> {prods.name} </span>
                  <p className="product-description"> {prods.description} </p>

                  <div className="prod-cart-btn">
                    <CartButton info={prods.weight} price={prods.price} />
                  </div>
                </motion.div>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
