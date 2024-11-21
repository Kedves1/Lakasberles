import type { Metadata } from "next";
import "@/app/(frontend)/globals.css";
import { Toaster } from "./(auth)/login/components/Toast/toaster";

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
      <body className="antialiased bg-background min-h-screen w-screen overflow-x-clip text-primary">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
