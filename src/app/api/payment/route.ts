import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { authOptions } from '../auth/[...nextauth]/route';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    //apiVersion: "2022-11-15",
    apiVersion: "2023-10-16",
});

export async function POST(request: Request) {
    const userSession = await getServerSession(authOptions);
    const req = await request.json();

    const { courtId, priceReservation, name, description, coverImage, dateReservation, timeReservation } = req;

    const session = await stripe.checkout.sessions.create({
        success_url: 'http://localhost:3000/my-courts',
        metadata: {
            courtId,
            dateReservation,
            timeReservation,
            userId: (userSession?.user as any)?.id,
            priceReservation: Number(priceReservation), 
        },
        line_items: [
            {
                price_data: {
                    currency: 'brl',
                    unit_amount: parseFloat(priceReservation) * 100,
                    product_data: {
                        name,
                        description,
                        images: [coverImage]
                    },
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
    });

    return new NextResponse(JSON.stringify({ sessionId: session.id }), { status: 200 });

}