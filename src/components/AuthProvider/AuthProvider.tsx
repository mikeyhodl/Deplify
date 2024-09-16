"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

interface ProviderProps {
  children: ReactNode;
  session: any; // You may want to replace 'any' with the actual type of session
}

export default function Provider({ children, session }: ProviderProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
