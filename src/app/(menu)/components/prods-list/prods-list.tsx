import "../../menu/menu.scss";

import * as React from "react";

import ImageProd from "@/app/_components/common/product/img-prod";
import VericalProd from "@/app/_components/common/product/vertical-prod";
import { images } from "@/constants";
import { productList } from "@/_mock";

export interface IProdsListProps {}

export default function ProdsList(props: IProdsListProps) {
  return (
    <div className="menu-main">
      <div className="menu-row row1">
        {productList.slice(0, 3).map((x, key) => {
          return (
            <div className="menu-prods-item" key={key}>
              {key % 2 === 0 ? (
                <VericalProd
                  product={x}
                  style={{
                    background: "white",
                  }}
                />
              ) : (
                <ImageProd
                  bg={images.productRv1.src}
                  product={x}
                  style={{
                    height: "100%",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="menu-row row2">
        {productList.slice(0, 4).map((x, key) => {
          return (
            <div className="menu-prods-item" key={key}>
              {key % 2 !== 0 ? (
                <VericalProd
                  product={x}
                  style={{
                    background: "white",
                  }}
                />
              ) : (
                <ImageProd
                  bg={images.productRv1.src}
                  product={x}
                  style={{
                    height: "100%",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="menu-row row3">
        {productList.slice(0, 2).map((x, key) => {
          return (
            <div className="menu-prods-item" key={key}>
              {key % 2 === 0 ? (
                <VericalProd
                  product={x}
                  style={{
                    background: "white",
                  }}
                />
              ) : (
                <ImageProd
                  bg={images.productRv1.src}
                  product={x}
                  style={{
                    height: "100%",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
