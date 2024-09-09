import * as React from "react";

import Loader from "@/app/_components/common/loader/loader";

export interface ILoadingPageProps {}

export default function LoadingPage(props: ILoadingPageProps) {
  return <Loader />;
}
