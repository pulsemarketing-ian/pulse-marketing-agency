"use client";
// import { Reveal } from '@/utils/Reveal';
import Image from "next/image";
import { motion } from "framer-motion";

export default function BrandingSection() {
  return (
    <section
  
     className="px-6 pb-16 text-white md:mx-auto md:w-[1200px] md:px-0 md:py-16 md:pb-0 md:pt-[-80px]">
      <div
        style={{
          backgroundImage: "url('/images/branding_page_images/section_image.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
       className="mx-auto flex flex-col items-center gap-8 md:container md:flex-row">
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
          viewport={{
            once: false,
            amount: 0.2,
          }}
          className="hidden space-y-4 md:block md:w-1/2"
        >
          <h2 className="text-4xl font-medium leading-tight">
            Logo Design <br />& Branding
          </h2>

          <p className="text-[15px] text-gray-300">
            Our team of talented graphic designers will work with you through
            the whole process to create a stunning marketing piece that you will
            love. From logos, business cards, brochures, to signs and everything
            in between, we have you covered for all of your design needs.
          </p>

          <p className="text-[15px] text-gray-300">
            Enter the realm where brands come to life, identities are forged,
            and stories are told through visual narratives. Our logo and
            branding services are more than just design; they are a strategic
            blend of creativity and psychology, carving unique identities that
            resonate with audiences.
          </p>
        </motion.div>

        {/* Image Content */}
        {/* <motion.div
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
          viewport={{
            once: false,
            amount: 0.2,
          }}
          className="flex sm:hidden w-full justify-center md:block md:w-1/2"
          style={{
            backgroundImage: "url('/images/app_page_images/radial.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative h-80 w-full transform overflow-hidden rounded-lg shadow-lg transition-transform duration-700 ease-in-out hover:scale-105 md:h-96">
            <Image
              src={"/images/branding_page_images/01.jpg"}
              alt="Logo Design & Branding"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
