'use client'
import React, {useState} from 'react'
import Navbar from '@/components/landing_page_components/Navbar'
import Image from 'next/image'
import PrimaryBtn from '../PrimaryBtns/PrimaryBtn'
import { Reveal } from '@/utils/Reveal'
import {motion} from 'motion/react';
import HeroForm from '@/components/landing_page_components/HeroForm';

const HeroSection = () => {
    const [budget, setBudget] = useState(5000);

  return (
    <React.Fragment>
        <main 
         style={{
             backgroundImage: "url('/images/video_page_images/video-photo.png')",
             backgroundSize: "cover",
            }}
            >
            <Navbar/>
            <div className='flex justify-between items-center flex-row relative px-6 md:px-0 md:w-[1200px] md:mx-auto md:h-[100vh]' >

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
                  viewport={{ once: false, amount: 0.2 }} className="w-full md:w-[45%] flex-col">
                    <div className='flex items-center gap-1 mb-2 w-auto'>
                        <Image
                        src="/images/services_page_images/blue-dot.png"
                        alt="blue-dot"
                        width={20}
                        height={20}
                        />
                        <Reveal>
                        <p>video and photo editor</p>
                        </Reveal>
                    </div>

                    {/* heading main  */}
                    <Reveal>
                    <h2 className="text-2xl md:text-5xl font-bold leading-tight text-left">
                    Animated videos <br/>Built to perfection
                    </h2>
                    </Reveal>
                </motion.div>

                    {/* hero form  */}
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
                  className='w-full md:w-[40%] bg-black bg-opacity-30 backdrop-blur-md rounded-3xl p-6 md:px-8 md:py-3 max-w-md shadow-xl text-white md:mt-10 border-1 border-white '>
                  <HeroForm/>
                  </motion.div>
            </div>
        </main>
    </React.Fragment>
  )
}

export default HeroSection






