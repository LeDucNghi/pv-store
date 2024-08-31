import * as React from "react";

import Footer from "../../common/footer/footer";
import Header from "../../common/header/header";

export interface IHomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: IHomeLayoutProps) {
  return <div>{children}</div>;
}
