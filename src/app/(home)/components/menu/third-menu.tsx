import "./menu.scss";

import HorizontalProd from "@/app/_components/common/product/horizontal-prod";
import ImageProd from "@/app/_components/common/product/img-prod";
import { homeMenu } from "@/_mock";
import { images } from "@/constants";

export interface IThirdMenuProps {}

export default function ThirdMenu(props: IThirdMenuProps) {
  return (
    <div className="menu3">
      <div className="col1">
        <ImageProd
          bg={images.productRv1.src}
          product={homeMenu[0]}
          style={{ height: "100%" }}
        />
      </div>

      <div className="col2">
        {homeMenu.slice(0, 4).map((x, key) => {
          return (
            <div className="menu-item-wrapper" key={key}>
              <HorizontalProd product={x} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
