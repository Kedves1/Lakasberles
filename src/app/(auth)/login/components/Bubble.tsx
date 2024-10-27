import React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
const Bubble = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const form = searchParams?.forms;
  const isLogin = form ? form === "login" : true;
  return (
    <div className="w-full h-full flex items-center relative flex-shrink-0">
      <div
        className={cn(
          "shadow-md shadow-black/80 border-[4px]  border-white/20 flex-shrink-0 max-[600px]:bottom-0 max-[600px]:w-full w-full max-w-[600px]  pb-3 h-full max-h-fit  rounded-xl transition-all absolute min-[800px]:right-[100px] duration-300 ease-in-out bg-white/[0.10] text-white backdrop-blur-[6px] min-[600px]:overflow-y-scroll",
          { "min-[800px]:!right-[calc(100%-700px)]": !isLogin }
        )}
      >
        <div className="absolute min-[600px]:hidden top-[-54px] flex justify-between w-full px-2 flex-shrink-0  h-[50px] z-[99999]">
          <Link
            href={"/login?forms=register"}
            className={cn("MobileSwitchButton", {
              "-translate-y-4": isLogin,
              "!border-b-0 !rounded-b-none": !isLogin,
            })}
          >
            Regisztráció
          </Link>
          <Link
            href={"/login?forms=login"}
            className={cn("MobileSwitchButton", {
              "-translate-y-4": !isLogin,
              "!border-b-0 !rounded-b-none": isLogin,
            })}
          >
            Bejelentkezés
          </Link>
        </div>
        <div className="">
          <Image
            src={"/icon.png"}
            alt="logo"
            width={250}
            height={250}
            className="mx-auto mt-10 select-none max-[600px]:hidden"
            draggable="false"
            priority
          />
        </div>
        {isLogin ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
};

export default Bubble;
