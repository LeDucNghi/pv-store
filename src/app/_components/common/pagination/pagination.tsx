"use client";

import * as React from "react";

import { Pagination } from "@mui/material";

export interface ICustomPaginationProps {
  value: {
    page: number;
    limit: number;
    totalRows: number;
    totalPages: number;
  };

  onPageChange: (value: number) => void;
}

export default function CustomPagination({
  value,
  onPageChange,
}: ICustomPaginationProps) {
  const [curPage, setCurPage] = React.useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurPage(value);

    onPageChange(value);
  };

  return <Pagination count={10} page={curPage} onChange={handleChange} />;
}
