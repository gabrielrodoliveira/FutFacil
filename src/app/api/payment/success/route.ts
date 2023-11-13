import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export async function POST(request: Request) {
  const sig = request.headers.get("stripe-signature")!;

  const text = await request.text();

  const event = stripe.webhooks.constructEvent(text, sig, process.env.STRIPE_WEBHOOK_SECRET_KEY!);

  console.log('Evento', event.type);
  
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as any;

  
    await prisma.courtReservation.create({
      data: {
        dateReservation: new Date(session.metadata.dateReservation),
        userId: session.metadata.userId,
        courtId: session.metadata.courtId,
        priceReservation: Number(session.metadata.priceReservation),
      // priceReservation: 42,
        timeReservation: session.metadata.timeReservation,
      },
    });
  
  }
  

  return new NextResponse(JSON.stringify({ received: true }), { status: 200 });
}