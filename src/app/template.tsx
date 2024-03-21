import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React, { Children } from "react";

export default function Template ({children}:Readonly<{children:React.ReactNode}>){
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}