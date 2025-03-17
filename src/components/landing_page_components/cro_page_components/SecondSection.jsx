"use client";
import React from "react";
// import { Reveal } from "@/utils/Reveal";
import Image from "next/image";
import { motion } from "motion";

const SecondSection = () => {
  return (
    <main className="relative bottom-[520px] md:bottom-150 w-full pb-0 md:mt-[0px] md:pb-0 lg:mb-22">      
      <div 
      style={{
        backgroundImage:"url('/images/cro_page_images/cr-image.png')",
        backgroundSize:"contain",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"28% 0%"
      }}
      className="absolute bg-overlay top-28 z-10 p-14 flex w-full flex-col items-center justify-center bg-[#040117] md:top-40 md:bg-transparent">
        {/* <div className="z-10 text-center md:-mt-2">
          <h1 className="mb-3 text-xl font-bold tracking-wide md:text-4xl xl:pt-10">
            Boost Your E-Commerce Sales <br />
            With Precision CRO
          </h1>
        </div> */}

        {/* inner content  */}
        <div className="mb-4 mt-6  flex-col overflow-hidden px-6 md:mx-auto  md:mb-0 md:flex md:w-[1200px] md:items-center md:justify-end md:px-0 lg:flex-row">
          {/* left box  */}
          {/* <div className="h-[100%] w-full rounded-2xl md:w-[60%] ">
            <Image
              src={"/images/cro_page_images/second-section.png"}
              width={670}
              height={700}
            />
          </div> */}

          {/* right box  */}
          <div
            className="h-full w-full justify-end md:items-start rounded-2xl md:flex md:w-[40%] md:flex-col "
            style={{
              backgroundImage: "url('/images/app_page_images/radial.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p>
              At Pulse, we specialize in Conversion Rate Optimization (CRO) to
              help e-commerce businesses maximize their sales and revenue. Our
              tailored CRO strategies are designed to identify barriers in your
              customer journey, optimize your website performance, and turn
              casual visitors into loyal customers.
            </p>

            <p className="mt-4">
              Whether you are running a Shopify store or another e-commerce
              platform, we have the expertise to deliver results that exceed
              your expectations.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SecondSection;
