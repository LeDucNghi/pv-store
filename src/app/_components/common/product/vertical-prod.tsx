"use client";

import "./product.scss";

import * as React from "react";

import { addToCart, selectCart } from "@/app/lib/redux";
import { useAppDispatch, useAppSelector } from "@/hooks";

import Image from "next/image";
import NormalButton from "../custom-button/normal-button";
import { Product } from "@/models";
import { Tooltip } from "@mui/material";
import { redirect } from "next/navigation";

export interface IVerticalProdProps {
  product: Product;

  style?: React.CSSProperties;
  className?: string;
}

export function VerticalProd({
  product,
  style,
  className,
}: IVerticalProdProps) {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);

  const existedProduct = cart.items.some((x) => x.id === product.id);

  return (
    <div
      className={`vertical-prod`}
      onClick={() => redirect(`/product/${product.id}`)}
    >
      <div className={`prod-wrapper ${className}`} style={style}>
        <div className="prod-img flex-center">
          <Image
            src={product.images![0]}
            alt={product.name!}
            width={340}
            height={340}
          />
        </div>

        <div className="prod-content">
          <span className="prod-name">{product.name}</span>

          <div className="prod-description">{product.description}</div>

          <div className="prod-price">
            {parseFloat(`${product.basePrice}`).toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </div>
        </div>

        <Tooltip
          arrow
          title={existedProduct ? "This Product Already In Cart" : ""}
        >
          <NormalButton
            onClick={() =>
              dispatch(addToCart({ ...product, price: product.basePrice }))
            }
          >
            add to card
          </NormalButton>
        </Tooltip>
      </div>
    </div>
  );
}
