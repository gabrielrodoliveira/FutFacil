import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const req = await request.json();

    const reservations = await prisma.courtReservation.findMany({
        where: {
            courtId: req.courtId,
            dateReservation: {
                // gte: new Date(req.dateReservation)
                equals: new Date(req.dateReservation)
            },
            timeReservation: {
                equals: req.timeReservation
            }
            
        }
    })

    if (reservations.length > 0) {
        return new NextResponse(
            JSON.stringify({
                error: {
                    code: 'COURT_ALREADY_RESERVED',
                },
            })
        );
    }

    return new NextResponse(
        JSON.stringify({
            success: true,
        })
    );
}

