import Image from "next/image";
import React from "react";
import languange from "@/img/languange.svg";
import { cn } from "@/lib/utils";
import Link from "next/link";
import housepic from "@/img/house.svg";
import Filters from "./Filters";
import { getSession } from "../login/CookieHandler";

async function Navbar({
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
  const session = await getSession();

  return (
    <header className="w-[100dvw] py-3 bg-white border-b-[1px] border-b-black/20 flex justify-between px-1 lg:px-10 items-center relative">
      <div className="flex items-center gap-4 flex-shrink-0">
        <Image
          src="/icon.png"
          alt="logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <span className="text-3xl font-extralight max-xl:hidden">
          Levegő <span className="text-highlight">BéEnBé</span>
        </span>
      </div>
      <div className="flex max-sm:w-[200px] w-[500px] h-[50px] lg:relative rounded-xl">
        <input
          type="text"
          id="search"
          placeholder="Keresés"
          className="px-5 py-2 w-2/3 rounded-ss-xl rounded-es-xl focus:outline-none text-xl focus:ring-4 placeholder:font-thin border-[1px] border-black/20 border-r-0"
        />
        <Filters categories={categories} />
      </div>
      <div className="flex justify-between gap-20">
        <div className="flex gap-5 max-lg:hidden">
          <Link href={"?incountry=true"} tabIndex={-1}>
            <button
              className={cn(
                "h-[50px] bg-highlight rounded-ss-xl rounded-es-xl px-5 focus:ring-4 focus:outline-none",
                {
                  "bg-defused pointer-events-none": incountry,
                }
              )}
            >
              Országon Belül
            </button>
          </Link>
          <Link href={"?incountry=false"} tabIndex={-1}>
            <button
              className={cn(
                "h-[50px] bg-highlight rounded-se-xl rounded-ee-xl px-5 focus:ring-4 focus:outline-none",
                {
                  "bg-defused pointer-events-none": !incountry,
                }
              )}
            >
              Országon Kívül
            </button>
          </Link>
        </div>
        <div className="flex gap-5 items-center flex-shrink-0">
          <button className="rounded-xl">
            <Image
              src={languange}
              alt="languange"
              width={30}
              height={30}
              className="flex-shrink-0 flex-grow-0"
            />
          </button>
          {session ? (
            <div className="">{session.user.username}</div>
          ) : (
            <Link href={"/login"}>
              <button className="text-xl h-[40px] bg-highlight px-5 rounded-xl focus:ring-4 focus:outline-none max-lg:hidden">
                Bejelentkezés
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
