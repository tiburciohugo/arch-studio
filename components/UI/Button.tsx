"use client";
import React from "react";
import { useRouter } from "next/navigation";

type ButtonProps = {
  children?: React.ReactNode;
  classname?: string;
  icon?: boolean;
  hover?: boolean;
  active?: boolean;
  navigateTo?: string;
};

export default function Button({
  children,
  classname,
  icon,
  hover,
  active,
  navigateTo,
}: ButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        if (navigateTo) {
          router.push(navigateTo);
        }
      }}
      className={`${classname} flex h-20 w-20 items-center space-x-4 font-bold lg:h-[72px] lg:w-[177px] ${
        hover && "hover:bg-dark-gray"
      } ${
        active && "active:bg-light-gray"
      } transition duration-300 ease-in-out`}
    >
      {children}
      {icon && <img src="/icons/arrow.svg" alt="arrow" />}
    </button>
  );
}
