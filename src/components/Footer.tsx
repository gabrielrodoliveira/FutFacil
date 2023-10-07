import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-walterWhite p-5 justify-center flex flex-col items-center'>
        <Image src="/logo.png" width={133} height={23} alt="FutFácil" />
        <p className='text-sm font-medium text-primaryDarker'>Todos os direitos reservados.</p>
    </div>
  )
}

export default Footer