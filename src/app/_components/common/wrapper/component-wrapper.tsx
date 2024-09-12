import * as React from "react";

import Image from "next/image";
import { images } from "@/constants";

export interface IComponentWrapperProps {
  children: React.ReactNode;

  color?: "red" | "cream";

  className?: string;
}

export default function ComponentWrapper({
  children,
  color,
  className,
}: IComponentWrapperProps) {
  return (
    <div
      className={` relative wrapper w-full h-screen ${className} ${
        color === "cream" ? "bg-[#f5e7c2]" : "#e84242"
      }`}
    >
      <Image
        src={color === "cream" ? images.creamBottomWave : images.redBottomWave}
        className="top-wave top-[-4em] z-10 bg-red"
        alt="top wave"
      />

      {children}

      <Image
        src={color === "cream" ? images.creamBottomWave : images.redBottomWave}
        className="bottom-wave bottom-[-4rem]"
        alt="bottom wave"
      />
    </div>
  );
}
