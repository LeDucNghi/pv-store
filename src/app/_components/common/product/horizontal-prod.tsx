"use client";

import "./product.scss";

import Image from "next/image";
import { Product } from "@/models";
import { addToCart } from "@/app/lib/redux";
import { useAppDispatch } from "@/hooks";

export interface IHorizontalProdProps {
  product: Product;

  style?: React.CSSProperties;
  className?: string;
}

export function HorizontalProd({
  product,
  style,
  className,
}: IHorizontalProdProps) {
  const dispatch = useAppDispatch();

  const onCartChange = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className={`horizontal-prod ${className}`} style={style}>
      <div className="prod-img">
        <Image
          src={product.images![0]}
          alt="prod image"
          width={500}
          height={500}
        />
      </div>

      <div className="prod-content">
        <div className="content-header">
          <span className="prod-name"> {product.name} </span>
          <span className="prod-price"> {product.basePrice} </span>
        </div>

        <div className="content-body">{product.description}</div>
      </div>
    </div>
  );
}
