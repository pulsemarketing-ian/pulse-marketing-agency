"use client";
import React from "react";
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
// import { Reveal } from "@/utils/Reveal";
import { motion } from "motion/react";
import Link from "next/link";

const WebDevSection = () => {
  return (
    <main className="relative w-full pb-[30rem] md:pb-18 ">
      {/* Background Image */}
      <div
        style={{
          backgroundImage: "url('/images/services_page_images/circle.png')",
          backgroundSize: "cover",
          transform: "translateY(-50%)",
        }}
        className="h-[120px] md:h-[704px]"
      />

      {/* Content Section */}
      <div
        className="absolute z-10 flex w-full translate-y-[-15%] flex-col items-center justify-center md:top-5 md:translate-y-0 "
        style={{
          // backgroundColor: '#040117',
          backgroundSize: "cover",
         borderBottom: "4px solid #363445",
        }}
      >
        <div className="z-10 mt-14 text-center text-lg md:mt-0 md:translate-y-[-30%] lg:mt-8">
          {/* <p>We are experts in</p> */}

          <h1 className="pb-7 text-2xl font-bold tracking-wide md:text-6xl">
            Development
          </h1>
        </div>

        {/* Main Content Section */}
        <div className="container relative mx-auto px-4 py-16">
          {/* Background Image with Hover Effect */}
          <div
            className="flex transform flex-col items-center justify-between gap-8 p-8 transition-transform duration-700 ease-in-out hover:scale-105 lg:flex-row"
            style={{
              backgroundImage: `url('/images/services_page_images/second-section-img.png')`,
              backgroundSize: "cover",
            }}
          >
            {/* Left Column */}
            <div className="w-full space-y-6 md:w-[40%]">
              <h2 className="text-2xl font-medium leading-tight md:text-4xl">
                Web <br /> Development
              </h2>

              <p className="leading-relaxed text-gray-300">
                Every decision we make needs to answer the million dollar
                question: how will this benefit our partner is goal best? We
                work to develop solutions. Step into our digital workshop, where
                innovative ideas converge with technical prowess to build
                bespoke online experiences.
              </p>

              <div>
            <Link href={"/app"}>
              <PrimaryBtn text="Learn More" />
            </Link>
            </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6w-full md::w-[30%]">
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
            className="pointer-events-none absolute bottom-[-14%] left-0 hidden w-full select-none overflow-hidden pb-20 text-center text-[8vw] font-bold md:block"
            style={{
              WebkitTextStroke: "1px rgba(255, 255, 255, 0.1)",
              color: "transparent",
            }}
          >
            Web Development
          </div>
        </div>

        {/* Purple Glow Effects */}
        <div className="absolute left-1/4 top-1/2 -z-10 h-96 w-96 rounded-full bg-purple-600/20 blur-[100px] filter" />
        <div className="absolute right-1/4 top-1/4 -z-10 h-96 w-96 rounded-full bg-pink-600/20 blur-[100px] filter" />
      </div>
    </main>
  );
};

export default WebDevSection;
