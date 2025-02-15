'use client';
import { Reveal } from '@/utils/Reveal';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Results = () => {
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;

  return (
      <main
        className="relative pb-6 text-white overflow-hidden"
        style={{
          backgroundColor: '#040117',
          backgroundSize: 'cover',
          borderBottom: '4px solid #363445',
          backgroundImage: "url('/images/app_page_images/radial.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Main Content Section */}
        <div className="relative mx-auto px-8 py-0">
          <div className="rounded-xl p-8 flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Left Column */}
            <motion.div
              initial={isDesktop ? { x: -300, opacity: 0 } : false}
              whileInView={isDesktop ? { x: 0, opacity: 1 } : false}
              transition={
                isDesktop
                  ? { delay: 0.5, duration: 0.5, ease: 'easeInOut' }
                  : {}
              }
              viewport={isDesktop ? { once: false, amount: 0.2 } : {}}
              className="space-y-6 lg:w-[40%] lg:mx-auto text-center flex flex-col justify-center items-center"
            >
              <Reveal>
                <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
                Results You Can Expect
                </h2>
              </Reveal>
              <ul className="space-y-2 text-md md:text-[26px] text-gray-300">
                <Reveal>
                  <li className="flex items-center">
                    <span className="text-cyan-500 mr-2">•</span> Increased sales and revenue.
                  </li>
                </Reveal>
                <Reveal>
                  <li className="flex items-center">
                    <span className="text-cyan-500 mr-2">•</span> Higher average order value.
                  </li>
                </Reveal>
                <Reveal>
                  <li className="flex items-center">
                    <span className="text-cyan-500 mr-2">•</span> Improved customer satisfaction and retention.
                  </li>
                </Reveal>
                <Reveal>
                  <li className="flex items-center">
                    <span className="text-cyan-500 mr-2">•</span> Lower cart abandonment rates.
                  </li>
                </Reveal>
                <Reveal>
                  <li className="flex items-center">
                    <span className="text-cyan-500 mr-2">•</span> Scalable results for long-term growth.
                  </li>
                </Reveal>
              </ul>
            </motion.div>

            {/* Right Column */}
            {/* <motion.div
              initial={isDesktop ? { scale: 0.1, opacity: 0 } : false}
              whileInView={isDesktop ? { scale: 1, opacity: 1 } : false}
              transition={
                isDesktop
                  ? { delay: 0.3, duration: 0.5, ease: 'easeInOut' }
                  : {}
              }
              viewport={isDesktop ? { once: false, amount: 0.2 } : {}}
              className="space-y-6 lg:w-[50%] transform transition-transform duration-700 ease-in-out hover:scale-105"
            >
              <Image
                src={'/images/cro_page_images/result.png'}
                alt={'image'}
                width={1500}
                height={1500}
              />
            </motion.div> */}
          </div>
        </div>

        {/* Purple Glow Effects */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px] -z-10" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full filter blur-[100px] -z-10" />
      </main>
 );
};

export default Results;
