import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import housepic from "@/img/house.svg";
import HelpDesk from "./components/HelpDesk";

export default function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
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
      <Suspense>
        <Navbar searchParams={searchParams} />
      </Suspense>
      <main>
        <div className="p-10 w-full flex gap-5 flex-wrap">
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
      </main>
      <HelpDesk/>
    </>
  );
}
