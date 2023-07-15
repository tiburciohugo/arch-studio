"use client";
import React from "react";
import Carousel from "../Carousel";
import CarouselContent from "../CarouselContent";
import { CarouselItem } from "@/types/types";

export default function Hero() {
  const items: CarouselItem[] = [
    {
      id: 1,
      content: (
        <CarouselContent
          title={["project", "paramour"]}
          imagePath="/home/desktop/image-hero-paramour.jpg"
          description="Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture."
        />
      ),
    },
    {
      id: 2,
      content: (
        <CarouselContent
          title={["seraph", "station"]}
          imagePath="/home/desktop/image-hero-seraph.jpg"
          description="Description for project 2"
        />
      ),
    },
    {
      id: 3,
      content: (
        <CarouselContent
          title={["federal  ii", "tower"]}
          imagePath="/home/desktop/image-hero-federal.jpg"
          description="Description for project 3"
        />
      ),
    },
    {
      id: 4,
      content: (
        <CarouselContent
          title={["trinity bank", "tower"]}
          imagePath="/home/desktop/image-hero-trinity.jpg"
          description="Description for project 4"
        />
      ),
    },
  ];

  return (
    <div className="relative">
      <Carousel items={items} />
    </div>
  );
}


