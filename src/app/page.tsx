"use client"; //por ser um client component não pode remover essa linha

import Image from 'next/image'
import { Inter } from "next/font/google";
import { signIn, signOut, useSession } from 'next-auth/react';


export default function Home() {
  const { data } = useSession()

  return (  
  <div>
      
  </div>
 );
}
