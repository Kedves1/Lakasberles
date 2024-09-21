import React from "react";
import Carousel from "./Carousel";

function Card({
  distance,
  price,
  owner,
  pictures,
}: {
  distance: number;
  price: number;
  owner: string;
  pictures: string[];
}) {
  return (
    <div className="w-full max-w-[280px] pt-1 h-[400px] bg-secondary rounded-xl px-1 shadow-sm shadow-black">
      <Carousel pictures={pictures} />
      <div className="w-[85%] m-auto bg-third h-[100px] mt-6 rounded-xl flex justify-center items-center flex-col">
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
        <button className="text-lg h-[40px] bg-third px-5 rounded-xl focus:ring-4 focus:outline-none hover:bg-[#f5ebe0ab] transition-all ease-in-out duration-75">
          További információk
        </button>
      </div>
    </div>
  );
}

export default Card;
