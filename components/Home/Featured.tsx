import React from "react";
import Button from "../UI/Button";
import { homeData } from "@/data";
import Link from "next/link";

export default function Featured() {
  return (
    <section className="px-6 py-20 md:px-0">
      <div className="items-center justify-between md:flex">
        <h1 className="text-5xl font-bold capitalize text-dark-blue">
          featured
        </h1>

        <Button
          classname="px-8 md:w-[169px] h-[72px] capitalize bg-dark-blue md:flex items-center justify-center gap-4 w-full text-white hidden"
          children="see all"
          icon={true}
          hover={true}
        />
      </div>

      <div className="gap-4 pb-20 capitalize text-white lg:flex xl:justify-evenly xl:gap-12">
        {homeData.map((item) => (
          <div className="relative mt-16 lg:flex-row" key={item.id}>
            <img
              src={item.imageMobile}
              alt={item.title}
              className="h-[280px] w-full md:hidden"
            />

            <img
              src={item.imageTablet}
              alt={item.title}
              className="hidden object-cover md:block md:h-60 md:w-full lg:hidden"
            />

            <img
              src={item.imageDesktop}
              alt={item.title}
              className="hidden object-cover lg:block lg:h-[35rem] lg:w-[21.9rem] lg:object-cover"
            />
            <div className="lg:w-[21.9rem]md:h-60 absolute bottom-0 left-0 z-10 flex h-[280px] w-full flex-col justify-end bg-black bg-opacity-50 p-6 md:h-60 md:w-full md:p-8 lg:h-[35rem]">
              <div className="relative justify-between md:flex">
                <h1 className="text-3xl font-bold">{item.title}</h1>

                <h2 className="absolute -top-[160px] right-0 text-[200px] font-bold text-white opacity-0 md:opacity-50 lg:-right-8 lg:-top-[480px]">
                  {item.id}
                </h2>
              </div>

              <Link href={`/portfolio/${item.id}`}>
                <p className="mt-4 text-white">view all projects</p>
              </Link>
            </div>
          </div>
        ))}

        <Button
          classname="mt-6 px-8 md:w-[187px] h-[72px] capitalize bg-dark-blue flex items-center justify-center gap-4 w-full md:hidden"
          children="see all"
          icon={true}
          hover={true}
          active={true}
        />
      </div>
    </section>
  );
}
