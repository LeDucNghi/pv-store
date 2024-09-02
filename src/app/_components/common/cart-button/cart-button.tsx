import "./cart-button.scss";

import * as React from "react";

import { Button, IconButton } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

export interface ICartButtonProps {
  price: string;
  info: string | React.ReactElement;

  className?: string;
}

export default function CartButton({
  price,
  info,
  className,
}: ICartButtonProps) {
  return (
    <div className={`btn-container flex-center ${className}`}>
      <div className="btn-content">
        <div className="btn-price">{price}</div>

        <div className="btn-info">{info}</div>
      </div>

      <div className="btn-add">
        <IconButton className="icon-btn">
          <AddIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}
