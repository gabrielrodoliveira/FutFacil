'use client'

import DatePicker from '@/components/DatePicker';
import React, { useState } from 'react';
import { Court } from '@prisma/client';
import TimeListButton from '@/components/TimeListButton';
import Button from '@/components/Button';
import { useForm } from "react-hook-form";
import Input from '@/components/Input';

interface CourtReservationForm{
  hours: string;
}

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
  const [selectedHorario, setSelectedHorario] = useState<string | null>(null);
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
   } = useForm<CourtReservationForm>();

  const onSubmit = (data: any) => {
    console.log({ data })
  }


  return (

    <div className="flex flex-col px-5">
      <div className="flex gap-4">
        <DatePicker placeholderText='Data disponivel' onChange={() => { }} className='w-full' />
      </div>

      <TimeListButton className="w-full mt-4 text-primary" times={horarios} onTimeSelect={setSelectedHorario} />
      <Input
        {...register('hours', {
          required: {
            value: true,
            message: 'Horário é obrigatório'
          },
        })}
        placeholder='Horário da Reserva'
        error={!!errors?.hours} 
        errorMessage={errors?.hours?.message} 
        />

      <div className="flex justify-between mt-3">
        <p className='font-medium text-sm text-primary'>Total: </p>
        {/* <label className="mt-3 text-primary">{selectedHorario}</label> */}
        <p className='font-medium text-sm text-primary'>R$ {court.priceReservation.toString()} </p>
      </div>

      <div className='pb-10 border-b border-l-grayLighter w-full'>
        <Button onClick={() => handleSubmit(onSubmit)()} className='mt-3 w-full'>Reservar agora</Button>
      </div>

      {/* <label className="mt-3 text-primary">Horário selecionado:</label> */}
      {/* <input {...register('hours', { required: true })} type="text" value={selectedHorario || ''} readOnly className="border-b-2 border-primary" /> */}

    </div>

  )
}

export default CourtReservation