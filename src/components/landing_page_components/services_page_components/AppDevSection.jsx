"use client";
import React from "react";
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
// import { Reveal } from "@/utils/Reveal";
import { motion } from "motion/react";
import Link from "next/link";

const AppDevSection = () => {
  return (
    <main
      className="relative overflow-hidden pb-6 md:pt-5 pt-2 text-white md:translate-y-[-30%] md:pb-[15vh]"
      style={{
        backgroundColor: "#040117",
        backgroundSize: "cover",
        borderBottom: "4px solid #363445",
      }}
    >
      {/* Main Content Section */}
      <div className=" container mx-auto px-4 pb-5 pt-14 md:py-16">
        <div
          className="mt-[10rem] flex transform flex-col justify-between gap-8 rounded-xl p-8 transition-transform duration-700 ease-in-out hover:scale-105 md:mt-0 md:translate-y-22 md:items-center lg:flex-row"
          style={{
            backgroundImage: `url('/images/services_page_images/third-section-img.png')`,
            backgroundSize: "cover",
          }}
        >
          {/* Left Column */}
          <div className="space-y-6 lg:w-[40%]">
            <h2 className="mt-20 text-2xl font-medium leading-tight sm:mt-32 md:text-4xl">
              Application <br /> Development
            </h2>

            <p className="leading-relaxed text-gray-300">
              Welcome to the hub of digital innovation, where ideas evolve into
              functional intuitive applications that redefine user experiences.
              Our application development services are centered around creating
              robust, scalable solutions while delivering solutions that exceed
              expectations.
            </p>
            <div>
            <Link href={"/app"}>
              <PrimaryBtn text="Learn More" />
            </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 lg:w-auto">
            <h3 className="border-b border-purple-400/30 pb-2 text-xl font-semibold">
              Our Services
            </h3>

            <ul className="space-y-2 text-gray-300 sm:space-y-3">
              <li className="flex items-center gap-3 sm:gap-5">
                Flutter App Development
              </li>

              <li className="flex items-center gap-3 sm:gap-5">
                React Native Development
              </li>

              <li className="flex items-center gap-3 sm:gap-5">
                Native App Development
              </li>

              <li className="flex items-center gap-3 sm:gap-5">
                Maintenance Code Review
              </li>
            </ul>
          </div>
        </div>

        {/* Background Text Overlay */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 hidden w-full select-none overflow-hidden text-center text-[10vw] font-bold md:block"
          style={{
            WebkitTextStroke: "1px rgba(255, 255, 255, 0.1)",
            color: "transparent",
          }}
        >
          App Development
        </div>
      </div>

      {/* Purple Glow Effects */}
      {/* <div className="absolute top-1/2 left-1/4 w-96 h-[60vh] bg-purple-600/20 rounded-full filter blur-[100px] -z-10" />
        <div className="absolute top-1/4 right-1/4 w-96 h-auto bg-pink-600/20 rounded-full filter blur-[100px] -z-10" /> */}
    </main>
  );
};

export default AppDevSection;
