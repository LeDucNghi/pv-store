import "./product.scss";

import Image from "next/image";
import { Product } from "@/models";

export interface IHorizontalProdProps {
  product: Product;

  style?: React.CSSProperties;
  className?: string;
}

export default function HorizontalProd({
  product,
  style,
  className,
}: IHorizontalProdProps) {
  return (
    <div className={`horizontal-prod ${className}`} style={style}>
      <div className="prod-img">
        <Image
          src={product.images[0]}
          alt="prod image"
          width={500}
          height={500}
        />
      </div>

      <div className="prod-content">
        <div className="content-header">
          <span className="prod-name"> {product.name} </span>
          <span className="prod-price"> {product.goodsPrice} </span>
        </div>

        <div className="content-body">{product.description}</div>
      </div>
    </div>
  );
}
