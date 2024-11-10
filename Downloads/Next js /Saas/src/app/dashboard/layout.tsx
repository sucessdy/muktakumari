import { ReactNode } from "react";
import NavBar  from "@/app/dashboard/_components/NavBar"
import { ClerkProvider } from "@clerk/nextjs";


export default function layout({children} : {children :ReactNode}) {
  return (
    <ClerkProvider> 
    <div className="bg-accent/15  min-h-screen"> 
    <NavBar/>
    <div className="container py-6"> {children}</div>
    </div>
    </ClerkProvider>
  )
}
