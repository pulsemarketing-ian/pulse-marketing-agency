'use client';
import React from 'react'
import PrimaryBtn from "../../components/landing_page_components/PrimaryBtns/PrimaryBtn";
import { Reveal } from "@/utils/Reveal";
import {motion} from 'motion/react';
import Link from "next/link";

const LogoDesign = () => {
  return (
    <main 
    className="relative pb-6 md:pb-[15vh] text-white overflow-hidden md:translate-y-0" 
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
       <div className="space-y-6 lg:w-[80%]">
         <Reveal>
           <h2 className="text-2xl md:text-4xl font-medium leading-tight">
           Digital <br/> Branding
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

     </div>
  
   {/* Background Text Overlay */}
   <div
     className="absolute bottom-0 left-0 w-full text-[10vw] text-center font-bold pointer-events-none select-none overflow-hidden hidden md:block"
     style={{
       WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)',
       color: 'transparent',
       fontSize: '4vw',
     }}
   >
     App Development
   </div>
   </div>
   </main>
  )
}

export default LogoDesign