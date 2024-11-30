"use client";
import React from "react";
import Navbar from "@/components/landing_page_components/Navbar";
import Image from "next/image";
import { Reveal } from "@/utils/Reveal";
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <>
      <main
        style={{
          backgroundImage: "url('/images/about_page_images/banner-about.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 bg-opacity-50"></div>

        <Navbar />
        <div className="relative flex h-[75vh] w-full flex-col items-center justify-center md:h-[100vh]">
          <div className="z-10 flex flex-col items-center md:translate-y-[-4rem]">
            {/* Service heading */}
            <div className="mb-2 flex items-center justify-center gap-1">
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
                className="text-3xl font-bold capitalize text-white md:text-5xl"
                style={{ lineHeight: "1.2" }}
              >
                Empowering Your <br />
                Digital Presence.
              </h2>
            </Reveal>

            <Reveal>
              <p className="mx-auto mt-2 w-[80%] text-center text-gray-200 md:w-[45%]">
                Transforming visions into digital realities through 3D web
                development, SEO mastery, multimedia creativity, logo design,
                online reputation management, and application innovation.
              </p>
            </Reveal>
          </div>

          <div className="absolute bottom-[4.5rem] md:bottom-6 right-6 z-10 rounded-full bg-my-blue-gradient p-3">
            <Image
              src={"/images/services_page_images/inbox.png"}
              alt="inbox"
              width={15}
              height={15}
            />
          </div>
        </div>
      </main>

    </>
  );
};

export default HeroSection;
