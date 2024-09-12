import "./menu.scss";

import Combo from "../components/combo/combo";
import Image from "next/image";
import MainLayout from "@/app/_components/layouts/main-layout/main-layout";
import ProdsList from "../components/prods-list/prods-list";
import { images } from "@/constants";

export interface IMenuPageProps {}

export default function MenuPage(props: IMenuPageProps) {
  return (
    <MainLayout
      color="red"
      bannerBg={images.mainLayoutBg.src}
      bannerTitle="Our Menu"
      bannerSubtitle="Enjoy the tastiest ricepapers in town"
    >
      <div className="menu-page-container">
        <div className="menu-page-wrapper">
          <ProdsList />
        </div>

        <Combo />

        <Image
          src={images.redBottomWave}
          className="bottom-wave"
          alt="bottom wave"
        />
      </div>
    </MainLayout>
  );
}
