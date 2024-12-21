import { getPayload } from "payload";
import configPromise from "@payload-config";
import Card from "./Hero/Card";
import { Customer } from "@/payload-types";

type HouseLoaderProps = {
  className?: string;
  country?: string;
  price?: number;
  rating?: number;
  bathnum?: number;
  roomnum?: number;
  ventelation?: boolean;
  category?: string;
  incountry?: boolean;
  carousel?: boolean;
  popular?: boolean;
  spotlight?: boolean;
};

const HouseLoader = async ({
  className,
  country,
  price,
  rating,
  bathnum,
  roomnum,
  ventelation,
  category,
  incountry,
  carousel,
  popular,
  spotlight,
}: HouseLoaderProps) => {
  const payload = await getPayload({
    config: configPromise,
  });

  const getHouses = async () => {
    const query: Array<{ [key: string]: any }> = [
      {
        inuse: {
          equals: false,
        },
      },
    ];

    if (country) {
      query.push({
        country: {
          contains: country,
        },
      });
    }

    if (category) {
      query.push({
        category: {
          contains: category,
        },
      });
    }

    if (price) {
      query.push({
        price: {
          less_than_equal: price,
        },
      });
    }

    if (rating) {
      query.push({
        rating: {
          less_than_equal: rating,
        },
      });
    }

    if (bathnum) {
      query.push({
        bathnum: {
          greater_than_equal: bathnum,
        },
      });
    }

    if (roomnum) {
      query.push({
        roomnum: {
          greater_than_equal: roomnum,
        },
      });
    }

    if (ventelation) {
      query.push({
        ventelation: {
          equals: ventelation,
        },
      });
    }

    if (popular) {
      query.push({
        popular: {
          equals: popular,
        },
      });
    }

    if (spotlight) {
      query.push({
        spotlight: {
          equals: spotlight,
        },
      });
    }

    if (incountry) {
      query.push({
        incountry: {
          equals: incountry,
        },
      });
    }
    const houses = await payload.find({
      disableErrors: true,
      collection: "houses",
      where: {
        and: query,
      },
    });

    return houses;
  };
  const houses = await getHouses();

  return (
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
              owner={(house.owner as Customer).username}
              pictures={house.housepics!}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HouseLoader;
