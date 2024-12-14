"use client";
import React from "react";
import { categories } from "@/app/config";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const Categories = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const replaceCategory = (categoryRoute: string) => {
    // router.replace(`/search?category=${categoryRoute}&${searchParams}`);
    params.set("category", categoryRoute);
    return router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="w-full min-w-[2000px] bg-main/70 h-[50px] items-center flex-shrink-0 flex-grow-0 backdrop-blur-sm py-3 max-lg:px-2 px-10 border-b-[1px]  shadow-sm shadow-black/20 fixed top-[80px] z-50 overflow-clip border-b-black/20 flex gap-4">
      {categories.map((category, i) => {
        return (
          <div key={i}>
            <button
              className="flex flex-shrink-0 gap-1 items-center focus:ring-highlight/80 rounded-xl cursor-pointer focus:ring-4 focus:outline-none"
              onClick={() => replaceCategory(category.Route)}
            >
              <div className="flex-shrink-0">
                <category.Icon size={20} />
              </div>
              <div className="flex-shrink-0 text-sm">{category.Name}</div>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
