import * as React from "react";

import HorizontalProd from "./horizontal-prod";
import ImageProd from "./img-prod";
import { Product } from "@/models";
import VericalProd from "./vertical-prod";

export interface IProductProps {
  type: "img" | "normal";
  direction?: "vertical" | "horizontal";

  bg?: string;

  product: Product;

  style?: React.CSSProperties;
  className?: string;
}

export default function CustomProduct({
  bg,
  type,
  direction,
  product,
  style,
  className,
}: IProductProps) {
  return (
    <>
      {type === "img" ? (
        <ImageProd
          className={className}
          style={style}
          bg={bg!}
          product={product}
        />
      ) : direction === "vertical" ? (
        <VericalProd className={className} style={style} product={product} />
      ) : (
        <HorizontalProd className={className} style={style} product={product} />
      )}
    </>
  );
}
