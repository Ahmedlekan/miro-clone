"use client"

import React from 'react'
import Image from 'next/image'
import Accordion from './Accordion'

function SectionSeven() {
  return (
    <div className='py-10 md:py-14 px-10'>
        <div className='flex flex-col md:flex-row gap-4'>
            
            <div className='flex flex-[35%] flex-col gap-4'>
                <h3 className=' text-3xl font-medium'>
                    Six core capabilities. <br /> Six ways to accelerate innovation
                </h3>

                <p className=' text-[18px] font-normal'>
                    Miro offers sophisticated bundles of capabilities built for 
                    all stages of innovation, from diagramming to workshops to code reviews, 
                    in a single integrated workspace designed for large-scale collaboration, 
                    eliminating tool silos and costs.
                </p>

                <Image src="/Images/motor_cycle.png" width={300} height={250} alt='logo' />
            </div>

            
            <div className="flex flex-[65%] flex-col rounded-lg">

                <Accordion
                    title="Workshop & async colaboration"
                    answer="Unlock faster, more engaged and more productive 
                    feedback cycles for deep collaborative work. By bringing 
                    together slides, real-time data visualizations, action items, 
                    and diagrams, you’ll have everything you need to make good decisions, 
                    collected on a single board. "
                />
                <Accordion
                    title="Diagram $ processing mapping"
                    answer="Unlock faster, more engaged and more productive 
                    feedback cycles for deep collaborative work. By bringing 
                    together slides, real-time data visualizations, action items, 
                    and diagrams, you’ll have everything you need to make good decisions, 
                    collected on a single board. "
                />
                <Accordion 
                    title="Diplo assist" 
                    answer="Unlock faster, more engaged and more productive 
                    feedback cycles for deep collaborative work. By bringing 
                    together slides, real-time data visualizations, action items, 
                    and diagrams, you’ll have everything you need to make good decisions, 
                    collected on a single board. " 
                />
                <Accordion 
                    title="Visual project management" 
                    answer="Unlock faster, more engaged and more productive 
                    feedback cycles for deep collaborative work. By bringing 
                    together slides, real-time data visualizations, action items, 
                    and diagrams, you’ll have everything you need to make good decisions, 
                    collected on a single board. " 
                />
                <Accordion 
                    title="Product development & workflows" 
                    answer="Unlock faster, more engaged and more productive 
                    feedback cycles for deep collaborative work. By bringing 
                    together slides, real-time data visualizations, action items, 
                    and diagrams, you’ll have everything you need to make good decisions, 
                    collected on a single board. " 
                />
                <Accordion 
                    title="Content & data visualization" 
                    answer="Unlock faster, more engaged and more productive 
                    feedback cycles for deep collaborative work. By bringing 
                    together slides, real-time data visualizations, action items, 
                    and diagrams, you’ll have everything you need to make good decisions, 
                    collected on a single board."

                />
            </div>

        </div>

        <div className='flex flex-col md:flex-row gap-5 justify-center 
            items-center mt-[5rem] md:mt-[7rem]'
        >
            
            <div className='flex flex-col gap-7'>
                <h3 className='text-2xl md:text-5xl font-normal max-w-[500px]'>
                    Integrated with your favorite tools? Of course.
                </h3>
                <p className='w-full md:max-w-[70%] text-lg'>To make work more efficient, Diplo connects 
                    dynamically with over 130 tools across your stack. Jira, Azure DevOps, Asana, 
                    Zoom, Teams, and Slack are just some of them.
                </p>

                <div className='flex items-center'>
                    <button className=' bg-white border border-black p-2 
                        rounded-lg hover:bg-black hover:text-white hover:duration-300'
                    >
                        Discover market place
                    </button>
                </div>
            </div>

            <Image src='/Images/integration.svg' width={500} height={500} alt='homepage' />
        </div>
    </div>
  )
}

export default SectionSeven