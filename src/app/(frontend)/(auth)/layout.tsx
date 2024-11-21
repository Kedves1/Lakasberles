import type { Metadata } from "next";
import "@/app/(frontend)/globals.css";
import "./auth.css";

export const metadata: Metadata = {
  title: "Levegő BéEnBé | Bejelentkezés",
  description: "Levegő BéEnBé bejelentkezés oldala. Regisztrálj most!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
