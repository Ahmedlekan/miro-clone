import React from 'react'
import Image from 'next/image'
import { PiArrowRight } from 'react-icons/pi';

function SectionFour() {
  return (
    <div className="py-10 md:py-144 px-10">
        <div className="text-2xl md:text-4xl tracking-wide 
            items-center text-center font-medium"
        >
            Next big thing? No big deal. <br /> Three simple keys to the future.
        </div>

        <div className='flex flex-col md:flex-row gap-5 justify-center items-center mt-10'>
            <div className='flex flex-col'>
                <h3 className='text-xl md:text-3xl font-normal mb-5'>Strategize & plan</h3>
                <p className='w-full md:max-w-[70%] text-lg'>Ensure continuous alignment 
                    with customer needs and company strategy. 
                    Define goals and initiatives, visualize priorities and dependencies, 
                    and finally watch your plans pay off. Everything is easier 
                    when you never run out of space.
                </p>
            </div>

            <Image src='/Images/homepage_01.webp' width={600} height={500} alt='homepage' />
        </div>
        
        <div className='flex flex-col md:flex-row gap-5 justify-center items-center mt-10'>
            <div className='flex flex-col'>
                <h3 className='text-xl md:text-3xl font-normal mb-5'>Design customer-centric <br /> solutions</h3>
                <p className='w-full md:max-w-[80%] text-lg'>Foster a customer-centric mindset and build 
                    a mutual team space, where everyone can capture insights, structure them with diagrams 
                    and tables, and share it all in a central spot.
                </p>
            </div>

            <Image src='/Images/homepage_02.webp' width={600} height={500} alt='homepage' />
        </div>
        
        <div className='flex flex-col md:flex-row gap-5 justify-center items-center mt-10'>
            <div className='flex flex-col'>
                <h3 className='text-xl md:text-3xl font-normal mb-5'>Develop your products & <br /> services</h3>
                <p className='w-full md:max-w-[80%] text-lg'>Accelerate time to market with a full suite 
                    of capabilities designed for innovation, including diagramming, real-time data visualization, 
                    and workshop facilitation. Diplo also gives you built-in support for common product development 
                    processes, with agile practices like estimation and retrospectives.
                </p>
            </div>

            <Image src='/Images/homepage_03.webp' width={600} height={500} alt='homepage' />
        </div>
        
        <div className='flex flex-col md:flex-row gap-5 justify-center items-center mt-[10rem]'>
            
            <div className='flex flex-col gap-5'>
                <h3 className='text-2xl md:text-5xl font-normal'>Connect your entire company in a single, secure platform</h3>
                <p className='w-full md:max-w-[80%] text-lg'>With enterprise-grade security at its core, Diplo helps organizations 
                    approach a Zero Trust Security philosophy. We offer advanced security integrations, robust data residency, 
                    governance solutions for sensitive data, and an accessibility program targeting Level AA Success Criteria of WCAG 2.1.
                </p>

                <div className='flex items-center hover:underline hover:cursor-pointer'>
                    Learn more <PiArrowRight className="ml-3 text-sm "/>
                </div>
            </div>

            <Image src='/Images/Image1.png' width={500} height={500} alt='homepage' />
        </div>

    </div>
  )
}

export default SectionFour