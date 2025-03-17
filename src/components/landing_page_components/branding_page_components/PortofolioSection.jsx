"use client";
// import { Reveal } from "@/utils/Reveal";
import React from "react";
import Slider from "./Slider";

export default function PortfolioSection() {
  const portfolioItems = [
    {
      id: 1,
      image: "/images/branding_page_images/portfolio.png",
      alt: "Fitness app interface showing workout tracking features",
    },
    {
      id: 2,
      image: "/images/branding_page_images/portoflio (1).png",
      alt: "Health tracking app showing daily statistics",
    },
    {
      id: 3,
      image: "/images/branding_page_images/portfolio.png",
      alt: "Social media app dark theme interface",
    },
    {
      id: 4,
      image: "/images/branding_page_images/portoflio (3).png",
      alt: "Property listing app showing modern interface",
    },
    {
      id: 5,
      image: "/images/branding_page_images/portoflio (4).png",
      alt: "Food delivery app showing restaurant listings",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <main className="md:mt-[-100px] relative w-full">
      <div
        style={{
          backgroundImage: "url('/images/services_page_images/circle.png/')",
          backgroundSize: "cover",
          transform: "translateY(-50%)",
        }}
        className="h-[38vh] md:h-[38rem]"
      />
      <div className="absolute -top-20 z-10 flex w-full flex-col items-center justify-center md:top-12 ">
        {/* <div className="z-10 mt-8 text-center">
          <h1 className="mt-12 text-2xl font-bold tracking-wide md:mt-0 md:text-5xl">
            Our Portfolio
          </h1>
        </div> */}

        <div
          style={{
            backgroundImage: "url('/images/app_page_images/radial.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          className="mt-3 min-h-[200px] w-full md:mx-auto md:min-h-[180px] md:w-full md:translate-y-10 md:py-6"
        >
          <Slider />
        </div>
      </div>
    </main>
  );
}
