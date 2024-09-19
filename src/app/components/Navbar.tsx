"use client";

import Image from "next/image";
import React, { useState } from "react";
import languange from "@/img/languange.svg";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function Navbar() {
  const searchParams = useSearchParams();
  const incountry = (searchParams.get("incountry") || "true") === "true";
  let [IsCategoryOpen, ToggleCategoryOpen] = useState(false);

  const ToggleCategory = () => {
    ToggleCategoryOpen(!IsCategoryOpen);
  };

  const categories = [
    {
      name: "Ház",
      picture: "",
    },
    {
      name: "Ház",
      picture: "",
    },
    {
      name: "Ház",
      picture: "",
    },
    {
      name: "Ház",
      picture: "",
    },
    {
      name: "Ház",
      picture: "",
    },
    {
      name: "Ház",
      picture: "",
    },
  ];

  return (
    <header className="w-full max-lg:py-10 lg:h-20 bg-secondary flex justify-between lg:px-10 items-center flex-wrap relative">
      <div className="max-lg:m-auto max-lg:my-10">
        <img />
        <span className="text-3xl">Levegő BéEnBé</span>
      </div>
      <div className="flex w-[98%] max-lg:m-auto max-w-[500px] h-[50px] relative">
        <input
          type="text"
          id="search"
          placeholder="Keresés"
          className="px-5 py-2 w-[400px] rounded-ss-xl rounded-es-xl focus:outline-none text-2xl"
        />
        <button
          className="rounded-se-xl rounded-ee-xl w-[100px] h-full bg-third flex gap-2 flex-col items-center justify-center"
          onClick={ToggleCategory}
        >
          <div className="h-[1px] w-1/3 bg-black"></div>
          <div className="h-[1px] w-1/3 bg-black"></div>
          <div className="h-[1px] w-1/3 bg-black"></div>
        </button>
        <div
          className={cn(
            "h-[500px] p-5 bg-third rounded-xl shadow-sm shadow-black absolute bottom-[-200px] left-[50px] duration-500 transition-all ease-in-out scale-0 w-[800px]",
            {
              " scale-100 bottom-[-510px] left-[100px]": IsCategoryOpen,
            }
          )}
        >
          <div className="text-4xl w-full border-b-4 border-b-black pb-2 mb-10">
            Kategóriák
          </div>
          <div className="flex flex-wrap w-full gap-5">
            {categories.map((category) => {
              return (
                <div
                  className="size-32 bg-gray-600 relative"
                  key={category.name}
                >
                  <Image src={category.picture} alt={category.name} />
                  <div className="w-full h-10 bg-black/70 text-white flex justify-center items-center text-2xl absolute bottom-0">
                    {category.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex gap-5 max-lg:m-auto max-lg:mt-5 max-lg:mb-20">
        <Link href={"?incountry=true"}>
          <button
            className={cn(
              "h-[50px] bg-third rounded-ss-xl rounded-es-xl px-5",
              {
                "bg-[#f5ebe065] pointer-events-none": incountry,
              }
            )}
          >
            Országon Belül
          </button>
        </Link>
        <Link href={"?incountry=false"}>
          <button
            className={cn(
              "h-[50px] bg-third rounded-se-xl rounded-ee-xl px-5",
              {
                "bg-[#f5ebe065] pointer-events-none": !incountry,
              }
            )}
          >
            Országon Kívül
          </button>
        </Link>
      </div>
      <div className="flex gap-5 max-lg:justify-between max-lg:w-full max-lg:absolute max-lg:bottom-3 max-lg:px-2 items-center">
        <span>
          <Image src={languange} alt="languange" width={30} height={30} />
        </span>
        <button className="text-xl h-[40px] bg-third px-5 rounded-xl">
          Bejelentkezés
        </button>
      </div>
    </header>
  );
}

export default Navbar;
