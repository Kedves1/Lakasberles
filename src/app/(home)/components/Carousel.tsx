"use client";

import Image from "next/image";
import React, { useState } from "react";

function Carousel({ pictures }: { pictures: string[] }) {
  const [picNum, SetPicNum] = useState(0);

  return (
    <div className="w-full h-[150px] relative rounded-xl flex flex-shrink-0 flex-grow-0 overflow-hidden">
      {pictures.map((picture: string, i: number) => {
        return (
          <Image
            src={picture}
            className="w-full h-full rounded-xl object-cover flex-shrink-0 flex-grow-0 transition-all ease-in-out duration-300"
            alt="housepic"
            key={i}
            style={{ transform: `translatex(${-272 * picNum}px)` }}
          />
        );
      })}
      <div className="absolute w-full flex h-full justify-between items-center top-0 z-40">
        <div
          className=" text-white text-3xl h-full flex justify-center items-center w-10 rounded-ss-xl rounded-es-xl peer transition-all duration-75 select-none cursor-pointer hover:bg-black/80 peer-hover:bg-black/80"
          onClick={() => {
            if (picNum <= 0) return;
            SetPicNum(picNum - 1);
          }}
        >
          {"<"}
        </div>
        <div
          className=" text-white text-3xl h-full flex justify-center items-center w-10 rounded-se-xl rounded-ee-xl transition-all duration-75 select-none cursor-pointer hover:bg-black/80 peer"
          onClick={() => {
            if (picNum >= pictures.length - 1) return;
            SetPicNum(picNum + 1);
          }}
        >
          {">"}
        </div>
      </div>
      <div className="flex absolute w-full gap-3 h-full justify-center items-end pb-3">
        {pictures.map((_, i) => {
          if (i == picNum) {
            return (
              <div
                className="bg-black rounded-full size-4 transition-all ease-in-out duration-75"
                key={i}
              ></div>
            );
          }
          return (
            <div
              className="bg-black/30 rounded-full size-4 transition-all ease-in-out duration-75"
              key={i}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
