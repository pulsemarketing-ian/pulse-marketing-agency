'use client'
import { Reveal } from '@/utils/Reveal';
import Image from 'next/image';
import {motion} from 'motion/react';

export default function BrandingSection() {
  return (
    <section className="text-white md:py-16 md:pt-[-20px] pb-16 md:pb-0 md:w-[1200px] md:mx-auto px-6 md:px-0">
      <div className="md:container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
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
                  viewport={{ once: false, amount: 0.2 }} className="md:w-1/2 space-y-4">
        <Reveal>
          <h2 className="text-4xl font-medium leading-tight">Logo Design <br/>& Branding</h2>
        </Reveal>
        <Reveal>
          <p className="text-gray-300 text-[13px]">
            Our team of talented graphic designers will work with you through the whole process
            to create a stunning marketing piece that you will love. From logos, business cards,
            brochures, to signs and everything in between, we have you covered for all of your
            design needs.
          </p>
          </Reveal>
          <Reveal>
          <p className="text-gray-300 text-[13px]">
            Enter the realm where brands come to life, identities are forged, and stories are told
            through visual narratives. Our logo and branding services are more than just design;
            they are a strategic blend of creativity and psychology, carving unique identities that
            resonate with audiences.
          </p>
          </Reveal>
        </motion.div>

        {/* Image Content */}
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
                    delay: 0.5,
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }} className="md:w-1/2 w-full flex justify-center" 
            style={{
                backgroundImage:"url('/images/app_page_images/radial.png')",
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat'
            }}
        >
          <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-700 ease-in-out hover:scale-105">
            <Image
              src={'/images/branding_page_images/branding.png'}
              alt="Logo Design & Branding"
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
