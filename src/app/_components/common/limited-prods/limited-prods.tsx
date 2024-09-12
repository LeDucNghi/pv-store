import "./limited-prods.scss";

import * as React from "react";

import CartButton from "../custom-button/cart-button";
import CustomButton from "../custom-button/button";
import Image from "next/image";
import { Product } from "@/models";
import { motion } from "framer-motion";

export interface ILimitedProdsProps {
  product: Product;

  imgDirection: "left" | "right";

  className?: string;

  style?: React.CSSProperties;
}

export default function LimitedProds({
  product,
  className,
  style,
}: ILimitedProdsProps) {
  return (
    <div className={`prod-container ${className}`} style={style}>
      <motion.div
        initial={{ opacity: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        className="prod-img flex-center"
      >
        <Image
          src={product.images[0]}
          alt="prod image"
          width={1000}
          height={1000}
        />
      </motion.div>

      <motion.div
        initial={{ y: -10, opacity: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.5 },
        }}
        className="prod-content"
      >
        <div className="content-wrapper">
          <span className="prod-name"> {product.name} </span>

          <div className="prod-description">{product.description}</div>

          <div className="prod-cart-btn">
            <CartButton
              variant="outlined"
              info={`${product.weight!} gr / 600 cal`}
              price={`${product.goodsPrice!}`}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
