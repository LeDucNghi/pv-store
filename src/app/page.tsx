"use client";

import "./home.scss";

import { deliverySteps, images, specialOffers } from "../constants";

import { Button } from "@mui/material";
import HomeLayout from "./_components/layouts/home-layout/home-layout";
import Image from "next/image";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { motion } from "framer-motion";
import { redirect } from "next/navigation";

// import "../app/_components/layouts/home-layout/home-layout.scss";

export default function Home() {
  return (
    <HomeLayout>
      <>
        {/* DELIVERY STEP */}
        <div className="delivery-step">
          <Image
            className="top-wave"
            src={images.bottomWave}
            alt="bottom wave"
          />

          <motion.h1
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
          >
            đồ ăn tươi. giao hàng nhanh.
          </motion.h1>

          <div className="flex">
            {deliverySteps.map((step, key) => {
              return (
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                    transition: { duration: step.time },
                  }}
                  viewport={{ once: true, amount: 0.8 }}
                  className="inner-step"
                  key={key}
                >
                  <div className="step-img flex-center">
                    {step.id === 2 && (
                      <MoreHorizIcon className="step-line" fontSize="large" />
                    )}

                    <Image src={step.image} alt={step.name} />

                    {step.id === 2 && (
                      <MoreHorizIcon className="step-line" fontSize="large" />
                    )}
                  </div>

                  <div key={key} className="step-content">
                    <div className="step-name"> {step.name} </div>
                    <div className="step-description">{step.description}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <Image
            className="bottom-wave"
            src={images.bottomWave}
            alt="bottom wave"
          />
        </div>

        {/* SPECIAL OFFERS */}
        <div className="special-offers parallax">
          <Image
            className="parallax-image"
            src={images.homeBg}
            alt="home background"
          />

          <div className="offer-content">
            <div className="offer-title">
              <h1>special offers</h1>
            </div>

            <div className="offers flex-center">
              {specialOffers.map((offer, key) => {
                return (
                  <div className="offer-item" key={key}>
                    <div
                      className="offer-item-wrapper"
                      onClick={() => redirect(`/product/${offer.id}`)}
                    >
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

                      <Button className="offer-btn" variant="contained">
                        add to cart
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>

            <Image src={images.bottomWave} alt="bottom wave" />
          </div>
        </div>
      </>
    </HomeLayout>
  );
}
