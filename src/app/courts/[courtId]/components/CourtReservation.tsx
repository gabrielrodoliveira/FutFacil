'use client'

import DatePicker from '@/components/DatePicker';
import React, { useState } from 'react';
import Button from '@/components/Button';
import { Controller, useForm } from "react-hook-form";
import Input from '@/components/Input';
import { useRouter } from 'next/navigation';
import Select from 'react-select';


interface CourtReservationProps {
  courtId: string;
  priceReservation: number;
}

interface CourtReservationForm {
  hours: string;
  dateReservation: Date | null;
  timeReservation: string;
}


const horarios = [
  { value: "08h00 - 10h00", label: "08h00 - 10h00" },
  { value: "10h00 - 12h00", label: "10h00 - 12h00" },
  { value: "12h00 - 14h00", label: "12h00 - 14h00" },
  { value: "14h00 - 16h00", label: "14h00 - 16h00" },
  { value: "16h00 - 18h00", label: "16h00 - 18h00" },
  { value: "18h00 - 20h00", label: "18h00 - 20h00" },
  { value: "20h00 - 22h00", label: "20h00 - 22h00" },

];

const CourtReservation = ({ courtId, priceReservation }: CourtReservationProps) => {
  const [selectedHorario, setSelectedHorario] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    control,
    setValue
  } = useForm<CourtReservationForm>();



  const router = useRouter();

  const onSubmit = async (data: CourtReservationForm) => {
    const response = await fetch('http://localhost:3000/api/courts/check', {
      method: 'POST',
      body: Buffer.from(
        JSON.stringify({
          dateReservation: data.dateReservation,
          timeReservation: data.timeReservation,
          courtId
        })
      ),
    });


    const res = await response.json();

    console.log({ res })

    if (res?.error?.code === 'COURT_ALREADY_RESERVED') {
      setError("dateReservation", {
        type: "manual",
        message: "Essa data já está reservada"
      });
      return setError("timeReservation", {
        type: "manual",
        message: "Esse horário já está reservado"
      });
    }

    router.push(
      `/courts/${courtId}/confirmation?dateReservation=${data.dateReservation?.toISOString()}&timeReservation=${data.timeReservation}`
    );
  };


  return (

    <div className="flex flex-col px-5">
      <div className="flex gap-4">


        <Controller
          name="dateReservation"
          rules={{
            required: {
              value: true,
              message: "Data da reserva é obrigatório",
            },
          }}
          control={control}
          render={({ field }) => (
            <DatePicker
              error={!!errors?.dateReservation}
              errorMessage={errors?.dateReservation?.message}
              onChange={field.onChange}
              selected={field.value}
              placeholderText='Data disponivel'
              className='w-full'
              minDate={new Date()} />)}
        />
      </div>


      <Select
        name='setTime'
        className='mb-3 mt-3'
        placeholder='Horário da Reserva'
        isSearchable
        onChange={(selectedOption) => {
          const selectedValue = selectedOption?.value ?? null;
          setSelectedHorario(selectedValue);
          setValue('timeReservation', selectedValue !== null ? selectedValue : '');
        }}
        options={horarios}
      />

      <Input
        {...register('timeReservation', {
          required: {
            value: true,
            message: 'Horário é obrigatório'
          },
        })}
        placeholder='Horário da Reserva'
        error={!!errors?.timeReservation}
        errorMessage={errors?.timeReservation?.message}
      />


      <div className="flex justify-between mt-3">
        <p className='font-medium text-sm text-primary'>Total: </p>
        <p className='font-medium text-sm text-primary'>R$ {priceReservation.toString()} </p>
      </div>

      <div className='pb-10 border-b border-l-grayLighter w-full'>
        <Button onClick={() => handleSubmit(onSubmit)()} className='mt-3 w-full'>Reservar agora</Button>
      </div>
    </div>

  )
}

export default CourtReservation