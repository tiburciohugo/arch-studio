import React from 'react'
import Button from '../UI/Button';

export default function BigIdeas() {
  return (
    <section className="image-section relative flex h-[560px] flex-col justify-center bg-small-mobile bg-cover bg-center px-6 py-20 text-white md:px-16 lg:bg-small-desktop xl:px-52">
      <div className="home-content flex flex-col">
        <h1 className="text-5xl font-bold md:text-6xl">
          Small team, <br /> big ideas
        </h1>
        <Button
          classname="mt-6 px-8 w-[187px] h-[72px] capitalize bg-dark-blue flex items-center justify-center gap-4"
          children="about us"
          icon={true}
          hover={true}
          active={true}
          navigateTo="/about"
        />
      </div>
    </section>
  );
}
