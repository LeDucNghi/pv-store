import * as React from "react";

import MainLayout from "@/app/_components/layouts/main-layout/main-layout";
import { images } from "@/constants";

export interface IProductPageProps {}

export default function ProductPage(props: IProductPageProps) {
  return (
    <MainLayout bannerBg={images.mainLayoutBg.src} bannerTitle="Our Menu">
      productpage
    </MainLayout>
  );
}
