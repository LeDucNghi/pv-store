"use client";

import "./profile-layout.scss";

import * as React from "react";

import { useAuth } from "@/hooks";
import { useRouter } from "next/navigation";

export interface IProfileLayoutProps {
  children: React.ReactNode;
}

export default function ProfileLayout({ children }: IProfileLayoutProps) {
  const { profile } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!profile) {
      router.push("/signin");
    }
  }, [router, profile]);

  return <div className="profile-layout-container">{children}</div>;
}
