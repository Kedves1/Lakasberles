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
    <div className="w-full h-full flex items-center relative flex-shrink-0 overflow-x-scroll">
      <div
        className={cn(
          "after:shadow-[0px_-12px_20px_5px_rgb(0,0,0)] after:-top-0 z-50 after:-z-10 after:block after:w-full after:h-0 after:absolute border-[4px] border-main/20 bg-main/10 text-secondary max-h-fit h-full min-w-[300px]  w-full max-w-[600px] flex-shrink-0 max-[600px]:bottom-0 min-[800px]:right-[100px]  pb-3 rounded-xl transition-all absolute duration-300 ease-in-out  backdrop-blur-[6px] min-[600px]:overflow-y-scroll",
          { "min-[800px]:!right-[calc(100%-700px)]": !isLogin }
        )}
      >
        <div className="absolute min-[600px]:hidden top-[-64px] flex w-full justify-between px-2 min-[500px]:px-20 flex-shrink-0  h-[50px] -z-20">
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
