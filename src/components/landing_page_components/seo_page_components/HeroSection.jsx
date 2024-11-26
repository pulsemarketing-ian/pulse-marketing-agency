'use client'
import React from 'react'
import Image from 'next/image'
import { Reveal } from '@/utils/Reveal'
import Navbar from '@/components/landing_page_components/Navbar'
import HeroForm from '@/components/landing_page_components/HeroForm';
import {motion} from 'motion/react';

export default function HeroSection() {
  return (
    <main 
      style={{
        backgroundImage: "url('/images/seo_page_images/seo-hero.png')",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <div className='h-[80vh] md:h-[110vh]  flex justify-between items-center flex-row relative w-[1200px] mx-auto'>
      {/* hero heading */}
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
                  viewport={{ once: false, amount: 0.2 }} className="w-full md:w-[45%] mb-8 md:mb-0">
          <Reveal>
            <div className='flex items-center gap-1 mb-2'>
              <Image
                src="/images/services_page_images/blue-dot.png"
                alt="blue-dot"
                width={20}
                height={20}
              />
              <p className="text-white">search engine optimization</p>
            </div>
          </Reveal>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            Search Engine <br />Optimization
          </h2>
        </motion.div>

        {/* hero form */}
        <motion.div 
                  initial={{
                    scale: 0.1,
                    opacity: 0,
                  }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.5,
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  className='w-full md:w-[40%] bg-black bg-opacity-30 backdrop-blur-md rounded-3xl p-6 md:px-8 md:py-3 max-w-md shadow-xl text-white md:mt-10 border-1 border-white mt-[-10%]'>
                  <HeroForm/>
                  </motion.div>
      </div>
    </main>
  )
}