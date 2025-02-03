import Image from "next/image";
import { Barcode, ChevronRight, Upload, Wallet } from "lucide-react";
import Link from "next/link";
import HighlightArea from "./components/hero/HighlightArea";
import HouseLoader from "./components/HouseLoader";

const Page = async () => {
  return (
    <main className="pt-[125px]">
      <div className="relative w-full h-[600px] border-b-[3px] border-b-black/20">
        <Image
          src={"/banner.webp"}
          fill
          className="object-cover"
          alt="banner"
          priority
        />
        <div className="absolute w-full h-full bg-white/20 backdrop-blur-sm flex pt-40 items-center flex-col gap-3">
          <div className="text-6xl text-white uppercase ">
            Béreljen most lakást
          </div>
          <div className="text-xl text-white/80 font-extralight">
            Regisztráljon most és használja a &#34;GEROALACSONY&#34; kódot az
            első vásárlásnál
          </div>
          <Link
            href={"/search"}
            className="border-highlight border-2 py-2 px-3 text-highlight flex items-center cursor-pointer justify-center mt-5 hover:bg-highlight hover:text-white transition-all duration-75 ease-linear rounded-xl"
          >
            Böngészés <ChevronRight size={17} />
          </Link>
        </div>
      </div>
      <div className="flex max-w-[1600px] justify-between m-auto w-full my-11 max-lg:flex-col">
        <div className="flex w-full max-w-[500px] flex-col gap-10 lg:justify-around max-lg:gap-10 py-32">
          <div className="w-full flex items-center text-2xl text-green-600">
            <Link
              href={"/upload"}
              className="flex justify-center items-center gap-5"
            >
              <Upload size={50} className="shrink-0" />
              <div className="">
                <div className="">Töltse fel ön is a lakását!</div>
                <div className="text-sm text-green-600/50">
                  24/7 technikai segítséggel könnydén szerehet pénzt a
                  lakásából!
                </div>
              </div>
            </Link>
          </div>
          <div className="w-full flex items-center text-2xl gap-5 text-indigo-400">
            <Barcode size={50} className="shrink-0" />
            <div className="">
              <div className="">Kapjon kedvezményt az első vásárlására!</div>
              <div className="text-sm text-indigo-400/50">
                Regisztráljon most és használja a &#34;GEROALACSONY&#34; kódot
                az első vásárlásnál
              </div>
            </div>
          </div>
          <div className="w-full flex items-center text-2xl gap-5 text-orange-900">
            <Wallet size={50} className="shrink-0" />
            <div className="">
              <div className="2xl:text-nowrap">
                Minden vásárlásra 50% biztosítást ajánlunk
              </div>
              <div className="text-sm text-orange-950/50">
                Minden okozott kárnál vagy nem megelégedett ottlét esetén áljuk
                az ár 50%-át
              </div>
            </div>
          </div>
        </div>
        <HighlightArea />
      </div>
      <HouseLoader title="Kedvelt" />
      <HouseLoader title="Legjobb árérték arány" />
      <HouseLoader title="Legolcsóbb" />
      <HouseLoader title="Böngészés" carousel={false} increment />
    </main>
  );
};

export default Page;
