import backgroundSvg from "@/img/background.svg";
import Image from "next/image";
import Bubble from "./components/Bubble";

export default function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="w-screen h-screen relative ">
      <Image
        src={backgroundSvg}
        fill
        alt="background"
        className="object-cover absolute top-0 -z-50"
      />
      <Bubble searchParams={searchParams} />
    </div>
  );
}
