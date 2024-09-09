"use client";

import "./mail.scss";

import * as React from "react";

import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

import Image from "next/image";
import SendIcon from "@mui/icons-material/Send";
import { images } from "@/constants";

export interface IMailProps {}

export default function Mail(props: IMailProps) {
  return (
    <div className="mail-container parallax">
      <Image src={images.homeBg3} alt="home bg 3" className="parallax-image" />

      <div className="mail-content">
        <h3> Join Our Mailing List! </h3>

        <p>For Exclusive Deals, Coupons, News and More!</p>

        <FormControl
          className="input-field"
          sx={{ m: 1, width: "100%" }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            placeholder="Enter your email..."
            label="Email"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  // onClick={handleClickShowPassword}
                  edge="end"
                >
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>

      <Image src={images.whiteBottomWave} alt="top wave" className="top-wave" />
    </div>
  );
}
