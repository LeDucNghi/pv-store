"use client";

import * as React from "react";

import { Divider } from "@mui/material";
import { userCart } from "@/_mock";

export interface IOrderProps {}

export default function Order(props: IOrderProps) {
  return (
    <div className="order-container">
      <h3>Your order</h3>

      <table className="order-table">
        <tr className="order-row-name">
          <th className="order-row-product">product</th>
          <th className="order-row-subtotal">subtotal</th>
        </tr>

        <tr className="order-row-products">
          {userCart.slice(0, 2).map((item, key) => {
            return (
              <td key={key}>
                <div className="product-name">
                  {" "}
                  <p>{item.name}</p>{" "}
                  <p className="font-bold"> &nbsp;&nbsp;x {item.quantity}</p>
                </div>

                <p className="product-price">{item.goodsPrice}</p>
              </td>
            );
          })}
        </tr>

        <Divider sx={{ margin: "0 auto" }} />

        <tr>
          <td className="font-bold capitalize">subtotal</td>
          <td className="font-semibold">{userCart[0].goodsPrice}</td>
        </tr>

        <tr>
          <td className="font-bold capitalize">shipping</td>
          <td className="font-semibold">{userCart[0].goodsPrice}</td>
        </tr>

        <tr className="order-row-total">
          <td className="font-bold capitalize">total</td>
          <td className="font-semibold">{userCart[0].goodsPrice}</td>
        </tr>

        <Divider sx={{ margin: "0 auto" }} />
      </table>
    </div>
  );
}
