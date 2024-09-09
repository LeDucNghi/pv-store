import "./menu.scss";

import CustomProduct from "../product/product";
import { homeMenu } from "@/_mock";
import { images } from "@/constants";

export interface IThirdMenuProps {}

export default function ThirdMenu(props: IThirdMenuProps) {
  return (
    <div className="menu3">
      <div className="col1">
        <CustomProduct
          type="img"
          bg={images.productRv1.src}
          product={homeMenu[0]}
          style={{ height: "100%" }}
        />
      </div>

      <div className="col2">
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
    </div>
  );
}
