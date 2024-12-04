'use client';
import { Reveal } from '@/utils/Reveal';
import React from 'react';
import {motion} from 'motion/react';

const Services = () => {
  return (
    <main className='mx-10 md:mx-14 py-16' style={{
        backgroundImage:"url('/images/app_page_images/radial.png')",
        backgroundSize:'contain',
        backgroundRepeat:'no-repeat'
    }}>
        <Reveal>
            <h2 className='text-4xl font-bold tracking-wide text-left'>Services</h2>
        </Reveal>

            <div className='flex flex-col gap-4 md:flex-row flex-wrap justify-between items-center mt-8'>
                    {/* card one  */}
                    <motion.div 
                initial={{
                    y: -300,
                    opacity: 0,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.2,
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }}  className='w-full md:w-[24%] rounded-2xl border border-1 gap-3 bg-white bg-opacity-10 backdrop-blur-md p-5 flex flex-col min-h-[50px] transform transition-transform duration-700 ease-in-out hover:scale-105'>
                        <h3 className='text-xl font-bold tracking-wide'>Website Deisgn<br/>and Development</h3>
                        <p className='text-sm'>We design and develop custom, responsive websites that are visually appealing, user-friendly, and aligned with your business goals, using the latest technologies.</p>
                    </motion.div>

                    {/* card otwo  */}
                    <motion.div 
                initial={{
                    y: -300,
                    opacity: 0,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.25,
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }}  className='w-full md:w-[24%] rounded-2xl border border-1 gap-3 bg-white bg-opacity-10 backdrop-blur-md p-5 flex flex-col min-h-[50px] transform transition-transform duration-700 ease-in-out hover:scale-105'>
                        <h3 className='text-xl font-bold tracking-wide'>Annual Mantinence <br/>Service</h3>
                        <p className='text-sm'>Our annual maintenance packages include regular updates, security patches, and performance checks to ensure your website remains secure and up-to-date throughout the year.</p>
                    </motion.div>
                    {/* card three  */}
                    <motion.div 
                initial={{
                    y: -300,
                    opacity: 0,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.27,
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }} className='w-full md:w-[24%] rounded-2xl border border-1 gap-3 bg-white bg-opacity-10 backdrop-blur-md p-5 flex flex-col min-h-[50px] transform transition-transform duration-700 ease-in-out hover:scale-105'>
                        <h3 className='text-xl font-bold tracking-wide'>Website <br/>Maintenance</h3>
                        <p className='text-sm'>We provide ongoing website maintenance, including content updates, bug fixes, and performance improvements, ensuring your site operates smoothly and efficiently.</p>
                    </motion.div>
                    {/* card four  */}
                    <motion.div 
                initial={{
                    y: -300,
                    opacity: 0,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.28,
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }} 
                   className='w-full md:w-[24%] rounded-2xl border border-1 gap-3 bg-white bg-opacity-10 backdrop-blur-md p-5 flex flex-col min-h-[50px] transform transition-transform duration-700 ease-in-out hover:scale-105'>
                        <h3 className='text-xl font-bold tracking-wide'>Hosting and <br/>Administration</h3>
                        <p className='text-sm'> We offer reliable hosting services with 24/7 monitoring, server management, and domain registration to ensure your website is security, speed, and uptime are always optimal.
                        </p>
                    </motion.div>
            </div>
    </main>
)
}

export default Services