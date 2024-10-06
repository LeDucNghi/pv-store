import "./cart.scss";

import * as React from "react";

import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";
import Image from "next/image";
import { Product } from "@/models";
import { selectCart } from "@/app/lib/redux";
import { useAppSelector } from "@/hooks";

export interface ICartItemProps {
  product: Product;
}

export default function CartItem({ product }: ICartItemProps) {
  return (
    <div className="prods-cart-item">
      <Image
        src={product.images![0]}
        alt={product.name!}
        width={100}
        height={100}
        className="prods-cart-img"
      />

      <div className="cart-item-info">
        <span className="cart-item-name">{product.name}</span>

        <span className="cart-item-quantity">
          {product.quantity} x {product.basePrice}
        </span>
      </div>

      <IconButton className="clear-icon">
        <ClearIcon />
      </IconButton>
    </div>
  );
}
