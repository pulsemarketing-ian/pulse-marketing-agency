"use client";
import React from "react";
import { Reveal } from "@/utils/Reveal";
import Image from "next/image";
import { motion } from "motion/react";

const AboutText = () => {
  return (
    
    <main className="relative w-full pb-32 md:pb-0 -mt-[200px]">
    <div
      style={{
        backgroundImage: "url('/images/services_page_images/circle.png/')",
        backgroundSize: "cover",
      }}
      className="h-[50vh] md:h-[38rem] transform md:translate-y-[-65%] translate-y-[-50%]"
    />
    <div
      className="absolute -top-5 z-10 flex w-full flex-col items-center justify-center md:top-0 bg-[#040117] md:bg-transparent"
      style={{
        backgroundImage: "url('/images/app_page_images/radial.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="z-10 text-center md:-mt-4">
        <Reveal>
          <h1 className="mb-2 text-xl font-bold tracking-wide md:text-5xl">
            Unity in Diversity <br />
            Strength in Teamwork
          </h1>
        </Reveal>
      </div>

      {/* inner content  */}
      <div className="mt-6 flex-col overflow-hidden px-6 md:mx-auto md:flex  md:w-[1200px] md:items-center md:justify-between md:px-0 lg:flex-row mb-4 md:mb-0">
        {/* left box  */}
        <div
          className="min-h-[27rem] w-full rounded-2xl bg-[#120E28] p-10 md:w-[48%] "
        >
          <h2 className="mb-3 text-2xl font-bold">Why We Rock</h2>
          <p>
            Welcome to Pulse Marketing Inc, a Vancouver-based marketing firm
            with years of experience serving over 8,000 clients from various
            industries. We have successfully completed more than 25,000
            projects, offering comprehensive services from AI consulting,
            website and app development, ORM, branding, to digital marketing
            and more. Our highly skilled team applies the latest marketing
            strategies to meet our clients goals, including increasing brand
            awareness, lead generation and sales growth. Thanks for
            considering Pulse Marketing Inc. for your marketing needs. We
            are committed to helping you reach your goals and propelling
            your business forward.
          </p>
        </div>

        {/* right box  */}
        <div
          className="md:flex h-full w-full justify-end rounded-2xl md:w-[48%] min-h-[28rem] hidden relative">
          <Image
            src={"/images/about_page_images/abou-banner.jpg"}
            alt="about-project"
            className="rounded-2xl"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  </main>
  );
};

export default AboutText;
