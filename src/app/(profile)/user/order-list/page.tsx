"use client";

import * as React from "react";

import Loader from "@/app/_components/common/loader/loader";
import { useDebounce } from "@/hooks";

export interface IOrderListPageProps {}

export default function OrderListPage(props: IOrderListPageProps) {
  const { show } = useDebounce({ time: 3000 });

  if (!show) return <Loader />;

  return <div>order list page</div>;
}
