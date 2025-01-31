import Stripe from "stripe";
import { getPayload } from "payload";
import configPromise from "@payload-config";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-01-27.acacia",
});

export async function POST(request: Request) {
  const body = await request.text();
  const sig = request.headers.get("stripe-signature")!;
  const payload = await getPayload({
    config: configPromise,
  });

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      if (!session.customer_email) {
        console.error("No customer email in session");
        return new Response(
          JSON.stringify({ error: "No customer email in session" }),
          { status: 400 }
        );
      }

      const customer = await payload.find({
        collection: "customers",
        where: {
          email: { equals: session.customer_email },
        },
      });

      if (!customer.docs.length) {
        console.error(
          `Customer not found for email: ${session.customer_email}`
        );
        return new Response(JSON.stringify({ error: "Customer not found" }), {
          status: 400,
        });
      }

      const paymentIntent = await stripe.paymentIntents.retrieve(
        session.payment_intent as string
      );

      // Validate required metadata
      if (
        !paymentIntent.metadata.houseId ||
        !paymentIntent.metadata.startDate ||
        !paymentIntent.metadata.endDate
      ) {
        console.error("Missing required metadata", paymentIntent.metadata);
        return new Response(
          JSON.stringify({ error: "Missing required metadata" }),
          { status: 400 }
        );
      }

      const house = await payload.findByID({
        collection: "houses",
        id: paymentIntent.metadata.houseId,
      });

      if (!house) {
        console.error(
          `House not found with ID: ${paymentIntent.metadata.houseId}`
        );
        return new Response(JSON.stringify({ error: "House not found" }), {
          status: 400,
        });
      }

      // Add validation for existing orders
      const existingOrders = await payload.find({
        collection: "orders",
        where: {
          and: [
            { house: { equals: paymentIntent.metadata.houseId } },
            { status: { equals: "active" } },
            {
              or: [
                {
                  and: [
                    {
                      startDate: {
                        less_than_equal: paymentIntent.metadata.startDate,
                      },
                    },
                    {
                      endDate: {
                        greater_than_equal: paymentIntent.metadata.startDate,
                      },
                    },
                  ],
                },
                {
                  and: [
                    {
                      startDate: {
                        less_than_equal: paymentIntent.metadata.endDate,
                      },
                    },
                    {
                      endDate: {
                        greater_than_equal: paymentIntent.metadata.endDate,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      });

      if (existingOrders.docs.length > 0) {
        // Refund the payment if dates are no longer available
        await stripe.refunds.create({
          payment_intent: session.payment_intent as string,
        });

        return new Response(
          JSON.stringify({ error: "Selected dates are no longer available" }),
          { status: 400 }
        );
      }

      await payload.create({
        collection: "orders",
        data: {
          customer: customer.docs[0].id,
          owner: typeof house.owner === "string" ? house.owner : house.owner.id,
          house: house.id,
          startDate: paymentIntent.metadata.startDate,
          endDate: paymentIntent.metadata.endDate,
          stripeId: session.id,
          status: "active",
        },
      });

      return new Response(null, { status: 200 });
    }

    return new Response(null, { status: 200 });
  } catch (error: any) {
    console.error("Webhook error:", error.message);
    return new Response(
      JSON.stringify({ error: error.message || "Webhook processing failed" }),
      { status: 400 }
    );
  }
}
