import type { Metadata } from "next";
import "@/app/(frontend)/globals.css";
import Navbar from "./components/Navbar";
import "./home.css";
import HelpDesk from "./components/HelpDesk";
import Categories from "./components/Categories";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Levegő BéEnBé",
  description:
    "Bérelj lakásokat, házakat, nyarólakt blahblah idk majd valaki ide rak vmit, i hope",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense>
      <div className="pt-[125px] w-full h-full min-w-[300px]">
        <Navbar />
        <Categories />
        {children}
        <HelpDesk />
      </div>
    </Suspense>
  );
}
