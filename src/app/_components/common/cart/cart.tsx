"use client";

import "./cart.scss";

import CartItem from "./cart-item";
import Link from "next/link";
import NormalButton from "@/app/_components/common/custom-button/normal-button";
import { productList } from "@/_mock";
import { redirect } from "next/navigation";
import { selectCart } from "@/app/lib/redux";
import { useAppSelector } from "@/hooks";

export interface ICartProps {}

export default function Cart(props: ICartProps) {
  const cart = useAppSelector(selectCart);

  return (
    <div className="prods-cart-container">
      <div className="prods-cart-wrapper">
        <h4 className="prods-cart-title">cart</h4>

        <div className="prods-cart-main">
          {cart.items.length === 0 ? (
            <div> No products in the cart </div>
          ) : (
            <>
              {cart.items.map((item, key) => {
                return <CartItem key={key} product={item} />;
              })}
              <div className="prods-cart-total">
                <strong> subtotal </strong>

                <span> {productList[0].basePrice} </span>
              </div>

              <div className="prods-cart-button">
                <NormalButton
                  style={{
                    backgroundColor: "#e84242",
                    color: "#fff",
                    textTransform: "capitalize",
                    width: "47%",
                  }}
                >
                  <Link href="/cart">view cart</Link>
                </NormalButton>
                <NormalButton
                  style={{
                    backgroundColor: "#e84242",
                    color: "#fff",
                    textTransform: "capitalize",
                    width: "47%",
                  }}
                  onClick={() => redirect("/checkout")}
                >
                  <Link href="/checkout">checkout</Link>
                </NormalButton>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
