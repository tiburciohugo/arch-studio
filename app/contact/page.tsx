"use client";
import Button from "@/components/UI/Button";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Contact() {
  const [imgSrc, setImgSrc] = useState("/contact/mobile/image-hero.jpg");
  const [mapImgSrc, setMapImgSrc] = useState("/contact/mobile/image-map.png");
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 767) {
        setImgSrc("/contact/mobile/image-hero.jpg");
        setMapImgSrc("/contact/mobile/image-map.png");
      } else if (windowWidth > 767 && windowWidth <= 1023) {
        setImgSrc("/contact/tablet/image-hero.jpg");
        setMapImgSrc("/contact/tablet/image-map.png");
      } else {
        setImgSrc("/contact/desktop/image-hero.jpg");
        setMapImgSrc("/contact/desktop/image-map.png");
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
        <div className="absolute left-0 top-[9%] h-[70px] w-[343px] bg-white" />
        <h1 className="text-5xl font-bold leading-[52px] text-very-dark-blue">
          Tell us about your project
        </h1>

        <p className="mt-4 w-[90%] text-lg font-medium leading-normal text-dark-gray">
          We&#8217;d love to hear more about your project. Please, leave a
          message below or give us a call. We have two offices, one in Texas and
          one in Tennessee. If you find yourself nearby, come say hello!
        </p>
      </div>
      <div className="my-16 ml-6 h-px w-[65px] bg-dark-gray"></div>

      <div className="pl-6">
        <h1 className="text-5xl font-bold leading-[52px] text-very-dark-blue">
          Contact <br /> Details
        </h1>

        <p className="mt-8 w-[90%] text-lg font-bold leading-normal text-dark-gray">
          Main Office
        </p>

        <p className="mt-4 w-[90%] text-lg font-medium leading-normal text-dark-gray">
          Mail : archone@mail.com <br /> Address : 1892 Chenoweth Drive TN{" "}
          <br /> Phone : 123-456-3451
        </p>

        <Button
          classname="flex items-center justify-start self-end mt-2 w-full text-very-dark-blue gap-4"
          children="View on Map"
          icon={true}
        />

        <p className="mt-8 w-[90%] text-lg font-bold leading-normal text-dark-gray">
          Office II
        </p>

        <p className="mt-4 w-[90%] text-lg font-medium leading-normal text-dark-gray">
          Mail : archtwo@mail.com <br /> Address : 1892 Chenoweth Drive TN{" "}
          <br /> Phone : 123-456-3451
        </p>

        <Button
          classname="flex items-center justify-start self-end mt-2 w-full text-very-dark-blue gap-4"
          children="View on Map"
          icon={true}
        />
      </div>

      <div className="">
        <Image
          src={mapImgSrc}
          alt="hero"
          className="w-full object-cover"
          width={375}
          height={367}
        />
      </div>

      <div className="px-6 py-20">
        <h1 className="text-5xl font-bold leading-[52px] text-very-dark-blue">
          Connect <br /> with us
        </h1>

        <form className="flex flex-col">
          <div className="mt-8 w-full">
            <input
              type="text"
              name="name"
              className="mt-4 h-[72px] w-full border-b border-dark-gray px-8 text-xl font-bold leading-normal text-dark-gray focus:border-very-dark-blue focus:outline-none"
              placeholder="Name"
              maxLength={50}
            />

            <input
              type="email"
              name="email"
              className="mt-4 h-[72px] w-full border-b border-dark-gray px-8 text-xl font-bold leading-normal text-dark-gray focus:border-very-dark-blue focus:outline-none"
              placeholder="Email"
            />

            <input
              type="textarea"
              name="message"
              className="mt-4 h-[72px] w-full border-b border-dark-gray px-8 text-xl font-bold leading-normal text-dark-gray focus:border-very-dark-blue focus:outline-none"
              placeholder="Message"
              maxLength={500}
            />
          </div>

          <Button
            classname="bg-very-dark-blue flex items-center justify-center self-end text-white"
            icon={true}
          />
        </form>
      </div>

      <div className="pb-16" />
    </section>
  );
}
