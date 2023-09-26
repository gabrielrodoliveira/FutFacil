import React from 'react';
import { prisma } from "@/lib/prisma";
import CourtItem from '@/components/CourtItem';
import { Court } from '@prisma/client';


const RecommendedCourts = async () => {
  const data = await fetch('http://localhost:3000/hello').then(res => res.json())

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
            <CourtItem key={court.id} court={court}/>
        )}
        </div>
        </div>
    </div>
  )
}

export default RecommendedCourts