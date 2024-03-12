"use client"

import { Filter } from "lucide-react";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { Button, ButtonGroup } from "@nextui-org/button";
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";


export default function FilterDrawer() {
    return (
        <div className="m-3">
            <p className="flex my-5 text-slate-600 font-bold gap-3 items-center justify-center text-xl"><Filter size={20} />Шүүлтүүр</p>

            <ScrollShadow hideScrollBar className="w-full h-[600px] ">
                <div>
                    <Accordion selectionMode="multiple">
                        <AccordionItem key="1" aria-label="Accordion 1" title="Насны ангилал нэмэх">

                            <CheckboxGroup defaultValue={[""]} className="">
                                <div className="flex flex-wrap justify-around gap-5">
                                    <div className="flex flex-col">
                                        <Checkbox value="1">18-25</Checkbox>
                                        <Checkbox value="2">36-45</Checkbox>
                                    </div>
                                    <div className="flex flex-col">
                                        <Checkbox value="3">26-35</Checkbox>
                                        <Checkbox value="4">45-60</Checkbox>
                                    </div>
                                </div>
                            </CheckboxGroup>

                        </AccordionItem>
                        <AccordionItem key="2" aria-label="Accordion 2" title="Хүйсны ангилал нэмэх">

                            <CheckboxGroup defaultValue={[""]} className="">
                                <div className="flex flex-wrap justify-around gap-5">
                                    <div className="flex flex-col">
                                        <Checkbox value="1">Эрэгтэй</Checkbox>
                                    </div>
                                    <div className="flex flex-col">
                                        <Checkbox value="2">Эмэгтэй</Checkbox>
                                    </div>
                                </div>
                            </CheckboxGroup>

                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Accordion 3" title="Боловсрол">

                            <CheckboxGroup defaultValue={[""]} className="">
                                <div className="flex flex-wrap justify-around gap-5">
                                    <div className="flex flex-col">
                                        <Checkbox value="1">Бүрэн дунд</Checkbox>
                                        <Checkbox value="2">Баклавар</Checkbox>
                                    </div>
                                    <div className="flex flex-col">
                                        <Checkbox value="3">Магистар</Checkbox>
                                        <Checkbox value="4">Доктор</Checkbox>
                                    </div>
                                </div>
                            </CheckboxGroup>

                        </AccordionItem>
                        <AccordionItem key="4" aria-label="Accordion 4" title="Албан тушаалын шатлал">
                            ene talbariig hasna
                        </AccordionItem>
                        <AccordionItem key="5" aria-label="Accordion 5" title="Ажилласан жил">
                            Ene talbariig bodoj vzne
                        </AccordionItem>
                        <AccordionItem key="6" aria-label="Accordion 6" title="Гэр бүлийн гишүүд">

                            <CheckboxGroup defaultValue={[""]} className="">
                                <div className="flex flex-wrap justify-around gap-5">
                                    <div className="flex flex-col">
                                        <Checkbox value="1">1</Checkbox>
                                        <Checkbox value="2">2</Checkbox>
                                        <Checkbox value="3">3</Checkbox>
                                        <Checkbox value="4">4</Checkbox>
                                    </div>
                                    <div className="flex flex-col">
                                        <Checkbox value="5">5</Checkbox>
                                        <Checkbox value="6">6</Checkbox>
                                        <Checkbox value="7">7</Checkbox>
                                        <Checkbox value="8">8</Checkbox>
                                    </div>
                                </div>
                            </CheckboxGroup>

                        </AccordionItem>
                        <AccordionItem key="7" aria-label="Accordion 7" title="Шагнал">
                            Ene talbariig bodoj vzne
                        </AccordionItem>
                        <AccordionItem key="8" aria-label="Accordion 8" title="Хэл">

                            <CheckboxGroup defaultValue={[""]} className="">
                                <div className="flex flex-wrap justify-around gap-5">
                                    <div className="flex flex-col">
                                        <Checkbox value="1">Англи</Checkbox>
                                        <Checkbox value="2">Франц</Checkbox>
                                        <Checkbox value="3">Япон</Checkbox>
                                    </div>
                                    <div className="flex flex-col">
                                        <Checkbox value="4">Хятад</Checkbox>
                                        <Checkbox value="5">Орос</Checkbox>
                                        <Checkbox value="6">герман</Checkbox>
                                    </div>
                                </div>
                            </CheckboxGroup>

                        </AccordionItem>
                    </Accordion>
                </div>
                <Button style={{ width: '510px' }} className="ml-2 my-6" color="primary" variant="shadow">
                    Хайх
                </Button>
            </ScrollShadow>


        </div>
    );
}
