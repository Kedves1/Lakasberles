import React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { cn } from "@/lib/utils";
import Image from "next/image";
const Bubble = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  let isLogin = true;
  if (searchParams?.forms == "login") {
    isLogin = true;
  } else if (searchParams?.forms == "register") {
    isLogin = false;
  }
  return (
    <div className="w-full h-full flex items-center lg:px-32 justify-end relative">
      <div
        className={cn(
          "shadow-md shadow-black/80 w-[600px] h-[800px] rounded-xl transition-all duration-300 ease-in-out bg-white/60",
          {
            "lg:translate-x-[-50%]  xl:translate-x-[-80%] 2xl:translate-x-[-130%] min-[1800px]:translate-x-[-170%] ":
              !isLogin,
            "lg:translate-x-0": isLogin,
          }
        )}
      >
        <div className="">
          <Image
            src={"/icon.png"}
            alt="logo"
            width={200}
            height={200}
            className="mx-auto mt-10"
          />
        </div>
        {isLogin ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
};

export default Bubble;
