"use client";
import React from "react";
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
// import { Reveal } from "@/utils/Reveal";
import { motion } from "motion/react";
import Link from "next/link";

const LogoDesgin = () => {
  return (
    <main
      className="relative overflow-hidden pb-10 text-white md:translate-y-[-20%]"
      style={{
        backgroundColor: "#040117",
        backgroundSize: "cover",
        borderBottom: "4px solid #363445",
      }}
    >
      {/* Main Content Section */}
      <div className="container relative mx-auto mt-8 px-4 pb-6  pt-14 md:mt-0 md:pb-16 md:pt-0">
        <div className="z-10 mx-auto flex w-auto flex-col items-center justify-center text-center">
          {/* <p className="mb-2 text-xl">We are experts in</p> */}
          <h1 className="pb-6 text-2xl font-bold tracking-wide md:text-5xl">
            Logo Design & Branding
          </h1>
        </div>
        <div
          className="flex transform flex-col items-center justify-between gap-8 rounded-xl p-8 transition-transform duration-700 ease-in-out hover:scale-105 lg:flex-row"
          style={{
            backgroundImage: `url('/images/services_page_images/fourth-section-img.png')`,
            backgroundSize: "cover",
          }}
        >
          <div className="w-full space-y-6 lg:w-[40%]">
            <h2 className="text-2xl font-medium leading-tight md:text-4xl">
              Digital <br />
              Branding
            </h2>

            <p className="leading-relaxed text-gray-300">
              Our team of talented graphic designers will work with you through
              the whole process to create a stunning marketing piece that you
              will love. From logos, business cards, brochures, to signs and
              everything in between we have you covered for all of your design
              needs.{" "}
            </p>

            <div>
            <Link href={"/app"}>
              <PrimaryBtn text="Learn More" />
            </Link>
            </div>
          </div>

          <div className="w-full space-y-6 md:w-auto">
            <h3 className="border-b border-purple-400/30 pb-2 text-xl font-semibold">
              Packaging Design
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-3">Business Card Design</li>

              <li className="flex items-center gap-3">Brochure Design </li>

              <li className="flex items-center gap-3">
                Corporate Identity Design{" "}
              </li>

              <li className="flex items-center gap-3">Logo Design</li>
            </ul>
          </div>
        </div>

        <div
          className="pointer-events-none absolute bottom-[-10%] left-0 hidden w-full select-none overflow-hidden text-center text-[10vw] font-bold md:block"
          style={{
            WebkitTextStroke: "1px rgba(255, 255, 255, 0.1)",
            color: "transparent",
          }}
        >
          Branding
        </div>
      </div>
      {/* Purple Glow Effects */}
      <div className="absolute left-1/4 top-1/2 -z-10 h-96 w-96 rounded-full bg-purple-600/20 blur-[100px] filter" />
      <div className="absolute right-1/4 top-1/4 -z-10 h-96 w-96 rounded-full bg-pink-600/20 blur-[100px] filter" />
    </main>
  );
};

export default LogoDesgin;
