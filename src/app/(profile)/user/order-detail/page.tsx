"use client";

import * as React from "react";

import Loader from "@/app/_components/common/loader/loader";
import { useDebounce } from "@/hooks";

export interface IOrderDetailProps {}

export default function OrderDetail(props: IOrderDetailProps) {
  const { show } = useDebounce({ time: 3000 });

  if (!show) return <Loader />;

  return <div>Order detail page</div>;
}
