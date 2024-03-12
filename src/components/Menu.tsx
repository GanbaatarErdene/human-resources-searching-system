"use client";

import { Image } from "@nextui-org/image";
import Link from "next/link";
import { Filter, Tv2, UserPlus, Users } from "lucide-react";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import React, { useState } from "react";
import FilterDrawer from "./FilterDrawer";

export default function Menu() { 
    const [isOpen, setIsOpen] = React.useState(false)
    const [isMenu, setIsMenu] = useState(true);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <div className="fixed block top-0 left-0 mt-[calc(_87px)] ml-[calc(_12px)] h-[calc(100vh_-_100px)] w-100  bg-white
         shadow-xl rounded-lg z-50">
            <div className="flex justify-center py-5">
                <Image
                    width={200}
                    height={200}
                    alt="NextUI hero Image with delay"
                    src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                    
                />
            </div>

            <div className="grid grid-cols-1">
                <div className="w-[calc(40vh_-_40px)] h-[calc(90vh_-_90px)]">

                    <div>
                        <p className="ps-5 pt-10 pb-3 font-thin text-gray-400 text-xs">HMRIS</p>

                        <Link
                            className="flex ms-5 text-slate-600 font-mono hover:text-blue-700 gap-3 items-center"
                            href="/dashboard"
                        >
                            <Tv2 size={'20'} /> Хянах самбар
                        </Link>
                    </div>
                
                    <div>
                        <p className="ps-5 pt-10 pb-3 font-thin text-gray-400 text-xs">APPS</p>

                        <Link
                            className="flex ms-5 mb-5 text-slate-600 font-mono hover:text-blue-700 gap-3 items-center"
                            href="/"
                        >
                            <Users size={20} /> Ажилчдын мэдээлэл
                        </Link>

                        <button className="flex ms-5 mb-5 text-slate-600 font-mono hover:text-blue-700 gap-3 items-center" onClick={toggleDrawer}><Filter size={20} /> Шүүлтүүр</button>
                        <Drawer
                            open={isOpen}
                            onClose={toggleDrawer}
                            direction='right'
                            className=''
                            size={550}
                        >
                            <div className=""><FilterDrawer /></div>   
                        </Drawer>

                        <Link
                            className="flex ms-5 text-slate-600 font-mono hover:text-blue-700 gap-3 items-center"
                            href="/user-add"
                        >
                            <UserPlus size={20} /> Хүний нөөцийн ажилтан нэмэх
                        </Link>

                    </div>

                </div>
            </div>

        </div>
    );
}



