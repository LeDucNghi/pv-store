"use client";

import "../checkout/checkout.scss";

import * as React from "react";
import * as yup from "yup";

import { SubmitHandler, useForm } from "react-hook-form";

import { CheckoutPayload } from "@/models";
import InputField from "@/app/_components/common/input-field/input-field";
import { yupResolver } from "@hookform/resolvers/yup";

export interface IBillFieldsProps {}

export default function BillFields(props: IBillFieldsProps) {
  const schema = yup.object().shape({
    firstname: yup
      .string()
      .required("Please enter email")
      .min(4, "Invalid Email"),

    email: yup
      .string()
      .email()
      .required("Please enter email")
      .min(4, "Invalid Email"),

    lastname: yup
      .string()
      .required("Please enter your name")
      .min(6, "Invalid name 🤔"),

    district: yup
      .string()
      .required("Please tell us about your thinking 🤔")
      .min(1, "Is too short 🤔"),

    country: yup
      .string()
      .required("At what level do you want to rate the product? 🤔")
      .min(1, "Is too short 🤔"),

    phone: yup
      .string()
      .required("At what level do you want to rate the product? 🤔")
      .min(1, "Is too short 🤔"),

    address: yup
      .string()
      .required("At what level do you want to rate the product? 🤔")
      .min(1, "Is too short 🤔"),
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<CheckoutPayload>({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      district: "",
      country: "",
      phone: "",
      address: "",
      note: "",
    },

    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<CheckoutPayload> = async (data) => {
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
    <form>
      <div className="bill-fields-container">
        <h3>Billing details</h3>

        <div className="bill-fields">
          <InputField
            control={control}
            name="firstname"
            label="First Name"
            placeholder="Enter your first name"
            style={{ width: "47%" }}
          />

          <InputField
            control={control}
            name="lastname"
            label="Last Name"
            placeholder="Enter your lastname"
            style={{ width: "47%" }}
          />

          <InputField
            control={control}
            name="address"
            label="Address"
            placeholder="Enter your address"
            style={{ width: "47%" }}
          />

          <InputField
            control={control}
            name="district"
            label="District"
            placeholder="Enter your district"
            style={{ width: "47%" }}
          />

          <InputField
            control={control}
            name="country"
            label="Country"
            placeholder="Enter your country"
            style={{ width: "47%" }}
          />

          <InputField
            control={control}
            name="phone"
            label="Phone Number"
            placeholder=""
            style={{ width: "47%" }}
          />

          <InputField
            control={control}
            name="email"
            label="Email"
            placeholder="Enter your email"
            style={{ width: "47%" }}
          />

          <InputField
            fullWidth
            control={control}
            name="note"
            label="Your note"
            placeholder="Notes about your order, e.g special notes for delivery."
            multiline
            rows={10}
            maxRows={15}
          />
        </div>
      </div>
    </form>
  );
}
