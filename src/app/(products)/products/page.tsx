import "./products.scss";

import * as React from "react";

import Cart from "../components/cart/cart";
import Filter from "../components/filter/filter";
import Image from "next/image";
import MainLayout from "@/app/_components/layouts/main-layout/main-layout";
import ProductsList from "../components/prods-list/prods-list";
import Search from "../components/search/search";
import { images } from "@/constants";

export interface IProductPageProps {}

export default function ProductPage(props: IProductPageProps) {
  return (
    <MainLayout
      bannerBg={images.mainLayoutBg.src}
      bannerTitle="Our Menu"
      color="cream"
    >
      <div className="products-container">
        <div className="products-wrapper">
          <div className="products-header">
            <Filter />

            <Search />
          </div>

          <div className="products-main">
            <ProductsList />

            <Cart />
          </div>
        </div>

        <Image
          src={images.creamBottomWave}
          alt=""
          className="bottom-wave bottom-[-4rem]"
        />
      </div>
    </MainLayout>
  );
}
