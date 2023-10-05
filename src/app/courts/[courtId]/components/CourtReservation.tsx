'use client'

import DatePicker from '@/components/DatePicker'
import React from 'react'
import { Court } from '@prisma/client';
import TimeListButton from '@/components/TimeListButton';
import Button from '@/components/Button';



interface CourtReservationProps {
  court: Court
}

const horarios = [
  "08h00 - 10h00",
  "10h00 - 12h00",
  "12h00 - 14h00",
  "14h00 - 16h00",
  "16h00 - 18h00",
  "18h00 - 20h00",
  "20h00 - 22h00"
];

const CourtReservation = ({ court }: CourtReservationProps) => {
  return (

      <div className="flex flex-col px-5">
        <div className="flex gap-4">
          <DatePicker placeholderText='Data disponivel' onChange={() => { }} className='w-full' />
        </div>
        <TimeListButton className="my-4 text-primary" times={horarios} />

        <div className="flex justify-between mt-3">
          <p className='font-medium text-sm text-primary'>Total: </p>
          <p className='font-medium text-sm text-primary'>R$ {court.priceReservation.toString()} </p>
        </div>

        <div className='pb-10 border-b border-l-grayLighter w-full'>
        <Button className='mt-3 w-full'>Reservar agora</Button>
        </div>
      </div>

  )
}

export default CourtReservation