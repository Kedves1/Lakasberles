import { Suspense } from "react";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Suspense>
        <Navbar />
      </Suspense>
    </>
  );
}
