"use client";

import "./offers.scss";

import { images, specialOffers } from "@/constants";

import CustomButton from "@/app/_components/common/custom-button/button";
import Image from "next/image";
import { motion } from "framer-motion";

export interface IOffersProps {}

export default function Offers(props: IOffersProps) {
  return (
    <div className="special-offers parallax">
      <Image
        className="parallax-image"
        src={images.homeBg}
        alt="home background"
      />

      <div className="offer-content">
        <div className="offer-title">
          <motion.h1
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
          >
            special offers
          </motion.h1>
        </div>

        <div className="offers flex-center">
          {specialOffers.map((offer, key) => {
            return (
              <motion.div
                className="offer-item"
                key={key}
                initial={{ y: -10, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: offer.time },
                }}
                viewport={{ once: true, amount: 0.8 }}
              >
                <div className="offer-item-wrapper">
                  <Image
                    className="offer-img"
                    src={offer.images[0]}
                    alt="offer image"
                    width={500}
                    height={500}
                  />

                  <header>
                    <span> special offer </span>
                    <a href=""> {offer.name} </a>
                  </header>

                  <CustomButton
                    kind="normal"
                    content="add to card"
                    className="offer-btn"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <Image src={images.whiteBottomWave} alt="top wave" className="top-wave" />
    </div>
  );
}
