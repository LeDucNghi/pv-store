import "./weekly-offer.scss";

import * as React from "react";

import { homeMenu, weeklyOffer } from "@/_mock";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Image from "next/image";
import { images } from "@/constants";

export interface IWeeklyOfferProps {}

export default function WeeklyOffer(props: IWeeklyOfferProps) {
  return (
    <div className="offer-container">
      <div className="offer-wrapper">
        <Image src={images.product1} alt="product" />

        <div className="offer-content">
          <h3>weekly offer:</h3>

          <h1 className="offer-prod-name">{homeMenu[0].name}</h1>

          <div className="offer-prod-price">{homeMenu[0].goodsPrice}</div>

          <div className="offer-prod-description">
            {weeklyOffer.description.map((offer, key) => {
              return (
                <div className="offer-item" key={key}>
                  <CheckCircleOutlineIcon className="icon" />

                  <p> {offer.text} </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Image
        src={images.whiteBottomWave}
        alt="top wave"
        className="bottom-wave"
      />
    </div>
  );
}
