import * as React from "react";

import { Button, Divider, IconButton } from "@mui/material";

import Image from "next/image";
import Link from "next/link";
import NormalButton from "../custom-button/normal-button";
import { images } from "@/constants";

export interface IHeaderDrawerProps {}

export default function HeaderDrawer(props: IHeaderDrawerProps) {
  return (
    <div className="header-drawer-container">
      <ul>
        <li className="menu-link">
          <Link href="/">
            <Image src={images.logo} alt="logo" />
          </Link>
        </li>

        <li className={`menu-link`}>
          <Link href="/about">about</Link>
        </li>

        <Divider />

        <li className={`menu-link`}>
          <Link href="/blog">blog</Link>
        </li>
        <Divider />

        <li className={`menu-link`}>
          <Link href="/shop">shop</Link>
        </li>
        <Divider />
      </ul>

      <div className="menu-cell flex-space-center">
        <div className="menu-content">
          <span className="text-[0.9rem] leading-6 text-black">
            Đặt hàng qua điện thoại
          </span>
          <span className="text-[1.5rem] py-4 leading-6">0931303515</span>
        </div>

        <NormalButton
          style={{ width: "100%", border: "none" }}
          variant="outlined"
        >
          <Link href="/products"> menu </Link>
        </NormalButton>
      </div>
    </div>
  );
}
