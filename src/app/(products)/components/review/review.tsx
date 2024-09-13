import "./review.scss";

import * as React from "react";

import CommentsBox from "./comments-box";
import Rate from "./rating";

export interface IReviewProps {}

export default function Review(props: IReviewProps) {
  return (
    <div className="review-container">
      <CommentsBox />

      <Rate />
    </div>
  );
}
