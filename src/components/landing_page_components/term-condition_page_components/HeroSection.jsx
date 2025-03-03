'use client';
import React from 'react'
import Navbar from '@/components/landing_page_components/Navbar'
import Image from 'next/image'
// import { Reveal } from '@/utils/Reveal'
const HeroSection = () => {
  return (
        <main 
         style={{
             backgroundImage: "url('/images/term_page_images/hero.png')",
             backgroundSize: "cover",
            }}
            >
            <Navbar/>
            <div className='h-[70vh] md:h-[100vh] w-full flex justify-center items-center flex-col relative'>
                {/* serive heading  */}
            <div className='flex items-center justify-between gap-1 mb-2' data-aos="fade-down">
                <Image
                src="/images/services_page_images/blue-dot.png"
                alt="blue-dot"
                width={20}
                height={20}
                />
            <p >The legal stuff</p>
            </div>

            {/* heading main  */}
            
                <h2 className="text-3xl md:text-5xl font-bold leading-tight text-center mb-2">
                Terms And Conditions
                </h2>
                <p>Please read these terms and conditions carefully before using our service.</p>
            

            <div className='bg-my-blue-gradient rounded-full p-3 absolute hidden md:bottom-6 right-6'>
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






