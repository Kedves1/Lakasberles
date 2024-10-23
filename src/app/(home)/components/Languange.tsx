"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import languange from "@/img/languange.svg";
import { cn } from "@/lib/utils";
import hungaryFlag from "@/img/Flag_of_Hungary.png";

const Languange = () => {
  const [modal, setModal] = useState(false);

  type languange = {
    name: string;
    flag: StaticImageData;
    preferedCurrency?: string;
  };

  type currency = {
    name: string;
    image: string | StaticImageData;
  };

  const languanges: languange[] = [
    {
      name: "hungary",
      flag: hungaryFlag,
      preferedCurrency: "Ft",
    },
  ];

  const currencies: [currency] = [
    {
      name: "Ft",
      image: "HUF",
    },
  ];

  return (
    <>
      <button className="rounded-xl" onClick={() => setModal(!modal)}>
        <Image
          src={languange}
          alt="languange"
          width={30}
          height={30}
          className="flex-shrink-0 flex-grow-0"
        />
      </button>
      <div
        className={cn(
          "bg-black/40 w-screen h-screen top-0 left-0 scale-0 absolute z-[9999999] grid place-items-center pointer-events-auto",
          { "scale-100": modal }
        )}
        data-modal-open={modal}
        onClick={(e) => {
          if (e.target == e.currentTarget) {
            setModal(false);
          }
        }}
      >
        <div
          className={cn(
            "w-full max-w-[700px] p-5 h-full scale-0 relative z-[9999999999999999] transition-all duration-300 max-h-[500px] bg-white rounded-xl",
            { "scale-100": modal }
          )}
        >
          <div className="w-full flex justify-between items-center border-b-[1px] border-b-black/20">
            <div className="text-3xl">Nyelvek</div>
            <div
              className="select-none p-2 hover:bg-black/[0.05] cursor-pointer rounded-xl transition-all text-2xl"
              draggable="false"
              onClick={() => setModal(false)}
            >
              X
            </div>
          </div>
          <div className="my-5">
            {languanges.map((languange) => {
              return (
                <div
                  className="w-[110px] h-[120px] bg-white shadow-sm shadow-black/20 rounded-xl"
                  key={languange.name}
                >
                  <div className="w-full flex justify-center py-5">
                    <Image
                      src={languange.flag}
                      alt={languange.name}
                      width={90}
                      height={40}
                    />
                  </div>
                  <div className="uppercase font-medium text-center">
                    {languange.name}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full flex items-center border-b-[1px] border-b-black/20">
            <div className="text-3xl pb-1">Pénznemek</div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default Languange;
