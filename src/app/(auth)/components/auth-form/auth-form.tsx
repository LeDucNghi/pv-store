import "./auth-form.scss";

import * as React from "react";

import Image from "next/image";
import { Paper } from "@mui/material";
import { images } from "@/constants";

export interface IAuthFormProps {
  children: React.ReactNode;

  elevation?: number;

  title: string;
}

export default function AuthForm({
  children,
  elevation,
  title,
}: IAuthFormProps) {
  return (
    <div className="auth-form-container">
      <Paper className="auth-form-wrapper" elevation={elevation}>
        <div className="auth-form-main">
          <h2 className="auth-form-title">{title}</h2>

          {children}
        </div>
      </Paper>

      <Image className="bottom-wave" src={images.creamBottomWave} alt="wave" />
    </div>
  );
}
