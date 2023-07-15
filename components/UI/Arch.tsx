import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Arch() {
  return (
    <Link
      href="/portfolio"
      className="absolute -top-14 mb-10 flex w-[120px] cursor-pointer items-center justify-center bg-dark-blue px-6 py-10 text-white md:static md:left-0 md:mb-0 xl:h-[200px] xl:w-[200px]"
    >
      <h2 className="text-3xl font-bold xl:text-5xl">Arch</h2>
    </Link>
  );
}
