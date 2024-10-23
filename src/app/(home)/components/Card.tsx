import React from "react";
import Carousel from "./Carousel";

function Card({
  distance,
  price,
  owner,
  pictures,
  owner_uuid,
}: {
  distance: number;
  price: string;
  owner: string;
  pictures: string[];
  owner_uuid: string;
}) {
  return (
    <div className="w-full max-w-[280px] pt-1 h-[350px] bg-white rounded-xl px-1 shadow-sm shadow-black/20">
      <Carousel pictures={pictures} owner_uuid={owner_uuid} />
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
