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
    <Button className="normal-button" style={style} {...rest}>
      {content}
    </Button>
  );
}
