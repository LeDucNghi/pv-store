"use client";

import "./header.scss";

import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
import NormalButton from "../custom-button/normal-button";
import { Product } from "@/models";
import RemoveIcon from "@mui/icons-material/Remove";
import { productList } from "@/_mock";
import { redirect } from "next/navigation";
import { useAppDispatch } from "@/app/lib";

export interface ICartDrawerProps {}

export default function CartDrawer(props: ICartDrawerProps) {
  const dispatch = useAppDispatch();

  const removeProduct = (prod: Product) => {};

  // const removeProduct = (prod: Product) => {};

  return (
    <>
      {/* {productList && productList.length === 0 && (
        <div className="empty_cart">
          <Image src={images.emptyCart} alt="empty_cart" />
          <h2>Your Shopping Bag is empty.</h2>
        </div>
      )} */}

      <div className="drawer-cart">
        <h3 className="cart-header">Your cart</h3>

        {productList && productList.length !== 0 && (
          <Box className="cart-list-wrapper">
            <List
              className="cart-list"
              aria-labelledby="nested-list-subheader"
              dense={false}
            >
              {productList.map((item, key) => {
                return (
                  <ListItem
                    key={key}
                    secondaryAction={
                      <IconButton
                        //   onClick={() => dispatch(removeProduct(item))}
                        edge="end"
                        aria-label="delete"
                      >
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar
                      sx={{ cursor: "pointer" }}
                      // onClick={() => handleRedirect(item.id)}
                    >
                      <Avatar src={productList[0].images[0]} />
                    </ListItemAvatar>

                    <ListItemText
                      className="cart_text"
                      primary={item.name}
                      secondary={parseFloat(`${2 * 1000}`).toLocaleString(
                        "it-IT",
                        {
                          style: "currency",
                          currency: "VND", // minimumFractionDigits: 3,
                        }
                      )}
                    />

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <IconButton
                        //   onClick={() => dispatch(decreaseQty(item))}
                        aria-label="delete"
                        color="default"
                        disabled={productList[0].quantity === 1}
                      >
                        <RemoveIcon />
                      </IconButton>

                      <Typography sx={{ fontSize: "1em" }}>
                        {productList[0].quantity}
                      </Typography>

                      <IconButton
                        //   onClick={() => dispatch(updateQty(item))}
                        aria-label="delete"
                        color="default"
                      >
                        <AddIcon />
                      </IconButton>
                    </Box>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        )}

        <div className="cart-total px-1">
          <div className="flex w-full justify-between py-2">
            <p className="font-bold capitalize">subtotal</p>
            <p className="font-semibold"> {productList[0].goodsPrice} </p>
          </div>
          <div className="flex w-full justify-between py-2">
            <p className="font-bold capitalize">shipping</p>
            <p className="font-semibold"> {productList[0].goodsPrice}</p>
          </div>
          <div className="flex w-full justify-between py-2">
            <p className="font-bold capitalize">total</p>
            <p className="font-semibold">{productList[0].goodsPrice}</p>
          </div>
        </div>

        <div className="drawer-button flex justify-between">
          <NormalButton
            style={{
              backgroundColor: "#e84242",
              color: "#fff",
              textTransform: "capitalize",
              width: "47%",
            }}
            onClick={() => redirect("/cart")}
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
      </div>
    </>
  );
}
