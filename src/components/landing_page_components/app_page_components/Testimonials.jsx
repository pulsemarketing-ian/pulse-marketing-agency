'use client'
import { Reveal } from '@/utils/Reveal';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import { MdPlayArrow } from "react-icons/md";

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // No arrows
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="text-white py-12 px-6 md:px-0 lg:px-0 w-full md:w-[1200px] md:mx-auto"
      style={{
        backgroundImage: "url('/images/app_page_images/radial.png')",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="text-start mb-10"  
        style={{
          backgroundImage: "url('/images/app_page_images/radial.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        <Reveal>
          <p className="uppercase text-sm font-light text-cyan-500">
            <span className="text-cyan-500 mr-2">•</span>Client Testimonials & Reviews
          </p>
        </Reveal>
        <Reveal>
          <h2 className="text-xl md:text-4xl font-medium leading-tight">
            What Our Happy <br/> Clients Say About Us
          </h2>
        </Reveal>
      </div>

      <Slider {...settings}>
        {[1, 2, 1, 2].map((_, index) => (
          <div key={index} className="group flex gap-3 flex-wrap">
            <div className="bg-[#28282B] rounded-2xl p-6 text-center shadow-lg mx-2 relative">
              <div className="relative w-auto h-auto rounded-lg overflow-hidden mb-4">
                {/* Image */}
                <Image
                  src={`/images/app_page_images/client (${_}).png`}
                  width={1000}
                  height={1000}
                  alt={`Client ${index + 1}`}
                  className=" relative first-line:w-full h-full object-contain group-hover:opacity-0 transition-opacity duration-300"
                />
                {/* Icon */}
                <div className="bg-blue-500 w-10 h-10 flex items-center justify-center rounded-full absolute bottom-0 left-[12%]  transform -translate-x-1/2 z-96 shadow-lg border-4">
                  <MdPlayArrow className="text-white text-2xl" />
                </div>
                {/* Dummy Text on Hover */}
                <div className="absolute inset-0 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 cursor-pointer">
                  <p className="text-black font-light text-[12px] text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
              <div className="flex justify-between w-full items-center">
                <Image src={'/images/app_page_images/circle.png'} width={70} height={50} />
                <p className="text-sm text-white">Name</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
