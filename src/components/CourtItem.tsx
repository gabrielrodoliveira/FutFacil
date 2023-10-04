import React from 'react';
import { Court } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

interface CourtItemProps {
  court: Court;
}

const CourtItem = ({ court }: CourtItemProps) => {
  return (
    <Link href={`/courts/${court.id}`}>
      <div className="flex flex-col">

        <div className="relative h-[280px] w-[280px]">
          <Image src={court.coverImage} className='rounded-lg shadow-md' style={{ objectFit: "cover", }} fill alt='{court.name}' />
        </div>


        <h3 className='text-primary font-medium text-sm mt-2'>{court.name}</h3>
        <div className="flex items-center gap-1">
          <p className='text-xs text-grayPrimary'>{court.location}</p>
        </div>
        <p className='text-xs text-grayPrimary'> <span className='text-primary font-medium'>R${court.priceReservation.toString()}</span>/2h</p>
      </div>
    </Link>
  );
};

export default CourtItem;