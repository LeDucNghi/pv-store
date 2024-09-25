"use client";

import * as React from "react";

import { prodImgGallery, productList } from "@/_mock";

import Cart from "@/app/_components/common/cart/cart";
import Image from "next/image";
import NormalButton from "@/app/_components/common/custom-button/normal-button";
import { Product } from "@/models";

export interface IProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: IProductInfoProps) {
  const [imgPreview, setImgPreview] = React.useState("");

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files as FileList;

    setImgPreview(URL.createObjectURL(selectedFiles?.[0]));
  };

  return (
    <div className="product-item-info">
      <div className="product-item-gallery col">
        <div className="image-preview flex-center">
          <Image
            src={imgPreview ? imgPreview : productList[0].images![0]}
            alt=""
            width={500}
            height={500}
          />
        </div>

        <div className="image-list">
          {prodImgGallery.map((x, key) => {
            return (
              <div className="image-wrapper flex-center" key={key}>
                <Image alt="" width={500} height={500} src={x.img} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="product-item-summary col">
        <h1> {productList[0].name} </h1>

        <p className="summary-price"> {productList[0].basePrice} </p>

        <p className="summary-description"> {productList[0].description} </p>

        <NormalButton
          style={{
            backgroundColor: "#e84242",
            color: "#fff",
            textTransform: "capitalize",
          }}
        >
          add to cart
        </NormalButton>
      </div>

      <div className="product-item-cart col">
        <Cart />
      </div>
    </div>
  );
}
