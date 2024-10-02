import "./tracking.scss";

import * as React from "react";

import CustomizedSteppers from "../stepper/stepper";
import Image from "next/image";
import delivery from "../../../../../public/videos/delivery.gif";
import pending from "../../../../../public/videos/pending.gif";
import received from "../../../../../public/videos/receive.gif";

export interface IShippingTrackingProps {}

export default function ShippingTracking(props: IShippingTrackingProps) {
  const step: number = 1;
  const time: Date = new Date();

  return (
    <div className="shipping-tracking-container">
      <CustomizedSteppers step={step} time={time} />

      <div className="shipping-tracking-img">
        <Image
          src={step === 0 ? pending : step === 1 ? delivery : received}
          alt="delivery"
        />
      </div>
    </div>
  );
}
