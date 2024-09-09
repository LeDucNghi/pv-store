"use client";

import * as React from "react";

import { AnimatePresence } from "framer-motion";

export interface IAnimatePresenceWrapperProps {
  children: React.ReactNode;
}

export default function AnimatePresenceWrapper({
  children,
}: IAnimatePresenceWrapperProps) {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
}
