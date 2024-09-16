"use client";

import "./header.scss";

import * as React from "react";

import { Badge, Button, IconButton } from "@mui/material";

import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import CartDrawer from "./cart-drawer";
import CustomDrawer from "../drawer/drawer";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/constants";
import { productList } from "@/_mock";
import { redirect } from "next/navigation";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  const [isActive, setisActive] = React.useState(1);
  const [openDrawer, setOpenDrawer] = React.useState(false);

  return (
    <div className="header-container">
      <div className="menu-port flex-space-center">
        <ul className="flex-space-center">
          <li onClick={() => redirect("/")}>
            <Image src={images.logo} alt="logo" />
          </li>
          <li
            onClick={() => setisActive(1)}
            className={`ml-4 menu-link ${isActive === 1 ? "active" : ""}`}
          >
            <Link href="/about">about</Link>
          </li>
          <li
            onClick={() => setisActive(2)}
            className={`menu-link ${isActive === 2 ? "active" : ""}`}
          >
            <Link href="/blog">blog</Link>
          </li>
          <li
            onClick={() => setisActive(3)}
            className={`menu-link ${isActive === 3 ? "active" : ""}`}
          >
            <Link href="/shop">shop</Link>
          </li>
        </ul>

        <div className="menu-cell flex-space-center">
          <div className="menu-content">
            <span className="text-[0.9rem] leading-6 text-black">
              Đặt hàng qua điện thoại
            </span>
            <span className="text-[1.5rem] leading-6">0931303515</span>
          </div>

          <IconButton
            aria-label="cart"
            className="menu-cart"
            onClick={() => setOpenDrawer(!openDrawer)}
          >
            <Badge color="secondary" badgeContent={productList.length}>
              <CardGiftcardIcon className="cart-icon" />
            </Badge>
          </IconButton>

          <Button variant="outlined">
            <Link href="/products"> menu </Link>
          </Button>
        </div>
      </div>

      <CustomDrawer
        isOpen={openDrawer}
        onClose={() => setOpenDrawer(!openDrawer)}
      >
        <CartDrawer />
      </CustomDrawer>
    </div>
  );
}
