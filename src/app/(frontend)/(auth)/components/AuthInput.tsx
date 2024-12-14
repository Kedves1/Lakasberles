import { cn } from "@/lib/utils";
import React, { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
}

const AuthInput = (props?: AuthInputProps) => {
  const { className, label, error, placeholder, ...rest } = props || {};
  return (
    <div className="">
      {label && (
        <label htmlFor={props?.id} className="text-xl">
          {label}
        </label>
      )}
      <input
        {...rest}
        className={cn(
          "w-full h-12 text-lg bg-main placeholder:text-primary/30 placeholder:select-none placeholder:font-semibold pl-5 rounded-xl text-primary transition-all ease-linear focus:ring-4 focus:ring-highlight focus:outline-none",
          className,
          {
            "focus:ring-red-400 placeholder:text-secondary text-secondary bg-red-950/20":
              error,
          }
        )}
        placeholder={placeholder || "Ide Írjon..."}
      />
      {error && (
        <div className="text-red-400 ml-1 text-xs">{error?.message}</div>
      )}
    </div>
  );
};

export default AuthInput;
