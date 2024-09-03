"use client";

import "swiper/css";
import "./banner.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { bannerProducts, images } from "@/app/constants";

import CartButton from "../cart-button/cart-button";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export interface IBannerProps {
  bannerBg?: string;
  bannerTitle?: string;
  bannerSubtitle?: string;
}

export default function Banner(props: IBannerProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="banner-container flex-center">
      <Swiper
        autoplay
        onSlideChange={(swiper) => setActiveTab(swiper.realIndex)}
        className="mySwiper banner-products"
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

      <Image
        className="banner-wave"
        src={images.bottomWave}
        alt="bottom wave"
      />
    </div>
  );
}
