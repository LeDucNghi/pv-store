"use client";

import * as yup from "yup";

import { SubmitHandler, useForm } from "react-hook-form";

import AuthLayout from "@/app/_components/layouts/auth-layout/auth-layout";
import InputField from "@/app/_components/common/input-field/input-field";
import Link from "next/link";
import NormalButton from "@/app/_components/common/custom-button/normal-button";
import { SignInPayload } from "@/models";
import { yupResolver } from "@hookform/resolvers/yup";

export interface ISignInPageProps {}

export default function SignInPage(props: ISignInPageProps) {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please enter email")
      .min(4, "Email is required to have at least 4 characters"),

    password: yup
      .string()
      .required("Please enter password")
      .min(6, "Password is required to have at least 6 characters"),
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<SignInPayload>({
    defaultValues: {
      email: "",
      password: "",
    },

    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<SignInPayload> = async (data) => {
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
    <AuthLayout title="sign in" page="signin">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          control={control}
          name="email"
          label="Email"
          placeholder="Enter your email"
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
            Dont have an account? <Link href="/signup">Sign Up</Link>{" "}
          </b>
        </div>

        <div className="w-full flex-center">
          <NormalButton
            style={{ fontSize: "0.9rem", textTransform: "capitalize" }}
            type="submit"
          >
            sign in
          </NormalButton>
        </div>
      </form>
    </AuthLayout>
  );
}
