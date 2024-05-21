'use client'

// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";
import { ReactNode } from "react";
interface providersProps{
    children:React.ReactNode
}
export default function Providers({children}:providersProps ) {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider>
     {children}
    </NextUIProvider>
  );
}