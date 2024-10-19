"use client";

import * as React from "react";

import Loader from "@/app/_components/common/loader/loader";
import { useDebounce } from "@/hooks";

export interface IInvoicePageProps {}

export default function InvoicePage(props: IInvoicePageProps) {
  const { show } = useDebounce({ time: 3000 });

  if (!show) return <Loader />;

  return <div>invoice page</div>;
}
