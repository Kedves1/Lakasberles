import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="antialiased bg-background min-h-screen pb-10 w-screen">
        {children}
      </body>
    </html>
  );
}
