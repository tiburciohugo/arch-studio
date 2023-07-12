import React from "react";
import Button from "./Button";
import Image from "next/image";
import Arch from "./Arch";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="static bottom-0 left-0 right-0 flex w-full flex-col items-center justify-center bg-light-gray pb-12">
      <div className="relative flex w-full justify-center">
        <Arch />
      </div>

      <nav>
        <ul className="mb-6 mt-16 flex flex-col items-center justify-center space-y-6 pt-6 text-lg font-bold capitalize text-dark-gray">
          <li>
            <Link href="/portfolio">portfolio</Link>
          </li>
          <li>
            <Link href="/about">about us</Link>
          </li>
          <li>
            <Link href="/contact">contact</Link>
          </li>
        </ul>
      </nav>

      <Button
        classname="z-10 px-8 justify-center w-[252px] h-[72px] capitalize bg-very-dark-blue gap-4 text-white"
        children="see our portfolio"
        icon={true}
        hover={true}
        active={true}
        navigateTo="/portfolio"
      />
    </footer>
  );
}
