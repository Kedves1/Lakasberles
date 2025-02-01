import { getPayload } from "payload";
import configPromise from "@payload-config";
import { Customer, Housepic } from "@/payload-types";
import { Star } from "lucide-react";
import Link from "next/link";

const HighlightArea = async () => {
  const payload = await getPayload({
    config: configPromise,
  });
  const getHouses = async () => {
    const houses = await payload.find({
      collection: "houses",
      limit: 4,
      where: {
        spotlight: {
          equals: true,
        },
      },
    });

    return houses;
  };
  const { docs: houses } = await getHouses();

  return (
    <div className="max-w-[1000px] bg-white h-[600px] w-full rounded-xl shadow-sm shadow-black/20 p-10">
      <div className="flex items-center text-3xl gap-2 w-full border-b-[2px] border-b-black/20">
        Kiemelt
      </div>
      <div className="grid grid-cols-2 w-fulll h-full gap-10 p-10">
        {houses.map((house) => (
          <Link href={`house/${house.id}`} key={house.id}>
            <div
              className="w-full h-full flex items-end rounded-xl text-white"
              style={{
                backgroundImage: `url(${(house.housepics![0].pictures as Housepic).url})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="w-full h-1/3 bg-black/50 px-5 rounded-b-xl flex justify-between items-center">
                <div className="">
                  <div className="">{house.price} Ft / Éjszaka</div>
                  <div className="flex">
                    {new Array(5).fill(0).map((_, i) => {
                      if (i >= house.rating) {
                        return <Star key={i} color="white" />;
                      }
                      return <Star key={i} fill="yellow" color="yellow" />;
                    })}
                  </div>
                </div>
                <div className="">
                  <div className="font-bold">{house.name}</div>
                  <div className="">{(house.owner as Customer).username}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HighlightArea;
