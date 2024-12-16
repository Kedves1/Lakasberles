import Image from "next/image";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import Card from "./components/Hero/Card";
import { Customer } from "@/payload-types";
import { Barcode, ChevronRight, Upload, Wallet } from "lucide-react";
import Link from "next/link";
const Page = async () => {
  const payload = await getPayload({
    config: configPromise,
  });
  const getHouses = async () => {
    const houses = await payload.find({
      collection: "houses",
    });

    return houses;
  };
  const houses = await getHouses();
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
      <div className="flex max-w-[1800px] justify-between m-auto w-full my-11 max-2xl:px-10 max-lg:flex-col">
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
        <div className="max-w-[1200px] bg-white h-[600px] w-full rounded-xl shadow-sm shadow-black/20"></div>
      </div>
      <div className="m-auto max-sm:mx-1 rounded-xl bg-white text-4xl pt-4 max-w-[1800px] pb-10 shadow-sm shadow-black/20">
        <div className="border-b-[2px] border-b-black/20 mx-10">
          Kedvelt Házak
        </div>
        <div className="px-10 pt-3 w-full flex gap-5 flex-wrap">
          {houses.docs.map((house, i) => {
            return (
              <Card
                distance={35}
                price={house.price}
                owner={(houses.docs[0].owner as Customer).username}
                pictures={house.housepics!}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Page;
