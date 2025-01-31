import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getPayload } from "payload";
import configPromise from "@payload-config";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not set in environment variables");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-01-27.acacia",
});

interface RequestBody {
  price: number;
  image: string;
  houseId: string;
  startDate: string;
  endDate: string;
  totalNights: number;
  pricePerNight: number;
  customerEmail: string;
  customerId: string;
  ownerId: string;
  houseName: string;
}

export async function POST(request: Request) {
  try {
    const {
      price,
      image,
      houseId,
      houseName,
      startDate,
      endDate,
      totalNights,
      pricePerNight,
      customerEmail,
      customerId,
      ownerId,
    }: RequestBody = await request.json();

    if (!price || !houseId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Add validation for existing orders
    const payload = await getPayload({
      config: configPromise,
    });

    const existingOrders = await payload.find({
      collection: "orders",
      where: {
        and: [
          { house: { equals: houseId } },
          { status: { equals: "active" } },
          {
            or: [
              {
                and: [
                  { startDate: { less_than_equal: startDate } },
                  { endDate: { greater_than_equal: startDate } },
                ],
              },
              {
                and: [
                  { startDate: { less_than_equal: endDate } },
                  { endDate: { greater_than_equal: endDate } },
                ],
              },
            ],
          },
        ],
      },
    });

    if (existingOrders.docs.length > 0) {
      return NextResponse.json(
        { error: "Selected dates are already booked" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "huf",
            product_data: {
              name: `${houseName} - Szállásfoglalás (${totalNights} éjszaka)`,
              images: image ? [image] : undefined,
            },
            unit_amount: Math.round(price * 100),
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/house/${houseId}`,
      metadata: {
        houseId,
        startDate,
        endDate,
        totalNights: totalNights.toString(),
        pricePerNight: pricePerNight.toString(),
        customerId,
        ownerId,
        customerEmail,
        totalAmount: price.toString(),
      },
      customer_email: customerEmail,
      customer_creation: "always",
      payment_intent_data: {
        metadata: {
          houseId,
          startDate,
          endDate,
          totalNights: totalNights.toString(),
          pricePerNight: pricePerNight.toString(),
          customerId,
        },
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating checkout session" },
      { status: 500 }
    );
  }
}
