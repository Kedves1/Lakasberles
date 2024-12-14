import type { Metadata } from "next";
import Image from "next/image";
import "@/app/(frontend)/global.css";
import AuthScreen from "./components/AuthScreen";

export const metadata: Metadata = {
  title: "Levegő BéEnBé | Bejelentkezés",
  description:
    "Bérelj lakásokat, házakat, nyarólakt blahblah idk majd valaki ide rak vmit, i hope",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen flex items-center">
      <Image
        src={"/background.svg"}
        fill
        alt="background"
        className={
          "object-cover absolute top-0 -z-50 select-none pointer-events-none"
        }
      />
      <AuthScreen>{children}</AuthScreen>
    </div>
  );
}
