import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Levegő BéEnBé | Bejelentkezés",
  description:
    "Bérelj lakásokat, házakat, nyarólakt blahblah idk majd valaki ide rak vmit, i hope",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
