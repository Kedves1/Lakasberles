"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const CountryButton = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const pathname = usePathname();
  const incountry = searchParams.get("incountry") === "true";
  return (
    <div className="flex gap-5 max-lg:hidden">
      <button
        onClick={() => {
          params.set("incountry", "true");
          router.push(`${pathname}?${params.toString()}`);
        }}
        className={cn(
          "h-[50px] bg-highlight rounded-ss-xl rounded-es-xl text-sm px-5 focus:ring-4 focus:ring-highlight/80 focus:outline-none cursor-pointer",
          {
            "bg-defused pointer-events-none": incountry,
          }
        )}
      >
        Országon Belül
      </button>

      <button
        onClick={() => {
          params.delete("incountry");
          router.push(`${pathname}?${params.toString()}`);
        }}
        className={cn(
          "h-[50px] bg-highlight rounded-se-xl rounded-ee-xl text-sm px-5 focus:ring-4 focus:ring-highlight/80 focus:outline-none cursor-pointer",
          {
            "bg-defused pointer-events-none": !incountry,
          }
        )}
      >
        Országon Kívül
      </button>
    </div>
  );
};

export default CountryButton;
