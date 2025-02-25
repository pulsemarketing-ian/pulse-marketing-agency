'use client'
import React, {useState} from 'react';
import Navbar from '@/components/landing_page_components/Navbar';
import Image from 'next/image';
import PrimaryBtn from '../PrimaryBtns/PrimaryBtn';
import HeroForm from '@/components/landing_page_components/HeroForm';
import { Reveal } from '@/utils/Reveal';
import {motion} from 'motion/react';

const HeroSection = () => {

  return (
        <main 
         style={{
             backgroundImage: "url('/images/web-dev_page_images/hero.png')",
             backgroundSize: "cover",
             backgroundAttachment: "fixed",
             backgroundPosition: "center",

            }}
            className='pb-[150px]'
            >
            <Navbar/>
            <div className='h-[60vh] md:h-[100vh]  flex justify-between items-center flex-row relative w-[1200px] mx-auto md:pt-[50px]'>
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
                className=" w-full px-6 md:px-0 md:w-[45%] flex-col translate-y-[-30%] md:translate-y-0">
                    <div className='flex items-center gap-1 mb-2 w-auto'>
                        <Reveal>
                            <span className='flex gap-3 items-center'>
                        <Image
                        src="/images/services_page_images/blue-dot.png"
                        alt="blue-dot"
                        width={20}
                        height={20}
                        />
                            <p>Web Development</p>
                        </span>
                        </Reveal>
                    </div>

                    {/* heading main  */}
                    <Reveal>
                        <h2 className="text-2xl md:text-5xl font-bold leading-tight text-left">
                        Bring The Digital Vision <br/>Of Your Brand To Life
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
                  className='w-full md:w-[40%] bg-black bg-opacity-30 backdrop-blur-md rounded-3xl p-6 md:px-8 md:py-3 max-w-md shadow-xl text-white md:mt-10 border-1 border-white absolute right-0 z-20'>
                  <HeroForm/>
                  </motion.div>

            {/* <div className='bg-my-blue-gradient rounded-full p-3 absolute bottom-6 right-6'>
                <Image
                src={'/images/services_page_images/inbox.png'}
                alt="inbox"
                width={15}
                height={15}
                />
            </div> */}

            </div>
        </main>
  )
}

export default HeroSection






