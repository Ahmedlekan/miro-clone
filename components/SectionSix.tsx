"use client"

import React from 'react'
import Image from 'next/image'
import { section } from '@/constants'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from "react-responsive";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

const testimonies = [
    {
        description: "“Bringing everyone together to plan in Miro means the most impactful initiatives will happen at the right time.”",
        name:"Ahmed Lekan",
        role:"Front End Developer",
        img: "/Images/Pepsico.webp"
    },
    {
        description: "“Bringing everyone together to plan in Miro means the most impactful initiatives will happen at the right time.”",
        name:"Ahmed Lekan",
        role:"Front End Developer",
        img: "/Images/Pepsico.webp"
    },
    {
        description: "“Bringing everyone together to plan in Miro means the most impactful initiatives will happen at the right time.”",
        name:"Ahmed Lekan",
        role:"Front End Developer",
        img: "/Images/Pepsico.webp"
    },
    {
        description: "“Bringing everyone together to plan in Miro means the most impactful initiatives will happen at the right time.”",
        name:"Ahmed Lekan",
        role:"Front End Developer",
        img: "/Images/Pepsico.webp"
    },   
]

const SampleNextArrow = (props:any) => {
    const { onClick } = props;
    return (
      <div
        className="w-12 h-12 rounded-lg text-black bg-white border border-black 
        bg-opacity-40 hover:bg-black hover:text-white duration-300 cursor-pointer 
        flex justify-center items-center z-10 absolute top-[35%] right-2"
        onClick={onClick}
      >
        <span className="text-xl">
          <FaLongArrowAltRight />
        </span>
      </div>
    );
};
  
  const SamplePrevArrow = (props:any) => {
    const { onClick } = props;
    return (
      <div
        className="w-12 h-12 rounded-lg text-black bg-white border border-black
        bg-opacity-40 hover:bg-black hover:text-white duration-300 cursor-pointer 
        flex justify-center items-center absolute z-10 top-[35%] left-2"
        onClick={onClick}
      >
        <span>
          <FaLongArrowAltLeft />
        </span>
      </div>
    );
  };

const SectionSix = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className='sm:py-10 md:py-14'>
        <div className="relative bg-cover bg-center h-[130vh]" style={{ backgroundImage:`url("/Images/company.jpg")` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col gap-5 justify-center text-white px-10 my-10">
                <h1 className=" text-2xl md:text-4xl font-normal mb-4 w-[90%] md:w-[50%]">Helping the world’s most 
                    innovative companies collaborate better, daily</h1>
                <p className="text-lg md:w-[50%]">More than 180,000 organizations, including Nike, Ikea, Deloitte, WPP, and Cisco, have 
                    adopted Diplo to help innovate the way they innovate, with the goal of improving the speed and quality of 
                    their work.
                </p>

                    <button className='border border-black bg-white text-black
                        py-2 px-5 rounded-lg hover:bg-black hover:text-white hover:duration-300 w-[250px]'> 
                        See all customer stories
                    </button>
                

                <div className=''>
                    <Slider {...settings}>
                        {testimonies.map((testimony,index)=>(
                            <div key={index} className=''>
                                <div className='flex items-center gap-7 bg-white text-black 
                                    md:w-[500px] p-4 rounded-lg'
                                >
                                    <div className='flex flex-col gap-3'>
                                        <div className=''>{testimony.description}</div>
                                        <p className=' font-semibold'>{testimony.name}</p>
                                        <p>{testimony.role}</p>
                                    </div>
                                    
                                    <div className='hidden md:block'>
                                      <Image src={testimony.img} 
                                        className=' object-cover rounded-lg' 
                                        width={400} height={400} alt='img' />
                                    </div>
                                </div>
                                
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        

        </div>
    </div>
  )
}

export default SectionSix