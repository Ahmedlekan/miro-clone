"use client"

import React, {useState} from 'react'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";


function HeroSection() {
    
    const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="items-center flex flex-col h-[80vh] mt-5 md:mt-10">

        <div className="text-3xl font-medium lg:px-0 px-8 md:text-4xl xl:text-5xl 
         xl:pt-14 text-center pt-6"
        >
            Enter with a dream. <br />
            Exit with the next big thing.
        </div>

        <p className="text-xl pt-4 text-center mx-auto"
        >
             Build, iterate, and design faster with diplo — the visual workspace for innovation.
        </p>

        <form className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96">
            <input
                placeholder="Enter your email"
                type="text"
                className='peer w-full p-2 font-light  bg-white border border-black
                rounded-md outline-none text-black'
            />
            <button
                className="mt-6 w-full rounded-lg bg-blue-600 py-3 px-6 text-center 
                 text-white shadow-md hover:bg-blue-700"
                type="button"
            >
                Sign up free
            </button>
        </form>

        <p className=' text-gray-500 mt-2'>Keep work and life separate by using your work email</p>

    </div>
  )
}

export default HeroSection