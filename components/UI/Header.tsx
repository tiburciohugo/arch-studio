import Image from "next/image";
import React from "react";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between p-6">
      <Image src="/logo.svg" alt="Logo" width={77} height={32} className="" />

      <Menu />
    </header>
  );
}
