import "./button.scss";

import * as React from "react";

import { ButtonProps } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";

export type INormalButtonProps = ButtonProps & {
  children: React.ReactNode;

  style?: React.CSSProperties;
  className?: string;

  loading?: boolean;
};

export default function NormalButton({
  children,
  style,
  className,
  loading,
  ...rest
}: INormalButtonProps) {
  return (
    <LoadingButton
      className={`normal-button ${loading ? "isLoading" : ""} ${className}`}
      style={{
        ...style,
        position: "relative",
        borderRadius: "1.875rem",
        fontWeight: 600,
        padding: "0.8rem 1.5rem",

        backgroundColor: style?.backgroundColor
          ? style?.backgroundColor
          : "#ffb406",
        color: style?.backgroundColor ? style?.color : "#000",
      }}
      loading={loading}
      loadingPosition="start"
      {...rest}
    >
      {children}
    </LoadingButton>
  );
}
