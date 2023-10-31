import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(request: Request ) {
    const { searchParams } = new URL(request.url)

    const text = searchParams.get('text');

    console.log('O texto é ', text)

    if (!text) {
        return new NextResponse(JSON.stringify({
            message: 'Missing text parameter'
        }), { status: 400 })
    }

    const courts = await prisma.court.findMany({
        where: {
            OR: [
                {
                    name: {
                        search: text,
                    },
                },
                {
                    description: {
                        search: text,
                    },
                },
                {
                    location: {
                        search: text,
                    },
                },
            ],
        },
    });


    return new NextResponse(JSON.stringify(courts), { status: 200 })
}