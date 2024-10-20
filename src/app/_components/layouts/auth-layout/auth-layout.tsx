"use client";

import "./auth-layout.scss";

import * as React from "react";

import { Divider, IconButton, Paper } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Loader from "../../common/loader/loader";
import { useDebounce } from "@/hooks";

export interface IAuthLayoutProps {
  children: React.ReactNode;

  title: string;

  page: "signin" | "signup";
}

export default function AuthLayout({ children, title }: IAuthLayoutProps) {
  const { show } = useDebounce({ time: 3000 });

  if (!show) return <Loader />;

  return (
    <div className="auth-layout-container flex-center">
      <div className="auth-layout-wrapper flex-center">
        <Paper className="auth-layout-form" elevation={8}>
          <h1> {title} </h1>

          <Divider className="auth-layout-divider">
            <IconButton>
              <GoogleIcon className="gg-icon" />
            </IconButton>

            <IconButton>
              <FacebookIcon className="fb-icon" />
            </IconButton>
          </Divider>

          {children}
        </Paper>
      </div>
    </div>
  );
}
