"use client";
import Image from "next/image";
import React from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

export default function Menu({}) {
  const [open, setOpen] = React.useState(false);

  // Prevent scroll when the menu is open
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <aside className="cursor-pointer md:hidden" onClick={() => setOpen(!open)}>
      <Image
        src={!open ? "/icons/icon-hamburger.svg" : "/icons/icon-close.svg"}
        alt={"menu"}
        width={24}
        height={17}
        className="z-20 object-contain"
      />

      <Transition
        show={open}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="fixed right-0 top-20 z-40 h-screen w-screen overflow-y-hidden  bg-very-dark-blue bg-opacity-60"
      >
        <Transition.Child
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-x-full"
          enterTo="-translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="-translate-x-0"
          leaveTo="translate-x-full"
          className="fixed right-0 z-50 w-[70%] flex-col items-center justify-start space-y-14 bg-very-light-gray pb-10"
        >
          <ul className="flex flex-col items-start justify-start space-y-6 px-12 pt-6 text-3xl font-bold capitalize text-very-dark-blue">
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
        </Transition.Child>
      </Transition>
    </aside>
  );
}
