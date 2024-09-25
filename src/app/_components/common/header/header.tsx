"use client";

import "./header.scss";

import * as React from "react";

import { BREAK_POINTS_NUMBER, images } from "@/constants";
import { Badge, Button, IconButton, Tooltip } from "@mui/material";
import { selectCart, useAppSelector } from "@/app/lib/redux";

import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import CartDrawer from "./cart-drawer";
import CustomDrawer from "../drawer/drawer";
import HeaderDrawer from "./header-drawer";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import UserMenu from "./user-menu";
import { cookies } from "@/utils";
import { productList } from "@/_mock";
import { useWindowSize } from "@/hooks";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  const { windowInnerWidth } = useWindowSize();
  const cart = useAppSelector(selectCart);

  const user = cookies.getCookie("user");

  const [isActive, setisActive] = React.useState(1);
  const [openCartDrawer, setOpenCartDrawer] = React.useState(false);

  return (
    <div className="header-container">
      <div className="menu-port flex-space-center">
        <ul className="flex-space-center">
          <li className="menu-link">
            <Link href="/">
              <Image src={images.logo} alt="logo" />
            </Link>
          </li>
          {windowInnerWidth >= BREAK_POINTS_NUMBER.md && (
            <>
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
            </>
          )}
        </ul>

        {windowInnerWidth >= BREAK_POINTS_NUMBER.md && (
          <div className="menu-cell flex-space-center">
            <div className="menu-content">
              <span className="text-[0.9rem] leading-6 text-black">
                Đặt hàng qua điện thoại
              </span>
              <span className="text-[1.5rem] leading-6">0931303515</span>
            </div>

            <div className="px-4 flex">
              <Tooltip title="Your cart" arrow>
                <IconButton
                  aria-label="cart"
                  className="menu-cart"
                  onClick={() => setOpenCartDrawer(!openCartDrawer)}
                >
                  <Badge color="secondary" badgeContent={cart.items.length}>
                    <CardGiftcardIcon className="cart-icon" />
                  </Badge>
                </IconButton>
              </Tooltip>

              {user ? (
                <UserMenu user={user} />
              ) : (
                <IconButton aria-label="user" className="menu-cart">
                  <Link href="/signin">
                    <PersonIcon />
                  </Link>
                </IconButton>
              )}
            </div>

            <Button className="menu-button" variant="outlined">
              <Link href="/products"> menu </Link>
            </Button>
          </div>
        )}

        {windowInnerWidth <= BREAK_POINTS_NUMBER.md && (
          <MenuIcon
            fontSize="large"
            style={{ cursor: "pointer" }}
            onClick={() => setOpenCartDrawer(!openCartDrawer)}
          />
        )}
      </div>

      <CustomDrawer
        isOpen={openCartDrawer}
        onClose={() => setOpenCartDrawer(!openCartDrawer)}
      >
        {windowInnerWidth <= BREAK_POINTS_NUMBER.md ? (
          <HeaderDrawer />
        ) : (
          <CartDrawer />
        )}
      </CustomDrawer>
    </div>
  );
}
