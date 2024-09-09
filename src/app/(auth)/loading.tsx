import * as React from "react";

import Loader from "@/app/_components/common/loader/loader";

export interface ILoadingProps {}

export default function LoadingPage(props: ILoadingProps) {
  return <Loader />;
}
