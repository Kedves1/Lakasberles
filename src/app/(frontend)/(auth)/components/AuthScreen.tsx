"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";

const AuthScreen = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "w-full max-w-[500px] h-fit rounded-xl bg-main/20 text-white absolute right-40 transition-all ease-linear backdrop-blur-[4px] ",
        {
          "right-[calc(100%-650px)]": pathname !== "/login",
        }
      )}
    >
      {children}
    </div>
  );
};

export default AuthScreen;
