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
      <script
        defer
        src="https://umami.gemes.eu/script.js"
        data-website-id="923394af-d972-4518-85e7-6ded41da33a9"
      />
      <body className="font-normal antialiased bg-background min-h-screen w-screen overflow-x-clip text-primary">
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
