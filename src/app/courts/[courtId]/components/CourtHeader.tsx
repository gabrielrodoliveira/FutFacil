import React from 'react';
import { prisma } from '@/lib/prisma';
import Image from 'next/image';
import { Court } from '@prisma/client';


interface CourtHeaderProps{
    court: Court
}

const CourtHeader = ({court}: CourtHeaderProps) => {
    return (
        <div className="flex flex-col">
            <div className="relative h-[300px] w-full">
                <Image src={court?.coverImage} fill style={{ objectFit: "cover", }} alt={court.name} />
            </div>

            {/* TITULO E INFORMAÇÕES */}
            <div className="flex flex-col p-5">
                <h1 className='font-semibold text-xl text-primary'>{court.name}</h1>

                <div className="flex items-center gap-1">
                    <p className='text-xs text-grayPrimary underline'>{court.location}</p>
                </div>

                <p className='text-xs text-grayPrimary'>
                    <span className='text-primary font-medium'>R$ {court.priceReservation.toString()}</span> por dia
                </p>

            </div>
        </div>
    )
}

export default CourtHeader