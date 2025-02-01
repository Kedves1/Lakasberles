"use client";
import React from "react";
import { categories } from "@/app/config";
import { useRouter, useSearchParams } from "next/navigation";

import {
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "../../../components/ui/Carousel";

const Categories = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const replaceCategory = (categoryRoute: string) => {
    params.set("category", categoryRoute);
    return router.push(`/search?${params.toString()}`);
  };
  return (
    <div className="w-full bg-main/70 h-[50px] backdrop-blur-sm border-b-[1px] z-50 shadow-sm shadow-black/20 fixed top-[80px] border-b-black/20">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          watchDrag: true,
          slidesToScroll: 10,
        }}
        className="h-full mx-auto w-[93%]"
      >
        <CarouselContent className="h-full">
          {categories.map((category, i) => {
            return (
              <CarouselItem
                key={i}
                className="basis-1/11 h-[50px] flex items-center justify-center gap-0"
              >
                <button
                  className="flex flex-shrink-0 gap-1 items-center focus:ring-highlight/80 rounded-xl cursor-pointer focus:ring-4 focus:outline-none"
                  onClick={() => replaceCategory(category.Route)}
                >
                  <category.Icon size={20} />
                  {category.Name}
                </button>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Categories;
