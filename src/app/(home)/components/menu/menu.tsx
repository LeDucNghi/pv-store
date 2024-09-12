import "./menu.scss";

import { default as FirstMenu } from "./first-menu";
import Image from "next/image";
import LimitedProds from "@/app/_components/common/limited-prods/limited-prods";
import MenuContent from "./menu-content";
import SecondMenu from "./second-menu";
import ThirdMenu from "./third-menu";
import { homeMenu } from "@/_mock";
import { images } from "@/constants";

export interface IMenuProps {}

export default function Menu(props: IMenuProps) {
  return (
    <div className="menu-container">
      <Image
        src={images.menuBg}
        alt="menu background"
        className="parallax-image menu-background"
      />

      <div className="menu-wrapper">
        <MenuContent />

        <FirstMenu />

        <div className="menu-limited-prod">
          <Image
            src={images.whiteBottomWave}
            alt="bottom wave"
            className="bottom-wave"
          />

          <LimitedProds product={homeMenu[0]} />

          <Image
            src={images.whiteBottomWave}
            alt="top wave"
            className="top-wave"
          />
        </div>

        <SecondMenu />

        <ThirdMenu />
      </div>

      <Image
        src={images.whiteBottomWave}
        alt="bottom wave"
        className="bottom-wave"
      />
    </div>
  );
}
