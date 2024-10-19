"use client";

import * as React from "react";

import Loader from "@/app/_components/common/loader/loader";
import { useDebounce } from "@/hooks";

export interface ISettingPageProps {}

export default function SettingPage(props: ISettingPageProps) {
  const { show } = useDebounce({ time: 3000 });

  if (!show) return <Loader />;

  return <div>setting page</div>;
}
