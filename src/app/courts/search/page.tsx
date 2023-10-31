'use client'

import CourtItem from '@/components/CourtItem';
import { Court } from '@prisma/client';
import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

const Courts =  () => {
  const [courts, setCourts] = React.useState<Court[]>([]);
  
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchCourts = async () => {
     const response = await fetch(`/api/courts/search?text=${searchParams.get('text') ?? ''}&dateReservation${searchParams.get('dateReservation')??''}&budget=${searchParams.get('budget') ?? ''}`)
    
     const data = await response.json();

     setCourts(data);

     console.log(data);
    }
    fetchCourts()
  }, [])
  

  return (
    <div className="container mx-auto flex flex-col items-center lg:items-start p-5 lg:pt-10">
      <h1 className="text-primaryDarker font-semibold text-xl lg:w-full lg:text-left lg:text-[2.5rem]">Quadras Encontradas</h1>
      <h2 className="text-grayPrimary font-medium mb-5 lg:mt-6 lg:w-full lg:text-left">
        {courts.length > 0 ? "Listamos as melhores quadras pra você!" : "Não encontramos nada nos seus parâmetros! =("}
      </h2>

      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-4 lg:gap-10 lg:mt-6 lg:pb-16">
        {courts?.map((court) => (
          <CourtItem key={court.id} court={court} />
        ))}
      </div>
    </div>
  );
  
}

export default Courts