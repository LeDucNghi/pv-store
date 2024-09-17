import "./menu.scss";

import VerticalProd from "@/app/_components/common/product/vertical-prod";
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
              <VerticalProd product={x} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
