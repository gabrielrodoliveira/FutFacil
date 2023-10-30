import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(request: Request, { params: { userId } }: { params: { userId: string } }) {
    const { searchParams } = new URL(request.url)


    if (!userId) {
        return {
            status: 400,
            body: {
                message: 'Missing userId'
            }
        }
    }

    const reservations = await prisma.courtReservation.findMany({
        where: {
            userId: userId
        },
        include: {
            court: true
        }
    })

    return new NextResponse(JSON.stringify(reservations), { status: 200 })
}