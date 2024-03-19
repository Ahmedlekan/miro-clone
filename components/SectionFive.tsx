import React from 'react'
import { PiArrowRight } from 'react-icons/pi';

function SectionFive() {
  return (
    <div className='sm:py-10 md:py-14'>
        <div className='flex flex-col justify-center items-center gap-5'>
            <div className="text-2xl md:text-5xl items-center text-center font-normal">
                4 of 60 million reasons to try Miro
            </div>
            
            <div className="text-lg md:text-xl items-center text-center font-normal">
                Trusted across the world, by companies large and small.
            </div>
            
            <div className='flex items-center hover:underline hover:cursor-pointer'>
                    Learn more <PiArrowRight className="ml-3 text-sm "/>
            </div>
        </div>


    </div>
  )
}

export default SectionFive