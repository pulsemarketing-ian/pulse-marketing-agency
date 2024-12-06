'use client';
import { Reveal } from '@/utils/Reveal'
import Image from 'next/image'
import React from 'react'
import {motion} from 'motion/react';

const AndriodSection = () => {
  return (
    <>
      <main 
         className="relative pb-6 text-white overflow-hidden" 
         style={{
             backgroundColor: '#040117',
             backgroundSize:'cover',
             borderBottom:'4px solid #363445',
             backgroundImage:"url('/images/app_page_images/radial.png')",
             backgroundSize:'cover',
             backgroundRepeat:'no-repeat'
           }}
        >
  
        {/* Main Content Section */}
        <div className="relative container mx-auto px-4 py-6">
          <div 
            className="rounded-xl p-8 flex flex-col lg:flex-row gap-8 items-center justify-between"
          >
            {/* Left Column */}
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
                  viewport={{ once: false, amount: 0.2 }} className="space-y-6 lg:w-[40%]">
              <Reveal>
                <h2 className="text-2xl md:text-4xl font-medium leading-tight">
                Android App <br/>Development
                </h2>
              </Reveal>
              <Reveal>
              <p className="text-gray-300 leading-relaxed">
              We are the most sought-after destination for iOS development services in Canada. At our native iOS app development company, we use advanced tools and the latest technologies to build highly functional applications for businesses worldwide. From Flutter app development to Swift app development, you name it, and we will deliver quality results. Contact our team of experts to learn more about each technology we use and understand which one will be best suited for your app development process.
             </p>
              </Reveal>
              <ul class="space-y-2 text-[16px] text-gray-300">
              <Reveal>
        <li class="flex items-center">
            <span class="text-cyan-500 mr-2">•</span> Android app development consultation
        </li>
        </Reveal>

        <Reveal>
        <li class="flex items-center">
            <span class="text-cyan-500 mr-2">•</span> Android app UI/UX design
        </li>
        </Reveal>

        <Reveal>
        <li class="flex items-center">
            <span class="text-cyan-500 mr-2">•</span> Custom Android app development
        </li>
        </Reveal>

        <Reveal>
        <li class="flex items-center">
            <span class="text-cyan-500 mr-2">•</span> Android software testing
        </li>
        </Reveal>

        <Reveal>
        <li class="flex items-center">
            <span class="text-cyan-500 mr-2">•</span> Play store optimization & API integration
        </li>
        </Reveal>

    </ul>
            </motion.div>
  
          
  
            {/* Right Column */}
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
                    delay: 0.3,
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }} className="space-y-6 lg:w-[40%] transform transition-transform duration-700 ease-in-out hover:scale-105">
              <Image
                src={'/images/app_page_images/fifth-sec.png'}
                alt={'image'}
                width={850}
                height={850}
              />
            </motion.div>
          </div>
        </div>
  
       
  
        {/* Purple Glow Effects */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px] -z-10" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full filter blur-[100px] -z-10" />
      </main>
    </>
  )
}

export default AndriodSection