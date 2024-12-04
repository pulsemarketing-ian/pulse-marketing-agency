'use client'
import { Reveal } from "@/utils/Reveal";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {motion} from 'motion/react';

const TakeSteps = () => {

  const [isDesktop, setIsDesktop] = useState(false);

  // Check screen size
  useEffect(() => {
    const updateMedia = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    updateMedia(); // Run on mount
    window.addEventListener("resize", updateMedia);

    return () => window.removeEventListener("resize", updateMedia);
  }, []);


  return (
    <main
      className="mx-14 py-16"
      style={{
        backgroundImage: "url('/images/app_page_images/radial.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-wrap justify-between">
        <div className="flex w-full md:w-[28%] items-start justify-center transform transition-transform duration-700 ease-in-out hover:scale-105">
          <Image
            src={"/images/web-dev_page_images/pulse-logo.png"}
            width={400}
            height={400}
          />
        </div>

        <div className="w-full md:w-[60%]">
          <Reveal>
          <h2 className="text-left text-2xl md:text-4xl font-bold tracking-wide">
            The Steps We Take
          </h2>
          </Reveal>
          <Reveal>
          <p className="text-left text-[15px]">
          Our streamlined development process ensures smooth execution from start to finish.
          </p>
          </Reveal>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
            {/* card one  */}
            <div 
                         className="border-1 flex min-h-[50px] w-full md:w-[48%] flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md transform transition-transform duration-700 ease-in-out hover:scale-105"
            >
              <h3 className="text-xl font-bold tracking-wide">
                Planning & Strategy
              </h3>
              <p className="text-sm">
                <div className="flex flex-col ">
                  <div className="mb-2 flex w-auto items-center gap-1">
                    <Image
                      src="/images/services_page_images/blue-dot.png"
                      alt="blue-dot"
                      width={20}
                      height={20}
                    />
                    <p>Launch</p>
                  </div>
                  <div className="mb-2 flex w-auto items-center gap-1">
                    <Image
                      src="/images/services_page_images/blue-dot.png"
                      alt="blue-dot"
                      width={20}
                      height={20}
                    />
                    <p>Opinion Monitoring</p>
                  </div>
                  <div className="mb-2 flex w-auto items-center gap-1">
                    <Image
                      src="/images/services_page_images/blue-dot.png"
                      alt="blue-dot"
                      width={20}
                      height={20}
                    />
                    <p>Maintenance</p>
                  </div>
                  <div className="mb-2 flex w-auto items-center gap-1">
                    <Image
                      src="/images/services_page_images/blue-dot.png"
                      alt="blue-dot"
                      width={20}
                      height={20}
                    />
                    <p>Post-deployment Support</p>
                  </div>
                </div>
              </p>
            </div>

            {/* card otwo  */}
            <div 
  className="border-1 flex min-h-[50px] w-full md:w-[48%] flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md transform transition-transform duration-700 ease-in-out hover:scale-105" >
                <h3 className="text-xl font-bold tracking-wide">
                Development Stage
              </h3>
              <p className="text-sm">
                <div className="flex flex-col ">
                  <div className="mb-2 flex w-auto items-center gap-1">
                    <Image
                      src="/images/services_page_images/blue-dot.png"
                      alt="blue-dot"
                      width={20}
                      height={20}
                    />
                    <p>Business analysis</p>
                  </div>
                  <div className="mb-2 flex w-auto items-center gap-1">
                    <Image
                      src="/images/services_page_images/blue-dot.png"
                      alt="blue-dot"
                      width={20}
                      height={20}
                    />
                    <p>Document specifications</p>
                  </div>
                  <div className="mb-2 flex w-auto items-center gap-1">
                    <Image
                      src="/images/services_page_images/blue-dot.png"
                      alt="blue-dot"
                      width={20}
                      height={20}
                    />
                    <p>Preparing wireframes</p>
                  </div>
                  <div className="mb-2 flex w-auto items-center gap-1">
                    <Image
                      src="/images/services_page_images/blue-dot.png"
                      alt="blue-dot"
                      width={20}
                      height={20}
                    />
                    <p>Getting client approval</p>
                  </div>
                </div>
              </p>
            </div>

            {/* card three  */}
            <div className="border-1 flex min-h-[50px] w-full md:w-[48%] flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md transform transition-transform duration-700 ease-in-out hover:scale-105" >
              <h3 className="text-xl font-bold tracking-wide">
                Quality Assurance
              </h3>
              <p className="text-sm">
                <div className="flex flex-col ">
                  <div className="mb-2 flex w-auto items-center gap-1">
                    <Image
                      src="/images/services_page_images/blue-dot.png"
                      alt="blue-dot"
                      width={20}
                      height={20}
                    />
                    <p>Business analysis</p>
                  </div>
                  <div className="mb-2 flex w-auto items-center gap-1">
                    <Image
                      src="/images/services_page_images/blue-dot.png"
                      alt="blue-dot"
                      width={20}
                      height={20}
                    />
                    <p>Document specifications</p>
                  </div>
                  <div className="mb-2 flex w-auto items-center gap-1">
                    <Image
                      src="/images/services_page_images/blue-dot.png"
                      alt="blue-dot"
                      width={20}
                      height={20}
                    />
                    <p>Preparing wireframes</p>
                  </div>
                  <div className="mb-2 flex w-auto items-center gap-1">
                    <Image
                      src="/images/services_page_images/blue-dot.png"
                      alt="blue-dot"
                      width={20}
                      height={20}
                    />
                    <p>Getting client approval</p>
                  </div>
                </div>
              </p>
            </div>

            {/* card one  */}
            <div className="border-1 flex min-h-[50px] w-full md:w-[48%] flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md transform transition-transform duration-700 ease-in-out hover:scale-105" >
              <h3 className="text-xl font-bold tracking-wide">Deployment</h3>
              <p className="text-sm">
                <div className="flex flex-col ">
                  <div className="mb-2 flex w-auto items-center gap-1">
                    <Image
                      src="/images/services_page_images/blue-dot.png"
                      alt="blue-dot"
                      width={20}
                      height={20}
                    />
                    <p>Launch</p>
                  </div>
                  <div className="mb-2 flex w-auto items-center gap-1">
                    <Image
                      src="/images/services_page_images/blue-dot.png"
                      alt="blue-dot"
                      width={20}
                      height={20}
                    />
                    <p>Opinion Monitoring</p>
                  </div>
                  <div className="mb-2 flex w-auto items-center gap-1">
                    <Image
                      src="/images/services_page_images/blue-dot.png"
                      alt="blue-dot"
                      width={20}
                      height={20}
                    />
                    <p>Maintenance</p>
                  </div>
                  <div className="mb-2 flex w-auto items-center gap-1">
                    <Image
                      src="/images/services_page_images/blue-dot.png"
                      alt="blue-dot"
                      width={20}
                      height={20}
                    />
                    <p>Post-deployment Support</p>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TakeSteps;
