import "./menu.scss";

import * as React from "react";

import CustomProduct from "../../../_components/common/product/product";
import { homeMenu } from "@/_mock";

export interface ISecondMenuProps {}

export default function SecondMenu(props: ISecondMenuProps) {
  return (
    <div className="menu2">
      <div className="col1">
        {homeMenu.slice(0, 4).map((x, key) => {
          return (
            <CustomProduct
              key={key}
              product={x}
              type="normal"
              direction="horizontal"
            />
          );
        })}
      </div>

      <div className="col2 flex-center">
        {homeMenu.slice(4, 6).map((x, key) => {
          return (
            <div className="menu-item-wrapper w-5/12" key={key}>
              <CustomProduct
                key={key}
                product={x}
                type="normal"
                direction="vertical"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
