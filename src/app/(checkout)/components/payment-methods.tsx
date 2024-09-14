"use client";

import * as React from "react";

import { Button } from "@mui/material";
import Image from "next/image";
import { paymentMethods } from "@/constants";

export interface IPaymentMethodsProps {}

export default function PaymentMethods(props: IPaymentMethodsProps) {
  const [methods, setMethods] = React.useState(1);

  return (
    <div className="payment-methods-container">
      <h3>Choose your payment method</h3>

      <ul>
        {paymentMethods.map((method, key) => {
          return (
            <li key={key} onClick={() => setMethods(method.id)}>
              <Button
                className={`${methods === method.id ? "active" : ""}`}
                variant="outlined"
              >
                <Image src={method.img} alt="" />

                <span className="capitalize"> {method.name} </span>
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
