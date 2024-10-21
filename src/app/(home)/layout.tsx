import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "./components/Navbar";

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
    <div className="pt-[125px] w-full h-full">
      <Navbar />
      {children}
    </div>
  );
}
