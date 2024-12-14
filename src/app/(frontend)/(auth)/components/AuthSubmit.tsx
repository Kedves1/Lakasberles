import { cn } from "@/lib/utils";
import React, { ButtonHTMLAttributes } from "react";

const AuthSubmit = (
  props?: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type">
) => {
  const { className, ...rest } = props || {};
  return (
    <button
      {...rest}
      type="submit"
      className={cn(
        "bg-highlight cursor-pointer block my-5  select-none h-10 px-4 text-xl rounded-xl hover:bg-hover transition-all duration-75 focus:ring-4 focus:outline-0 focus:ring-highlight",
        className
      )}
    >
      Beküldés
    </button>
  );
};

export default AuthSubmit;
