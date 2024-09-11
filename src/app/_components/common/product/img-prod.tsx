import * as React from "react";

import { Button } from "@mui/material";
import Image from "next/image";
import { Product } from "@/models";

export interface IImageProdProps {
  bg: string;

  product: Product;

  style?: React.CSSProperties;
  className?: string;
}

export default function ImageProd({
  bg,
  product,
  style,
  className,
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

        <header>
          <span> special offer </span>
          <a href=""> {product.name} </a>
        </header>

        <Button className="prod-btn" variant="contained">
          add to cart
        </Button>
      </div>
    </div>
  );
}
