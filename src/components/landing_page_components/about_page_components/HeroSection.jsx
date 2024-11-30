"use client";
import React from "react";
import Navbar from "@/components/landing_page_components/Navbar";
import Image from "next/image";
import { Reveal } from "@/utils/Reveal";
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
import {motion} from 'motion/react';

const HeroSection = () => {
  return (
    <main
      style={{
        backgroundImage: "url('/images/work-details/our-work.png')",
        backgroundSize: "cover",
      }}
    >
        <Navbar />
      <div className=" md:mx-auto  flex md:w-[1200px] flex-col-reverse md:flex-row items-center justify-between h-[70vh] md:h-[100vh]">
        {/* hero heading  */}
        <motion.div 
         initial={{
          x: -300,
          opacity:0
      }}
      whileInView={{
          x: 0,
          opacity:1
      }}
      transition={{
          delay: 0.5,
          duration: 0.5,
          ease: "easeInOut",
      }}
      viewport={{ once: false, amount: 0.2 }}
       className="w-full md:w-[50%] flex-col px-6 md:px-0 translate-y-[-2rem] md:translate-y-0">
          <div className="mb-2 flex w-auto items-center gap-1">
            <Image
              src="/images/services_page_images/blue-dot.png"
              alt="blue-dot"
              width={20}
              height={20}
            />
            <p>About Us</p>
          </div>

          {/* heading main  */}
          <div className="flex flex-wrap items-center gap-6 ">
            <Reveal>
              <h2 className=" w-auto text-xl font-bold leading-tight text-white md:text-5xl">
              EMPOWERING YOUR <br/>DIGITAL PRESENCE
              </h2>
            </Reveal>

            <Reveal>
              <p>
              Transforming visions into digital realities through 3D web development, SEO mastery, multimedia creativity, logo design, online reputation management and application innovation.
              </p>
            </Reveal>

            <PrimaryBtn text={"Visit Website"} />
          </div>
        </motion.div>

        {/* right images  */}
        <motion.div 
         initial={{
          scale: 0,
          opacity:0
      }}
      whileInView={{
          scale: 1,
          opacity:1
      }}
      transition={{
          delay: 0.5,
          duration: 0.5,
          ease: "easeInOut",
      }}
      viewport={{ once: false, amount: 0.2 }}
       className="w-full md:w-[50%] md:translate-y-0 flex-col lg:flex px-6 md:px-0 translate-y-25 items-end justify-end mt-[7rem] md:mt-0">
          <Image
            src={"/images/about_page_images/about.jpg"}
            width={500}
            height={500}
            className="rounded-2xl"
          />
        </motion.div>

        <div className="absolute bottom-6 right-6 rounded-full bg-my-blue-gradient p-3">
          <Image
            src={"/images/services_page_images/inbox.png"}
            alt="inbox"
            width={15}
            height={15}
          />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
