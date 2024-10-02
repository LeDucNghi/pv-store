import "./info-side.scss";

import * as React from "react";

import CustomTabs from "../tabs/tabs";
import { Paper } from "@mui/material";

export interface IInformationsSideProps {}

export default function InformationsSide(props: IInformationsSideProps) {
  return (
    <Paper elevation={8} className="info-side-container">
      <CustomTabs />
    </Paper>
  );
}
