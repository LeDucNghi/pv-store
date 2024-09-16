import * as React from "react";

import { Drawer } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

export interface ICustomDrawerProps {
  isOpen: boolean;

  children: React.ReactNode;

  onClose: (open: boolean) => void;
}

export default function CustomDrawer({
  isOpen,
  children,
  onClose,
}: ICustomDrawerProps) {
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      {children}
    </Drawer>
  );
}
