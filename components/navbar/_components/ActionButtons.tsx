"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { AiOutlineClose} from 'react-icons/ai';

import DropDownMenu from "./DropDown";

const ActionButtons = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible( (prev)=> !prev );
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="pr-2 relative">
      <div className="flex justify-center items-center gap-4">
        <Link href={"/contact-sales"} className="hidden lg:flex items-center">
        <div className="">Contact Sales</div>
        </Link>
       

        <div className="flex lg:space-x-4 items-center pr-4">
          <Link href={"/free"}>
            <Button variant={"outline"} className="hidden lg:flex items-center border-black text-md"
            >
              Log in
            </Button>
          </Link>

          <Link href={"/contact"}>
            <Button className="hidden lg:block bg-blue-700">
              Sign up free
            </Button>
          </Link>
        </div>
      </div>

      {isDropdownVisible ? <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0 md:hidden'></div> : ''}
      {isDropdownVisible && (
        <div
          className={isDropdownVisible ? 'fixed top-0 left-0 w-[400px] h-screen bg-white z-10 duration-300 md:hidden' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
          
          <div className="flex justify-between items-center mt-5 md:hidden">
            <div className=" text-xl font-bold pl-6">Menu</div>
            <AiOutlineClose
              onClick={toggleDropdown}
            size={30}
            className='pr-3 cursor-pointer'
            />
          </div>
        
          <DropDownMenu onClose={closeDropdown} />

        </div>
      )}

      {!isDropdownVisible && (
        <div onClick={toggleDropdown} className="flex lg:hidden">
          <AlignJustify className="
          h-6 w-6 items-center justify-center mr-2 cursor-pointer"/>
        </div>
      )}


    </div>
  )
}

export default ActionButtons