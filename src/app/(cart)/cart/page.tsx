import "./cart.scss";

import * as React from "react";

import CartTotal from "../components/cart-total";
import ComponentWrapper from "@/app/_components/common/wrapper/component-wrapper";
import { Divider } from "@mui/material";
import Link from "next/link";
import MainLayout from "@/app/_components/layouts/main-layout/main-layout";
import NormalButton from "@/app/_components/common/custom-button/normal-button";
import ProductCart from "../components/prods-cart";
import { images } from "@/constants";

export interface ICartPageProps {}

export default function CartPage(props: ICartPageProps) {
  return (
    <MainLayout
      bannerBg={images.mainLayoutBg.src}
      bannerTitle="Your cart"
      color="cream"
    >
      <ComponentWrapper color="cream" style={{ height: "auto" }}>
        <div className="cart-container">
          <div className="cart-wrapper">
            <ProductCart />

            <Divider />

            <CartTotal />

            <Divider />

            <div className="cart-button py-4 flex-center">
              <NormalButton
                style={{
                  backgroundColor: "#e84242",
                  color: "#fff",
                  textTransform: "capitalize",
                  width: "47%",
                }}
              >
                <Link href="/checkout">proceed to checkout</Link>
              </NormalButton>
            </div>
          </div>
        </div>
      </ComponentWrapper>
    </MainLayout>
  );
}
