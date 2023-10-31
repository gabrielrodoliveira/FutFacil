import { useSearchParams } from 'next/navigation'
import React from 'react'


interface GetCourtsParams{
  text: string;
  dateReservation: Date | null;
  budget?: string;
}

async function getCourts(searchParams: URLSearchParams) {

}


const page = () => {
  const searchParams = useSearchParams();

  return (
    <div>page</div>
  )
}

export default page