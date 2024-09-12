"use client";

import "./combo.scss";

import * as React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import CustomButton from "@/app/_components/common/custom-button/button";
import Image from "next/image";
import { menuCombo } from "@/_mock";
import { motion } from "framer-motion";

export interface IComboProps {}

export default function Combo(props: IComboProps) {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div className="combo-wrapper">
      <Swiper
        autoplay
        onSlideChange={(swiper) => setActiveTab(swiper.realIndex)}
        className="mySwiper menu-products"
      >
        {menuCombo.map((prods, key) => {
          return (
            <SwiperSlide className="menu-slide" key={key}>
              <motion.div
                className="slide-wrapper"
                key={activeTab ? activeTab : "empty"}
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="prod-info "
                >
                  <span className="product-name"> {prods.name} </span>
                  <p className="product-description"> {prods.description} </p>

                  <div className="prod-cart-btn">
                    <CustomButton
                      kind="cart"
                      info={prods.weight}
                      price={prods.price}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="prod-img flex-center"
                >
                  <Image
                    src={prods.banner.src}
                    alt="product's image"
                    width={1000}
                    height={1000}
                  />
                </motion.div>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
