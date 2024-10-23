"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const CountryButton = () => {
  const searchParams = useSearchParams();
  const incountry = (searchParams.get("incountry") || "true") === "true";
  return (
    <div className="flex gap-5 max-lg:hidden">
      <Link
        href={"?incountry=true"}
        tabIndex={-1}
        className={cn({ "pointer-events-none cursor-default": incountry })}
      >
        <button
          className={cn(
            "h-[50px] bg-highlight rounded-ss-xl rounded-es-xl text-sm px-5 focus:ring-4 focus:outline-none",
            {
              "bg-defused pointer-events-none cursor-default": incountry,
            }
          )}
        >
          Országon Belül
        </button>
      </Link>
      <Link
        href={"?incountry=false"}
        tabIndex={-1}
        className={cn({ "pointer-events-none cursor-default": !incountry })}
      >
        <button
          className={cn(
            "h-[50px] bg-highlight rounded-se-xl rounded-ee-xl text-sm px-5 focus:ring-4 focus:outline-none",
            {
              "bg-defused pointer-events-none": !incountry,
            }
          )}
        >
          Országon Kívül
        </button>
      </Link>
    </div>
  );
};

export default CountryButton;
