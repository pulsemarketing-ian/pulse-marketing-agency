"use client";
import { Reveal } from "@/utils/Reveal";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Strategies = () => {
  return (
    <main
      className="mx-auto flex w-full flex-wrap items-center justify-between gap-12 px-4 py-10 md:w-[1200px] md:gap-0 md:px-0 md:py-20"
      style={{
        backgroundImage: "url('/images/app_page_images/radial.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Image on the left */}
      <div className="mt-8 flex w-full justify-center md:mt-0 md:w-[48%]">
        <Image
          src={"/images/seo_page_images/read-rank-fater.png"}
          width={600}
          height={500}
          className="rounded-xl"
        />
      </div>

      {/* Text on the right */}
      <div className="flex flex-col gap-2 text-left md:ml-10 md:w-auto md:gap-4">
        <Reveal>
          <h2 className="mb-3 text-xl font-bold tracking-wide md:text-4xl">
            Ready to Rank Higher <br /> and Grow Faster?
          </h2>
        </Reveal>

        <Reveal>
          <p className="pl-2">Get Your Free SEO Audit Today!</p> <br />
          <ul className="text-lg">
            <li className="mb-2">
              <span className="text-center text-3xl text-blue-500">. </span>Find
              Out What is Holding Your Website Back
            </li>
            <li className="mb-2">
              <span className="text-center text-3xl text-blue-500">. </span>
              Discover Hidden Opportunities to Increase Traffic
            </li>
            <li className="mb-2">
              <span className="text-center text-3xl text-blue-500">. </span>
              Start Dominating Search Results—With Pulse!
            </li>
          </ul>
        </Reveal>
      </div>
    </main>
  );
};

export default Strategies;
