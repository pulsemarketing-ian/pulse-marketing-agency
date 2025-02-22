"use client";
import React from "react";
import Navbar from "@/components/landing_page_components/Navbar";
import Image from "next/image";
import { Reveal } from "@/utils/Reveal";

const HeroSection = () => {
  return (
    <>
      <main
        style={{
          backgroundImage: "url('/images/about_page_images/banner-about.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative pb-[150px]" 
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 bg-opacity-50"></div>

        <Navbar />
        <div className="relative flex h-[90vh] w-full flex-col items-center justify-center md:h-[105vh]">
          <div className="z-10 flex translate-y-[-2rem] flex-col items-center md:translate-y-[-4rem]">
            {/* Service heading */}
            <div className="-ml-[20px] mb-2 flex items-center justify-center gap-1 md:-ml-[45px]">
              <Image
                src="/images/services_page_images/blue-dot.png"
                alt="blue-dot"
                width={20}
                height={20}
              />
              <p>About us</p>
            </div>

            {/* Heading main */}
            <Reveal>
              <h2
                className="pb-2 text-3xl font-bold capitalize text-white md:text-5xl"
                style={{ lineHeight: "1.2" }}
              >
                Driving Growth <br />
                Fueling Success.
              </h2>
            </Reveal>

            <Reveal>
              <p className="mx-auto mt-2 w-[80%] text-center text-gray-200 md:w-[45%]">
                We help businesses scale faster through revenue-focused
                strategies, cutting-edge web development, and data-driven
                marketing solutions.
              </p>
            </Reveal>
          </div>

          {/* <div className="absolute bottom-[4.5rem] md:bottom-6 right-6 z-10 rounded-full bg-my-blue-gradient p-3">
            <Image
              src={"/images/services_page_images/inbox.png"}
              alt="inbox"
              width={15}
              height={15}
            />
          </div> */}
        </div>
      </main>
    </>
  );
};

export default HeroSection;
