import React from "react";
import Carousel from "./Carousel";
import { Housepic } from "@/payload-types";
import Link from "next/link";

function Card({
  id,
  distance,
  price,
  owner,
  pictures,
}: {
  id: string;
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
        <Link
          href={`/house/${id}`}
          className="text-lg h-[40px] grid place-items-center bg-highlight cursor-pointer px-5 rounded-xl focus:ring-4 focus:ring-highlight focus:outline-none hover:bg-hover transition-all ease-in-out duration-75"
        >
          További információk
        </Link>
      </div>
    </div>
  );
}

export default Card;
