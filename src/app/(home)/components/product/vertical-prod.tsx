import "./product.scss";

import * as React from "react";

import { Button } from "@mui/material";
import Image from "next/image";
import { Product } from "@/models";
import { redirect } from "next/navigation";

export interface IVericalProdProps {
  product: Product;

  style?: React.CSSProperties;
  className?: string;
}

export default function VericalProd({
  product,
  style,
  className,
}: IVericalProdProps) {
  return (
    <div
      className={`vertical-prod ${className}`}
      onClick={() => redirect(`/product/${product.id}`)}
      style={style}
    >
      <div className="prod-wrapper">
        <Image
          src={product.images[0]}
          alt={product.name}
          width={340}
          height={340}
          objectFit="cover"
        />

        <div className="prod-content">
          <span className="prod-name">{product.name}</span>

          <div className="prod-description">{product.description}</div>

          <div className="prod-price">{product.goodsPrice}</div>
        </div>

        <Button variant="contained">add to cart</Button>
      </div>
    </div>
  );
}
