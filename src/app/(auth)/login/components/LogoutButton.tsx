"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { logout } from "../CookieHandler";

const LogoutButton = ({ className }: { className: string }) => {
  return (
    <button
      className={cn(
        "text-xl h-[40px] bg-highlight px-5 rounded-xl focus:ring-4 focus:outline-none",
        className
      )}
      onClick={() => logout()}
    >
      Kijelentkezés
    </button>
  );
};

export default LogoutButton;
