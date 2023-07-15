"use client";
import React from "react";
import Button from "../UI/Button";
import Image from "next/image";

export default function Hero() {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <section className="carousel relative flex h-[560px] w-full flex-col items-center px-6 py-16 text-white md:h-[720px] md:px-12 md:py-32 xl:px-40 xl:py-40">
      <div id="item1" className="carousel-item">
        <Image
          src={
            width > 375
              ? "/home/desktop/image-hero-paramour.jpg"
              : "/home/mobile/image-hero-paramour.jpg"
          }
          alt="hero"
          width={1110}
          height={720}
          className="absolute inset-0 z-0 h-[560px] w-full object-cover md:h-[720px] md:w-[573px] lg:w-[832px] xl:w-[1152px]"
        />

        <div className="absolute inset-0 z-10 h-[560px] w-full bg-black bg-opacity-50 md:h-[720px] md:w-[573px] lg:w-[832px] xl:w-[1152px]"></div>

        <div className="flex flex-col">
          <h1 className="z-20 text-6xl font-semibold capitalize md:text-8xl">
            project
            <br /> paramour
          </h1>
          <p className="z-20 mt-4 md:w-3/4 md:text-lg">
            Project made for an art museum near Southwest London. Project
            Paramour is a statement of bold, modern architecture.
          </p>

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

      {/* <div id="item2" className="carousel-item">
        <Image
          src={
            width > 375
              ? "/home/desktop/image-hero-paramour.jpg"
              : "/home/mobile/image-hero-paramour.jpg"
          }
          alt="hero"
          width={1110}
          height={720}
          className="absolute inset-0 z-0 h-[560px] w-full object-cover md:h-[720px] md:w-[573px] lg:w-[832px] xl:w-[1152px]"
        />

        <div className="absolute inset-0 z-10 h-[560px] w-full bg-black bg-opacity-50 md:h-[720px] md:w-[573px] lg:w-[832px] xl:w-[1152px]"></div>

        <div className="flex flex-col">
          <h1 className="z-20 text-6xl font-semibold capitalize md:text-8xl">
            project
            <br /> paramour 2
          </h1>
          <p className="z-20 mt-4 md:w-3/4 md:text-lg">
            Project made for an art museum near Southwest London. Project
            Paramour is a statement of bold, modern architecture.
          </p>

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

      <div id="item3" className="carousel-item">
        <Image
          src={
            width > 375
              ? "/home/desktop/image-hero-paramour.jpg"
              : "/home/mobile/image-hero-paramour.jpg"
          }
          alt="hero"
          width={1110}
          height={720}
          className="absolute inset-0 z-0 h-[560px] w-full object-cover md:h-[720px] md:w-[573px] lg:w-[832px] xl:w-[1152px]"
        />

        <div className="absolute inset-0 z-10 h-[560px] w-full bg-black bg-opacity-50 md:h-[720px] md:w-[573px] lg:w-[832px] xl:w-[1152px]"></div>

        <div className="flex flex-col">
          <h1 className="z-20 text-6xl font-semibold capitalize md:text-8xl">
            project
            <br /> paramour 3
          </h1>
          <p className="z-20 mt-4 md:w-3/4 md:text-lg">
            Project made for an art museum near Southwest London. Project
            Paramour is a statement of bold, modern architecture.
          </p>

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

      <div id="item4" className="carousel-item">
        <Image
          src={
            width > 375
              ? "/home/desktop/image-hero-paramour.jpg"
              : "/home/mobile/image-hero-paramour.jpg"
          }
          alt="hero"
          width={1110}
          height={720}
          className="absolute inset-0 z-0 h-[560px] w-full object-cover md:h-[720px] md:w-[573px] lg:w-[832px] xl:w-[1152px]"
        />

        <div className="absolute inset-0 z-10 h-[560px] w-full bg-black bg-opacity-50 md:h-[720px] md:w-[573px] lg:w-[832px] xl:w-[1152px]"></div>

        <div className="flex flex-col">
          <h1 className="z-20 text-6xl font-semibold capitalize md:text-8xl">
            project
            <br /> paramour 4
          </h1>
          <p className="z-20 mt-4 md:w-3/4 md:text-lg">
            Project made for an art museum near Southwest London. Project
            Paramour is a statement of bold, modern architecture.
          </p>

          <Button
            classname="z-20 mt-16 px-8 justify-center w-[252px] h-[72px] capitalize bg-dark-blue gap-4"
            children="see our portfolio"
            icon={true}
            hover={true}
            active={true}
            navigateTo="/portfolio"
          />
        </div>
      </div> */}

      <div className="absolute bottom-0 -left-20 flex opacity-0 xl:opacity-100">
        <Button
          classname="z-20 mt-16 px-8 justify-center capitalize bg-white shadow-none text-dark-gray gap-4 hover:bg-dark-blue"
          children={
            <a href="#item1" className="btn-xs btn">
              01
            </a>
          }
        />

        <Button
          classname="z-20 mt-16 px-8 justify-center capitalize bg-white shadow-none text-dark-gray gap-4 hover:bg-dark-blue"
          children={
            <a href="#item2" className="btn-xs btn">
              02
            </a>
          }
        />

        <Button
          classname="z-20 mt-16 px-8 justify-center capitalize bg-white shadow-none text-dark-gray gap-4 hover:bg-dark-blue"
          children={
            <a href="#item3" className="btn-xs btn">
              03
            </a>
          }
        />

        <Button
          classname="z-20 mt-16 px-8 justify-center capitalize bg-white shadow-none text-dark-gray gap-4 hover:bg-dark-blue"
          children={
            <a href="#item4" className="btn-xs btn">
              04
            </a>
          }
        />
      </div>
    </section>
  );
}
