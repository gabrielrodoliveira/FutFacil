import Image from 'next/image'
import React from 'react'

const CourtConfirmation = ({ params }: { params: { courtId: string } }) => {
    return (
        <div className="container mx-auto p-5">
            <h1 className='font-semibold text-xl text-primary'>Sua reserva</h1>
            <div className="flex flex-col">
                <div className="relative h-[106px] w-[124px]">
                    <Image />
                </div>
            </div>
        </div>
    )
}

export default CourtConfirmation