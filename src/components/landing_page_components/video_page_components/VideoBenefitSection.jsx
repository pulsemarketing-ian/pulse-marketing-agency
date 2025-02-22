'use client';
import { Reveal } from '@/utils/Reveal';
import Image from 'next/image';
import {motion} from 'motion/react';

export default function VideoBenefitSection() {
  return (
    <section className="text-white pb-16  md:w-[1200px] md:mx-auto px-6 md:px-0"
     style={{
      backgroundImage:"url('/images/app_page_images/radial.png)",
      backgroundSize:'contain',
      backgroundRepeat:'no-repeat'
    }}>
      <div className="md:container md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 item-center">
        {/* Left Content */}
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
          delay: 0.5,
          duration: 0.5,
          ease: "easeInOut",
        }}
        viewport={{ once: false, amount: 0.2 }} >
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-6">
              Animated Explainer <br/>Video Benefits
            </h2>
          </Reveal>

          <div className="transform transition-transform duration-700 ease-in-out hover:scale-105">
              <Image
              className='rounded-lg shadow-lg'
              src={'/images/video_page_images/benefit-img (1).png'}
              width={500}
              height={500}
              />
          </div>
        </motion.div>

      <div className='text-white text-[16px] translate-y-[25%]'>
      <Reveal>
        <p className='mb-6'>
        Animated explainer videos are a powerful tool for simplifying complex ideas and conveying your message clearly. At Pulse, we create engaging, visually appealing videos that capture attention and enhance understanding. These videos effectively explain products, services, or concepts in a concise and memorable way. They increase engagement, improve conversion rates, and boost brand awareness. Animated explainer videos help you connect with your audience, build trust, and drive action, all while standing out in a competitive digital landscape.
        </p>
        </Reveal>
      </div>
        {/* Right Content - Image */}
        <motion.div 
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
        className="relative flex justify-center items-center mt-32 md:mt-0">
          <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-700 ease-in-out hover:scale-105">
            <Image
          src={'/images/video_page_images/benefit-img (2).png'}
          alt="Video Editing Setup"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
