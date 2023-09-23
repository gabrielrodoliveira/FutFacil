"use client"; //por ser um client component não pode remover essa linha

import { SessionProvider } from "next-auth/react";

type Props = {
    children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => { 
    return <SessionProvider>{children}</SessionProvider>
}