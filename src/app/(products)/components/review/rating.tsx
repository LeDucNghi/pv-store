"use client";

import "./review.scss";

import * as React from "react";
import * as yup from "yup";

import { CommentPayload, Comments } from "@/models";
import { SubmitHandler, useForm } from "react-hook-form";
import { faker, simpleFaker } from "@faker-js/faker";

import CustomRating from "@/app/_components/common/rating/rating";
import InputField from "@/app/_components/common/input-field/input-field";
import NormalButton from "@/app/_components/common/custom-button/normal-button";
import Rating from "@mui/material/Rating";
import { yupResolver } from "@hookform/resolvers/yup";

export interface IRatingProps {}

export default function Rate(props: IRatingProps) {
  const [rate, setRate] = React.useState<number | null>(2);
  const [hover, setHover] = React.useState(-1);

  const schema = yup.object().shape({
    email: yup
      .string()
      .email()
      .required("Please enter email")
      .min(4, "Invalid Email"),

    username: yup
      .string()
      .required("Please enter your name")
      .min(6, "Invalid name 🤔"),

    comment: yup
      .string()
      .required("Please tell us about your thinking 🤔")
      .min(1, "Is too short 🤔"),

    rate: yup
      .number()
      .required("At what level do you want to rate the product? 🤔"),
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<CommentPayload>({
    defaultValues: {
      comment: "",
      rate: 0,
      email: "",
      username: "",
    },

    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<CommentPayload> = async (data) => {
    console.log(
      "🚀 ~ constonSubmit:SubmitHandler<SignInPayload>= ~ data:",
      data
    );
    // await signIn("credentials", {
    //   redirect: true,
    //   callbackUrl: "http://localhost:3000/",
    //   email: data.email,
    //   password: data.password,
    // });
  };

  return (
    <div className="rating-container">
      <h2>Be the first to review “Bacon Cheeseburger”</h2>

      <form className="rating-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="rating-star rating">
          <p>your rating</p>

          <CustomRating
            rate={rate!}
            hover={hover}
            onHoverChange={setHover}
            onRateChange={setRate}
          />
        </div>

        <div className="rating-comment rating">
          <InputField
            control={control}
            name="comment"
            fullWidth
            label="Your review"
            placeholder="What is your thinking..."
            multiline
            rows={10}
            maxRows={15}
          />
        </div>

        <div className="rating-info rating">
          <InputField
            control={control}
            name="username"
            fullWidth
            label="Your name"
            placeholder="Enter your name"
          />

          <InputField
            control={control}
            name="email"
            fullWidth
            label="Your email"
            placeholder="Enter your email"
          />
        </div>

        <NormalButton
          content=""
          style={{
            backgroundColor: "#e84242",
            color: "#fff",
            textTransform: "capitalize",
          }}
          type="submit"
        >
          submit form
        </NormalButton>
      </form>
    </div>
  );
}
