'use client'
import React, {useState} from 'react'
import Navbar from '@/components/landing_page_components/Navbar'
import Image from 'next/image'
import { Reveal } from '@/utils/Reveal'
const HeroSection = () => {

    const [budget, setBudget] = useState(5000);

  return (
        <main 
         style={{
             backgroundImage: "url('/images/our-work_page_images/our-work.png')",
             backgroundSize: "cover",
            }}
            >
            <Navbar/>
            <div className='h-[60vh] md:h-[100vh]  flex justify-between items-center flex-row relative w-[1200px] mx-auto'>
                {/* hero heading  */}
                <div className="w-[100%] flex-col px-6 md:px-0">
                    <div className='flex items-center gap-1 mb-2 w-auto'>
                        <Image
                        src="/images/services_page_images/blue-dot.png"
                        alt="blue-dot"
                        width={20}
                        height={20}
                        />
                        <p>Our Portfolio</p>
                    </div>

                    {/* heading main  */}
                    <div className="flex flex-wrap items-center gap-6 ">
                        <Reveal>
                            <h2 className=" text-xl md:text-5xl w-auto font-bold leading-tight text-white">
                            Explore All Industries
                            </h2>
                        </Reveal>

                        <h4 className="text-lg md:text-3xl w-auto font-medium leading-tight text-[#7C7C7C]">Real Estate 18</h4>
                        <h4 className="text-lg md:text-3xl w-auto font-medium leading-tight text-[#7C7C7C]">Government 10</h4>
                        <h4 className="text-lg md:text-3xl w-auto font-medium leading-tight text-[#7C7C7C]">Education 10</h4>
                        <h4 className="text-lg md:text-3xl w-auto font-medium leading-tight text-[#7C7C7C]">Corporate 08</h4>
                        <h4 className="text-lg md:text-3xl w-auto font-medium leading-tight text-[#7C7C7C]">Health 16</h4>
                        <h4 className="text-lg md:text-3xl w-auto font-medium leading-tight text-[#7C7C7C]">Fashion 18</h4>
                        <h4 className="text-lg md:text-3xl w-auto font-medium leading-tight text-[#7C7C7C]">Ecommerce 18</h4>
                        <h4 className="text-lg md:text-3xl w-auto font-medium leading-tight text-[#7C7C7C]">Branding Website 10</h4>
                    </div>
                </div>


            <div className='bg-my-blue-gradient rounded-full p-3 absolute bottom-6 right-6'>
                <Image
                src={'/images/services_page_images/inbox.png'}
                alt="inbox"
                width={15}
                height={15}
                />
            </div>

            </div>
        </main>
  )
}

export default HeroSection






