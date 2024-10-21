"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Filtericon from "@/img/Filter.svg";
import Image from "next/image";
import Link from "next/link";
import LogoutButton from "@/app/(auth)/login/components/LogoutButton";

type category = {
  name: string;
  picture: string;
};

const Filters = ({
  categories,
  session,
}: {
  categories: category[];
  session: any;
}) => {
  const [IsCategoryOpen, ToggleCategoryOpen] = useState(false);
  categories.map((e) => {
    return e;
  });
  const ToggleCategory = () => {
    ToggleCategoryOpen(!IsCategoryOpen);
  };
  return (
    <>
      <button
        className={cn(
          "rounded-se-xl rounded-ee-xl w-1/3 max-w-[80px] h-full bg-highlight flex gap-2 flex-col items-center justify-center focus:ring-4 focus:outline-0 flex-shrink-0 flex-grow-0",
          { "gap-0": IsCategoryOpen }
        )}
        onClick={ToggleCategory}
        aria-label="Category menu"
      >
        <Image src={Filtericon} alt="filter" className=" invert-[97%]" />
      </button>
      <div
        className={cn(
          "min-h-[420px] p-5 bg-white rounded-xl shadow-sm shadow-black absolute bottom-[-200px] left-[200px] duration-500 transition-all ease-in-out scale-0 w-full max-w-[800px] z-50 max-lg:left-0",
          {
            " scale-100 bottom-[-450px] left-[100px]": IsCategoryOpen,
          }
        )}
      >
        <div className="flex justify-between">
          <div className="">
            {session ? (
              <div className="lg:hidden flex gap-5">
                {session.user.username}
                <LogoutButton className="lg:hidden" />
              </div>
            ) : (
              <Link href={"/login"}>
                <button className="text-xl h-[40px] bg-highlight px-5 rounded-xl focus:ring-4 focus:outline-none lg:hidden">
                  Bejelentkezés
                </button>
              </Link>
            )}
          </div>
          <div className="">
            <button className="bg-highlight px-5 rounded-xl py-2">
              Filter
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col w-fit">
            <label htmlFor="country" className="text-xl">
              Ország
            </label>
            <select
              name="country"
              id="country"
              className="bg-defused rounded-xl py-3 "
              defaultValue="0"
            >
              <option value="0">Válassz egy országot</option>
              <option value="">Magyarország</option>
              <option value="">Németország</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="roomnum" className="text-xl">
              Szoba szám
            </label>
            <input
              type="number"
              name="roomnum"
              id="roomnum"
              className="bg-defused rounded-xl w-32 pl-2 py-2 text-2xl"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="bathnum" className="text-xl">
              Fürdő szám
            </label>
            <input
              type="number"
              name="bathnum"
              id="bathnum"
              max={10}
              className="bg-defused rounded-xl w-32 pl-2 py-2 text-2xl"
            />
          </div>
        </div>
        {/* <div className="flex justify-between">
          <div className="flex flex-col w-fit">
            <label htmlFor="country" className="text-xl">
              Ország
            </label>
            <select
              name="country"
              id="country"
              className="bg-defused rounded-xl py-3 "
            >
              <option value="0" selected>
                Válassz egy országot
              </option>
              <option value="">Magyarország</option>
              <option value="">Németország</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="bathnum" className="text-xl">
              Fürdő szám
            </label>
            <input
              type="number"
              name="bathnum"
              id="bathnum"
              max={10}
              className="bg-defused rounded-xl w-32 pl-2 py-2 text-2xl"
            />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Filters;
