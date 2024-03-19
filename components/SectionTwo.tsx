"use client"

import React from 'react'
import Image from 'next/image'
import { section } from '@/constants'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from "react-responsive";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

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


function SectionTwo() {
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
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
    <div className="sm:py-10 md:py-14">
      <div className='flex flex-col justify-center gap-10'>
        <div className="text-3xl  items-center text-center font-normal">
            Don&apos;t start from scratch — <br /> dive right into Miro.
        </div>

        <div className=''>
          {isSmallScreen ? (
            <Slider {...settings}>
            {section.map((item, index)=> (
              <div key={index} className='p-3'>
                <div className='flex flex-col items-center gap-2 bg-white rounded-lg 
                  border border-black p-2 hover:scale-105 hover:duration-300'
                >
                  <p className='text-sm font-medium text-center'>{item.title}</p>
                  <Image src={item.image} 
                    alt='item img' 
                    width={200} 
                    height={150} 
                    className='w-[250px] h-[200px] rounded-lg object-contain'
                  />
                </div>
              </div>
            ))}
          </Slider>
          ):(
            <Slider {...settings}>
            {section.map((item, index)=> (
              <div key={index} className='p-3'>
                <div className='flex flex-col items-center gap-5 bg-white rounded-lg 
                  border border-black p-2 hover:scale-105 hover:duration-300'
                >
                  <p className='sm:text-sm md:text-lg font-medium text-center'>{item.title}</p>
                  <Image src={item.image} 
                    alt='item img' 
                    width={300} 
                    height={250} 
                    className='w-[300px] h-[220px] rounded-lg object-contain'
                  />
                </div>
              </div>
            ))}
          </Slider>
          )}
        </div>
      </div>


    </div>
  )
}

export default SectionTwo