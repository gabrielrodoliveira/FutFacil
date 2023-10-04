import CourtItem from '@/components/CourtItem';
import { prisma } from "@/lib/prisma";
import { Court } from '@prisma/client';
import React from 'react';

/*
-- Função que não está funcionando para
async function getCourts() {
 const courts = await prisma.court.findMany({});

 return courts;
}

*/
const RecommendedCourts = async () => {
 // const data = await getCourts();
  const data = await fetch("http://localhost:3000/hello").then((res) => res.json());
  return (
    <div>
      <div className="container mx-auto p-5">
        <div className="flex items-center">
          <div className="w-full h-[2px] bg-grayPrimary"></div>
          <h2 className='px-5 font-medium text-grayPrimary whitespace-nowrap'>Quadras Recomendadas</h2>
          <div className="w-full h-[2px] bg-grayPrimary"></div>
        </div>

        <div className="flex flex-col items-center mt-5 gap-5">
          {data.map((court: Court) =>
            <CourtItem key={court.id} court={court} />
          )}
        </div>
      </div>
    </div>
  )
}

export default RecommendedCourts