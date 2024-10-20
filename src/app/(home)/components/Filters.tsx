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
  logout,
}: {
  categories: category[];
  session: any;
  logout: any;
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
        {session ? (
          <div className="lg:hidden">
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
        {/* <div className="text-4xl w-full border-b-4 border-b-black pb-2 mb-10">
          Kategóriák
        </div>
        <div className="flex flex-wrap w-full gap-5">
          {categories.map((category: category) => {
            return (
              <div className="size-32 bg-gray-600 relative" key={category.name}>
                <Image src={category.picture} alt={category.name} fill />
                <div className="w-full h-10 bg-black/70 text-white flex justify-center items-center text-2xl absolute bottom-0">
                  {category.name}
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    </>
  );
};

export default Filters;
