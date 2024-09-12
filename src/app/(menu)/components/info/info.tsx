import "./info.scss";

import { images, menuInformations } from "@/constants";

import ComponentWrapper from "@/app/_components/common/wrapper/component-wrapper";
import Image from "next/image";

export interface IMenuInformationProps {}

export default function MenuInformation(props: IMenuInformationProps) {
  return (
    <ComponentWrapper color="cream">
      <div className="menu-info-container">
        <div className="content-img">
          <Image src={images.menuInfoIllustration} alt="illustration" />
        </div>

        <div className="content-text">
          <h2>
            Slim just as it should be, crunchy and delicious, it can be in
            “classic” or black variant, an ideal base for carefully.
          </h2>

          <div className="w-full flex flex-wrap">
            {menuInformations.slice(0, 2).map((info, key) => {
              return (
                <div
                  className="w-1/2 flex items-center py-[1rem] mb-[2.375rem]"
                  key={key}
                >
                  <Image
                    src={info.img.src}
                    alt="description"
                    width={70}
                    height={70}
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
                  className="w-1/2 flex items-center py-[1rem] mb-[2.375rem]"
                  key={key}
                >
                  <Image
                    src={info.img.src}
                    alt="description"
                    width={70}
                    height={70}
                  />

                  <div className="menu-description">
                    <p> {info.description} </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
}
