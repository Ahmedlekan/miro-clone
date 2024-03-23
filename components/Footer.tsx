"use client"
import React from 'react'
import Slider from 'react-infinite-logo-slider';
import Image from 'next/image';
import {  PiFacebookLogoFill, PiInstagramLogo, PiInstagramLogoFill, 
PiLinkedinLogoFill, PiTwitterLogoFill, PiYoutubeLogoFill } from "react-icons/pi";

function Footer() {
  return (
    <div className='sm:py-10 md:py-5 px-10 bg-black text-white'>

        <div className=' flex flex-col'>

            <div className='flex flex-col gap-3'>
                <div className="text-3xl lg:px-0 px-8 md:text-5xl xl:pt-14 text-center">
                    Join our 60M+ users today
                </div>

                <p className="text-lg pt-4 text-center mx-auto">
                    Build, iterate, and design faster with Miro — the visual workspace for innovation.
                </p>

                <form className=" mt-8 mb-10">
                    <div className='flex justify-center items-center gap-4'>
                        <input
                            placeholder="Enter your email"
                            type="text"
                            className='p-2 font-light  bg-white
                            rounded-md outline-none text-black'
                        />
                        <button
                            className="rounded-md bg-blue-600 py-2 px-4 text-center 
                            text-white shadow-md hover:bg-blue-700"
                            type="button"
                        >
                            Sign up free
                        </button>
                    </div>
                </form>


                <Slider width='200px'duration={60}>
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

            </div>


            <div className='lg:flex lg:space-x-32 md:px-0'>

                <div className="flex-col space-y-6">
                    <div className='pt-10 font-medium text-xl'>
                        Product
                    </div>

                    <div className='font-light space-y-4 text-lg'>
                        <div>Home</div>
                        <div>Product</div>
                        <div>What&apos;s New</div>
                        <div>Pricing</div>
                        <div>Premium</div>
                    </div>
                    
                </div>

                <div className="flex-col space-y-6">
                    <div className='pt-10 font-medium text-xl'>
                        Use Cases
                    </div>

                    <div className='font-light space-y-4 text-lg'>
                        <div>Company</div>
                        <div>Leadership</div>
                        <div>Customers</div>
                        <div>Diversity</div>
                    </div>
                </div>
                
                <div className="flex-col space-y-6">
                    <div className='pt-10 font-medium text-xl'>
                        Use Cases
                    </div>

                    <div className='font-light space-y-4 text-lg'>
                        <div>Company</div>
                        <div>Leadership</div>
                        <div>Customers</div>
                        <div>Diversity</div>
                    </div>
                </div>

                <div className="flex-col space-y-6">
                    <div className='pt-10 font-medium text-xl'>
                        For Business
                    </div>

                    <div className='font-light space-y-4 text-lg'>
                        <div>Project Management</div>
                        <div>Goal Management</div>
                        <div>Increase Productivity</div>
                        <div>Work Management</div>
                        <div>Project Planning</div>
                    </div>
                </div>
                
                <div className="flex-col space-y-6">
                    <div className='pt-10 font-medium text-xl'>
                        For Business
                    </div>

                    <div className='font-light space-y-4 text-lg'>
                        <div>Project Management</div>
                        <div>Goal Management</div>
                        <div>Increase Productivity</div>
                        <div>Work Management</div>
                        <div>Project Planning</div>
                    </div>
                </div>

            </div>


            <div className="flex gap-8 mt-32">
                    <PiInstagramLogoFill className="text-3xl text-white" />
                    <PiTwitterLogoFill className="text-3xl text-white" />
                    <PiFacebookLogoFill className="text-3xl text-white" />
                    <PiYoutubeLogoFill className="text-3xl text-white" />
                    <PiLinkedinLogoFill className="text-3xl text-white" />
            </div>
        
        </div>

    </div>
  )
}

export default Footer