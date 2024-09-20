"use client";

import "./product.scss";

import * as React from "react";

import Image from "next/image";
import NormalButton from "../custom-button/normal-button";
import { Product } from "@/models";
import { addToCart } from "@/app/lib/redux";
import { redirect } from "next/navigation";
import { useAppDispatch } from "@/hooks";

export interface IVerticalProdProps {
  product: Product;

  style?: React.CSSProperties;
  className?: string;
}

export default function VerticalProd({
  product,
  style,
  className,
}: IVerticalProdProps) {
  const dispatch = useAppDispatch();

  const onCartChange = () => {
    dispatch(addToCart(product));
  };

  return (
    <div
      className={`vertical-prod`}
      onClick={() => redirect(`/product/${product.id}`)}
    >
      <div className={`prod-wrapper ${className}`} style={style}>
        <div className="prod-img flex-center">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={340}
            height={340}
          />
        </div>

        <div className="prod-content">
          <span className="prod-name">{product.name}</span>

          <div className="prod-description">{product.description}</div>

          <div className="prod-price">{product.goodsPrice}</div>
        </div>

        <NormalButton onClick={onCartChange}>add to card</NormalButton>
      </div>
    </div>
  );
}
