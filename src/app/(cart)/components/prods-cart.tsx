"use client";

import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";
import Image from "next/image";
import RemoveIcon from "@mui/icons-material/Remove";
import { userCart } from "@/_mock";

export interface IProductCartProps {}

export default function ProductCart(props: IProductCartProps) {
  return (
    <div className="cart-table">
      <div className="cart-header">
        <span>product</span>
        <span>price</span>
        <span>quantity</span>
        <span>subtotal</span>
      </div>

      <div className="cart">
        {userCart.slice(0, 4).map((item, key) => {
          return (
            <div className="cart-item" key={key}>
              <IconButton className="item-remove">
                <ClearIcon fontSize="small" />
              </IconButton>

              <div className="item-info cart-col">
                <div className="item-img">
                  <Image
                    src={item.images[0]}
                    alt={item.name}
                    width={500}
                    height={500}
                  />
                </div>
                <p className="item-name">{item.name}</p>
              </div>

              <p className="item-price cart-col">{item.goodsPrice}</p>

              <div className="item-quantity cart-col">
                <IconButton>
                  <RemoveIcon />
                </IconButton>

                <p>{item.quantity} </p>

                <IconButton>
                  <AddIcon />
                </IconButton>
              </div>

              <div className="item-total cart-col">
                {parseFloat(`${2 * 1000}`).toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND", // minimumFractionDigits: 3,
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
