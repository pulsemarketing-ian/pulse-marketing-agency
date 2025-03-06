"use client";
import React from "react";
// import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
import PrimaryBtn from "../landing_page_components/PrimaryBtns/PrimaryBtn";
// import { Reveal } from "@/utils/Reveal";
import { motion } from "motion/react";
import Link from "next/link";

const WebDevService = () => {
  return (
    <main className="relative w-full pb-[30rem] md:pb-0 ">
      <div className="h-[18vh] md:h-[26rem]" />
      {/* Content Section */}
      <div
        className="absolute z-10 flex w-full translate-y-[-15%] flex-col items-center justify-center md:top-0 md:translate-y-0"
        style={{
          backgroundSize: "cover",
        }}
      >
        {/* Main Content Section */}
        <div className="container md:mt-0 md:relative mt-16 md:pt-0 pt-9 md:mx-auto md:px-4 md:py-16">
          {/* Background Image with Hover Effect */}
          <div
            className=" flex transform flex-col items-center justify-between gap-8 p-2 md:mt-0 mt-5 transition-transform duration-700 ease-in-out hover:scale-105 md:p-8 lg:flex-row"
            style={{
              backgroundImage: `url('/images/services_page_images/second-section-img.png')`,
              backgroundSize: "cover",
            }}
          >
            {/* Left Column */}
            <div className="w-full space-y-6 md:w-[40%]">
              <h2 className="pb-2 text-2xl font-semibold md:text-5xl ">
                Web <br /> Development
              </h2>

              <p className="text-2xl leading-relaxed text-gray-300">
                Every decision we make needs to answer the million dollar
                question: how will this benefit our partner is goal best? We
                work to develop solutions. Step into our digital workshop, where
                innovative ideas converge with technical prowess to build
                bespoke online experiences.
              </p>
              <div className="mt-0">
              <Link href={"/web-development"}>
                <PrimaryBtn text="Learn More" />
              </Link>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full space-y-6 md:w-[30%]">
              <h3 className="border-b border-purple-400/30 pb-2 text-xl font-semibold">
                Tailored Solutions
              </h3>

              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-3">
                  Cutting-Edge Technology
                </li>

                <li className="flex items-center gap-3">
                  User -Centric Design
                </li>

                <li className="flex items-center gap-3">SEO Optimization</li>

                <li className="flex items-center gap-3">
                  Continuous Evolution
                </li>
              </ul>
            </div>
          </div>

          {/* Background Text Overlay */}
          <div
            className="pointer-events-none absolute bottom-[-10%] left-0 hidden w-full select-none overflow-hidden pb-6 text-center text-[8vw] font-bold md:block"
            style={{
              WebkitTextStroke: "1px rgba(255, 255, 255, 0.1)",
              color: "transparent",
            }}
          >
            Web Development
          </div>
        </div>

        {/* Purple Glow Effects */}
        {/* <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px] -z-10" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full filter blur-[100px] -z-10" /> */}
      </div>
    </main>
  );
};

export default WebDevService;
