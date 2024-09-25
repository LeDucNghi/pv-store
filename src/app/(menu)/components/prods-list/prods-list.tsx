import "../../menu/menu.scss";

import * as React from "react";

import { ImageProd, VerticalProd } from "@/app/_components/common/product";

import Image from "next/image";
import { images } from "@/constants";
import { productList } from "@/_mock";

export interface IProdsListProps {}

export default function ProdsList(props: IProdsListProps) {
  return (
    <div className="menu-page-wrapper">
      <div className="menu-row row1">
        {productList.slice(0, 3).map((x, key) => {
          return (
            <div className="menu-prods-item" key={key}>
              {key % 2 === 0 ? (
                <VerticalProd
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
                <VerticalProd
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
                <VerticalProd
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

      <Image
        src={images.redBottomWave}
        className="bottom-wave"
        alt="bottom wave"
      />
    </div>
  );
}
