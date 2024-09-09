"use client";

import * as React from "react";
import * as yup from "yup";

import { SubmitHandler, useForm } from "react-hook-form";

import AuthForm from "../components/auth-form/auth-form";
import CustomButton from "@/app/_components/common/custom-button/button";
import InputField from "@/app/_components/common/input-field/input-field";
import Link from "next/link";
import MainLayout from "@/app/_components/layouts/main-layout/main-layout";
import { SignUpPayload } from "@/models";
import { images } from "@/constants";
import { yupResolver } from "@hookform/resolvers/yup";

export interface ISignUpPageProps {}

export default function SignUpPage(props: ISignUpPageProps) {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please enter email")
      .min(4, "Email is required to have at least 4 characters"),

    password: yup
      .string()
      .required("Please enter password")
      .min(6, "Password is required to have at least 6 characters"),

    username: yup
      .string()
      .required("Please enter your username")
      .min(6, "Username is required to have at least 6 characters"),
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<SignUpPayload>({
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },

    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<SignUpPayload> = async (data) => {
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
    <MainLayout
      bannerBg={images.mainLayoutBg.src}
      bannerTitle="Account Details"
      bannerSubtitle="Check your account information"
    >
      <AuthForm elevation={8} title="sign up">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            control={control}
            name="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
          />

          <InputField
            control={control}
            name="username"
            label="Username"
            placeholder="Enter your username"
            type="text"
          />

          <InputField
            control={control}
            name="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
          />

          <div className="w-full text-center py-4">
            <b>
              Already have an account? <Link href="/signin">Sign In</Link>{" "}
            </b>
          </div>

          <CustomButton kind="normal" content="sign up" type="submit" />
        </form>
      </AuthForm>
    </MainLayout>
  );
}
