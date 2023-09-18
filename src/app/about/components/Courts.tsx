import { prisma } from '@/lib/prisma'
import React, { useState } from 'react'

const getCourts = async () => {
    const courts = await prisma.court.findMany({});

    return courts;
}

const Courts = async () => {
  const data = await getCourts();
  console.log({data})
  return (
    <div>Quadras</div>
  )
}

export default Courts;