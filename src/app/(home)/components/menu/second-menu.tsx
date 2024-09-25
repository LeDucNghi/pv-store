import "./menu.scss";

import { HorizontalProd, VerticalProd } from "@/app/_components/common/product";

import { homeMenu } from "@/_mock";

export interface ISecondMenuProps {}

export default function SecondMenu(props: ISecondMenuProps) {
  return (
    <div className="menu2">
      <div className="col1">
        {homeMenu.slice(0, 4).map((x, key) => {
          return (
            <div className="menu-item-wrapper" key={key}>
              <HorizontalProd product={x} />
            </div>
          );
        })}
      </div>

      <div className="col2 flex-center">
        {homeMenu.slice(4, 6).map((x, key) => {
          return (
            <div className="menu-item-wrapper w-5/12" key={key}>
              <VerticalProd product={x} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
