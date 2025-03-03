"use client";
import React, { useState } from "react";
import Navbar from "@/components/landing_page_components/Navbar";
import Image from "next/image";
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
// import { Reveal } from '@/utils/Reveal'
import { motion } from "motion/react";
import HeroForm from "@/components/landing_page_components/HeroForm";

const HeroSection = () => {
  return (
    <main
      style={{
        backgroundImage: "url('/images/video_page_images/banner-video02.jpg')",
        backgroundSize: "cover",
      }}
      className="md:pb-[150px]"
    >
      <Navbar />
      <div className="relative mx-auto  flex h-[80vh] w-[1200px] flex-row items-center justify-between md:h-[100vh] md:pt-[50px]">
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
          className="-mt-22 w-[45%] flex-col px-8 md:mt-0 md:px-0"
        >
          <div className="mb-2 flex w-auto items-center gap-1">
            <Image
              src="/images/services_page_images/blue-dot.png"
              alt="blue-dot"
              width={20}
              height={20}
            />

            <p>video and photo editor</p>
          </div>

          {/* heading main  */}

          <h2 className="text-left text-2xl font-bold leading-tight md:text-5xl">
            Animated videos <br />
            Built to perfection
          </h2>
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
          className="border-1 absolute right-0 z-20 w-full max-w-md rounded-3xl border-white bg-black bg-opacity-30 p-6 text-white shadow-xl backdrop-blur-md md:mt-10 md:w-[40%] md:px-8 md:py-3"
        >
          <HeroForm />
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
  );
};

export default HeroSection;
