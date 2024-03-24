"use client"

import React from 'react'
import Slider from 'react-infinite-logo-slider';
import Image from 'next/image';


const SectionThree = () => {
  return (
    <div className='py-8 md:py-12 px-10'>
        <div className='flex flex-col justify-center gap-10'>
            <div className="text-xl  items-center text-center font-normal">
                Rated 4.8 out of 5,134+ G2 reviews
            </div>

            <Slider
                width='200px'
                duration={60}
            >
                <Slider.Slide>
                    <Image src="/logos/logoipsum-211.svg" alt="logo" width={100} height={100}  className=" md:w-20 h-20 text-gray-500"  />
                    </Slider.Slide>
                    <Slider.Slide>
                    <Image src="/logos/logoipsum-223.svg" alt="logo" width={100} height={100}  className="w-16 h-16"  />
                    </Slider.Slide>
                    <Slider.Slide>
                    <Image src="/logos/logoipsum-224.svg" alt="logo" width={100} height={100}  className="w-16 h-16"  />
                    </Slider.Slide>
                    <Slider.Slide>
                    <Image src="/logos/logoipsum-225.svg" alt="logo" width={100} height={100}  className="w-16 h-16"  />
                    </Slider.Slide>
                    <Slider.Slide>
                    <Image src="/logos/logoipsum-226.svg" alt="logo" width={100} height={100}  className="w-16 h-16"  />
                    </Slider.Slide>
                    <Slider.Slide>
                    <Image src="/logos/logoipsum-273.svg" alt="logo" width={100} height={100}  className="w-16 h-16"  />
                    </Slider.Slide>
                    <Slider.Slide>
                    <Image src="/logos/logoipsum-274.svg" alt="logo" width={100} height={100}  className="w-16 h-16"  />
                    </Slider.Slide>
                    <Slider.Slide>
                    <Image src="/logos/logoipsum-292.svg" alt="logo" width={100} height={100}  className="w-16 h-16"  />
                    </Slider.Slide>
                    <Slider.Slide>
                    <Image src="/logos/logoipsum-293.svg" alt="logo" width={100} height={100}  className="w-16 h-16"  />
                    </Slider.Slide>
                    <Slider.Slide>
                    <Image src="/logos/logoipsum-296.svg" alt="logo" width={100} height={100}  className="w-16 h-16"  />
                    </Slider.Slide>
                    <Slider.Slide>
                    <Image src="/logos/logoipsum-300.svg" alt="logo" width={100} height={100}  className="w-16 h-16"  />
                    </Slider.Slide>
                    <Slider.Slide>
                    <Image src="/logos/logoipsum-317.svg" alt="logo" width={100} height={100}  className="w-16 h-16"  />
                    </Slider.Slide>
                    <Slider.Slide>
                    <Image src="/logos/logoipsum-323.svg" alt="logo" width={100} height={100}  className="w-16 h-16"  />
                    </Slider.Slide>
                    <Slider.Slide>
                    <Image src="/logos/logoipsum-327.svg" alt="logo" width={100} height={100}  className="w-16 h-16"  />
                    </Slider.Slide>
                    <Slider.Slide>
                    <Image src="/logos/logoipsum-329.svg" alt="logo" width={100} height={100}  className="w-16 h-16"  />
                </Slider.Slide>
            </Slider>


            <div className="sm:mt-5 md:mt-10 relative overflow-hidden">
                <Image src="/Images/dashboard.avif" width={1025} height={500} alt="logo"
                    className=" sm:w-full rounded-xl"
                />

                <Image src="/Images/bg-1.png" 
                    width={150} 
                    height={150} 
                    alt='logo' 
                    className='hidden md:block absolute bottom-0 -left-8'
                />
                <Image src="/Images/bg-2.png" 
                    width={200} 
                    height={200} 
                    alt='logo' 
                    className='hidden md:block absolute bottom-0 -right-8'
                />
            </div>

        </div>

    </div>
  )
}

export default SectionThree