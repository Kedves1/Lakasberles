"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const LogoutBtn = () => {
  const router = useRouter();
  const logout = async () => {
    await fetch("/api/customers/logout", {
      method: "POST",
      credentials: "include",
    });
    router.push("/login");
  };
  return (
    <button
      onClick={() => logout()}
      className="flex items-center gap-4 text-red-600 p-2 w-full hover:bg-black/10 transition-all duration-75 rounded-xl cursor-pointer"
    >
      <LogOut /> Kijelentkezés
    </button>
  );
};

export default LogoutBtn;
