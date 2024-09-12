import "./menu.scss";

import * as React from "react";

import CustomProduct from "../../../_components/common/product/product";
import { homeMenu } from "@/_mock";

export interface IFirstMenuProps {}

export default function FirstMenu(props: IFirstMenuProps) {
  return (
    <div className="menu1">
      <h1> our menu </h1>

      <div className="w-full relative flex flex-wrap justify-center">
        {homeMenu.map((x, key) => {
          return (
            <div className="menu-item-wrapper w-4/12" key={key}>
              <CustomProduct product={x} type="normal" direction="vertical" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
