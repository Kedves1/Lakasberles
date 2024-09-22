import Image from "next/image";
import React from "react";
import languange from "@/img/languange.svg";
import { cn } from "@/lib/utils";
import Link from "next/link";
import housepic from "@/img/house.svg";
import Categories from "./Categories";

function Navbar({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const incountry = (searchParams?.incountry || "true") === "true";

  const categories = [
    {
      name: "Ház1",
      picture: housepic,
    },
    {
      name: "Ház2",
      picture: housepic,
    },
    {
      name: "Ház3",
      picture: housepic,
    },
    {
      name: "Ház4",
      picture: housepic,
    },
    {
      name: "Ház5",
      picture: housepic,
    },
    {
      name: "Ház6",
      picture: housepic,
    },
  ];

  return (
    <header className="w-full py-3 bg-secondary flex justify-between lg:px-10 items-center flex-wrap relative">
      <div className="max-lg:m-auto max-lg:my-10">
        <span className="text-3xl font-extralight">Levegő BéEnBé</span>
      </div>
      <div className="flex w-[98%] max-lg:m-auto max-w-[500px] h-[50px] lg:relative rounded-xl">
        <input
          type="text"
          id="search"
          placeholder="Keresés"
          className="px-5 py-2 w-[400px] rounded-ss-xl rounded-es-xl focus:outline-none text-xl focus:ring-4 placeholder:font-thin"
        />
        <Categories categories={categories} />
      </div>
      <div className="flex max-lg:w-full justify-between gap-20 max-lg:m-auto">
        <div className="flex gap-5 max-lg:m-auto max-lg:mt-5 max-lg:mb-20">
          <Link href={"?incountry=true"} tabIndex={-1}>
            <button
              className={cn(
                "h-[50px] bg-third rounded-ss-xl rounded-es-xl px-5 focus:ring-4 focus:outline-none",
                {
                  "bg-[#f5ebe065] pointer-events-none": incountry,
                }
              )}
            >
              Országon Belül
            </button>
          </Link>
          <Link href={"?incountry=false"} tabIndex={-1}>
            <button
              className={cn(
                "h-[50px] bg-third rounded-se-xl rounded-ee-xl px-5 focus:ring-4 focus:outline-none",
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
          <button className="rounded-xl">
            <Image src={languange} alt="languange" width={30} height={30} />
          </button>
          <button className="text-xl h-[40px] bg-third px-5 rounded-xl focus:ring-4 focus:outline-none">
            Bejelentkezés
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
