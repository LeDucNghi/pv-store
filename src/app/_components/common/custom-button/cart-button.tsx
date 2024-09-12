import "./button.scss";

import * as React from "react";

import { Button, ButtonProps, IconButton } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

export type ICartButtonProps = ButtonProps & {
  price: string;
  info: string | React.ReactElement;

  style?: React.CSSProperties;
  className?: string;

  variant?: "outlined" | "contained";
};

export default function CartButton({
  price,
  info,
  className,
  style,
  variant,
  ...rest
}: ICartButtonProps) {
  return (
    <div
      className={`btn-container ${
        variant === "outlined" ? "outlined" : "contained"
      } flex-center ${className}`}
      style={style}
    >
      <div className="btn-content">
        <div className="btn-price">{price}</div>

        <div className="btn-info">{info}</div>
      </div>

      <div className="btn-add">
        <IconButton {...rest} className="icon-btn">
          <AddIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}
