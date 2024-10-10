import type { Metadata } from "next";
import "@/app/globals.css";

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
    <html lang="hu">
      <body className="antialiased bg-background min-h-screen w-screen">
        {children}
      </body>
    </html>
  );
}
