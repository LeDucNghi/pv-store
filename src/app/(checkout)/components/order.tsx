"use client";

import * as React from "react";

import { Divider } from "@mui/material";
import { userCart } from "@/_mock";

export interface IOrderProps {}

export default function Order(props: IOrderProps) {
  return (
    <div className="order-container">
      <h3>Your order</h3>

      <div className="order-table">
        <div className="order-row-name">
          <div className="order-product order-row">product</div>
          <div className="order-subtotal order-row">subtotal</div>
        </div>

        <div className="order-row-products">
          {userCart.slice(0, 2).map((item, key) => {
            return (
              <div className="order-row-item" key={key}>
                <div className="product-name">
                  {" "}
                  <p>{item.name}</p>{" "}
                  <p className="font-bold"> &nbsp;&nbsp;x {item.quantity}</p>
                </div>

                <p className="product-price">{item.goodsPrice}</p>
              </div>
            );
          })}
        </div>

        <Divider sx={{ margin: "0 auto" }} />

        <div className="order-row-total">
          <div className="font-bold capitalize">subtotal</div>
          <div className="font-semibold">{userCart[0].goodsPrice}</div>
        </div>

        <div className="order-row-total">
          <div className="font-bold capitalize">shipping</div>
          <div className="font-semibold">{userCart[0].goodsPrice}</div>
        </div>

        <div className="order-row-total">
          <div className="font-bold capitalize">total</div>
          <div className="font-semibold">{userCart[0].goodsPrice}</div>
        </div>

        <Divider sx={{ margin: "0 auto" }} />
      </div>
    </div>
  );
}
