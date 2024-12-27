import * as React from "react";

import Link, { LinkProps } from "next/link";

export interface ITransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
}

export function TransitionLink({
  children,
  href,
  ...rest
}: ITransitionLinkProps) {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {};

  return (
    <Link onClick={(e) => e.preventDefault()} href={href} {...rest}>
      {children}
    </Link>
  );
}
