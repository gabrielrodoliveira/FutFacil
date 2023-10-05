import { prisma } from '@/lib/prisma';
import Image from 'next/image';
import React from 'react';
import CourtHeader from './components/CourtHeader';
import CourtReservation from './components/CourtReservation';
import CourtDescription from './components/CourtDescription';
import CourtHighlights from './components/CourtHighlights';

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
    <CourtDescription description={court.description}/>
    <CourtHighlights highlights={court.highlights}/>
    </div>
  )
}

export default CourtDetails;