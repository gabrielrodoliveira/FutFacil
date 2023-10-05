import React from 'react'

interface CourtDescriptionProps{
    description: string
}


const CourtDescription = ({description}: CourtDescriptionProps) => {
  return (
    <div className="flex flex-col p-5">
        <h2 className='font-semibold text-primary'>Sobre a quadra</h2>
        <p className='text-xs leading-5 text-black mt-1'>{description}</p>
    </div>
  )
}

export default CourtDescription