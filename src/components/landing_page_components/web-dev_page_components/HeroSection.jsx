"use client";
import React, { useState } from "react";
import Navbar from "@/components/landing_page_components/Navbar";
import Image from "next/image";
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
import HeroForm from "@/components/landing_page_components/HeroForm";
// import { Reveal } from '@/utils/Reveal';
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <main
      style={{
        backgroundImage: "url('/images/web-dev_page_images/hero.png')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
      className="ct-banner pb-[370px]"
    >
      <Navbar />
      <div className="relative mx-auto flex h-[70vh] w-[1200px] flex-row items-center justify-between md:h-[100vh] md:pt-[50px]">
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
          className=" w-full translate-y-[-30%] flex-col px-6 md:w-[45%] md:translate-y-0 md:px-0"
        >
          <div className="mb-2 flex w-auto items-center gap-1">
            <span className="flex items-center gap-3">
              <Image
                src="/images/services_page_images/blue-dot.png"
                alt="blue-dot"
                width={20}
                height={20}
              />
              <p>Web Development</p>
            </span>
          </div>

          {/* heading main  */}

          <h2 className="text-left text-2xl font-bold leading-tight md:text-5xl">
            Bring The Digital Vision <br />
            Of Your Brand To Life
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
          className="border-1 absolute top-20 right-0 z-20 w-full max-w-md rounded-3xl border-white bg-black bg-opacity-30 p-6 text-white shadow-xl backdrop-blur-md md:mt-10 md:w-[40%] md:px-8 md:py-3"
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
