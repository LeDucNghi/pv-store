import "./orders.scss";

import * as React from "react";

import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
} from "@mui/material";

import Link from "next/link";
import { images } from "@/constants";
import { orderList } from "@/_mock";

export interface IOrdersProps {}

export default function Orders(props: IOrdersProps) {
  return (
    <div className="orders-container">
      {orderList.map((order, key) => {
        return (
          <Card elevation={5} className="order-item" key={key}>
            <CardHeader
              className="order order-header"
              avatar={
                <div className="header-avatar">
                  <Avatar src={images.logoBorder.src} aria-label="recipe">
                    R
                  </Avatar>

                  <h3 className="px-2"> pvfood </h3>

                  <Button>
                    <Link href={`/products/${order.id}`}>Detail</Link>
                  </Button>
                </div>
              }
              action={
                <div className="header-actions">
                  <span> {order.statusValue} </span>

                  <Button>
                    <Link href={`/products/${order.id}`}>review</Link>
                  </Button>
                </div>
              }
            />
            <Divider />

            {order.orderDetails.map((item, itemKey) => {
              return (
                <CardContent key={itemKey} className="order order-product">
                  <CardMedia
                    className="product-img"
                    component="img"
                    image={images.product1.src}
                    alt={item.name}
                  />

                  <div className="product-info">
                    <span> {item.name} </span>
                    <span> {item.categoryName} </span>
                    <span> x {item.quantity} </span>
                  </div>

                  <div className="product-price">
                    <span>
                      {parseFloat(`${item.basePrice}`).toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </span>
                  </div>
                </CardContent>
              );
            })}

            <Divider />

            <CardContent className="order order-price">
              <span>Total: </span>
              <span>
                {" "}
                {parseFloat(`${order.total}`).toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}{" "}
              </span>
            </CardContent>

            <Divider />

            <CardActions className="order order-actions">
              <Button variant="contained"> Buy again </Button>
              <Button variant="outlined">
                {" "}
                Request a goods return / refund{" "}
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}
