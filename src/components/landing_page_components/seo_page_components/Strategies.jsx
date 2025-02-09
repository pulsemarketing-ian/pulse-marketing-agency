"use client";
import { Reveal } from "@/utils/Reveal";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Strategies = () => {
  return (
    <main
      className="mx-auto flex w-full flex-wrap justify-center items-center px-4 py-10 md:w-[1200px] md:px-0"
      style={{
        backgroundImage: "url('/images/app_page_images/radial.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="flex flex-col gap-4 md:w-[48%] text-left"
      >
        <Reveal>
          <h2 className="mb-3 text-xl font-bold tracking-wide md:text-4xl">
            Why Choose Pulse <br /> For SEO?
          </h2>
        </Reveal>

        <Reveal>
          <ul className="text-lg">
            <li className="mb-2">
              <span className="text-blue-500 text-center text-3xl">. </span>Proven Strategies Backed by Data
            </li>
            <li className="mb-2">
              <span className="text-blue-500 text-center text-3xl">. </span>Customized Solutions for Your Unique Business Goals
            </li>
            <li className="mb-2">
              <span className="text-blue-500 text-center text-3xl">. </span>Dedicated SEO Experts with Years of Experience
            </li>
            <li className="mb-2">
              <span className="text-blue-500 text-center text-3xl">. </span>Transparent Reporting So You Always Know Your ROI
            </li>
          </ul>
        </Reveal>
      </div>

      <div  className="mt-8 md:mt-0 md:w-[48%] w-full flex justify-center"
      >
        <Image
          src={"/images/seo_page_images/strategy.png"}
          width={550}
          height={460}
          className="rounded-3xl"
        />
      </div>
    </main>
  );
};

export default Strategies;
