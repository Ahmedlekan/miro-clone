"use client"

import React from 'react'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {Accordion,AccordionContent,AccordionItem,AccordionTrigger} from "@/components/ui/accordion";
import { BarChart, Building2, Code, Code2Icon, DollarSign, Download, GraduationCap, Headphones,
    Home, Newspaper, PaintBucket, Settings, Smile, Sparkles, ScreenShare, Users, UserPlus, ArrowRight,
} from "lucide-react";



type DropDownMenuProps = {
    onClose: () => void
}

function DropDownMenu({onClose}: DropDownMenuProps) {
  return (
    <div className="w-[400px] h-screen bg-white px-4 items-center 
        justify-center absolute right-0 xl:hidden"
    >
        <Accordion type="single" collapsible className=" pl-2" defaultValue="item-1">
            
            <AccordionItem value="item-1" className="mt-6 border-b">
                <AccordionTrigger>What is mirror</AccordionTrigger>
                <AccordionContent
                    defaultValue="item-1"
                    className="space-y-2"
                >
                    <Link href={"/team-alignment"} className="flex"
                        onClick={onClose}
                    >
                        <div>
                            <UserPlus className="h-6 w-6 mr-4 text-orange-400" />
                        </div>
                        <div>Team alignment</div>
                    </Link>

                    <Link href={"/sales"} className="flex"
                        onClick={onClose}
                    >
                        <div>
                            <DollarSign className="h-6 w-6 mr-4 text-green-400" />
                        </div>
                        <div>Sales</div>
                    </Link>
                    
                </AccordionContent>
            </AccordionItem>


            <AccordionItem value="item-2" className="border-b">
                <AccordionTrigger>Solutions</AccordionTrigger>
                <AccordionContent
                    className="space-y-2"
                >
                    <Link href={"/team-alignment"} className="flex"
                        onClick={onClose}
                    >
                        <div>
                            <UserPlus className="h-6 w-6 mr-4 text-orange-400" />
                        </div>
                        <div>Team alignment</div>
                    </Link>

                    <Link href={"/sales"} className="flex"
                        onClick={onClose}
                    >
                        <div>
                            <DollarSign className="h-6 w-6 mr-4 text-green-400" />
                        </div>
                        <div>Sales</div>
                    </Link>
                    
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b">
                <AccordionTrigger>Resources</AccordionTrigger>
                <AccordionContent
                    className="space-y-2"
                >
                    <Link href={"/team-alignment"} className="flex"
                        onClick={onClose}
                    >
                        <div>
                            <UserPlus className="h-6 w-6 mr-4 text-orange-400" />
                        </div>
                        <div>Team alignment</div>
                    </Link>

                    <Link href={"/sales"} className="flex"
                        onClick={onClose}
                    >
                        <div>
                            <DollarSign className="h-6 w-6 mr-4 text-green-400" />
                        </div>
                        <div>Sales</div>
                    </Link>

                </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-b">
                <AccordionTrigger>Enterprise</AccordionTrigger>
                <AccordionContent
                    className="space-y-2"
                >
                    <Link href={"/team-alignment"} className="flex"
                        onClick={onClose}
                    >
                        <div>
                            <UserPlus className="h-6 w-6 mr-4 text-orange-400" />
                        </div>
                        <div>Team alignment</div>
                    </Link>

                    <Link href={"/sales"} className="flex"
                        onClick={onClose}
                    >
                        <div>
                            <DollarSign className="h-6 w-6 mr-4 text-green-400" />
                        </div>
                        <div>Sales</div>
                    </Link>
                    
                </AccordionContent>
            </AccordionItem>

            <Link
                href={"/pricing"}
                className="flex flex-1 items-center justify-between py-4
                border-b"
            >
                Pricing
            </Link>

            <div className='mt-12'>
                <div className="space-y-4 flex flex-col px-4">
                    <Link href={"/sign-in"}>
                        <Button className="w-full" variant={"outline"} >
                            <Link
                                href={"/"}
                            >
                            Login
                            </Link>
                        </Button>
                    </Link>
                    
                    <Link href={"/"}>
                        <Button  className="w-full bg-blue-600">
                            <Link
                                href={"/"}
                            >
                             Sign up free 
                            </Link>
                        </Button>
                    </Link>
                </div>
            </div>


            
            
              

        </Accordion>
    </div>
  )
}

export default DropDownMenu