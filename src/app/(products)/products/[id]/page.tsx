import "./product-item.scss";

import ComponentWrapper from "@/app/_components/common/wrapper/component-wrapper";
import Description from "../../components/description/description";
import MainLayout from "@/app/_components/layouts/main-layout/main-layout";
import ProductInfo from "../../components/prod-info/prod-info";
import RelatedProducts from "../../components/related-prods/related-prods";
import Review from "../../components/review/review";
import { images } from "@/constants";
import { productList } from "@/_mock";

export interface IProductItemProps {
  params: {
    id: string;
  };
}

export default function ProductItem({ params: { id } }: IProductItemProps) {
  return (
    <MainLayout
      bannerBg={images.mainLayoutBg.src}
      bannerTitle="Our Menu"
      color="cream"
    >
      <ComponentWrapper color="cream" style={{ height: "auto" }}>
        <div className="product-item-container">
          <div className="product-item-wrapper">
            <ProductInfo product={productList[0]} />

            <Description product={productList[0]} />

            <RelatedProducts product={productList[0]} />

            <Review />
          </div>
        </div>
      </ComponentWrapper>
    </MainLayout>
  );
}
