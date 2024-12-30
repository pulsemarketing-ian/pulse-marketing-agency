'use client';
import React from "react";
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
import { Reveal } from "@/utils/Reveal";
import {motion} from 'motion/react';
import Link from "next/link";

const AppDevSection = () => {
    return (
         <main 
         className="relative pb-6 md:pb-[15vh] text-white overflow-hidden md:translate-y-[-30%]" 
         style={{
             backgroundColor: '#040117',
             backgroundSize:'cover',
             borderBottom:'4px solid #363445',
           }}
        >
  
        {/* Main Content Section */}
        <div className=" container mx-auto px-4 py-16">
        <div 
             className="rounded-xl p-8 flex flex-col lg:flex-row gap-8 items-center justify-between transform transition-transform duration-700 ease-in-out hover:scale-105 md:translate-y-22 mt-[10rem] md:mt-0"
             style={{
            backgroundImage: `url('/images/services_page_images/third-section-img.png')`,
            backgroundSize:'cover',
            }}
          >
            {/* Left Column */}
            <div className="space-y-6 lg:w-[40%]">
              <Reveal>
                <h2 className="text-2xl md:text-4xl font-medium leading-tight">
                  Application <br/>Development
                </h2>
              </Reveal>
              <Reveal>
                <p className="text-gray-300 leading-relaxed">
                  Welcome to the hub of digital innovation, where ideas evolve into functional intuitive applications that redefine user experiences. Our application development services are centered around creating robust, scalable solutions while delivering solutions that exceed expectations.
                </p>
              </Reveal>
              <Reveal>
              <Link href={"/app"}>
                <PrimaryBtn text="Learn More" />
              </Link>
              </Reveal>
            </div>
  
            {/* Right Column */}
            <div className="space-y-6 lg:w-auto"
            >
            <Reveal>
              <h3 className="text-xl font-semibold pb-2 border-b border-purple-400/30">
                Our Services
              </h3>
              </Reveal>
              <ul className="space-y-2 text-gray-300">
              <Reveal>
                <li className="flex items-center gap-3">
                  Flutter App Development
                </li>
                </Reveal>
                <Reveal>
                <li className="flex items-center gap-3">
                  React Native Development
                </li>
                </Reveal>
                <Reveal>
                <li className="flex items-center gap-3">
                  Native App Development
                </li>
                </Reveal>
                <Reveal>
                <li className="flex items-center gap-3">
                  Maintenance Code Review
                </li>
                </Reveal>
              </ul>
            </div>
          </div>
       
        {/* Background Text Overlay */}
        <div
          className="absolute bottom-0 left-0 w-full text-[10vw] text-center font-bold pointer-events-none select-none overflow-hidden hidden md:block"
          style={{
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)',
            color: 'transparent'
          }}
        >
          App Development
        </div>
        </div>
  
       
  
        {/* Purple Glow Effects */}
        {/* <div className="absolute top-1/2 left-1/4 w-96 h-[60vh] bg-purple-600/20 rounded-full filter blur-[100px] -z-10" />
        <div className="absolute top-1/4 right-1/4 w-96 h-auto bg-pink-600/20 rounded-full filter blur-[100px] -z-10" /> */}
        </main>
    )
  };

export default AppDevSection;
