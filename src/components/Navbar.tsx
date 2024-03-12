"use client"

import React from "react";
import { Image, Input, User } from "@nextui-org/react";
import { Avatar, } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/dropdown";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex fixed top-0 left-0 w-full bg-white shadow-sm p-2 justify-between items-center px-10">
            <div className="flex items-center">
                <Link href="/">
                    <Image
                        width={220}
                        alt="NextUI Logo"
                        src="/uploads/logo3.PNG"
                        className="rounded-full"
                    />
                </Link>
            </div>

            <div className="flex items-center">
                <div>
                    <Input size={'sm'} style={{ width: '300px' }} type="email" label="Search" className="pr-10" />
                </div>              
                <div className="flex items-center gap-4">
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                                className=""
                                isBordered
                                as="button"
                                size="md"
                                color="primary"
                                src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                                alt="User Avatar"
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat">                          
                            <DropdownItem key="logout" color="primary" href="/login">
                                <p className="text-red-500">Гарах</p>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
}
