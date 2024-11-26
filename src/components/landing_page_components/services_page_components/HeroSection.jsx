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

        <div className='translate-y-[-4rem] flex-col item-center'>

                {/* serive heading  */}
            <div className='flex items-center gap-1 mb-2 justify-center'>
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
                <h2 className="text-3xl md:text-5xl font-bold text-center"
                    style={{ lineHeight: '1.2' }}>
                We Create Digital <br/>Products That Grow <br/> Ambitious Brands.
                </h2>
            </Reveal>
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
    </React.Fragment>
  )
}

export default HeroSection






