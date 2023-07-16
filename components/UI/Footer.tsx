import React from "react";
import Button from "./Button";
import Arch from "./Arch";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bottom-0 left-0 right-0 flex w-full max-w-[984px] flex-col items-center justify-center bg-light-gray pb-12 md:h-[116px] md:w-[612px] md:flex-row md:justify-start md:gap-10 md:pb-0 lg:ml-24 lg:w-3/4 xl:ml-36 xl:h-[200px] lg:mx-auto">
      <div className="relative flex w-full justify-center md:w-auto">
        <Arch />
      </div>

      <nav>
        <ul className="mb-6 mt-16 flex flex-col items-center justify-center space-y-6 pt-6 text-lg font-bold capitalize text-dark-gray md:mb-0 md:mt-0 md:w-full md:flex-row md:space-x-6 md:space-y-0 lg:pt-0 xl:text-xl xl:space-x-16 xl:pl-10">
          <li>
            <Link href="/portfolio" className="transition duration-300 ease-in-out hover:text-dark-blue">portfolio</Link>
          </li>
          <li className="md:w-full md:whitespace-nowrap">
            <Link href="/about" className="transition duration-300 ease-in-out hover:text-dark-blue">about us</Link>
          </li>
          <li>
            <Link href="/contact" className="transition duration-300 ease-in-out hover:text-dark-blue">contact</Link>
          </li>
        </ul>
      </nav>

      <Button
        classname="z-10 px-8 justify-center w-[252px] h-[72px] capitalize bg-dark-blue gap-4 text-white md:flex md:absolute md:left-[86%]"
        children="see our portfolio"
        icon={true}
        hover={true}
        active={true}
        navigateTo="/portfolio"
      />
    </footer>
  );
}
