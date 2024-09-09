import "./limited-prods.scss";

import * as React from "react";

import CustomButton from "../custom-button/button";
import Image from "next/image";
import { Product } from "@/models";
import { images } from "@/constants";

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
      <div className="prod-img">
        <Image
          //   src={product.images[0]}
          src={images.banhtrang}
          alt="prod image"
          width={200}
          height={200}
        />
      </div>

      <div className="prod-content">
        <div className="content-wrapper">
          <span className="prod-name"> {product.name} </span>

          <div className="prod-description">{product.description}</div>

          <div className="prod-cart-btn">
            <CustomButton
              kind="cart"
              info={`${product.weight!} gr / 600 cal`}
              price={`${product.goodsPrice!}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
