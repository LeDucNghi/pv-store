import "./button.scss";

import * as React from "react";

import { Button, ButtonProps } from "@mui/material";

export type INormalButtonProps = ButtonProps & {
  content: string;

  style?: React.CSSProperties;
  className?: string;
};

export default function NormalButton({
  content,
  style,
  className,
  ...rest
}: INormalButtonProps) {
  return (
    <Button
      className={`normal-button ${className}`}
      style={{
        ...style,
        position: "relative",
        borderRadius: "1.875rem",
        backgroundColor: style ? style.backgroundColor : "#ffb406",
        color: style ? style.color : "#000",
        fontWeight: "600",
        padding: "1rem 1.35rem",
      }}
      {...rest}
    >
      {content}
    </Button>
  );
}
