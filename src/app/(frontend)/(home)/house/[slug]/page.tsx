"use client";
import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { Customer, House, Housepic } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";
import OrderButton from "./OrderButton";

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
    return <div className="pt-[230px] text-center">Loading...</div>;
  }

  if (!house) {
    return <div className="pt-[230px] text-center">House not found</div>;
  }

  const userOrders = orders.filter((order) => order.customer.id === user?.id);

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
