import "./menu.scss";

import Combo from "../components/combo/combo";
import Image from "next/image";
import MainLayout from "@/app/_components/layouts/main-layout/main-layout";
import MenuInformation from "../components/info/info";
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
        <ProdsList />

        <Combo />

        <MenuInformation />
      </div>
    </MainLayout>
  );
}
