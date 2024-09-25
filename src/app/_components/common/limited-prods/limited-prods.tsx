import "./limited-prods.scss";

import * as React from "react";

import CartButton from "../custom-button/cart-button";
import Image from "next/image";
import { Product } from "@/models";
import { motion } from "framer-motion";

export interface ILimitedProdsProps {
  product: Product;

  className?: string;

  style?: React.CSSProperties;

  prodImgSize?: string;
}

export default function LimitedProds({
  product,
  className,
  style,
  prodImgSize,
}: ILimitedProdsProps) {
  return (
    <div className={`prod-container flex-center ${className}`} style={style}>
      <motion.div
        initial={{ opacity: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        className={`prod-img flex-center`}
      >
        <Image
          src={product.images![0]}
          alt="prod image"
          width={1000}
          height={1000}
          style={{ height: prodImgSize }}
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
              price={`${product.basePrice!}`}
              style={{ color: "#fff" }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
