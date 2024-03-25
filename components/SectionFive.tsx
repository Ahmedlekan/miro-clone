import React from 'react'
import { PiArrowRight } from 'react-icons/pi';
import Image from 'next/image';

function SectionFive() {
  return (
    <div className='py-10 md:py-14 px-10'>
      <div className=' flex flex-col justify-center items-center'>
        
        <div className='flex flex-col justify-center items-center gap-5'>
            <div className="text-2xl md:text-5xl items-center text-center font-normal">
                4 of 60 million reasons to try Diplo
            </div>
            
            <div className="text-lg md:text-xl items-center text-center font-normal">
                Trusted across the world, by companies large and small.
            </div>
            
            <div className='flex items-center hover:underline hover:cursor-pointer'>
                    Learn more <PiArrowRight className="ml-3 text-sm "/>
            </div>
        </div>

        <div className='flex flex-col gap-10 md:flex-row my-10'>
          
          <div className='border  border-black bg-white w-[250px] h-[350px] rounded-lg relative'
          >
            <div className=' bg-yellow-400 h-[349px] w-[10px] absolute rounded-l-lg' />
            <div className=" flex flex-col justify-center items-center">
              <Image src='/Images/ISO.webp' width={220} height={150} alt='logo'
                className='w-[300px] h-[220px] object-contain'
              />
              
              <div className='flex flex-col justify-start items-start px-5 gap-2'>
                <h3 className=' text-xl md:text-3xl font-semibold'>
                  HQR
                </h3>
                <p className='text-lg mb-5'>HQR-27001 enterprise-grade security</p>
              </div>
            </div>
          </div>
          
          <div className='border  border-black bg-white w-[250px] h-[350px] rounded-lg relative'
          >
            <div className=' bg-yellow-400 h-[349px] w-[10px] absolute rounded-l-lg' />
            <div className=" flex flex-col justify-center items-center">
              <Image src='/Images/G2_logo.webp' width={200} height={150} alt='logo'
                className='w-[300px] h-[220px] object-contain'
              />
              
              <div className='flex flex-col justify-start items-start px-5 gap-2'>
                <h3 className=' text-xl md:text-3xl font-semibold'>
                  HQR
                </h3>
                <p className='text-lg mb-5'>HQR-27001 enterprise-grade security</p>
              </div>
            </div>
          </div>
          
          <div className='border  border-black bg-white w-[250px] h-[350px] rounded-lg relative'
          >
            <div className=' bg-yellow-400 h-[349px] w-[10px] absolute rounded-l-lg' />
            <div className=" flex flex-col justify-center items-center">
              <Image src='/Images/Fortune100_logo.webp' 
                width={200} height={150} alt='logo'
                className='w-[300px] h-[220px] object-contain'
                />
              
              <div className='flex flex-col justify-start items-start px-5 gap-2'>
                <h3 className=' text-xl md:text-3xl font-semibold'>
                  HQR
                </h3>
                <p className='text-lg mb-5'>HQR-27001 enterprise-grade security</p>
              </div>
            </div>
          </div>
          
          <div className='border  border-black bg-white w-[250px] h-[350px] rounded-lg relative'
          >
            <div className=' bg-yellow-400 h-[349px] w-[10px] absolute rounded-l-lg' />
            <div className=" flex flex-col justify-center items-center">
              <Image src='/Images/Earth_illustration.webp' width={200} height={150} alt='logo'
                className='w-[300px] h-[220px] object-contain'
              />
              
              <div className='flex flex-col justify-start items-start px-5 gap-2'>
                <h3 className=' text-xl md:text-3xl font-semibold'>
                  HQR
                </h3>
                <p className='text-lg mb-5'>HQR-27001 enterprise-grade security</p>
              </div>
            </div>
          </div>

        </div>

      </div>



    </div>
  )
}

export default SectionFive