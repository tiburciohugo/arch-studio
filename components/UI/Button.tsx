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
      className={`${classname} flex h-20 w-20 items-center space-x-4 font-bold xl:text-lg shadow-xl ${
        hover && "hover:bg-dark-gray"
      } ${
        active && "active:bg-light-gray"
      } transition duration-300 ease-in-out`}
    >
      {children}
      {icon && (
        <svg
          width="24"
          height="20"
          viewBox="0 0 24 20"
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 18">
            <path
              id="Path 3"
              d="M15 1L24 10L15 19"
              stroke="currentColor"
              stroke-width="2"
            />
            <path
              id="Path"
              d="M0 10H24"
              stroke="currentColor"
              stroke-width="2"
            />
          </g>
        </svg>
      )}
    </button>
  );
}
