"use client";
import React, { useEffect, useState } from "react";
import { CarouselContent } from "../types/types";
import Image from "next/image";
import Button from "./UI/Button";

export default function CarouselContent({
  title,
  imagePath,
  description,
}: CarouselContent) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Image
        src={width > 375 ? imagePath : imagePath.replace("desktop", "mobile")}
        alt="hero"
        width={1110}
        height={720}
        className="absolute inset-0 z-0 h-[560px] w-full object-cover md:h-[720px] md:w-[573px] lg:w-[832px] xl:w-[1152px]"
      />

      <div className="absolute inset-0 z-10 h-[560px] w-full bg-black bg-opacity-50 md:h-[720px] md:w-[573px] lg:w-[832px] xl:w-[1152px]"></div>

      <div className="flex flex-col px-6 py-16">
        <h1 className="z-20 text-6xl font-semibold capitalize md:text-8xl">
          {title.map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h1>
        <p className="z-20 mt-4 md:w-3/4 md:text-lg">{description}</p>

        <Button
          classname="z-20 mt-16 px-8 justify-center w-[252px] h-[72px] capitalize bg-dark-blue gap-4"
          children="see our portfolio"
          icon={true}
          hover={true}
          active={true}
          navigateTo="/portfolio"
        />
      </div>
    </div>
  );
}
