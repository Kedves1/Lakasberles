import { loadStripe } from "@stripe/stripe-js";
import { useState, useEffect } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

interface OrderButtonProps {
  price: number;
  image: string;
  houseId: string;
  startDate: string;
  endDate: string;
  totalNights: number;
  ownerId: string; // új prop
  houseName: string; // új prop
}

export default function OrderButton({
  price,
  image,
  houseId,
  startDate,
  endDate,
  totalNights,
  ownerId, // új prop használata
  houseName, // új prop használata
}: OrderButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [hasExistingOrder, setHasExistingOrder] = useState(false);

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

  useEffect(() => {
    const checkExistingOrder = async () => {
      if (!user) return;

      try {
        const response = await fetch(
          `/api/orders?where[customer][equals]=${user.id}&where[house][equals]=${houseId}&where[status][equals]=active`
        );
        const { docs } = await response.json();
        setHasExistingOrder(docs.length > 0);
      } catch (error) {}
    };

    if (user) {
      checkExistingOrder();
    }
  }, [user, houseId]);

  const handleCheckout = async () => {
    if (!user) {
      window.location.href = "/login?redirect=" + window.location.pathname;
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          price,
          image,
          houseId,
          houseName,  // Add house name
          startDate,
          endDate,
          totalNights,
          pricePerNight: price / totalNights,
          customerEmail: user.email,
          customerId: user.id,
          ownerId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const { sessionId } = await response.json();
      const stripe = await stripePromise;

      if (stripe) {
        const { error } = await stripe.redirectToCheckout({
          sessionId,
        });
        if (error) {
          throw error;
        }
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const areDatesSelected = startDate && endDate;
  const isOwner = user?.id === ownerId;

  return (
    <button
      onClick={handleCheckout}
      disabled={isLoading || !areDatesSelected || hasExistingOrder || isOwner}
      className={`w-full py-3 rounded-lg transition-colors ${
        isOwner
          ? "bg-red-500 text-white cursor-not-allowed"
          : hasExistingOrder
            ? "bg-green-500 text-white cursor-not-allowed"
            : areDatesSelected
              ? "bg-primary text-white hover:bg-primary/90"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
      }`}
    >
      {isOwner
        ? "Ez a te házad!"
        : isLoading
          ? "Átirányítás a fizetési oldalra..."
          : hasExistingOrder
            ? "Már van aktív foglalásod"
            : !areDatesSelected
              ? "Válassz dátumot a foglaláshoz"
              : user
                ? "Foglalás most"
                : "Jelentkezz be a foglaláshoz"}
    </button>
  );
}
