import { CourtReservation, Prisma } from '@prisma/client';
import Image from 'next/image';
import React from 'react';
import ptBR from "date-fns/locale/pt-BR";
import { format } from 'date-fns';


interface UserReservationProps {
    reservation: Prisma.CourtReservationGetPayload<{
        include: { court: true }
    }>
}

const UserReservationItem = ({ reservation }: UserReservationProps) => {
    const { court } = reservation
    return (
        <div>

            <div className="flex flex-col p-5 mt-5 border-grayLighter border-solid border shadow-lg rounded-lg">
                <div className="flex items-center gap-3 pb-5 border-b border-grayLighter border-solid ">
                    <div className="relative h-[106px] w-[124px]">
                        <Image src={court.coverImage} fill style={{ objectFit: "cover", }} className='rounded-lg' alt={court.name} />
                    </div>

                    <div className="flex flex-col">
                        <h2 className='text-xl text-primaryDarker font-semibold'>{court.name}</h2>
                        <div className="flex items-center gap-1">
                            <p className='text-xs text-grayPrimary underline'>{court.location}</p>
                        </div>
                    </div>
                </div>

                <h3 className='font-semibold text-lg text-primaryDarker mt-4'>Informações sobre a reserva</h3>
                <div className="flex justify-between mt-2">
                    <p className=' text-primaryDarker'>Valor: </p>
                    <p>R$ {reservation.priceReservation as any}</p>
                </div>
                <div className="flex justify-between mt-2">
                    <p className=' text-primaryDarker'>Data: </p>
                    {reservation.dateReservation ? (
                        <p>{format(new Date(reservation.dateReservation), "dd 'de' MMMM", { locale: ptBR })}</p>
                    ) : (
                        <p>Data inválida</p>
                    )}
                </div>

                <div className="flex justify-between mt-2">
                    <p className=' text-primaryDarker'>Horário: </p>
                    <p>{reservation.timeReservation}</p>
                </div>


            </div>
        </div>
    )
}

export default UserReservationItem