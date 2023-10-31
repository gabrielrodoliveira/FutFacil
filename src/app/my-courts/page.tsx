'use client'

import { CourtReservation, Prisma } from '@prisma/client';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import UserReservationItem from './components/UserReservationItem';
import Link from 'next/link';
import Button from '@/components/Button';


const MyCourts = () => {

  const [reservations, setReservations] = useState<
    Prisma.CourtReservationGetPayload<{
      include: { court: true }
    }>[]
  >([])

  const { status, data } = useSession();

  const router = useRouter();

  const fetchReservations = async () => {
    const response = await fetch(`/api/user/${(data?.user as any)?.id}/reservations`);

    const json = await response.json();

    setReservations(json);
  };

  useEffect(() => {
    if (status === 'unauthenticated') {
      return router.push('/')
    }

    const fetchReservations = async () => {
      const response = await fetch(`http://localhost:3000/api/user/${(data?.user as any)?.id}/reservations`);
      const json = await response.json();
      setReservations(json);
      console.log(json);
    };

    fetchReservations();

  }, [status])

  return (
    <div className="container mx-auto p-5">
      <h1 className='font-semibold text-primaryDarker text-xl'>Minhas reservas</h1>
      {reservations.length > 0 ? reservations?.map((reservation)=>(
        <UserReservationItem fetchReservations={fetchReservations} key={reservation.id} reservation={reservation}/>
      )) : 
        <div className="flex flex-col">
          <p className='mt-2 font-medium text-primaryDarker'> Você não tem nenhuma reserva!</p>
          <Link href='/'>
            <Button className='w-full m-2'> Fazer Reserva</Button>
          </Link>
        </div>
      }
    </div>
  )
}

export default MyCourts