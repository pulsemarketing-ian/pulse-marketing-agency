"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
// import { Reveal } from '@/utils/Reveal';

const MySliderArr = [
  { image: "/images/app_page_images/four-slide (1).png" },
  { image: "/images/app_page_images/four-slide (3).png" },
  { image: "/images/app_page_images/four-slide (2).png" },
  { image: "/images/app_page_images/third-sec-2.png" },
  { image: "/images/app_page_images/slide3.png" },
];

const ChooseCardsSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-15 w-full overflow-hidden">
      <Slider {...settings}>
        {MySliderArr.map((item, index) => (
          <div
            key={index}
            className="relative m-4 flex h-auto min-h-72 w-auto justify-between gap-3 rounded-2xl"
          >
            <Image
              src={item.image}
              alt={`Slide ${index + 1}`}
              // width={320}
              // height={320}
              layout="fill"
              objectFit="cover"
              className="filter-invert relative rounded-2xl p-2"
            />
            {/* <div className='absolute bg-custom-gradient rounded-md bottom-[12px] translate-x-[17vw] text-xl py-1 px-2 z-20] hidden md:block'>
                <FaArrowRight className=' text-[10px]'/>
                </div> */}
            {/* <div className='absolute bottom-[-20px] z-30'><p>Lorem ipsum dolor sit.</p></div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default function RevolvingIndustries() {
  return (
    <main
      className="mt-10 w-full px-6 py-6 md:mx-auto md:mt-0 md:w-[1200px] md:px-0"
      style={{
        backgroundImage: "url('/images/app_page_images/radial.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mt-3 flex justify-center text-center text-2xl font-bold leading-tight md:text-4xl ">
        <h2>
          Revolutionizing Industries with Top Mobile <br />
          App Development Services
        </h2>
      </div>

      <ChooseCardsSlider />
    </main>
  );
}
