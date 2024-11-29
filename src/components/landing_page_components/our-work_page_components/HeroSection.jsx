"use client";
import React, { useState, useRef } from "react";
import Navbar from "@/components/landing_page_components/Navbar";
import { Box } from "@mui/material";
import Image from "next/image";
import { Reveal } from "@/utils/Reveal";
import Link from "next/link";
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const imageSectionRef = useRef(null);

  const handleTabChange = (index) => {
    if (index >= 0 && index < industries.length) {
      setActiveTab(index);

      imageSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("Invalid tab index:", index);
    }
  };
  
  const industries = [
    {
      name: "Real Estate",
      images: [
        "/images/our-work_page_images/img (1).png",
        "/images/our-work_page_images/img (2).png",
      ],
    },
    {
      name: "Government",
      images: [
        "/images/our-work_page_images/img (3).png",
        "/images/our-work_page_images/img (4).png",
      ],
    },
    {
      name: "Education",
      images: [
        "/images/our-work_page_images/img (5).png",
        "/images/our-work_page_images/img (6).png",
      ],
    },
    {
      name: "Corporate",
      images: [
        "/images/our-work_page_images/img (1).png",
        "/images/our-work_page_images/img (2).png",
      ],
    },
    {
      name: "Health",
      images: [
        "/images/our-work_page_images/img (3).png",
        "/images/our-work_page_images/img (4).png",
      ],
    },
    {
      name: "Fashion",
      images: ["/images/fashion1.png", "/images/fashion2.png"],
    },
    {
      name: "Ecommerce",
      images: ["/images/ecommerce1.png", "/images/ecommerce2.png"],
    },
    {
      name: "Branding Website",
      images: ["/images/branding1.png", "/images/branding2.png"],
    },
  ];

  return (
    <>
      <main
        style={{
          backgroundImage: "url('/images/our-work_page_images/our-work.png')",
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <div className="relative mx-auto flex h-[60vh] w-[1200px] flex-row items-center justify-between md:h-[100vh]">
          <div className="w-[100%] flex-col px-6 md:px-0">
            <div className="mb-2 flex w-auto items-center gap-1">
              <Image
                src="/images/services_page_images/blue-dot.png"
                alt="blue-dot"
                width={20}
                height={20}
              />
              <p>Our Portfolio</p>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <Reveal>
                <h2 className="w-auto text-xl font-bold leading-tight text-white md:text-5xl">
                  Explore All Industries
                </h2>
              </Reveal>

              {industries.map((industry, index) => (
                <h4
                  key={index}
                  className={`w-auto cursor-pointer text-lg font-medium leading-tight md:text-3xl ${
                    activeTab === index ? "text-white" : "text-[#7C7C7C]"
                  }`}
                  onClick={() => handleTabChange(index)}
                >
                  {industry.name}
                </h4>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Images Section */}
      <main className="relative mb-20 w-full" ref={imageSectionRef}>
        <div
          style={{
            backgroundImage: "url('/images/services_page_images/circle.png/')",
            backgroundSize: "cover",
            transform: "translateY(-50%)",
          }}
          className="h-[30vh] md:h-[95vh]"
        />
        <div
          className="absolute top-0 z-10 flex w-full flex-col items-center justify-center px-4 md:top-12 md:px-0"
          style={{
            backgroundImage: "url('/images/app_page_images/radial.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="z-10 text-center">
            <Reveal>
              <h1 className="text-xl font-bold tracking-wide md:text-4xl">
                Our Work Your Inspiration
              </h1>
            </Reveal>
          </div>

          <div className="mx-auto mt-6 flex w-full flex-col items-center justify-between overflow-hidden md:mb-12 md:mt-22 md:w-[90%] md:flex-row lg:w-[1200px]">
            {industries[activeTab].images.map((image, index) => (
              <div className="w-full" key={index}>
                <div className="relative mb-8 h-[200px] w-full transform transition-transform duration-700 ease-in-out hover:scale-105 md:mb-0 md:h-[400px] md:w-[95%]">
                  <Link href={"/work-details"}>
                    <Image
                      src={image}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-2xl"
                      alt={`Industry Image ${index + 1}`}
                    />
                  </Link>
                </div>

                <div className="mt-6">
                  <Reveal>
                    <h4 className="text-xl font-semibold tracking-wide">
                      Project Name
                    </h4>
                  </Reveal>
                  <Reveal>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-4">
                        {["Design", "Development", "SEO"].map((tag, index) => (
                          <div
                            key={index}
                            className="mb-2 flex w-auto items-center gap-1"
                          >
                            <Image
                              src="/images/services_page_images/blue-dot.png"
                              alt="blue-dot"
                              width={20}
                              height={20}
                            />
                            <p>{tag}</p>
                          </div>
                        ))}
                      </div>
                      <Link href={"/work-details"}>
                        <PrimaryBtn text={"View Case Study"} />
                      </Link>
                    </div>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroSection;
