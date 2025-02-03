import Account from "@/app/(frontend)/components/Account";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Filters from "./Filters";
import Categories from "./Categories";
import CountryButton from "./CountryButton";

const Header = () => {
  return (
    <>
      <header className="w-full py-3 fixed top-[0] z-[500] bg-main border-b-[1px] border-b-black/20 flex justify-between px-1 lg:px-10 items-center h-[80px]">
        <Link className="flex items-center gap-4 flex-shrink-0" href="/">
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
        </Link>
        <div className="flex max-sm:w-[250px] w-[500px] h-[50px] lg:relative rounded-xl">
          <input
            type="text"
            id="search"
            placeholder="Keresés"
            className="px-5 py-2 w-2/3 rounded-ss-xl rounded-es-xl text-xl placeholder:font-thin border-[1px] border-black/20 border-r-0"
          />
          <Filters />
        </div>
        <div className="flex justify-between gap-20">
          <CountryButton />
          <div className="flex gap-5 items-center flex-shrink-0">
            <div className="h-[50px] flex justify-center items-center">
              <Account />
            </div>
          </div>
        </div>
      </header>
      <Categories />
    </>
  );
};

export default Header;
