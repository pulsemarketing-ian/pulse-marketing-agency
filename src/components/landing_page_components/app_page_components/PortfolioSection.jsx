'use client'
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

export default function PortfolioSection() { 
  const portfolioItems = [
    { image: "/images/app_page_images/app-img (1).webp" },
    { image: "/images/app_page_images/app-img (2).webp" },
    { image: "/images/app_page_images/app-img (3).webp" },
    { image: "/images/app_page_images/app-img (4).webp" },
    { image: "/images/app_page_images/app-img (5).webp" },
    { image: "/images/app_page_images/app-img (6).webp" },
    { image: "/images/app_page_images/app-img (7).webp" },
    { image: "/images/app_page_images/app-img (8).webp" },
    { image: "/images/app_page_images/app-img (9).webp" },
    { image: "/images/app_page_images/app-img (10).webp" },
    { image: "/images/app_page_images/app-img (11).webp" },
    { image: "/images/app_page_images/app-img (12).webp" },
  ];

  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 4, 
    slidesToScroll: 1, 
    arrows: false, 
    autoplay: true, 
    autoplaySpeed: 3000, 
    responsive: [
      {
        breakpoint: 1024, 
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
        breakpoint: 480, 
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <main className="relative w-full md:-mt-[100px] mb-5">
      <div
        style={{
          backgroundImage: "url('/images/services_page_images/circle.png/')",
          backgroundSize: "cover",
          transform: "translateY(-50%)",
        }}
        className="h-[40vh] md:h-[38rem]"
      />
      <div className="absolute top-0 md:top-12 z-10 flex w-full flex-col items-center justify-center">
        <div className="z-10 md:mt-8 text-center">
          {/* <h1 className="text-2xl md:text-5xl font-bold tracking-wide">Our Portfolio</h1> */}
        </div>

        {/* app portfolio images */}
        <div className="w-full px-4 md:px-0 md:max-w-[1000px] md:mx-auto mt-12 pl-6 pb-4 md:pl-14 md:pb-16">
          <Slider {...settings}>
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-center items-center min-h-[150px]" 
              >
                <Image
                  src={item.image}
                  alt={`app portfolio ${index + 1}`}
                  width={170}
                  height={150}
                  className="rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </main>
  );
}
