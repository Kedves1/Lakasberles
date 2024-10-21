"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Filtericon from "@/img/Filter.svg";
import Image from "next/image";
import Link from "next/link";
import LogoutButton from "@/app/(auth)/login/components/LogoutButton";

const Filters = ({ session }: { session: any }) => {
  const [IsCategoryOpen, ToggleCategoryOpen] = useState(false);

  const ToggleCategory = () => {
    ToggleCategoryOpen(!IsCategoryOpen);
  };
  return (
    <>
      <button
        className={cn(
          "rounded-se-xl rounded-ee-xl w-1/3 hover:bg-hover max-w-[80px] h-full bg-highlight flex gap-2 flex-col items-center justify-center focus:ring-4 focus:outline-0 flex-shrink-0 flex-grow-0",
          { "gap-0": IsCategoryOpen }
        )}
        onClick={ToggleCategory}
        aria-label="Category menu"
      >
        <Image
          src={Filtericon}
          alt="filter"
          className=" invert-[97%] select-none "
          draggable="false"
        />
      </button>
      {/* Container for pop up */}
      <div
        className={cn(
          "h-[320px] p-5 bg-white rounded-xl shadow-sm shadow-black absolute bottom-[-160px] left-[100px] duration-[400ms] transition-all ease-in-out scale-0 w-[600px] z-50",
          {
            " scale-100 bottom-[-325px] left-[100px]  max-md:left-0 max-md:w-full":
              IsCategoryOpen,
          }
        )}
      >
        <div className="flex justify-between flex-col h-full">
          <div className="">
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
            <div className="flex justify-between">
              <div className="flex flex-col w-fit">
                <label htmlFor="rating" className="text-xl">
                  Értékelés
                </label>
                <div className="flex gap-2">
                  <input type="radio" name="rating" id="rating" />
                  <input type="radio" name="rating" id="rating" />
                  <input type="radio" name="rating" id="rating" />
                  <input type="radio" name="rating" id="rating" />
                  <input type="radio" name="rating" id="rating" />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="airconditioning" className="text-xl">
                  Klíma
                </label>
                <div className="flex">
                  <input
                    type="radio"
                    name="airconditioning"
                    id="airconditioning"
                  />
                  <input
                    type="radio"
                    name="airconditioning"
                    id="airconditioning"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full bg-defused h-1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
