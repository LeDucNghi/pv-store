"use client";

import "./home.scss";

import HomeLayout from "./_components/layouts/home-layout/home-layout";
import Image from "next/image";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { deliverySteps } from "./constants";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <HomeLayout>
      <div className="body-container">
        <div className="delivery-step">
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
        </div>
      </div>
    </HomeLayout>
  );
}
