import Button from '@/components/Button';
import CurrencyInput from '@/components/CurrencyInput';
import DatePicker from '@/components/DatePicker';
import Input from '@/components/Input'
import React from 'react'

const CourtSearch = () => {
  return (
    <div className="container mx-auto p-5 bg-search-background bg-cover bg-center bg-no-repeat">
        <h1 className='font-semibold text-2xl text-grayPrimary text-center'>
            Encontre a sua <span className='text-primary'>quadra!</span> 
        </h1>

        <div className="flex flex-col gap-4 mt-5">
            <Input placeholder='Onde você quer jogar?'/>

            <div className="flex gap-4">
                <DatePicker placeholderText='Data disponível' onChange={() => {}} className='w-full'/>
                <CurrencyInput placeholder='Valor' />
            </div>

            <Button>
              Buscar
            </Button>
        </div>
    </div>
  )
}

export default CourtSearch;