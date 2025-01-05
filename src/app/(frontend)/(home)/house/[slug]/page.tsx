import { getPayload } from "payload";
import configPromise from "@payload-config";
import { Star } from "lucide-react";
import { Customer } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";
const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const currentHouseID = (await params).slug;
  const payload = await getPayload({
    config: configPromise,
  });
  const getHouses = async () => {
    const houses = await payload.findByID({
      collection: "houses",
      id: currentHouseID,
    });

    return houses;
  };
  const house = await getHouses();

  return (
    <main className="pt-[230px] flex w-screen max-w-[1800px] h-screen mx-auto pb-[100px]">
      <div className="basis-2/3 h-full border-r-2 border-r-primary/10 mr-10 px-20"></div>
      <div className="basis-1/3 h-full">
        <div className="text-5xl font-bold mb-1">{house.name}</div>
        <div className="flex mb-10">
          {new Array(5).fill(0).map((_, i) => {
            if (i >= house.rating) {
              return <Star key={i} color="blak" fill="black" />;
            }
            return <Star key={i} fill="yellow" color="yellow" />;
          })}
        </div>
        <div className="text-xl flex flex-col gap-2">
          <div className="flex gap-4">
            <div className="font-bold">Tulajdonos: </div>
            <div className="">{(house.owner as Customer).username}</div>
          </div>
          <div className="flex gap-4">
            <div className="font-bold">Ár / Éjszaka: </div>
            <div className="">{house.price} Ft</div>
          </div>
          <div className="flex gap-4">
            <div className="font-bold">Ország: </div>
            <div className="">Magyarország</div>
          </div>
          <div className="flex gap-4">
            <div className="font-bold">Távolság tőled: </div>
            <div className="">30 km</div>
          </div>
          <div className="flex gap-4 flex-col">
            <div className="font-bold">Leírás: </div>
            <RichText data={house.description} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
