"use client";

import "./profile.scss";

import * as React from "react";
import * as yup from "yup";

import { Avatar, Button, styled } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { UpdateProfilePayload, User } from "@/models";
import { genders, images } from "@/constants";

import DatePickerField from "@/app/_components/common/form/date-picker-field";
import EditIcon from "@mui/icons-material/Edit";
import InputField from "@/app/_components/common/form/input-field";
import NormalButton from "@/app/_components/common/custom-button/normal-button";
import { SelectField } from "@/app/_components/common/form/select-field";
import { yupResolver } from "@hookform/resolvers/yup";

export interface IUserProfileProps {}

export default function UserProfile(props: IUserProfileProps) {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please enter email")
      .min(4, "Email is required to have at least 4 characters"),

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
    formState: { isSubmitting, isDirty },
  } = useForm<UpdateProfilePayload>({
    defaultValues: {
      email: "",
      name: "",
      gender: "",
      contactNumber: "",
      address: "",
      locationName: "",
      wardName: "",
      birthDate: undefined,
    },

    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<UpdateProfilePayload> = async (data) => {
    console.log(
      "🚀 ~ constonSubmit:SubmitHandler<UpdateProfilePayload>= ~ data:",
      data.birthDate?.getDate()
    );
    // const sleep = (ms: number) =>
    //   new Promise((resolve) => setTimeout(resolve, ms));

    // await sleep(2000);

    //  await signin(data);
  };

  return (
    <div className="user-profile-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="user-avatar">
          <Button
            component="label"
            role={undefined}
            tabIndex={-1}
            className="avatar"
          >
            <Avatar
              className="avt"
              src={images.logoBorder.src}
              alt="Remy Sharp"
            />
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => console.log(event.target.files)}
              multiple
            />
          </Button>

          <p>Dung lượng tối đa 1MB</p>
          <p>Định dạng .JPG, .PNG</p>
        </div>

        <div className="user-info">
          <InputField
            className="user-info-field"
            control={control}
            name="email"
            label="Email"
            placeholder="Enter your email"
          />

          <InputField
            className="user-info-field"
            control={control}
            name="name"
            label="Your name"
            placeholder="John Cena..."
          />

          <InputField
            className="user-info-field"
            control={control}
            name="contactNumber"
            label="Your Phone number"
            placeholder="0123456789..."
            type="text"
          />

          {/* <InputField
            control={control}
            name="birthDate"
            label="Your birthday"
            placeholder="10/04/2000"
            type="text"
            className="user-info-field"
          /> */}

          <DatePickerField
            control={control}
            name="birthDate"
            label="Your birthday"
          />

          <SelectField
            control={control}
            name="gender"
            label="Your gender"
            options={genders}
            className="user-info-field"
          />

          <InputField
            className="user-info-field"
            control={control}
            name="address"
            label="Your address"
            placeholder="15 duong so 18"
            type="text"
          />

          <InputField
            className="user-info-field"
            control={control}
            name="locationName"
            label="Your location"
            placeholder="Ho Chi Minh - Quan Go Vap"
            type="text"
          />

          <InputField
            className="user-info-field"
            control={control}
            name="wardName"
            label="Your ward"
            placeholder="Phuong 8"
            type="text"
          />
        </div>

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
    </div>
  );
}
