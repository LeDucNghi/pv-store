import "./auth-layout.scss";

import * as React from "react";

import { Divider, IconButton, Paper } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import PageTransition from "../../common/page-transition/page-transition";

export interface IAuthLayoutProps {
  children: React.ReactNode;

  title: string;

  page: "signin" | "signup";
}

export default function AuthLayout({ children, title }: IAuthLayoutProps) {
  return (
    <PageTransition>
      <div className="auth-layout-container flex-center">
        <div className="auth-layout-wrapper">
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
    </PageTransition>
  );
}
