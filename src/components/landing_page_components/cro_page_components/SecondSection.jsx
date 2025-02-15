"use client";
import React from "react";
import { Reveal } from "@/utils/Reveal";
import Image from "next/image";
import { motion } from "motion";

const SecondSection = () => {
  return (
    
    <main className="relative w-full pb-0 md:pb-0 md:-mt-[50px]">
    <div
      style={{
        backgroundImage: "url('/images/services_page_images/circle.png/')",
        backgroundSize: "cover",
      }}
      className="h-[42vh] md:h-[34rem] transform md:translate-y-[-65%] translate-y-[-63%]"
    />
    <div
      className="absolute -top-5 z-10 flex w-full flex-col items-center justify-center md:top-5 bg-[#040117] md:bg-transparent">
      <div className="z-10 text-center md:-mt-2">
        <Reveal>
          <h1 className="mb-3 text-xl font-bold tracking-wide md:text-4xl xl:pt-10">
          Boost Your E-Commerce Sales  <br />
          With Precision CRO
          </h1>
        </Reveal>
      </div>

      {/* inner content  */}
      <div className="mt-6 flex-col overflow-hidden px-6 md:mx-auto md:flex  md:w-[1200px] md:items-center md:justify-between md:px-0 lg:flex-row mb-4 md:mb-0">
        {/* left box  */}
        <div
          className="h-[100%] w-full rounded-2xl md:w-[60%] " >
         <Image
         src={'/images/cro_page_images/second-section.png'}
         width={670}
         height={700}
         />
        </div>

        {/* right box  */}
        <div
          className="md:flex md:flex-col h-full w-full justify-end rounded-2xl md:w-[40%] hidden "
          style={{
            backgroundImage: "url('/images/app_page_images/radial.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}    
        >
            <Reveal><p>
            At Pulse, we specialize in Conversion Rate Optimization (CRO) to help e-commerce businesses maximize their sales and revenue. Our tailored CRO strategies are designed to identify barriers in your customer journey, optimize your website performance, and turn casual visitors into loyal customers.
            </p></Reveal>

            <Reveal><p className="mt-4">
            Whether you are running a Shopify store or another e-commerce platform, we have the expertise to deliver results that exceed your expectations.
            </p></Reveal>
        </div>
      </div>
    </div>
  </main>
  );
};

export default SecondSection;
