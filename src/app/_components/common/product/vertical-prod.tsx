"use client";

import "./product.scss";

import * as React from "react";

import CustomButton from "@/app/_components/common/custom-button/button";
import Image from "next/image";
import { Product } from "@/models";
import { addToCart } from "@/app/lib";
import { redirect } from "next/navigation";
import { useAppDispatch } from "@/hooks";

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
  const dispatch = useAppDispatch();

  const onCartChange = () => {
    dispatch(addToCart(product));
  };

  return (
    <div
      className={`vertical-prod `}
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

        <CustomButton
          kind="normal"
          content="add to card"
          onClick={onCartChange}
        />
      </div>
    </div>
  );
}
