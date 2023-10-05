import { prisma } from '@/lib/prisma';
import Image from 'next/image';
import React from 'react';
import CourtHeader from './components/CourtHeader';
import CourtReservation from './components/CourtReservation';

const getCourtDetails = async (courtId: string) => {
  const court = await prisma.court.findUnique({
    where: {
      id: courtId,
    },
  });
  return court;
};


const CourtDetails = async ({ params }: { params: { courtId: string } }) => {
  const court = await getCourtDetails(params.courtId)

  if(!court) return null;

  return (
    <div className='container mx-auto'>

      <CourtHeader court={court}/>

    {/*  RESERVA */}
    <CourtReservation court={court}/>

    </div>
  )
}

export default CourtDetails;