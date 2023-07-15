"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { leaders } from "@/data";

export default function About() {
  const [imgSrc, setImgSrc] = useState("/about/mobile/image-hero.jpg");

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 767) {
        setImgSrc("/about/mobile/image-hero.jpg");
      } else if (windowWidth > 767 && windowWidth <= 1023) {
        setImgSrc("/about/tablet/image-hero.jpg");
      } else {
        setImgSrc("/about/desktop/image-hero.jpg");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative">
      <Image
        src={imgSrc}
        alt="hero"
        className="w-full object-cover"
        width={375}
        height={240}
      />

      <div className="pl-6 pt-10">
        <div className="absolute left-0 top-[6.5%] h-[60px] w-[343px] bg-white" />
        <h1 className="text-5xl font-bold leading-[52px] text-dark-blue">
          Your team of professionals
        </h1>

        <p className="mt-4 w-[90%] text-lg font-medium leading-normal text-dark-gray">
          Our small team of world-class professionals will work with you every
          step of the way. Strong relationships are at the core of everything we
          do. This extends to the relationship our projects have with their
          surroundings.
        </p>
      </div>
      <div className="my-16 ml-6 h-px w-[65px] bg-dark-gray"></div>

      <div className="pl-6">
        <h1 className="text-5xl font-bold leading-[52px] text-dark-blue">
          Our <br /> Heritage
        </h1>

        <p className="mt-8 w-[90%] text-lg font-medium leading-normal text-dark-gray">
          Founded in 2007, we started as a trio of architects. Our complimentary
          skills and relentless attention to detail turned Arch into one of the
          most sought after boutique firms in the country.
        </p>

        <p className="mt-4 w-[90%] text-lg font-medium leading-normal text-dark-gray">
          Specializing in Urban Design allowed us to focus on creating
          exceptional structures that live in harmony with their surroundings.
          We consider every detail from every surrounding element to inform our
          designs.
        </p>

        <p className="mt-4 w-[90%] text-lg font-medium leading-normal text-dark-gray">
          Our small team of world-class professionals provides input on every
          project.
        </p>
      </div>

      <div className="px-6 py-24">
        <h1 className="text-5xl font-bold leading-[52px] text-dark-blue">
          The <br /> Leaders
        </h1>

        {leaders.map((leader) => {
          return (
            <div key={leader.id}>
              <Image
                src={leader.image}
                alt={leader.name}
                width={375}
                height={240}
                className="mt-14 w-full"
              />
              <h1 className="mt-4 text-[32px] font-bold leading-10 text-dark-blue">
                {leader.name}
              </h1>
              <p className="text-lg font-medium leading-normal text-dark-gray">
                {leader.title}
              </p>
            </div>
          );
        })}
      </div>

      <div className="pb-16" />
    </section>
  );
}
