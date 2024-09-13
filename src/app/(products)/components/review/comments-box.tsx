import * as React from "react";

import Image from "next/image";
import { Rating } from "@mui/material";
import moment from "moment";
import { reviews } from "@/_mock";

export interface ICommentsBoxProps {}

export default function CommentsBox(props: ICommentsBoxProps) {
  return (
    <div className="comments-wrapper">
      <h2>reviews</h2>

      <div className="comments-box">
        {reviews.map((review, key) => {
          return (
            <div className="comment-item" key={key}>
              <div className="comment-header">
                <Image
                  width={100}
                  height={100}
                  src={review.user.avatar}
                  alt={review.user.username}
                />

                <div className="flex justify-center">
                  {" "}
                  <div className="flex flex-col items-start pl-4">
                    <p className="review-user">{review.user.username}</p>
                    <p className="review-time">
                      {moment(review.date).startOf("hour").fromNow()}
                    </p>
                  </div>
                  <Rating
                    className="review-rate"
                    name="read-only"
                    value={review.rate}
                    readOnly
                  />
                </div>
              </div>

              <div className="comment-main">
                {review.images?.length !== 0 && (
                  <div className="comment-img">
                    {review.images &&
                      review.images.map((img, index) => {
                        return (
                          <Image
                            width={100}
                            height={100}
                            src={img}
                            alt=""
                            key={index}
                          />
                        );
                      })}
                  </div>
                )}

                <div className="comment">{review.comment}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
