'use client'
import { Reveal } from "@/utils/Reveal";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

export default function PortfolioSection() {
  const portfolioItems = [
    {
      id: 2,
      image: "/images/web-dev_page_images/2.png",
      alt: "Health tracking app showing daily statistics",
      className: "-rotate-6 translate-y-2",
    },
    {
      id: 3,
      image: "/images/web-dev_page_images/3.png",
      alt: "Social media app dark theme interface",
      className: "rotate-3",
    },
    {
      id: 4,
      image: "/images/web-dev_page_images/6.png",
      alt: "Property listing app showing modern interface",
      className: "rotate-12 translate-y-6",
    },
    {
      id: 5,
      image: "/images/web-dev_page_images/5.png",
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
    <main className="relative w-full pb-15 md:pb-0">
      <div
        style={{
          backgroundImage: "url('/images/services_page_images/circle.png/')",
          backgroundSize: "cover",
          transform: "translateY(-50%)",
        }}
        className="h-[40vh] md:h-[80vh]"
      />
      <div className="absolute top-0 md:top-5 z-10 flex w-full flex-col items-center justify-center ">
        <div className="z-10 mt-8 text-center">
          <Reveal>
            <h1 className="text-2xl md:text-4xl font-bold tracking-wide">Our Portfolio</h1>
          </Reveal>
        </div>

        <div
          style={{
            backgroundImage: "url('/images/app_page_images/radial.png')",
            backgroundSize: 'contain',
            backgroundRepeat:'no-repeat'
          }}
          className="mt-3 min-h-[200px] md:min-h-[180px] w-full md:w-[1200px] md:mx-auto md:translate-y-10 md:p-6"
        >
          <Slider {...settings}>
            {portfolioItems.map((item) => (
              <div key={item.id} className="px-2">
                <Image
                  src={item.image}
                  alt={item.alt}
                  className="h-auto w-full rounded-2xl shadow-lg "
                  width={200}
                  height={200}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </main>
  );
};
