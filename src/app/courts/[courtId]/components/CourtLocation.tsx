import Button from '@/components/Button';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'


interface CourtLocationProps {
    location: string;
    descriptionLocation: string
    linkMaps: string
}


const CourtLocation = ({ location, descriptionLocation, linkMaps }: CourtLocationProps) => {
    return (
        <div className='p-5'>
            <h2 className="font-semibold text-primaryDarker mb-5 ">Localização</h2>
            <div className="relative h-[280px] w-full">
                <Link href='/' target="_blank">
                    <Image src="/map-mobile.png" alt={location} fill style={{ objectFit: "cover", }} className='rounded-lg shadow-md' />
                </Link>
            </div>

            <h3 className='text-grayPrimary text-sm font-semibold mt-3'>{location}</h3>
            <p className='text-xs text-grayPrimary mt-2 leading-5 text-justify'>{descriptionLocation}</p>

            <Link href='/' target="_blank">
                <Button variant='outlined' className='w-full mt-5'>Ver no Google Maps</Button>
            </Link>
        </div>
    )
}

export default CourtLocation