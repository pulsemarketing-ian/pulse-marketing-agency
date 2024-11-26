'use client'
import Image from "next/image";
import React from "react";
// import Slider from "react-slick";
import Slider from './Slider';

export default function PortfolioSection() { 
  const portfolioItems = [
    {
      id: 1,
      image: "/images/app_page_images/slide1.png",
      alt: "Fitness app interface showing workout tracking features",
      className: "-rotate-12 translate-y-4",
    },
    {
      id: 2,
      image: "/images/app_page_images/slide2.png",
      alt: "Health tracking app showing daily statistics",
      className: "-rotate-6 translate-y-2",
    },
    {
      id: 3,
      image: "/images/app_page_images/slide5.png",
      alt: "Social media app dark theme interface",
      className: "rotate-3",
    },
    {
      id: 4,
      image: "/images/app_page_images/slide4.png",
      alt: "Property listing app showing modern interface",
      className: "rotate-12 translate-y-6",
    },
    {
      id: 5,
      image: "/images/app_page_images/slide5.png",
      alt: "Food delivery app showing restaurant listings",
      className: "rotate-[20deg] translate-y-4",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: '60px',
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
    <main className="relative w-full">
      <div
        style={{
          backgroundImage: "url('/images/services_page_images/circle.png/')",
          backgroundSize: "cover",
          transform: "translateY(-50%)",
        }}
        className="h-[40vh] md:h-[80vh]"
      />
      <div className="absolute top-0 md:top-5 z-10 flex w-full flex-col items-center justify-center ">
        <div className="z-10 md:mt-8 text-center">
          <h1 className="text-2xl md:text-4xl font-bold tracking-wide">Our Portfolio</h1>
        </div>

        <div
          style={{
            backgroundImage: "url('/images/app_page_images/radial.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
          }}
          className="mt-3 min-h-[200px] md:min-h-[180px] w-full md:w-full md:mx-auto md:translate-y-10 md:py-6"
        >
          <Slider/>
        </div>
      </div>
    </main>
  );
}