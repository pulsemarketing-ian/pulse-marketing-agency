'use client';
import React from "react";
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
import { Reveal } from "@/utils/Reveal";

const SEOSection = () => {
    return (
         <main 
         className="relative pb-8 text-white overflow-hidden" 
         style={{
             backgroundColor: '#040117',
             backgroundSize:'cover',
             borderBottom:'4px solid #363445',
           }}
        >
  
        {/* Main Content Section */}
        <div className="relative container mx-auto px-4 py-16">
            
        <div className="text-center z-10">
        <Reveal>
            <p className="text-xl mb-2">We are experts in</p>
          </Reveal>
          <Reveal>
            <h1 className="text-2xl md:text-4xl font-bold tracking-wide">Search Engine Optimization</h1>
            </Reveal>
          </div>
          <div 
            className="rounded-xl p-8 flex flex-col lg:flex-row gap-8 items-center justify-between transform transition-transform duration-700 ease-in-out hover:scale-105"
            style={{
            backgroundImage: `url('/images/services_page_images/fifth-section-img.png')`,
            backgroundSize:'cover',
            marginTop:'15px'
            // backdropFilter: 'blur(30px)',
            }}
          >
            {/* Left Column */}
            <div className="space-y-6 lg:w-[40%]">
              <Reveal>
                <h2 className="text-2xl md:text-4xl font-medium leading-tight">
                Developing <br/> SEO Strategy  <br/>And Plan
                </h2>
              </Reveal>
              <Reveal>
              <p className="text-gray-300 leading-relaxed">
              Our team of talented graphic designers will work with you through the whole process to create a stunning marketing piece that you will love. From logos, business cards, brochures, to signs and everything in between we have you covered for all of your design needs.              </p>
              </Reveal>
              <PrimaryBtn text="Learn More" />
            </div>
  
          
  
            {/* Right Column */}
            <div className="space-y-6 lg:w-[30%]">
            <Reveal>
                <h3 className="text-xl font-semibold pb-2 border-b border-purple-400/30">
                Business Assessment
                </h3>
              </Reveal>
              <ul className="space-y-2 text-gray-300">
              <Reveal>
                <li className="flex items-center gap-3">
                Target Customer
                </li>
                </Reveal>
                <Reveal>
                <li className="flex items-center gap-3">
                Competitor Analysis
                </li>
                </Reveal>
              </ul>
            </div>
          </div>
       
        {/* Background Text Overlay */}
        <div
          className="absolute bottom-[-10%] left-0 w-full text-[10vw] text-center font-bold pointer-events-none select-none overflow-hidden"
          style={{
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)',
            color: 'transparent'
          }}
        >
          SEO
        </div>
        </div>
  
       
  
        {/* Purple Glow Effects */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px] -z-10" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full filter blur-[100px] -z-10" />
      </main>
    )
  };

export default SEOSection;
