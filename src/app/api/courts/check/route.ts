import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { add, sub, startOfDay, endOfDay } from 'date-fns';

export async function POST(request: Request) {
    const req = await request.json();

    const startOfDate = startOfDay(new Date(req.dateReservation));
    const endOfDate = endOfDay(add(startOfDate, { days: 1 }));

    const reservations = await prisma.courtReservation.findMany({
        where: {
            courtId: req.courtId,
            dateReservation: {
                gte: startOfDate,
                lt: endOfDate,
            },
            timeReservation: {
                equals: req.timeReservation,
            },
        },
    });

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
