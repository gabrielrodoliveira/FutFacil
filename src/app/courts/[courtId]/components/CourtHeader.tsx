import React from "react";
import ReactCountryFlag from "react-country-flag";
import Image from "next/image";
import { Court } from "@prisma/client";

interface CourtHeaderProps {
    court: Court;
}

const CourtHeader = ({ court }: CourtHeaderProps) => {
    return (
        <div className="flex flex-col">
            <div className="relative h-[300px] w-full lg:hidden">
                <Image
                    src={court.coverImage}
                    fill
                    style={{
                        objectFit: "cover",
                    }}
                    alt={court.name}
                />
            </div>

            <div className="hidden lg:grid grid-cols-[2fr,1fr,1fr] gap-2 grid-rows-2 lg:order-2">
                <div className="relative row-span-2">
                    <Image
                        src={court.coverImage}
                        fill
                        style={{
                            objectFit: "cover",
                        }}
                        alt={court.name}
                        className="rounded-tl-lg rounded-bl-lg shadow-md"
                    />
                </div>

                <div className="relative h-[200px] w-full">
                    <Image
                        src={court.imagesUrl[0]}
                        fill
                        style={{
                            objectFit: "cover",
                        }}
                        alt={court.name}
                        className="shadow-md"
                    />
                </div>

                <div className="relative h-[200px] w-full">
                    <Image
                        src={court.imagesUrl[1]}
                        fill
                        style={{
                            objectFit: "cover",
                        }}
                        alt={court.name}
                        className="shadow-md  rounded-tr-lg"
                    />
                </div>

                <div className="relative h-[200px] w-full">
                    <Image
                        src={court.imagesUrl[2]}
                        fill
                        style={{
                            objectFit: "cover",
                        }}
                        alt={court.name}
                        className="shadow-md"
                    />
                </div>

                <div className="relative h-[200px] w-full">
                    <Image
                        src={court.coverImage}
                        fill
                        style={{
                            objectFit: "cover",
                        }}
                        alt={court.name}
                        className="shadow-md  rounded-br-lg"
                    />
                </div>
            </div>

            {/* TÍTULO E INFORMAÇÕES */}
            <div className="flex flex-col p-5 lg:order-1 lg:p-0 lg:mb-10">
                <h1 className="font-semibold text-xl lg:text-3xl text-primaryDarker">{court.name}</h1>

                <div className="flex items-center gap-1 my-1">
                    <p className="text-xs lg:text-base text-grayPrimary underline">{court.location}</p>
                </div>

                <p className="text-xs text-grayPrimary lg:hidden">
                    <span className='text-primary font-medium'>R$ {court.priceReservation.toString()}</span> por dia
                </p>
            </div>
        </div>
    );
};

export default CourtHeader;