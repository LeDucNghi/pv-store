import * as React from "react";

import { Product } from "@/models";
import { VerticalProd } from "@/app/_components/common/product";
import { productList } from "@/_mock";

export interface IRelatedProductsProps {
  product: Product;
}

export default function RelatedProducts({ product }: IRelatedProductsProps) {
  return (
    <div className="related-prods-container">
      <h2>Related products</h2>

      <div className="related-prods">
        {productList.slice(0, 3).map((prod, key) => {
          return (
            <div key={key} className="prod-item-wrapper">
              <VerticalProd product={prod} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
