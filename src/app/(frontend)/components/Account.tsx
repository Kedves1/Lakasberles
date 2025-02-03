"use client";

import { useQuery } from "@tanstack/react-query";
import LogoutBtn from "./LogoutBtn";
import Link from "next/link";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/(frontend)/components/ui/Popover";
import { Settings } from "lucide-react";
import { Skeleton } from "./ui/Skeleton";

const showUser = async () => {
  const res = await fetch("/api/customers/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
};

const Account = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: showUser,
  });

  if (isLoading) return <Skeleton className="w-[50px] h-[50px] rounded-full" />;
  if (error) return <div>Error: {error.message}</div>;
  if (!data.user) {
    return (
      <Link href={"/login"}>
        <button className="text-sm h-[40px] cursor-pointer bg-highlight px-5 rounded-xl">
          Bejelentkezés
        </button>
      </Link>
    );
  }
  return (
    <Popover>
      <PopoverTrigger className="cursor-pointer">
        <Image
          src={data.user.picture.url}
          alt={`${data.user.username} pfp`}
          width={50}
          height={50}
          className="rounded-full aspect-square"
        />
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 rounded-xl">
        <div className="">
          <Link
            href={"/settings"}
            className="flex items-center gap-4 hover:bg-black/10 transition-all duration-75 rounded-xl p-2 w-full"
          >
            <Settings size={20} />
            Beállítások
          </Link>
        </div>
        <div className="">
          <LogoutBtn />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Account;
