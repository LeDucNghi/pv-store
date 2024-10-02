import "./profile-layout.scss";

import * as React from "react";

export interface IProfileLayoutProps {
  children: React.ReactNode;
}

export default function ProfileLayout({ children }: IProfileLayoutProps) {
  return <div className="profile-layout-container">{children}</div>;
}
