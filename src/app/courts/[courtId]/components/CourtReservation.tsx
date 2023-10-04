'use client'

import DatePicker from '@/components/DatePicker'
import Input from '@/components/Input'
import React from 'react'
import { Court } from '@prisma/client';
import CurrencyInput from 'react-currency-input-field'


interface CourtReservationProps{
    court: Court
}

const CourtReservation = ({court}: CourtReservationProps) => {
  return (
    <div>
        <div className="flex flex-col px-5">
            <div className="flex gap-4">
                <DatePicker placeholderText='Data disponivel' onChange={() => {}} className='w-full'/>
            </div>

            <Input placeholder='Valor' className='mt-4'/>

        </div>
    </div>
  )
}

export default CourtReservation