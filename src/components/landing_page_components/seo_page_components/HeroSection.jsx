"use client";
import React from "react";
import Image from "next/image";
// import { Reveal } from '@/utils/Reveal'
import Navbar from "@/components/landing_page_components/Navbar";
import HeroForm from "@/components/landing_page_components/HeroForm";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <main
      style={{
        backgroundImage: "url('/images/seo_page_images/seo-hero.png')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
      className="ct-banner md:pb-[150px]"
    >
      <Navbar />
      <div className="relative mx-auto  flex h-[70vh] w-[1200px] flex-row items-center justify-between px-4 md:h-[110vh] md:px-0">
        {/* hero heading */}
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
          className="mb-8 w-full md:mb-0 md:w-[45%]"
        >
          <div className="mb-2 flex items-center gap-1">
            <Image
              src="/images/services_page_images/blue-dot.png"
              alt="blue-dot"
              width={20}
              height={20}
            />
            <p className="text-white">Boost Traffic, Increase Revenue</p>
          </div>

          <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
            Search Engine <br />
            Optimization
          </h2>
        </motion.div>

        {/* hero form */}
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
          className="border-1 absolute right-0 z-20 mt-[-10%] w-full max-w-md rounded-3xl border-white bg-black bg-opacity-30 p-6 text-white shadow-xl backdrop-blur-md md:mt-10 md:w-[40%] md:px-8 md:py-3"
        >
          <HeroForm />
        </motion.div>
      </div>
    </main>
  );
}
