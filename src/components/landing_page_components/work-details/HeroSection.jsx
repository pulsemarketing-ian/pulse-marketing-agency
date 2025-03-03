"use client";
import React from "react";
import Navbar from "@/components/landing_page_components/Navbar";
import Image from "next/image";
// import { Reveal } from "@/utils/Reveal";
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <main
      style={{
        backgroundImage: "url('/images/work-details/our-work.png')",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <div className=" flex  h-[60vh] flex-col-reverse items-center justify-between pt-[10vh] md:mx-auto md:h-[100vh] md:w-[1200px] md:flex-row md:pt-0">
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
          className="w-full translate-y-[-2rem] flex-col px-6 md:w-[50%] md:translate-y-0 md:px-0"
        >
          <div className="mb-2 flex w-auto items-center gap-1">
            <Image
              src="/images/services_page_images/blue-dot.png"
              alt="blue-dot"
              width={20}
              height={20}
            />
            <p>Case Study</p>
          </div>

          {/* heading main  */}
          <div className="flex flex-wrap items-center gap-6 ">
            <h2 className=" w-auto text-xl font-bold leading-tight text-white md:text-5xl">
              Codos Foundation
            </h2>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry is standard dummy text
              ever since the 1500s, when an unknown printer took
            </p>

            <PrimaryBtn text={"Visit Website"} />
          </div>
        </motion.div>

        {/* right images  */}
        <motion.div
          initial={{
            scale: 0,
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
          className="w-full flex-col px-6 md:w-[50%] md:translate-y-10 md:px-0"
        >
          <Image
            src={"/images/work-details/hero-img.png"}
            width={700}
            height={700}
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
