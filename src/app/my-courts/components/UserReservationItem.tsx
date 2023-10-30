import { CourtReservation, Prisma } from '@prisma/client';
import Image from 'next/image';
import React from 'react';
import ptBR from "date-fns/locale/pt-BR";
import { format } from 'date-fns';
import Button from '@/components/Button';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';


interface UserReservationProps {
    reservation: Prisma.CourtReservationGetPayload<{
        include: { court: true }
    }>
    fetchReservations: () => void;
}

const UserReservationItem = ({ reservation, fetchReservations  }: UserReservationProps) => {
    const router = useRouter()
    const { court } = reservation

    const handleDeleteClick = async () => {
        const res = await fetch(`/api/courts/reservation/${reservation.id}`, {
            method: 'DELETE'
        })

        if (!res.ok) {
            toast.success('Ocorreu um erro ao cancelar a reserva', {position: 'bottom-center'})

        }

        toast.success('Reserva cancelada com sucesso', {position: 'bottom-center'})

        fetchReservations();
    }

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
                    <p className=' text-primaryDarker text-sm'>Data: </p>
                    {reservation.dateReservation ? (
                        <p className='text-sm'>{format(new Date(reservation.dateReservation), "dd 'de' MMMM", { locale: ptBR })}</p>
                    ) : (
                        <p className='text-sm'>Data inválida</p>
                    )}
                </div>

                <div className="flex justify-between mt-2">
                    <p className=' text-primaryDarker text-sm'>Horário: </p>
                    <p className='text-sm'>{reservation.timeReservation}</p>
                </div>
                <div className="flex justify-between mt-2">
                    <p className=' text-primaryDarker text-sm'>Valor: </p>
                    <p className='text-sm'>R$ {Number(reservation.priceReservation) as any}</p>
                </div>

                <Button variant='danger' className='mt-5' onClick={handleDeleteClick}>
                    Cancelar Reserva
                </Button>

            </div>
        </div>
    )
}

export default UserReservationItem