import { getPayload } from "payload";
import configPromise from "@payload-config";
import HouseCard from "./hero/HouseCard";

import {
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "../../components/ui/Carousel";

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
  title: string;
  increment?: boolean;
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
  carousel = true,
  popular,
  spotlight,
  title,
  increment,
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

  if (carousel) {
    return (
      <div className="m-auto rounded-xl bg-main text-4xl max-w-[1800px] shadow-sm shadow-black/20 mb-20 py-10">
        <div className="border-b-[2px] border-b-black/20 mx-10">{title}</div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 5,
            watchDrag: false,
          }}
          className="w-[90%] mx-auto"
        >
          <CarouselContent className="p-5">
            {houses.docs.map((house, i) => {
              return (
                <CarouselItem key={i} className="lg:basis-1/5">
                  <HouseCard house={house} />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    );
  } else {
    return (
      <div className="m-auto rounded-xl bg-white text-4xl pt-4 max-w-[1800px] px-10 pb-10 shadow-sm shadow-black/20 mb-20">
        <div className="border-b-[2px] border-b-black/20">{title}</div>
        <div className="grid grid-cols-1 lg:grid-cols-5 justify-items-center pt-2">
          {houses.docs.map((house, i) => {
            return <HouseCard house={house} key={i} />;
          })}
        </div>
        {increment && (
          <button className="border-highlight border-2 text-xl py-2 px-5 mx-auto text-highlight flex items-center cursor-pointer justify-center mt-5 hover:bg-highlight hover:text-white transition-all duration-75 ease-linear rounded-xl">
            Több
          </button>
        )}
      </div>
    );
  }
};

export default HouseLoader;
