import React from 'react'

type Props = {
    pageName: string;
}

export default function PageIdentifier({pageName}: Props) {
  return (
    <div className="relative w-6">
      <div className="absolute -left-11 -top-32 h-[104px] w-[1px] bg-gray-300 xl:-left-[70px]" />
      <div className="absolute -left-8 top-6 origin-top-left rotate-90 text-[18px] font-medium uppercase leading-normal text-gray-300 md:tracking-[12px] lg:tracking-[18px] xl:-left-14">
        {pageName}
      </div>
    </div>
  );
}
