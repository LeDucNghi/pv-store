import * as React from "react";

export interface ICartTotalProps {}

export default function CartTotal(props: ICartTotalProps) {
  return (
    <div className="cart-total">
      <h3 className="cart-total-header">cart total</h3>

      <div className="cart-price">
        <div className="subtotal price">
          <p>subtotal</p>
          <p>
            {" "}
            {parseFloat(`${2 * 1000}`).toLocaleString("it-IT", {
              style: "currency",
              currency: "VND", // minimumFractionDigits: 3,
            })}{" "}
          </p>
        </div>

        <div className="shipping price">
          <p>shipping</p>
          <p>
            {" "}
            {parseFloat(`${2 * 1000}`).toLocaleString("it-IT", {
              style: "currency",
              currency: "VND", // minimumFractionDigits: 3,
            })}{" "}
          </p>
        </div>

        <div className="total price">
          <p>total</p>
          <p>
            {" "}
            {parseFloat(`${2 * 1000}`).toLocaleString("it-IT", {
              style: "currency",
              currency: "VND", // minimumFractionDigits: 3,
            })}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
