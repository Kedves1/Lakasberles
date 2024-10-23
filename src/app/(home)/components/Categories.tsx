import React from "react";
import FilterIcon from "@/img/Filter.svg";
import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  const Categories = [
    {
      Name: "Nyaralók",
      Icon: FilterIcon,
      Route: "/",
    },
    {
      Name: "Lombházak",
      Icon: FilterIcon,
      Route: "/",
    },
    {
      Name: "Kastélyok",
      Icon: FilterIcon,
      Route: "/",
    },
    {
      Name: "Kupolaházak",
      Icon: FilterIcon,
      Route: "/",
    },
    {
      Name: "Kükládi stílus",
      Icon: FilterIcon,
      Route: "/",
    },
    {
      Name: "Háromszög házak",
      Icon: FilterIcon,
      Route: "/",
    },
    {
      Name: "Pályaszállások",
      Icon: FilterIcon,
      Route: "/",
    },
    {
      Name: "Tópart",
      Icon: FilterIcon,
      Route: "/",
    },
    {
      Name: "Villák",
      Icon: FilterIcon,
      Route: "/",
    },
    {
      Name: "Háromszög házak",
      Icon: FilterIcon,
      Route: "/",
    },
    {
      Name: "Gyönyörű kilátás",
      Icon: FilterIcon,
      Route: "/",
    },
    {
      Name: "Lakóhalyók",
      Icon: FilterIcon,
      Route: "/",
    },
  ];

  return (
    <div className="w-full min-w-[2000px] bg-white/70 h-[50px] flex-shrink-0 flex-grow-0 backdrop-blur-sm py-3 max-lg:px-2 px-10 border-b-[1px]  shadow-sm shadow-black/20 fixed top-[75px] z-50 overflow-clip border-b-black/20 flex gap-4">
      {Categories.map((category, i) => {
        return (
          <div className="" key={i}>
            <Link
              href={category.Route}
              className="flex flex-shrink-0 gap-1 items-center focus:ring-4 focus:outline-none"
            >
              <div className="flex-shrink-0">
                <Image
                  src={category.Icon}
                  alt={category.Name}
                  width={25}
                  height={25}
                />
              </div>
              <div className="flex-shrink-0 text-sm">{category.Name}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
