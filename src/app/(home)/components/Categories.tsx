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
      Name: "Nyaralók",
      Icon: FilterIcon,
      Route: "/",
    },
    {
      Name: "Nyaralók",
      Icon: FilterIcon,
      Route: "/",
    },
    {
      Name: "Nyaralók",
      Icon: FilterIcon,
      Route: "/",
    },
    {
      Name: "Nyaralók",
      Icon: FilterIcon,
      Route: "/",
    },
    {
      Name: "Nyaralók",
      Icon: FilterIcon,
      Route: "/",
    },
  ];

  return (
    <div className="w-full bg-white py-3 lg:px-10 border-b-[1px] border-b-black/20 flex lg:gap-7 gap-10">
      {Categories.map((category, i) => {
        return (
          <div className="" key={i}>
            <Link href={category.Route} className="flex gap-2 items-center">
              <div className="flex-shrink-0">
                <Image
                  src={category.Icon}
                  alt={category.Name}
                  width={25}
                  height={25}
                />
              </div>
              <div className="">{category.Name}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
