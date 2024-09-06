import "./menu.scss";

import { default as FirstMenu, default as MenuContent } from "./first-menu";

import Image from "next/image";
import LimitedProds from "@/app/_components/common/limited-prods/limited-prods";
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
            src={images.bottomWave}
            alt="bottom wave"
            className="bottom-wave"
          />

          <LimitedProds imgDirection="left" product={homeMenu[0]} />

          <Image src={images.bottomWave} alt="top wave" className="top-wave" />
        </div>

        <SecondMenu />

        <ThirdMenu />
      </div>
    </div>
  );
}
