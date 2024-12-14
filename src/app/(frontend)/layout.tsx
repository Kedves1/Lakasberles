import Providers from "./components/Providers";
import { Toaster } from "./components/ui/toaster";
import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body className="font-normal antialiased bg-background min-h-screen w-screen overflow-x-clip text-primary">
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
