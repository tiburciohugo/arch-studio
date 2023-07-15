import Image from "next/image";
import React from "react";
import Menu from "./Menu";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex w-full max-w-[90rem] items-center justify-between p-6 md:px-24 md:justify-start xl:px-36 md:py-10 xl:py-12 bg-white">
      <Link href="/">
        <Image src="/logo.svg" alt="Logo" width={77} height={32} className="" />
      </Link>

      <nav className="hidden md:inline-flex">
        <ul className="flex items-center space-x-14 pt-2 md:ml-16 lg:ml-20">
          <li className="inline-block">
            <Link
              href="/portfolio"
              className="text-lg font-bold capitalize text-medium-gray"
            >
              portfolio
            </Link>
          </li>
          <li className="inline-block">
            <Link
              href="/about"
              className="text-lg font-bold capitalize text-medium-gray"
            >
              about us
            </Link>
          </li>
          <li className="inline-block">
            <Link
              href="/contact"
              className="text-lg font-bold capitalize text-medium-gray"
            >
              contact
            </Link>
          </li>
        </ul>
      </nav>

      <Menu />
    </header>
  );
}
