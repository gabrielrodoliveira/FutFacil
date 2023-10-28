'use client';
import Image from 'next/image';
import { Court } from "@prisma/client";
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const CourtConfirmation = ({ params }: { params: { courtId: string } }) => {
    const [court, setCourt] = useState<Court | null>();

    const searchParams = useSearchParams()

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
    
        fetchCourt()
    }, []);

    console.log({ court });

    if (!court) return null;

    return (
        <div className="container mx-auto p-5">
            <h1 className='font-semibold text-xl text-primary'>Sua reserva {court.description}</h1>
            <div className="flex flex-col">
                <div className="relative h-[106px] w-[124px]">
                    <Image src={court.coverImage} fill style={{ objectFit: "cover", }} alt={court.name} />
                </div>
            </div>
        </div>
    )
}

export default CourtConfirmation;
