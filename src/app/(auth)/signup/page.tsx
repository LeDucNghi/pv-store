"use client";

import * as yup from "yup";

import { SubmitHandler, useForm } from "react-hook-form";

import AuthLayout from "@/app/_components/layouts/auth-layout/auth-layout";
import InputField from "@/app/_components/common/input-field/input-field";
import Link from "next/link";
import NormalButton from "@/app/_components/common/custom-button/normal-button";
import { SignUpPayload } from "@/models";
import { useAuth } from "@/hooks";
import { yupResolver } from "@hookform/resolvers/yup";

export interface ISignUpPageProps {}

export default function SignUpPage(props: ISignUpPageProps) {
  const { signup } = useAuth();

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please enter email")
      .min(4, "Email is required to have at least 4 characters"),

    password: yup
      .string()
      .required("Please enter password")
      .min(6, "Password is required to have at least 6 characters"),

    name: yup
      .string()
      .required("Please enter your username")
      .min(6, "Username is required to have at least 6 characters"),
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isDirty },
  } = useForm<SignUpPayload>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },

    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<SignUpPayload> = async (data) => {
    const sleep = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    await sleep(2000);

    await signup(data);
  };

  return (
    <AuthLayout page="signup" title="sign up">
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
          name="name"
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
