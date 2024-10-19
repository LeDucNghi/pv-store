import "./custom-wrapper.scss";

import * as React from "react";

import { Paper } from "@mui/material";

export interface ICustomWrapperProps {
  title?: string;
  subtitle?: string;

  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function CustomWrapper({
  title,
  subtitle,
  children,
  style,
}: ICustomWrapperProps) {
  return (
    <Paper style={style} elevation={5} className="wrapper-container">
      <div className="wrapper-header">
        <h3>{title}</h3>
        <p> {subtitle}</p>
      </div>

      <div className="wrapper-body">{children}</div>
    </Paper>
  );
}
