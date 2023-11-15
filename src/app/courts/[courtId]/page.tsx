import { prisma } from '@/lib/prisma';
import Image from 'next/image';
import React from 'react';
import CourtHeader from './components/CourtHeader';
import CourtReservation from './components/CourtReservation';
import CourtDescription from './components/CourtDescription';
import CourtHighlights from './components/CourtHighlights';
import CourtLocation from './components/CourtLocation';

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

  if (!court) return null;

  return (





    <div className="container mx-auto lg:px-40 lg:pt-10">
      <CourtHeader court={court} />
      <div className="flex flex-col lg:flex-row lg:mt-12 lg:gap-20">
        <div className="lg:order-2">
          <CourtReservation courtId={court.id} priceReservation={court.priceReservation as any} />
        </div>

        <div className="lg:order-1">
          <CourtDescription description={court.description} />
          <CourtHighlights highlights={court.highlights} />
        </div>
      </div>
      <CourtLocation linkMaps={court.linkMaps} location={court.location} descriptionLocation={court.description} />
    </div>
  );
};


export default CourtDetails;