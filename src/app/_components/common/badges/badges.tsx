import * as React from "react";

import { Chip } from "@mui/material";

export interface ICustomBadgesProps {
  status: "completed" | "pending" | "cancelled" | "shipping";

  label: string;
}

export function CustomBadges({ label, status }: ICustomBadgesProps) {
  return (
    <Chip
      label={label}
      variant="outlined"
      color={
        status === "completed"
          ? "success"
          : status === "pending"
          ? "warning"
          : status === "cancelled"
          ? "error"
          : "primary"
      }
    />
  );
}
