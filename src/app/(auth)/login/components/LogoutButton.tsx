"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { logout } from "../CookieHandler";
import { IoLogOutOutline } from "react-icons/io5";
const LogoutButton = ({ className }: { className: string }) => {
  return (
    <button
      className={cn("text-xl h-[35px] pb-1  rounded-xl", className)}
      style={{
        background: "none",
      }}
      onClick={() => logout()}
    >
      <IoLogOutOutline color="red" size={40} />
    </button>
  );
};

export default LogoutButton;
