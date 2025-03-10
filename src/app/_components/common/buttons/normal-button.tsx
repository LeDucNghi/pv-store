import "./button.scss";

import * as React from "react";

import { Button, ButtonProps } from "@mui/material";

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
    <>
      {loading ? (
        <LoadingButton
          loading={loading}
          loadingPosition="start"
        ></LoadingButton>
      ) : (
        <Button
          className={`normal-button ${className}`}
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
          {...rest}
        >
          {children}
        </Button>
      )}
    </>
  );
}
