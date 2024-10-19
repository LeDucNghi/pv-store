"use client";

import * as React from "react";
import * as yup from "yup";

import { SubmitHandler, useForm } from "react-hook-form";
import { genders, images } from "@/constants";

import { CurvedAvatar } from "../../components/curved-avatar/curved-avatar";
import { CustomWrapper } from "../../components/custom-wrapper/custom-wrapper";
import InputField from "@/app/_components/common/form/input-field";
import Link from "next/link";
import Loader from "@/app/_components/common/loader/loader";
import NormalButton from "@/app/_components/common/custom-button/normal-button";
import { Paper } from "@mui/material";
import { SelectField } from "@/app/_components/common/form/select-field";
import { SignUpPayload } from "@/models";
import { faker } from "@faker-js/faker";
import { useDebounce } from "@/hooks";
import { yupResolver } from "@hookform/resolvers/yup";

export interface ISettingPageProps {}

export default function ProfilePage(props: ISettingPageProps) {
  const { show } = useDebounce({ time: 3000 });

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

    // await signup(data);
  };

  if (!show) return <Loader />;

  return (
    <div className="profile-container flex flex-wrap justify-between">
      <CurvedAvatar
        style={{ margin: "2rem 0", width: "100%" }}
        avatar={faker.image.avatar()}
        userName={faker.person.fullName()}
      />

      <CustomWrapper
        style={{ width: "48%", height: "auto" }}
        title="account information"
        subtitle="Here you can change your account information"
      >
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

          <div className="w-full flex-center">
            <NormalButton
              style={{ fontSize: "0.9rem", textTransform: "capitalize" }}
              type="submit"
              loading={isSubmitting}
              disabled={isSubmitting || !isDirty}
            >
              update
            </NormalButton>
          </div>
        </form>
      </CustomWrapper>

      <CustomWrapper
        style={{ width: "48%", height: "auto" }}
        title="change password"
        subtitle="Here you can change your password"
      >
        <form
          autoComplete="false"
          className="flex justify-between flex-wrap"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputField
            className="w-[47%]"
            autoComplete="false"
            control={control}
            name="password"
            label="Your Old Password"
            placeholder="your cool password"
            type="text"
          />

          <InputField
            className="w-[47%]"
            autoComplete="false"
            control={control}
            name="password"
            label="Your New Password"
            placeholder="your cool password"
            type="text"
          />

          <InputField
            className="w-[47%]"
            autoComplete="false"
            control={control}
            name="password"
            label="Confirm New Password"
            placeholder="your cool password"
            type="text"
          />

          <div className="w-full flex-center">
            <NormalButton
              style={{ fontSize: "0.9rem", textTransform: "capitalize" }}
              type="submit"
              loading={isSubmitting}
              disabled={isSubmitting || !isDirty}
            >
              update
            </NormalButton>
          </div>
        </form>
      </CustomWrapper>
    </div>
  );
}
