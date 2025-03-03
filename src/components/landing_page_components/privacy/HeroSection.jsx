"use client";
import React from "react";
import Navbar from "@/components/landing_page_components/Navbar";
import Image from "next/image";
// import { Reveal } from '@/utils/Reveal'
const HeroSection = () => {
  return (
    <main
      style={{
        backgroundImage: "url('/images/term_page_images/hero.png')",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <div className="relative flex h-[60vh] w-full flex-col items-center justify-center md:h-[100vh]">
        {/* serive heading  */}
        <div
          className="mb-2 flex items-center justify-between gap-1"
          data-aos="fade-down"
        >
          <Image
            src="/images/services_page_images/blue-dot.png"
            alt="blue-dot"
            width={20}
            height={20}
          />
          <p>The legal stuff</p>
        </div>

        {/* heading main  */}

        <h2 className="leading-wide mb-2 pb-2 text-center text-3xl font-bold md:text-5xl">
          Privacy Policy
        </h2>
        <p>
          Please read these privacy policy carefully before using our service.
        </p>

        <div className="absolute right-6 z-10 hidden rounded-full bg-my-blue-gradient p-3 md:bottom-6">
          <Image
            src={"/images/services_page_images/inbox.png"}
            alt="inbox"
            width={15}
            height={15}
          />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
