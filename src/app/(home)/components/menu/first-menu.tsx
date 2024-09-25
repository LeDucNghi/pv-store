import "./menu.scss";

import { VerticalProd } from "@/app/_components/common/product";
import { homeMenu } from "@/_mock";
import { useProductList } from "@/hooks";

export interface IFirstMenuProps {}

export default function FirstMenu(props: IFirstMenuProps) {
  const { data } = useProductList({});

  return (
    <div className="menu1">
      <h1> our menu </h1>

      <div className="w-full relative flex flex-wrap justify-center">
        {data.data.slice(0, 6).map((item, key) => {
          return (
            <div className="menu-item-wrapper w-4/12" key={key}>
              <VerticalProd product={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
