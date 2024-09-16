import "./checkout.scss";

import BillFields from "../components/bill-field";
import ComponentWrapper from "@/app/_components/common/wrapper/component-wrapper";
import MainLayout from "@/app/_components/layouts/main-layout/main-layout";
import NormalButton from "@/app/_components/common/custom-button/normal-button";
import Order from "../components/order";
import PaymentMethods from "../components/payment-methods";
import { images } from "@/constants";

export interface ICheckoutPageProps {}

export default function CheckoutPage(props: ICheckoutPageProps) {
  return (
    <MainLayout
      bannerBg={images.mainLayoutBg.src}
      bannerTitle="Check Your Foods"
      bannerSubtitle="We guarantee delivery that arrives within an hour"
      color="cream"
    >
      <ComponentWrapper color="cream" style={{ height: "auto" }}>
        <div className="checkout-container">
          <div className="checkout-wrapper">
            <div className="checkout-content">
              <BillFields />

              <Order />

              <PaymentMethods />

              <div className="py-4 w-full flex-center">
                <NormalButton
                  style={{
                    backgroundColor: "#e84242",
                    color: "#fff",
                    textTransform: "capitalize",
                    width: "20%",
                  }}
                >
                  place order
                </NormalButton>
              </div>
            </div>
          </div>
        </div>
      </ComponentWrapper>
    </MainLayout>
  );
}
