import "./menu.scss";

import * as React from "react";

import { images, menuInformations } from "@/constants";

import Image from "next/image";

export interface IMenuContentProps {}

export default function MenuContent(props: IMenuContentProps) {
  return (
    <div className="menu-content">
      <div className="content-text">
        <h2>
          Slim just as it should be, crunchy and delicious, it can be in
          “classic” or black variant, an ideal base for carefully.
        </h2>

        <div className="w-full flex flex-wrap">
          {menuInformations.slice(0, 2).map((info, key) => {
            return (
              <div
                className="w-1/2 flex flex-wrap items-center py-[1rem] mb-[2.375rem]"
                key={key}
              >
                <Image
                  src={info.img.src}
                  alt="description"
                  width={100}
                  height={100}
                  objectFit="contain"
                />

                <div className="menu-description">
                  <p>{info.description}</p>
                </div>
              </div>
            );
          })}

          {menuInformations.slice(2, 4).map((info, key) => {
            return (
              <div
                className="w-1/2 flex flex-wrap items-center py-[1rem] mb-[2.375rem]"
                key={key}
              >
                <Image
                  src={info.img.src}
                  alt="description"
                  width={100}
                  height={100}
                />

                <div className="menu-description">
                  <p> {info.description} </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="content-img">
        <Image src={images.illustration1} alt="illustration" />
      </div>
    </div>
  );
}
