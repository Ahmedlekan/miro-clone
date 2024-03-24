import React from 'react'
import Image from 'next/image'

function SectionEight() {
  return (
    <div className='py-10 md:py-14 px-10'>
        <div className='flex flex-col justify-center items-center'>

            <div className='flex flex-col justify-center items-center gap-5 mb-16'>
                <div className="text-2xl md:text-5xl max-w-[70%] items-center text-center ">
                    Explore what others like you have created within Miroverse
                </div>
                
                <div className="text-lg md:text-lg items-center text-center font-normal">
                    Discover the proven workflows, projects, and frameworks of the Miro 
                    community — or share your own!
                </div>
                
                <div className='border border-black hover:cursor-pointer p-2 bg-white 
                    rounded-lg hover:bg-black hover:text-white hover:duration-300'
                >
                        Explore miroverse 
                </div>
            </div>
            
            <Image src='/Images/miroverse.svg' width={800} height={800} alt='logo'
                className=' object-contain'
            />

        </div>
    </div>
  )
}

export default SectionEight