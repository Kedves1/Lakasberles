import { categories, countries } from "@/config";
import React from "react";

interface SearchParams {
  country?: string;
  roomnum?: string;
  bathnum?: string;
  rating?: string;
  ventelation?: string;
  price?: string;
  category?: string;
  incountry?: string;
}

const page = async (props: { searchParams: SearchParams }) => {
  let {
    country,
    roomnum,
    bathnum,
    rating,
    ventelation,
    price,
    category,
    incountry,
  } = await props.searchParams;

  countries.map((c) => {
    if (c.value == country) {
      country = c.label;
    }
  });
  categories.map((c) => {
    if (c.Route == category) {
      category = c.Name;
    }
  });

  ventelation === "on" ? (ventelation = "Igen") : (ventelation = undefined);
  incountry === "true" ? (incountry = "Igen") : (incountry = undefined);

  return (
    <>
      <div className="w-full mt-10 max-w-[1800px] mx-auto border-b-main border-b-[5px] flex gap-16 items-end">
        <div className="text-3xl">Szűrők</div>
        <div className="flex gap-5 relative text-slate-400">
          {country && <div>Ország: {country}</div>}
          {roomnum && <div>Szoba szám: {roomnum}</div>}
          {bathnum && <div>Fürdő szám: {bathnum}</div>}
          {rating && (
            <div className="absolute left-[calc(100%+20px)] bottom-0 w-[200px]">
              Értékelés: {rating}{" "}
              <span className="text-yellow-300 text-xl">&#9733;</span>
            </div>
          )}
          {ventelation && <div>Klíma: {ventelation}</div>}
          {category && <div>Kategória: {category}</div>}
          {price && <div>Ár: {price}</div>}
        </div>
      </div>
    </>
  );
};

export default page;
