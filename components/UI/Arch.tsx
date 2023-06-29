import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Arch() {
  return (
    <Link
      href="/portfolio"
      className="absolute -top-14 mb-10 flex w-[120px] items-center justify-center bg-very-dark-blue px-6 py-10 text-white cursor-pointer"
    >
      <h2 className="text-3xl font-bold">Arch</h2>
    </Link>
  );
}
