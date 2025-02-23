"use client";
import React from "react";
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
import { Reveal } from "@/utils/Reveal";
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
      <div className="relative container mx-auto px-4 pt-14 pb-6  md:pb-16 md:pt-0 mt-[4rem] md:mt-0">
            
      <div className="text-center z-10 mx-auto w-auto flex flex-col items-center justify-center">
          <Reveal>
            <p className="text-xl mb-2">We are experts in</p>
            <h1 className="text-2xl md:text-5xl font-bold tracking-wide pb-6">Logo Design & Branding</h1>
            </Reveal>
          </div>
          <div 
             className="rounded-xl p-8 flex flex-col lg:flex-row gap-8 items-center justify-between transform transition-transform duration-700 ease-in-out hover:scale-105"
            style={{
            backgroundImage: `url('/images/services_page_images/fourth-section-img.png')`,
            backgroundSize:'cover',
            }}
          >
            <div className="space-y-6 w-full lg:w-[40%]">
            <Reveal>
                <h2 className="text-2xl md:text-4xl font-medium leading-tight">
                Digital <br/>
                Branding
                </h2>
              </Reveal>
              <Reveal>
              <p className="text-gray-300 leading-relaxed">
              Our team of talented graphic designers will work with you through the whole process to create a stunning marketing piece that you will love. From logos, business cards, brochures, to signs and everything in between we have you covered for all of your design needs.              </p>
              </Reveal>
              <Reveal>
              <Link href={"/branding"}>
              <PrimaryBtn text="Learn More" />
              </Link>
              </Reveal>
            </div>
    
            <div className="space-y-6 w-full md:w-auto">
            <Reveal>
              <h3 className="text-xl font-semibold pb-2 border-b border-purple-400/30">
              Packaging Design
              </h3>
              </Reveal>
              <ul className="space-y-2 text-gray-300">
              <Reveal>
                <li className="flex items-center gap-3">
                  Business Card Design
                </li>
                </Reveal>
                <Reveal>
                <li className="flex items-center gap-3">
                  Brochure Design                </li>
                  </Reveal>
                  <Reveal>
                <li className="flex items-center gap-3">
                  Corporate Identity Design                </li>
                  </Reveal>
                  <Reveal>
                <li className="flex items-center gap-3">
                  Logo Design                
                  </li>
                  </Reveal>
              </ul>
            </div>
          </div>
       
        <div
          className="absolute bottom-[-10%] left-0 w-full text-[10vw] text-center font-bold pointer-events-none select-none overflow-hidden hidden md:block"
          style={{
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)',
            color: 'transparent'
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
