"use client";

import "./delivery.scss";

import * as React from "react";

import { deliverySteps, images } from "@/constants";

import Image from "next/image";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { motion } from "framer-motion";

export interface IDeliveryStepsProps {}

export default function DeliverySteps(props: IDeliveryStepsProps) {
  return (
    <div className="delivery-step">
      <Image
        className="top-wave"
        src={images.whiteBottomWave}
        alt="bottom wave"
      />

      <motion.h1
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
      >
        đồ ăn tươi. giao hàng nhanh.
      </motion.h1>

      <div className="flex steps">
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
        src={images.whiteBottomWave}
        alt="bottom wave"
      />
    </div>
  );
}
