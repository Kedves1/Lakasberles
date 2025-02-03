"use client";

import { Housepic } from "@/payload-types";

import {
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "../../../components/ui/Carousel";
import Image from "next/image";

type CarouselProps = {
  pictures: {
    pictures: string | Housepic;
    id?: string | null;
  }[];
};

function CardCarousel({ pictures }: CarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        slidesToScroll: 1,
        watchDrag: false,
      }}
      className="w-[100%] rounded-xl"
    >
      <CarouselContent className="">
        {pictures.map((pic, i) => {
          return (
            <CarouselItem key={i} className="lg:basis-1/1">
              <div className="h-40 w-full relative">
                <Image
                  src={(pic.pictures as Housepic).url!}
                  alt="housepic"
                  fill
                  className="rounded-xl"
                />
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="left-3 bg-white/30 backdrop-blur-md border-0 cursor-pointer" />
      <CarouselNext className="right-3 bg-white/30 backdrop-blur-md border-0 cursor-pointer" />
    </Carousel>
  );
}

export default CardCarousel;
