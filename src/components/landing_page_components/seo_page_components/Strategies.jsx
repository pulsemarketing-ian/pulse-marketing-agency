'use client';
import { Reveal } from '@/utils/Reveal'
import Image from 'next/image'
import React from 'react'
import {motion} from 'motion/react';

const Strategies = () => {
  
  return (
    <main className="w-full px-4 md:px-0 md:w-[1200px] mx-auto py-10 flex flex-wrap justify-between " 
    style={{
      backgroundImage: "url('/images/app_page_images/radial.png')",
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat'
    }} >
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
                    delay: 0.2,
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }} className="flex flex-col gap-4 md:w-[48%]">
          <Reveal> 
            
          <h2 className="text-xl md:text-4xl font-bold tracking-wide mb-3"><span className='text-[4rem] mr-2 text-blue-400'>6</span>Reasons Why Business Choose
          Pulse Marketing <br/> SEO Services:</h2>
          </Reveal>

          <Reveal>
            <ul className='list-disc list-inside'>
            <li className="text-lg">Better Results</li>
            <li className="text-lg">Increase Conversions</li>
            <li className="text-lg">Securing Great ROI</li>
            <li className="text-lg">Performance</li>
            <li className="text-lg">Money-back Guarantee</li>
            <li className="text-lg">Analytics and Reporting</li>
            </ul>
            </Reveal>

            <Image src="/images/seo_page_images/sm.png" width={200} height={200} alt="seo-strategies"/>
        </motion.div>

        <motion.div  
                    initial={{
                    x: 300,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.2,
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }} className="w-full md:w-[48%] flex justify-items-end justify-end mt-8 md:mt-0" 
                  >
            <Image src={'/images/seo_page_images/strategy.png'} width={450} height={450} className="rounded-3xl"/>
        </motion.div>
    </main>
  )
}

export default Strategies