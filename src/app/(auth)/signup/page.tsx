"use client";

import * as yup from "yup";

import { SubmitHandler, useForm } from "react-hook-form";

import AuthLayout from "@/app/_components/layouts/auth-layout/auth-layout";
import InputField from "@/app/_components/common/form/input-field";
import Link from "next/link";
import NormalButton from "@/app/_components/common/custom-button/normal-button";
import { SelectField } from "@/app/_components/common/form/select-field";
import { SignUpPayload } from "@/models";
import { debounce } from "@mui/material";
import { genders } from "@/constants";
import { useAuth } from "@/hooks";
import { yupResolver } from "@hookform/resolvers/yup";

export interface ISignUpPageProps {}

export default function SignUpPage(props: ISignUpPageProps) {
  const { signup } = useAuth();

  const schema = yup.object().shape({
    email: yup.string().required("Please enter email"),

    password: yup
      .string()
      .required("Please enter password")
      .min(6, "Password is required to have at least 6 characters"),

    name: yup.string().required("Please enter your username"),

    contactNumber: yup.string().required("Please enter your phone number"),

    address: yup.string().required("Please enter your address"),

    locationName: yup.string().required("Please enter your location"),

    wardName: yup.string().required("Please enter your ward name"),

    gender: yup.string().required("Please select your gender"),
  });

  const {
    handleSubmit,
    control,
    getValues,
    formState: { isSubmitting, isDirty },
  } = useForm<SignUpPayload>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
      gender: "",
      contactNumber: "",
      address: "",
      locationName: "",
      wardName: "",
    },

    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<SignUpPayload> = async (data) => {
    console.log(
      "🚀 ~ constonSubmit:SubmitHandler<SignUpPayload>= ~ data:",
      data
    );
    const sleep = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    await sleep(2000);

    await signup(data);
  };

  return (
    <AuthLayout page="signup" title="sign up">
      <form
        autoComplete="false"
        className="flex justify-between flex-wrap"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputField
          className="w-[47%]"
          autoComplete="false"
          control={control}
          name="email"
          label="Email"
          type="email"
          placeholder="Example@gmail.com"
        />

        <InputField
          className="w-[47%]"
          autoComplete="false"
          control={control}
          name="name"
          label="Username"
          placeholder="John Cena..."
          type="text"
        />

        <InputField
          className="w-[47%]"
          autoComplete="false"
          control={control}
          name="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
        />

        <InputField
          className="w-[47%]"
          autoComplete="false"
          control={control}
          name="contactNumber"
          label="Your Phone number"
          placeholder="0123456789..."
          type="text"
        />

        <InputField
          className="w-[47%]"
          autoComplete="false"
          control={control}
          name="address"
          label="Your address"
          placeholder="15 đường số 18"
          type="text"
        />

        <InputField
          className="w-[47%]"
          autoComplete="false"
          control={control}
          name="locationName"
          label="Your location"
          placeholder="Hồ Chí Minh - Quận Gò Vấp"
          type="text"
        />

        <InputField
          className="w-[47%]"
          autoComplete="false"
          control={control}
          name="wardName"
          label="Your ward"
          placeholder="Phường 8"
          type="text"
        />

        <SelectField
          className="w-[47%]"
          name="gender"
          control={control}
          options={genders}
          label="Your gender"
        />

        <div className="w-full text-center py-4">
          <b>
            Already have an account? <Link href="/signin">Sign In</Link>{" "}
          </b>
        </div>

        <div className="w-full flex-center">
          <NormalButton
            style={{ fontSize: "0.9rem", textTransform: "capitalize" }}
            type="submit"
            loading={isSubmitting}
            disabled={isSubmitting || !isDirty}
          >
            sign up
          </NormalButton>
        </div>
      </form>
    </AuthLayout>
  );
}
