'use client'
import { Reveal } from '@/utils/Reveal'
import Image from 'next/image'
import React from 'react'
import {motion} from 'motion/react';

const TechStack = () => {

    const techImage = [
        {img:'/images/web-dev_page_images/logos (1).png'},
        {img:'/images/web-dev_page_images/logos (2).png'},
        {img:'/images/web-dev_page_images/logos (3).png'},
        {img:'/images/web-dev_page_images/logos (4).png'},
        {img:'/images/web-dev_page_images/logos (5).png'},
        {img:'/images/web-dev_page_images/logos (6).png'},
        {img:'/images/web-dev_page_images/logos (7).png'},
        {img:'/images/web-dev_page_images/logos (8).png'},
        {img:'/images/web-dev_page_images/logos (9).png'},
    ]
  return (
    <main className='px-14 py-10'>
             <div className="flex flex-col items-center justify-center w-full">
                <Reveal>
                    <h2 className="text-2xl md:text-5xl font-bold tracking-wide text-center md:pb-3">
                    Web Development <br/>Technology Stack
                    </h2>
                </Reveal>
                <Reveal>
                    <p className="text-center text-[16px] my-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    <br/>minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </Reveal>
            </div>
        <div className="flex flex-wrap  gap-2 place-items-center justify-between mx-auto mt-10"
        style={{
            backgroundImage:"url('/images/app_page_images/radial.png')",
            backgroundSize:'contain',
            backgroundRepeat:'no-repeat'
        }}
        >
            {techImage.map((item, index) =>(
                <motion.div 
                key={index}
                initial={{
                    y: 300,
                    opacity: 0,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.5,
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  className='flex-grow basis-[calc(33.333%-10px)] md:basis-0'
                  >
                <Image
                key={index}
                src={item.img}
                alt={'logos'}
                width={90}
                height={90}
                />
                </motion.div>
            ))}
        </div>
    </main>
  )
}

export default TechStack