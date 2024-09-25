import "./product.scss";

import * as React from "react";

import { Button } from "@mui/material";
import Image from "next/image";
import { Product } from "@/models";

export interface IImageProdProps {
  bg: string;

  product: Product;

  style?: React.CSSProperties;
  className?: string;
  titleSize?: string;
}

export function ImageProd({
  bg,
  product,
  style,
  className,
  titleSize,
}: IImageProdProps) {
  return (
    <div className={`img-prod ${className}`} style={style}>
      <div className="prod-item-wrapper">
        <Image
          className="prod-img"
          src={bg}
          alt="prod image"
          width={500}
          height={500}
        />

        <div className="prod-item-header">
          <span> special offer </span>
          <a style={{ fontSize: titleSize }} href="">
            {" "}
            {product.name}{" "}
          </a>
        </div>

        <Button className="prod-btn" variant="contained">
          add to cart
        </Button>
      </div>
    </div>
  );
}
