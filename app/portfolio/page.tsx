import React from "react";
import { portfolioData } from "@/data";
import PageIdentifier from "@/components/UI/PageIdentifier";

export default function Portfolio() {
  return (
    <section className="w-full max-w-[90rem] px-6 pb-20 md:px-24 xl:px-36">
      <PageIdentifier pageName="portfolio" />

      <div className="flex flex-col pb-12 capitalize text-white lg:grid lg:grid-cols-3 lg:gap-6">
        {portfolioData.map((item) => (
          <div
            className="relative mx-auto mt-6 block w-auto self-center"
            key={item.id}
          >
            <img
              src={item.imageMobile}
              alt={item.title}
              className="h-[280px] w-full md:hidden md:w-auto"
            />
            <img
              src={item.imageTablet}
              alt={item.title}
              className="hidden md:block lg:hidden"
            />
            <img
              src={item.imageDesktop}
              alt={item.title}
              className="hidden lg:block"
            />
            <div
              id="this"
              className="absolute bottom-0 left-0 z-10 flex h-[280px] w-full flex-col justify-end bg-black bg-opacity-50 p-6 md:h-[240px] md:w-[573px] md:p-10 lg:h-[26.2rem] lg:w-[16.3rem] xl:lg:h-[35rem] xl:w-[22rem]"
            >
              <h1 className="text-3xl font-bold">{item.title}</h1>

              <p className="mt-1 text-light-gray">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
