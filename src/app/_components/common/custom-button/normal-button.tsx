import "./button.scss";

import * as React from "react";

import { Button, ButtonProps } from "@mui/material";

export type INormalButtonProps = ButtonProps & {
  children: React.ReactNode;

  style?: React.CSSProperties;
  className?: string;
};

export default function NormalButton({
  children,
  style,
  className,
  ...rest
}: INormalButtonProps) {
  return (
    <Button
      className={`normal-button ${className}`}
      style={{
        ...style,
        backgroundColor: style?.backgroundColor
          ? style?.backgroundColor
          : "#ffb406",
        color: style?.backgroundColor ? style?.color : "#000",
      }}
      {...rest}
    >
      {children}
    </Button>
  );
}
