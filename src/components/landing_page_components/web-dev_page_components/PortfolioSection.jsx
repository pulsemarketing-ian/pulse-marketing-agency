'use client';
// import { Reveal } from "@/utils/Reveal";
import Image from "next/image";
import React, { useEffect } from "react";
import "./slider.css";
import Slider from './Slider'
export default function PortfolioSection() {
  return (
    <main className="relative w-full pb-32 md:pb-0 -mt-[100px] xl:-mt-[80px] 2xl:-mt-[220px]">
      <div
        style={{
          backgroundImage: "url('/images/services_page_images/circle.png/')",
          backgroundSize: "cover",
          // transform: "translateY(-50%)",
        }}
        className="h-[50vh] md:translate-y-[-65%] translate-y-[-50%] md:h-[42rem]"
      />
      <div className="absolute top-0 md:top-12 z-10 flex w-full flex-col items-center justify-center ">
        {/* <div className="z-10 mt-8 text-center">
         
            <h1 className="text-2xl md:text-5xl font-bold tracking-wide ">Our Portfolio</h1>
        
        </div> */}

        <div
          style={{
            backgroundImage: "url('/images/app_page_images/radial.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          className="mt-0 min-h-[200px] md:min-h-[50px] w-full md:w-full md:mx-auto md:translate-y-10 md:py-6"
        >
          <Slider/>
        </div>
      </div>
    </main>
  );
}
