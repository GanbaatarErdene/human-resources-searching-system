"use client"


import { useContext } from "react";

import {ScrollShadow} from "@nextui-org/react";
import Navbar from "../Navbar";
import Menu from "../Menu";


export default function ContentLayout({ children }: { children: any }) {

    return (
        <div className="flex-row flex-grow bg-gray-100">
            <Navbar />
            <Menu />
            <div className="mt-[calc(_90px)] mb-5 ms-[calc(_286px)] w-[calc(100vw_-_310px)] h-[calc(100vh_-_110px)] bg-white rounded-sm p-8">
                 {children}
            </div>
            
        </div>
    )
}