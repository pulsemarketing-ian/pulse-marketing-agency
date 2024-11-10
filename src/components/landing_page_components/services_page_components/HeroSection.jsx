'use client';
import React from 'react'
import Navbar from '@/components/landing_page_components/Navbar'
import Image from 'next/image'
import { Reveal } from '@/utils/Reveal'
const HeroSection = () => {
  return (
    <React.Fragment>
        <main 
         style={{
             backgroundImage: "url('/images/services_page_images/hero-img.png')",
             backgroundSize: "cover",
            }}
            >
            <Navbar/>
            <div className='h-[60vh] md:h-[100vh] w-full flex justify-center items-center flex-col relative'>
                {/* serive heading  */}
            <div className='flex items-center justify-between gap-1 mb-2'>
                <Image
                src="/images/services_page_images/blue-dot.png"
                alt="blue-dot"
                width={20}
                height={20}
                />
            <p>Services</p>
            </div>

            {/* heading main  */}
            <Reveal>
                <h2 className="text-3xl md:text-5xl font-bold leading-tight text-center">
                We create digital <br/>products that grow <br/>ambitious brands.
                </h2>
            </Reveal>

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
    </React.Fragment>
  )
}

export default HeroSection






