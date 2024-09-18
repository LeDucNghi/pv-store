import "./products.scss";

import Cart from "../../_components/common/cart/cart";
import ComponentWrapper from "@/app/_components/common/wrapper/component-wrapper";
import Filter from "../components/filter/filter";
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
      <ComponentWrapper color="cream">
        <div className="products-wrapper">
          <div className="products-header">
            <Filter />

            <Search />
          </div>

          <div className="products-main">
            <ProductsList />

            <div className="prods-cart">
              <Cart />
            </div>
          </div>
        </div>
      </ComponentWrapper>
    </MainLayout>
  );
}
