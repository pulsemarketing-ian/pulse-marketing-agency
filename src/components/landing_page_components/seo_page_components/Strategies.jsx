"use client";
// import { Reveal } from "@/utils/Reveal";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Strategies = () => {
  return (
    <main
      className="mx-auto flex seo-overlay w-full flex-col-reverse flex-wrap items-center md:justify-start justify-center px-4 py-10 md:w-[1200px] md:flex-row md:px-0"
      style={{
        backgroundImage: "url('/images/seo_page_images/seo-bg.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition:"100% 0"
      }}
    >
      <div className="flex flex-col text-colum gap-4 text-left md:w-[48%]">
        <h2 className="mt-5 text-xl font-bold tracking-wide md:mb-3 md:mt-0 md:text-4xl">
          Why Choose Pulse <br /> For SEO?
        </h2>

        <ul className="text-md md:text-lg">
          <li className="mb-2">
            <span className="text-center text-3xl text-blue-500">. </span>Proven
            Strategies Backed by Data
          </li>
          <li className="mb-2">
            <span className="text-center text-3xl text-blue-500">. </span>
            Customized Solutions for Your Unique Business Goals
          </li>
          <li className="mb-2">
            <span className="text-center text-3xl text-blue-500">. </span>
            Dedicated SEO Experts with Years of Experience
          </li>
          <li className="mb-2">
            <span className="text-center text-3xl text-blue-500">. </span>
            Transparent Reporting So You Always Know Your ROI
          </li>
        </ul>
      </div>
{/* 
      <div
       className="mt-8 flex w-full justify-center md:mt-0 md:w-[48%]">
        <Image
          src={"/images/seo_page_images/seo-opt.png"}
          width={550}
          height={460}
          className="rounded-3xl"
        />
      </div> */}
    </main>
  );
};

export default Strategies;
