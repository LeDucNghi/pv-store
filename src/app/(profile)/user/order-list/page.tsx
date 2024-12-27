"use client";

import "./order-list.scss";

import * as React from "react";

import Loader from "@/app/_components/common/loader/loader";
import { Paper } from "@mui/material";
import { useDebounce } from "@/hooks";

export interface IOrderListPageProps {}

export default function OrderListPage(props: IOrderListPageProps) {
  const { show } = useDebounce({ time: 3000 });

  if (!show) return <Loader />;

  return (
    <Paper className="order-list-container" elevation={8}>
      order list page
    </Paper>
  );
}
