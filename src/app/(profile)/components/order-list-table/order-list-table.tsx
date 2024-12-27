import "./order-list-table.scss";

import * as React from "react";

import { Paper, TextField } from "@mui/material";

export interface IOrderListTableProps {}

export function OrderListTable(props: IOrderListTableProps) {
  return (
    <Paper elevation={8} className="order-list-table">
      <div className="order-list-search">
        <TextField />
      </div>

      <div className="order-list"></div>
    </Paper>
  );
}
