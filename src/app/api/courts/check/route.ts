import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const req = await request.json();

    const court = await prisma.court.findUnique({
        where: {
            id: req.courtId,
        },
    });

    const reqDate = new Date(req.dateReservation);

    if (isNaN(reqDate.getTime())) {
        return new NextResponse(
            JSON.stringify({
                error: {
                    code: 'INVALID_DATE',
                },
            })
        );
    }

    if (req.timeReservation === null) {
        return new NextResponse(
            JSON.stringify({
                error: {
                    code: 'INVALID_TIME',
                },
            })
        );
    }

    const reservations = await prisma.courtReservation.findMany({
        where: {
            courtId: req.courtId,
            dateReservation: {
                equals: reqDate,
            },
            timeReservation: {
                equals: req.timeReservation,
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
            court,
        })
    );
}

