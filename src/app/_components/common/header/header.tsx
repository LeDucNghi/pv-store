"use client";

import "./header.scss";

import * as React from "react";

import { Button } from "@mui/material";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/app/constants";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  const [isActive, setisActive] = React.useState(1);

  return (
    <div className="header-container">
      <div className="menu-port flex-space-center">
        <ul className="flex-space-center">
          <li>
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
              Order by phone
            </span>
            <span className="text-[1.5rem] leading-6">0931303515</span>
          </div>

          <span className="menu-cart flex-space-center">
            <CardGiftcardIcon className="cart-icon" />
            <span className="cart-content">0</span>
          </span>

          <Button variant="outlined">view all menu</Button>
        </div>
      </div>
    </div>
  );
}
