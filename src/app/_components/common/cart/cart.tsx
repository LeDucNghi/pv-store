"use client";

import "./cart.scss";

import CartItem from "./cart-item";
import NormalButton from "@/app/_components/common/custom-button/normal-button";
import { productList } from "@/_mock";
import { redirect } from "next/navigation";
import { selectCart } from "@/app/lib";
import { useAppSelector } from "@/hooks";

export interface ICartProps {}

export default function Cart(props: ICartProps) {
  const cart = useAppSelector(selectCart);

  return (
    <div className="prods-cart-container">
      <div className="prods-cart-wrapper">
        <h4 className="prods-cart-title">cart</h4>

        <div className="prods-cart-main">
          {productList.slice(0, 2).map((item, key) => {
            return <CartItem key={key} product={item} />;
          })}

          <div className="prods-cart-total">
            <strong> subtotal </strong>

            <span> {productList[0].goodsPrice} </span>
          </div>

          <div className="prods-cart-button">
            <NormalButton
              style={{
                backgroundColor: "#e84242",
                color: "#fff",
                textTransform: "capitalize",
                width: "47%",
              }}
              content="view cart"
              onClick={() => redirect("/cart")}
            />
            <NormalButton
              style={{
                backgroundColor: "#e84242",
                color: "#fff",
                textTransform: "capitalize",
                width: "47%",
              }}
              content="checkout"
              onClick={() => redirect("/checkout")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
