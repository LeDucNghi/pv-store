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
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCart,
} from "@/app/lib/redux";
import { redirect, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import Link from "next/link";
import NormalButton from "../custom-button/normal-button";
import RemoveIcon from "@mui/icons-material/Remove";
import { images } from "@/constants";

export interface ICartDrawerProps {}

export default function CartDrawer(props: ICartDrawerProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const cart = useAppSelector(selectCart);

  return (
    <>
      {cart && cart.items.length === 0 ? (
        <div className="empty_cart">
          <Image src={images.emptyCart} alt="empty_cart" />
          <h2>Your Shopping Bag is empty.</h2>
        </div>
      ) : (
        <div className="drawer-cart">
          <h3 className="cart-header">Your cart</h3>

          {cart && cart.items.length !== 0 && (
            <Box className="cart-list-wrapper">
              <List
                className="cart-list"
                aria-labelledby="nested-list-subheader"
                dense={false}
              >
                {cart.items.map((item, key) => {
                  return (
                    <ListItem
                      key={key}
                      secondaryAction={
                        <IconButton
                          onClick={() => dispatch(removeFromCart(item))}
                          edge="end"
                          aria-label="delete"
                        >
                          <DeleteIcon />
                        </IconButton>
                      }
                    >
                      <ListItemAvatar
                        sx={{ cursor: "pointer" }}
                        onClick={() => router.push(`/product/${item.id}`)}
                      >
                        <Avatar src={item.images![0]} />
                      </ListItemAvatar>

                      <ListItemText
                        className="cart_text"
                        primary={item.name}
                        secondary={parseFloat(
                          `${item.basePrice}`
                        ).toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })}
                      />

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <IconButton
                          onClick={() => dispatch(decreaseQuantity(item))}
                          aria-label="delete"
                          color="default"
                          disabled={item.quantity === 1}
                        >
                          <RemoveIcon />
                        </IconButton>

                        <Typography sx={{ fontSize: "1em" }}>
                          {item.quantity}
                        </Typography>

                        <IconButton
                          onClick={() => dispatch(increaseQuantity(item))}
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
              <p className="font-semibold">
                {" "}
                {parseFloat(`${cart.subtotal}`).toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}{" "}
              </p>
            </div>
            <div className="flex w-full justify-between py-2">
              <p className="font-bold capitalize">total</p>
              <p className="font-semibold">{cart.total}</p>
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
      )}
    </>
  );
}
