"use client";
import { useState, useEffect } from "react";
import { Circle, Star } from "lucide-react";
import { Customer, House, Housepic } from "@/payload-types";
import OrderButton from "./OrderButton";

import {
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "../../../components/ui/Carousel";
import Image from "next/image";
interface Order {
  startDate: string;
  endDate: string;
  customer: {
    id: string;
  };
}

const Page = ({ params }: { params: Promise<{ slug: string }> }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalNights, setTotalNights] = useState(0);
  const [house, setHouse] = useState<House | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState<Order[]>([]);
  const [user, setUser] = useState<any>(null);

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const fetchHouse = async () => {
      try {
        const { slug } = await params;
        const response = await fetch(`/api/houses?where[id][equals]=${slug}`);
        const { docs } = await response.json();
        setHouse(docs[0] || null);

        // Fetch orders for this house
        const ordersResponse = await fetch(
          `/api/orders?where[house][equals]=${slug}&where[status][equals]=active`
        );
        const { docs: orderDocs } = await ordersResponse.json();
        setOrders(orderDocs);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    fetchHouse();
  }, [params]);

  useEffect(() => {
    const getMe = async () => {
      try {
        const meResponse = await fetch("/api/customers/me", {
          credentials: "include",
        });
        const data = await meResponse.json();
        setUser(data.user || data.doc);
      } catch (error) {}
    };

    getMe();
  }, []);

  const calculateTotalNights = (start: string, end: string) => {
    if (!start || !end) return 0;
    const diffTime = new Date(end).getTime() - new Date(start).getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const isDateAvailable = (date: string) => {
    return !orders.some((order) => {
      const checkDate = new Date(date).getTime();
      const start = new Date(order.startDate).getTime();
      const end = new Date(order.endDate).getTime();
      return checkDate >= start && checkDate <= end;
    });
  };

  const handleDateChange = (start: string, end: string) => {
    if (start && end) {
      const startTime = new Date(start).getTime();
      const endTime = new Date(end).getTime();

      // Check if the selected date range overlaps with any existing order
      const isAvailable = orders.every((order) => {
        const orderStart = new Date(order.startDate).getTime();
        const orderEnd = new Date(order.endDate).getTime();
        return endTime < orderStart || startTime > orderEnd;
      });

      if (!isAvailable) {
        alert("A választott időszak már foglalt!");
        return;
      }
    }

    setStartDate(start);
    setEndDate(end);
    setTotalNights(calculateTotalNights(start, end));
  };

  if (isLoading) {
    return (
      <div className="w-screen h-screen grid place-items-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-highlight"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (!house) {
    return (
      <div className="pt-[230px] h-screen text-center">House not found</div>
    );
  }

  const userOrders = orders.filter((order) => order.customer.id === user?.id);

  return (
    <main className="pt-[230px] flex w-screen max-w-[1400px] h-screen mx-auto pb-[100px]">
      <div className="basis-2/3 h-full border-r-2 border-r-primary/10 mr-10 px-20">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
            watchDrag: false,
          }}
          className="w-[100%] h-[80%] bg-black rounded-xl"
        >
          <CarouselContent className="flex mt-20">
            {house.housepics!.map((pic, i) => {
              return (
                <CarouselItem key={i} className="lg:basis-1/1 ">
                  <div className="h-96 w-full relative ">
                    <Image
                      src={(pic.pictures as Housepic).url!}
                      alt="housepic"
                      fill
                      className=""
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="left-3 bg-white/30 backdrop-blur-md border-0 cursor-pointer" />
          <CarouselNext className="right-3 bg-white/30 backdrop-blur-md border-0 cursor-pointer" />
        </Carousel>
        <div className="w-full flex justify-center gap-10 items-center">
          <div className="flex justify-center items-center">
            <Circle size={20} color="#DAA06D" fill="#DAA06D" />
            <div className="">Szobák: {house.roomnum}</div>
          </div>
          <div className="flex justify-center items-center">
            <Circle size={20} color="#239bba" fill="#239bba" />
            <div className="">Fürdők: {house.bathnum}</div>
          </div>
        </div>
      </div>
      <div className="basis-1/3 h-full">
        <div className="text-4xl font-bold mb-1">{house.name}</div>
        <div className="flex mb-10">
          {new Array(5).fill(0).map((_, i) => {
            if (i >= house.rating!) {
              return <Star key={i} color="blak" fill="black" />;
            }
            return <Star key={i} fill="yellow" color="yellow" />;
          })}
        </div>
        <div className="text-lg flex flex-col gap-1">
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
            <div className="">{house.country}</div>
          </div>
          <div className="flex gap-4">
            <div className="font-bold">Település: </div>
            <div className="">{house.city}</div>
          </div>
          <div className="flex gap-4">
            <div className="font-bold">Cím: </div>
            <div className="">{house.streetAddress}</div>
          </div>
          <div className="flex gap-4">
            <div className="font-bold">Kategória: </div>
            <div className="">{house.category}</div>
          </div>
          <div className="flex gap-4">
            <div className="font-bold">Klíma: </div>
            <div className="">{house.ventelation ? "Igen" : "Nem"}</div>
          </div>
          <div className="flex gap-4 flex-col">
            <div className="font-bold">Leírás: </div>
            <div>{house.description} </div>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            {userOrders.length > 0 ? (
              <div className="font-bold text-red-500">
                Foglalt időszakaid:
                {userOrders.map((order, index) => (
                  <div key={index}>
                    {new Date(order.startDate).toLocaleDateString()} -{" "}
                    {new Date(order.endDate).toLocaleDateString()}
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="font-bold">Foglalás időpontja:</div>
                <div className="flex gap-4">
                  <input
                    type="date"
                    min={today}
                    value={startDate}
                    onChange={(e) => handleDateChange(e.target.value, endDate)}
                    className="border p-2 rounded"
                  />
                  <input
                    type="date"
                    min={startDate || today}
                    value={endDate}
                    onChange={(e) =>
                      handleDateChange(startDate, e.target.value)
                    }
                    className="border p-2 rounded"
                  />
                </div>
                {totalNights > 0 && (
                  <div className="font-bold">
                    Teljes ár ({totalNights} éjszaka):{" "}
                    {house.price * totalNights} Ft
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        <div className="mt-6">
          <OrderButton
            price={house.price * totalNights}
            image={
              (house.housepics![0].pictures as Housepic)?.url ||
              "https://placehold.co/600x400"
            }
            houseId={house.id}
            houseName={house.name} // Add house name
            startDate={startDate}
            endDate={endDate}
            totalNights={totalNights}
            ownerId={(house.owner as Customer).id}
          />
        </div>
      </div>
    </main>
  );
};

export default Page;
