import backgroundSvg from "@/img/background.svg";
import Image from "next/image";
import Bubble from "./components/Bubble";

export default async function Home(
  props: {
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
  }
) {
  const searchParams = await props.searchParams;
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
