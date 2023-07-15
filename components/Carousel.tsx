import { useEffect, useState } from "react";
import { CarouselItem } from "@/types/types";
import Image from "next/image";
import Button from "./UI/Button";

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="relative">
      <div className="relative w-full overflow-hidden text-white md:h-[720px]">
        {width < 426 ? (
          <div className="relative flex">
            <Image
              src={"/home/mobile/image-hero-paramour.jpg"}
              alt="hero"
              width={375}
              height={560}
              className="h-[560px] w-full object-cover"
            />

            <div className=" absolute h-[560px] w-full bg-black bg-opacity-50"></div>

            <div className="absolute z-10 flex flex-col px-6 py-16">
              <h1 className="z-20 text-6xl font-semibold capitalize md:text-8xl">
                project
                <br /> paramour
              </h1>
              <p className="z-20 mt-4 md:w-3/4 md:text-lg">
                Project made for an art museum near Southwest London. Project
                Paramour is a statement of bold, modern architecture.
              </p>

              <Button
                classname="z-20 mt-16 px-8 justify-center w-[252px] h-[72px] capitalize bg-dark-blue gap-4"
                children="see our portfolio"
                icon={true}
                hover={true}
                active={true}
                navigateTo="/portfolio"
              />
            </div>
          </div>
        ) : (
          <div id="carousel" className="absolute inset-0 flex">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 px-6 py-16 transition-transform duration-200 ease-in-out md:px-12 md:py-24 xl:px-40 ${
                  activeIndex === index
                    ? "translate-x-0 transform"
                    : "translate-x-full transform"
                }`}
              >
                {item.content}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="absolute -left-20 bottom-0 hidden xl:flex">
        {items.map((_, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex h-20 w-20 items-center justify-center p-2 font-bold ${
              activeIndex === index
                ? "bg-dark-blue text-white"
                : "bg-white text-medium-gray hover:bg-light-gray active:bg-dark-blue"
            }`}
          >
            {(index + 1).toString().padStart(2, "0")}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
