import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import React from "react";

export async function GET() {
    
    const courts = await prisma.court.findMany();

    return new NextResponse(JSON.stringify(courts), {status:200});
}