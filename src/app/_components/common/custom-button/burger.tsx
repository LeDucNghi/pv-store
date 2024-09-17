import "./button.scss";

import * as React from "react";

export interface IBurgerButtonProps {
  onClick?: (value: any) => void;
}

export default function BurgerButton({ onClick }: IBurgerButtonProps) {
  return (
    <label className="burger" htmlFor="burger" onClick={onClick}>
      <input type="checkbox" id="burger" />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
}
