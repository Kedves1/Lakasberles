import React from "react";
import Carousel from "./Carousel";
import { Customer, Housepic } from "@/payload-types";

function Card({
  distance,
  price,
  owner,
  pictures,
}: {
  distance: number;
  price: number;
  owner: string;
  pictures: {
    pictures: string | Housepic;
    id?: string | null;
  }[];
}) {
  return (
    <div className="w-full max-w-[280px] pt-1 h-[350px] bg-main rounded-xl px-1 shadow-sm shadow-black/20">
      <Carousel pictures={pictures} />
      <div className="w-[85%] m-auto bg-background h-[100px] mt-6 rounded-xl flex justify-center items-center flex-col">
        <div className="text-xl">
          {distance} km
          <span className="text-[12px] text-slate-600">-re tőled</span>
        </div>
        <div className="text-xl">
          {price} Ft{" "}
          <span className="text-[12px] text-slate-600">/ Éjszaka</span>
        </div>
        <div className="text-xl">{owner}</div>
      </div>
      <div className="w-full flex justify-center mt-4">
        <button className="text-lg h-[40px] bg-highlight px-5 rounded-xl focus:ring-4 focus:outline-none hover:bg-hover transition-all ease-in-out duration-75">
          További információk
        </button>
      </div>
    </div>
  );
}

export default Card;
