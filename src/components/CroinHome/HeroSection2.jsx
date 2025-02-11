'use client'
import React from 'react'
import Navbar from '@/components/landing_page_components/Navbar'
import Image from 'next/image'
import { Reveal } from '@/utils/Reveal'
import {motion} from 'motion/react';

const HeroSection = () => {

  return (
        <main 
         style={{
             backgroundImage: "url('/images/cro_page_images/cro-banner-min (1).jpg')",
             backgroundSize: "cover",
            }}
            className='md:pb-[200px]'
            >
            <Navbar/>
            <div className='mt-20 h-[75vh] md:h-[100vh] flex justify-center items-center relative w-[1200px] mx-auto md:pt-[60px]'>
                {/* hero heading  */}
                <motion.div 
                  initial={{
                    x: -300,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.5,
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }} 
                  className="text-center px-8 md:px-0">
                    <div className='flex justify-center items-center gap-1 mb-2 w-auto'>
                        <Image
                        src="/images/services_page_images/blue-dot.png"
                        alt="blue-dot"
                        width={20}
                        height={20}
                        />
                        <Reveal>
                        <p>CRO Services</p>
                        </Reveal>
                    </div>

                    {/* heading main  */}
                    <Reveal>
                        <h2 className="text-2xl md:text-5xl font-bold leading-tight">
                        Conversion Rate  <br/> Optimization
                        </h2>
                    </Reveal>
                </motion.div>
            </div>
        </main>
  )
}

export default HeroSection
