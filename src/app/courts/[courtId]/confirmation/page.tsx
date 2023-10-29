'use client';
import Image from 'next/image';
import { Court } from "@prisma/client";
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { format } from 'date-fns';
import ptBR from "date-fns/locale/pt-BR";
import Button from '@/components/Button';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


const CourtConfirmation = ({ params }: { params: { courtId: string } }) => {
    const [court, setCourt] = useState<Court | null>();

    const router = useRouter();

    const searchParams = useSearchParams()

    const {status} =useSession();

    const dateReservation = searchParams.get('dateReservation');
    const timeReservation = searchParams.get('timeReservation');

    useEffect(() => {
        const fetchCourt = async () => {
            const requestBody = {
                courtId: params.courtId,
                dateReservation,
                timeReservation,
            };

            const response = await fetch(`http://localhost:3000/api/courts/check`, {
                method: 'POST',
                body: JSON.stringify(requestBody),
            });

            console.log('Request Body:', requestBody); // Log the request body

            response.json()
                .then(data => {
                    console.log('Response:', data); // Log the response
                    setCourt(data.court); // Atualize o estado 'court' com a resposta
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        };

        if(status ==='unauthenticated'){
            router.push('/')
        }

        fetchCourt()
    }, [status]);

    console.log({ court });

    if (!court) return null;

    const dateReserve = new Date(searchParams.get('dateReservation') as string);

    return (
        <div className="container mx-auto p-5">
            <h1 className='font-semibold text-xl text-primary'>Sua reserva</h1>

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
                    <p>R$ {court.priceReservation as any}</p>
                </div>
                <div className="flex justify-between mt-2">
                    <p className=' text-primaryDarker'>Data: </p>
                    <p>{format(dateReserve, "dd 'de' MMMM", { locale: ptBR })}</p>
                </div>
                <div className="flex justify-between mt-2">
                    <p className=' text-primaryDarker'>Horário: </p>
                    <p>{timeReservation}</p>
                </div>

                <Button className='mt-5'>Finalizar Reserva</Button>
            </div>
        </div>
    )
}

export default CourtConfirmation;
