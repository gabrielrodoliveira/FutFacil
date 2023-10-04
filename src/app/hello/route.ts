import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const courts = await prisma.court.findMany();

  return new NextResponse(JSON.stringify(courts), { status: 200 });
}