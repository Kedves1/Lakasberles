import React from "react";
import CardCarousel from "./CardCarousel";
import { House } from "@/payload-types";
import Link from "next/link";
import { Star } from "lucide-react";
import { countries } from "@/app/config";

function HouseCard({ house }: { house: House }) {
  let houseCountry = "";
  countries.map((country) => {
    if (house.country === country.value) {
      houseCountry = country.label;
    }
  });

  return (
    <div className="w-full max-w-72 m-1 rounded-xl transition-all ease-in-out">
      <CardCarousel pictures={house.housepics!} />
      <Link href={`/house/${house.id}`}>
        <div className="flex justify-between">
          <div className="flex mt-1 ml-1 text-[1.3rem] justify-center">
            <Star fill="#ebc351" color="#ebc351" />
            {house.rating}
          </div>
          <div className="flex flex-col gap-2 items-end text-gray-600 text-[1.1rem] pr-2 pt-1">
            <div className="text-[1.3rem] font-semibold text-black">
              {house.name}
            </div>
            <div className="">
              {house.price} Ft <span className="text-[12px]">/ Éjszaka</span>
            </div>
            <div className="">{houseCountry}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default HouseCard;
