import Card from "./components/Card";
import housepic from "@/img/house.svg";
import HelpDesk from "./components/HelpDesk";
import Categories from "./components/Categories";
import Image from "next/image";

export default async function Home() {
  const houses = [
    {
      distance: 35,
      price: 100000,
      owner: "Gémes Gergő",
      pictures: [housepic, housepic, housepic, housepic],
    },
    {
      distance: 35,
      price: 100000,
      owner: "Gémes Gergő",
      pictures: [housepic, housepic, housepic, housepic],
    },
    {
      distance: 35,
      price: 100000,
      owner: "Gémes Gergő",
      pictures: [housepic, housepic, housepic, housepic],
    },
  ];
  return (
    <>
      <Categories />
      <main>
        <div className="relative w-full h-[600px]">
          <Image
            src={"https://placehold.co/600x400"}
            fill
            className="object-cover"
            alt="banner"
            priority
          />
        </div>
        <div className="max-w-[1200px] bg-white m-auto h-[600px] my-11 rounded-xl shadow-sm shadow-black/20 max-sm:mx-1"></div>
        <div className="m-auto max-sm:mx-1 rounded-xl bg-white text-4xl pt-4 max-w-[1800px] pb-10 shadow-sm shadow-black/20">
          <div className="border-b-[2px] border-b-black/20 mx-10">
            Kedvelt Házak
          </div>
          <div className="px-10 pt-3 w-full flex gap-5 flex-wrap">
            {houses.map((house, i) => {
              return (
                <Card
                  distance={house.distance}
                  price={house.price}
                  owner={house.owner}
                  pictures={house.pictures}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </main>
      <HelpDesk />
    </>
  );
}
