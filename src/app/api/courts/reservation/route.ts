import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const req = await request.json();

    const { dateReservation, timeReservation, userId, courtId, priceReservation } = req;

    const court = await prisma.court.findUnique({
        where: {
            id: courtId, 
        },
    });
    

    if (!court) {
        return new NextResponse(
            JSON.stringify({
                error: {
                    code: "COURT_NOT_FOUND",
                },
            })
        )
    }

    await prisma.courtReservation.create({
        data:{
            dateReservation: new Date(dateReservation),
            timeReservation,
            userId,
            courtId,
            priceReservation,
        }
    });

    return new NextResponse(
        JSON.stringify({
            success: true,
        }),
        {status:201}
    );


}