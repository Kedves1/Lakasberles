import type { Metadata } from "next";
import Header from "./components/header/Header";
import HelpDesk from "../components/HelpDesk";

export const metadata: Metadata = {
  title: "Levegő BéEnBé | Főoldal",
  description:
    "Bérelj lakásokat, házakat, nyarólakt blahblah idk majd valaki ide rak vmit, i hope",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <HelpDesk />
    </>
  );
}
