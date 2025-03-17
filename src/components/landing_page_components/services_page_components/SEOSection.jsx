"use client";
import React from "react";
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
// import { Reveal } from "@/utils/Reveal";
import { motion } from "motion/react";
import Link from "next/link";

const SEOSection = () => {
  return (
    <main
      className="relative overflow-hidden pb-8 text-white md:translate-y-[-13%]"
      style={{
        backgroundColor: "#040117",
        backgroundSize: "cover",
        borderBottom: "4px solid #363445",
      }}
    >
      {/* Main Content Section */}
      <div className="container relative mx-auto px-4 py-16">
        <div className="z-10 mx-auto flex w-auto flex-col items-center justify-center text-center">
          {/* <p className="mb-2 text-xl">We are experts in</p> */}
          <h1 className="pb-2 text-2xl font-bold tracking-wide md:text-5xl">
            Search Engine Optimization
          </h1>
        </div>
        <div
          className="flex transform flex-col items-center justify-between gap-8 rounded-xl p-8 transition-transform duration-700 ease-in-out hover:scale-105 lg:flex-row"
          style={{
            backgroundImage: `url('/images/services_page_images/fifth-section-img.png')`,
            backgroundSize: "cover",
            marginTop: "15px",
            // backdropFilter: 'blur(30px)',
          }}
        >
          {/* Left Column */}
          <div className="w-full space-y-6 md:w-[40%]">
            <h2 className="text-2xl font-medium leading-tight md:text-4xl">
              Developing <br /> SEO Strategy <br />
              And Plan
            </h2>

            <p className="leading-relaxed text-gray-300">
              Unlock the full potential of your online presence with Pulse
              Marketing is expert SEO services. Our dedicated team crafts
              personalized strategies to improve your search engine rankings,
              drive organic traffic, and enhance your digital visibility.{" "}
            </p>
            <div>
            <Link href={"/app"}>
              <PrimaryBtn text="Learn More" />
            </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full space-y-6 md:w-auto">
            <h3 className="border-b border-purple-400/30 pb-2 text-xl font-semibold">
              Business Assessment
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-3">Target Customer</li>

              <li className="flex items-center gap-3">Competitor Analysis</li>
            </ul>
          </div>
        </div>

        {/* Background Text Overlay */}
        <div
          className="pointer-events-none absolute bottom-[-10%] left-0 w-full select-none overflow-hidden text-center text-[10vw] font-bold"
          style={{
            WebkitTextStroke: "1px rgba(255, 255, 255, 0.1)",
            color: "transparent",
          }}
        >
          SEO
        </div>
      </div>

      {/* Purple Glow Effects */}
      <div className="absolute left-1/4 top-1/2 -z-10 h-96 w-96 rounded-full bg-purple-600/20 blur-[100px] filter" />
      <div className="absolute right-1/4 top-1/4 -z-10 h-96 w-96 rounded-full bg-pink-600/20 blur-[100px] filter" />
    </main>
  );
};

export default SEOSection;
