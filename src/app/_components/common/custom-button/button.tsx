import * as React from "react";

import { ButtonProps } from "@mui/material";
import CartButton from "./cart-button";
import NormalButton from "./normal-button";

export type ICustomButtonProps = ButtonProps & {
  kind: "cart" | "normal";

  price?: string;
  content?: string;
  info?: string | React.ReactElement;

  style?: React.CSSProperties;
  className?: string;
};

export default function CustomButton({
  kind,
  price,
  info,
  content,
  style,
  className,
  variant,
  onClick,
  ...rest
}: ICustomButtonProps) {
  return (
    <>
      {kind === "cart" ? (
        <CartButton
          price={price!}
          info={info!}
          className={className}
          style={style}
          {...rest}
        />
      ) : (
        <NormalButton
          content={content!}
          className={className}
          style={style}
          {...rest}
        />
      )}
    </>
  );
}
