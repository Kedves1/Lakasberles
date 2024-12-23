import { categories, countries } from "@/app/config";
import React from "react";

type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
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

  ventelation === "on" ? (ventelation = "Igen") : (ventelation = undefined);
  incountry === "true" ? (incountry = "Igen") : (incountry = undefined);

  return (
    <main className="pt-[125px]">
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
    </main>
  );
};

export default Page;
