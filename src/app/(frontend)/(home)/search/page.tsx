import { categories, countries } from "@/app/config";
import React from "react";
import HouseLoader from "../components/HouseLoader";

type SearchParams = Promise<{
  price?: number,
  rating?: number,
  bathnum?: number,
  roomnum?: number,
  country?: string,
  ventelation?: boolean | string,
  category?: string,
  incountry?: boolean | string
}>;

const Page = async (props: { searchParams: SearchParams }) => {
  const params = await props.searchParams;
  const { price, rating, bathnum, roomnum } = params;
  let { country, ventelation, category, incountry } = params;

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

  ventelation === "on" ? (ventelation = true) : (ventelation = undefined);
  incountry === "true" ? (incountry = true) : (incountry = undefined);

  return (
    <main className="pt-[125px] min-h-screen">
      <div className="w-full mt-10 max-w-[1800px] mx-auto flex gap-16 items-end">
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
          {ventelation && <div>Klíma: {ventelation ? "Igen": "Nem"}</div>}
          {category && <div>Kategória: {category}</div>}
          {price && <div>Ár: {price}</div>}
        </div>
      </div>
      <HouseLoader 
        title=""
        carousel={false} 
        country={country}
        price={price}
        rating={rating}
        ventelation={ventelation}
        category={category}
        roomnum={roomnum}
        bathnum={bathnum}
        incountry={incountry}
      />
    </main>
  );
};

export default Page;
