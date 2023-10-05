'use client'

import DatePicker from '@/components/DatePicker'
import React from 'react'
import { Court } from '@prisma/client';
import TimeListButton from '@/components/TimeListButton';



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
    <div>
      <div className="flex flex-col px-5">
        <div className="flex gap-4">
          <DatePicker placeholderText='Data disponivel' onChange={() => { }} className='w-full' />
        </div>


        <TimeListButton className="my-4 text-primary" times={horarios} />

      </div>

    </div>
  )
}

export default CourtReservation