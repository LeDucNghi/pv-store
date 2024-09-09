import "./loader.scss";

import * as React from "react";

export interface ILoadingProps {}

export default function Loading(props: ILoadingProps) {
  return <div className="flex-center loader-container"></div>;
}
