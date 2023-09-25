import React from 'react'
import Image from "next/image";

const QuickSearch = () => {
  return (
    <div className='container mx-auto px-5'>
        <div className="flex items-center">
            <div className="w-full h-[2px] bg-grayPrimary"></div>
            <h2 className='px-5 font-medium text-grayPrimary whitespace-nowrap'>Tente pesquisar por</h2>
            <div className="w-full h-[2px] bg-grayPrimary"></div>
        </div>

        <div className="flex w-fill justify-between mt-5">
            <div className="flex flex-col items-center gap-1">
                <Image width={35} height={35} src="/bola-de-futebol.png" alt='futebol'/>
                <p className='text-sm text-grayLighter'>Futebol</p>
            </div>

            <div className="flex flex-col items-center gap-1">
                <Image width={35} height={35} src="/futevolei.png" alt='futevolei'/>
                <p className='text-sm text-grayLighter'>Futevôlei</p>
            </div>

            <div className="flex flex-col items-center gap-1">
                <Image width={35} height={35} src="/tenis.png" alt='beach tennis'/>
                <p className='text-sm text-grayLighter'>Beach Tennis</p>
            </div>

            <div className="flex flex-col items-center gap-1">
                <Image width={35} height={35} src="/volei-de-praia.png" alt='volei de praia'/>
                <p className='text-sm text-grayLighter'>Volei de Praia</p>
            </div>

        </div>
    </div>
  )
}

export default QuickSearch