"use client";

import React, { Fragment, useState } from "react";
import Image from "next/image";
import { Slider } from "@/app/(frontend)/components/ui/Slider";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/(frontend)/components/ui/Popover";
import Combobox from "./Combobox";
import { Switch } from "@/app/(frontend)/components/ui/Switch";
import Form from "next/form";
import { useRouter, useSearchParams } from "next/navigation";
import Account from "@/app/(frontend)/components/Account";
import { SlidersHorizontal } from "lucide-react";

const Filters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const [sliderValue, setSliderValue] = useState<number[]>([]);
  const addFilters = (FormData: FormData) => {
    const country = FormData.get("country");
    const roomnum = FormData.get("roomnum");
    const bathnum = FormData.get("bathnum");
    const rating = FormData.get("rating");
    const price = FormData.get("price");
    const ventelation = FormData.get("ventelation");

    country
      ? params.set("country", country as string)
      : params.delete("country");
    roomnum
      ? params.set("roomnum", roomnum as string)
      : params.delete("roomnum");
    bathnum
      ? params.set("bathnum", bathnum as string)
      : params.delete("bathnum");
    rating ? params.set("rating", rating as string) : params.delete("rating");
    ventelation
      ? params.set("ventelation", ventelation as string)
      : params.delete("ventelation");
    price != "0"
      ? params.set("price", price as string)
      : params.delete("price");

    router.push(`/search?${params.toString()}`);
  };

  return (
    <>
      <Popover>
        <PopoverTrigger
          aria-label="Category menu"
          className="rounded-se-xl cursor-pointer rounded-ee-xl w-1/3 hover:bg-hover max-w-[80px] h-full bg-highlight flex items-center justify-center flex-shrink-0 flex-grow-0"
        >
          <SlidersHorizontal color="white" />
        </PopoverTrigger>
        <PopoverContent className="bg-main z-[999] h-[340px]  w-screen max-w-[620px] md:p-10 rounded-xl">
          <Form action={addFilters} type="" className="h-full w-full">
            <div className="flex justify-between flex-col h-full w-full">
              <div className="flex flex-col gap-5 ">
                <div className="flex justify-between">
                  <div className="lg:hidden">
                    <Account />
                  </div>
                  <div className="">
                    <button className="bg-highlight text-slate-800 px-5 rounded-xl py-2 cursor-pointer">
                      Szűrés
                    </button>
                  </div>
                </div>
                <div className="flex gap-x-10  flex-wrap">
                  <div className="flex flex-col flex-shrink-0 w-fit">
                    <div className="text-xl">Ország</div>
                    <Combobox />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="roomnum" className="text-xl">
                      Szoba szám
                    </label>
                    <input
                      type="number"
                      name="roomnum"
                      id="roomnum"
                      className="bg-background rounded-xl w-32 pl-4 h-[40px] font-medium"
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
                      className="bg-background rounded-xl w-32 pl-4 h-[40px] font-medium"
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col w-fit">
                    <label htmlFor="rating" className="text-xl">
                      Értékelés
                    </label>
                    <div className="flex -translate-y-2 flex-row-reverse gap-1">
                      {new Array(5).fill(0).map((_, i) => {
                        return (
                          <Fragment key={i}>
                            <input
                              id={`rating-${5 - i}`}
                              className="peer/star hidden"
                              type="radio"
                              name="rating"
                              value={5 - i}
                            />
                            <label
                              htmlFor={`rating-${5 - i}`}
                              className="peer-checked/star:text-yellow-300 peer-hover/star:text-yellow-300 peer-hover/star:after:content-['\2605'] text-4xl select-none cursor-pointer after:content-['\2606'] peer-checked/star:after:content-['\2605']"
                              draggable="false"
                            ></label>
                          </Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex gap-1 flex-col">
                    <label htmlFor="airconditioning" className="text-xl">
                      Klíma
                    </label>
                    <div className="">
                      <Switch name="ventelation" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <Slider
                  defaultValue={[0]}
                  max={100}
                  value={[sliderValue[0] / 10000 || 0]}
                  onValueChange={(v) => setSliderValue([v[0] * 10000])}
                  className="cursor-pointer"
                  step={1}
                  name="price"
                />
              </div>
            </div>
          </Form>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default Filters;
