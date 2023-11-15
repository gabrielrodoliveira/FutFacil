import Button from '@/components/Button';
import CurrencyInput from '@/components/CurrencyInput';
import DatePicker from '@/components/DatePicker';
import Input from '@/components/Input'
import { useRouter } from 'next/navigation';
import React from 'react'
import { Controller, useForm } from 'react-hook-form';


interface CourtSearchForm {
  text: string;
  dateReservation: Date | null;
  budget: number;
}


const CourtSearch = () => {
  const router = useRouter();

  const {
    control,
    formState: { errors },
    register,
    handleSubmit
  } = useForm<CourtSearchForm>();

  const onSubmit = (data: CourtSearchForm) => {
    console.log('Oi', data)
    router.push(`/courts/search?text=${data.text}&dateReservation=${data.dateReservation?.toISOString()}&budget=${data.budget}`)

  }


  return (
    <div className="container mx-auto p-5 bg-search-background bg-cover bg-center bg-no-repeat lg:py-28">
      <h1 className='font-semibold text-2xl text-grayPrimary text-center lg:text-[2.5rem]'>
        Encontre a sua <span className='text-primary'>quadra!</span>
      </h1>

      <div className="flex flex-col gap-4 mt-5 lg:flex-row lg:max-w-[948px] lg:mx-auto lg:p-4 lg:bg-primary lg:mt-12 lg:bg-opacity-20 lg:rounded-lg">
        <Input
          placeholder='Onde você quer jogar?'

          {...register('text', {
            required: {
              value: true,
              message: "Texto é obrigatório"
            }
          })} />

        <div className="flex gap-4 lg:w-full">
          <Controller
            name="dateReservation"
            control={control}
            render={({ field }) => (
              <DatePicker

                onChange={field.onChange}
                selected={field.value}
                placeholderText='Data disponivel'
                className='w-full'
                minDate={new Date()} />)}
          />

          <Controller
            name="budget"
            control={control}
            render={({ field }) => (
              <CurrencyInput placeholder='Valor' onValueChange={field.onChange} value={field.value} onBlur={field.onBlur} />)}
          />



        </div>

        <Button onClick={() => handleSubmit(onSubmit)()} className="w-full lg:h-fit">
          Buscar
        </Button>
      </div>
    </div>
  )
}

export default CourtSearch;