import "./products.scss";

import * as React from "react";

import Cart from "../components/cart/cart";
import Filter from "../components/filter/filter";
import MainLayout from "@/app/_components/layouts/main-layout/main-layout";
import ProductsList from "../components/prods-list/prods-list";
import Search from "../components/search/search";
import { images } from "@/constants";

export interface IProductPageProps {}

export default function ProductPage(props: IProductPageProps) {
  return (
    <MainLayout bannerBg={images.mainLayoutBg.src} bannerTitle="Our Menu">
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
      </div>
    </MainLayout>
  );
}
