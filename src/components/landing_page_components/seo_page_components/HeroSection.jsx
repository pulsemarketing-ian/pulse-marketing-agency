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
      className="bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: "url('/images/seo_page_images/seo-hero.png')",
      }}
    >
      <Navbar />
      <div className='container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row justify-between items-center'>
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
                  className='w-full md:w-[40%] bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-6 md:p-10 max-w-md shadow-lg text-white  h-[70%] overflow-auto'
                  >
            <HeroForm/>
        </motion.div>
      </div>
    </main>
  )
}