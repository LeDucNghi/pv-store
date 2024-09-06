"use client";

import "./paralax-bg.scss";

import * as React from "react";

import Image from "next/image";

export interface IParalaxBackgroundProps {
  img: string;
  className?: string;

  styles?: React.CSSProperties;
}

export default function ParalaxBackground({
  img,
  className,
  styles,
}: IParalaxBackgroundProps) {
  return (
    <div className={`paralax-bg-container ${className}`} style={styles}>
      <div className="paralax-bg">
        <Image
          className="paralax-img"
          src={img}
          alt="home background"
          width={0}
          height={0}
        />
      </div>
    </div>
  );
}
