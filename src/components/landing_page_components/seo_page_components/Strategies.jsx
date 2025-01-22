"use client";
import { Reveal } from "@/utils/Reveal";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Strategies = () => {
  return (
    <main
      className="mx-auto flex w-full flex-wrap justify-between px-4 py-10 md:w-[1200px] md:px-0 "
      style={{
        backgroundImage: "url('/images/app_page_images/radial.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
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
          delay: 0.2,
          duration: 0.5,
          ease: "easeInOut",
        }}
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-col gap-4 md:w-[48%]"
      >
        <Reveal>
          <h2 className="mb-3 text-xl font-bold tracking-wide md:text-4xl">
            <span className="mr-2 text-[4rem] text-blue-400">6</span>Reasons Why
            Business Choose Pulse Marketing <br /> SEO Services:
          </h2>
        </Reveal>

        <Reveal>
          <ul className="text-[19px]">
            <li className="text-lg mb-2">1. Better Results</li>
            <li className="text-lg mb-2">2. Increase Conversions</li>
            <li className="text-lg mb-2">3. Securing Great ROI</li>
            <li className="text-lg mb-2">4. Performance</li>
            <li className="text-lg mb-2">5. Money-back Guarantee</li>
            <li className="text-lg mb-2">6. Analytics and Reporting</li>
          </ul>
        </Reveal>

        <Image
          src="/images/seo_page_images/dynamic-data-visualization-3d.jpg"
          width={300}
          height={300}
          alt="seo-strategies"
          className="rounded-lg"
        />
      </motion.div>

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
          delay: 0.2,
          duration: 0.5,
          ease: "easeInOut",
        }}
        viewport={{ once: false, amount: 0.2 }}
        className="mt-8 flex w-full justify-end justify-items-end md:mt-0 md:w-[48%]"
      >
        <Image
          src={"/images/seo_page_images/strategy.png"}
          width={550}
          height={460}
          className="rounded-3xl"
        />
      </motion.div>
    </main>
  );
};

export default Strategies;
