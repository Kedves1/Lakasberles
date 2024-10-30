import Card from "./components/Card";
import Image from "next/image";
import db from "@/database";
import { houses } from "@/database/schemas/houses";
import { eq } from "drizzle-orm";
export default async function Home() {
  const popularHouses = await db
    .select()
    .from(houses)
    .where(eq(houses.popular, 1));

  return (
    <>
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
            {popularHouses.map((house, i) => {
              return (
                <Card
                  distance={35}
                  price={house.price}
                  owner={house.owner}
                  owner_uuid={house.owner_uuid}
                  pictures={house.image.split(";")}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
