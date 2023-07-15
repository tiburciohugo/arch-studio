import Image from "next/image";
import React from "react";

export default function Welcome() {
  return (
    <section className="px-6 py-20 md:px-0">
      <div className="w-16 border border-medium-gray md:hidden"></div>
      <p className="relative z-50 hidden text-9xl font-bold leading-[200px] text-gray-200 md:block xl:text-[250px]">
        Welcome
      </p>

      <div className="xl:-mt-24 xl:justify-end xl:flex xl:pb-14">
        <div className="xl:w-2/4 xl:self-end">
          <h1 className="pt-16 text-5xl font-bold md:-mt-14 md:w-3/4 md:pt-0 md:text-6xl text-dark-blue">
            Welcome to Arch Studio
          </h1>

          <div className="font-medium text-dark-gray md:text-lg xl:w-3/4">
            <p className="mt-6">
              We have a unique network and skillset to help bring your projects
              to life. Our small team of highly skilled individuals combined
              with our large network put us in a strong position to deliver
              exceptional results.{" "}
            </p>
            <p className="mt-4">
              {" "}
              Over the past 10 years, we have worked on all kinds of projects.
              From stations to high-rise buildings, we create spaces that
              inspire and delight.
            </p>{" "}
            <p className="mt-4">
              We work closely with our clients so that we understand the
              intricacies of each project. This allows us to work in harmony the
              surrounding area to create truly stunning projects that will stand
              the test of time.
            </p>
          </div>
        </div>

        <Image
          src={"/home/desktop/image-welcome.jpg"}
          alt="Welcome"
          className="absolute hidden h-[568px] xl:block"
          width={350}
          height={568}
        />
        <div className="home-section relative h-[568px] w-[350px] xl:block hidden"></div>
      </div>
    </section>
  );
}
