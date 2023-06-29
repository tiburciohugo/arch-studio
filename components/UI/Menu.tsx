'use client'
import Image from "next/image";
import React from "react";

export default function Menu({}) {
  const [open, setOpen] = React.useState(false);

  return (
    <div
      className="cursor-pointer md:opacity-0"
      onClick={() => setOpen(!open)}
    >
      <Image
        src={!open ? "/icons/icon-hamburger.svg" : "/icons/icon-close.svg"}
        alt={"menu"}
        width={24}
        height={17}
        className="object-contain"
      />
    </div>
  );
}
