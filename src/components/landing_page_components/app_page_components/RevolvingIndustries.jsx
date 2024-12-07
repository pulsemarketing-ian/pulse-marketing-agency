'use client'
import React from 'react'
import Slider from "react-slick"
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa6";
import { Reveal } from '@/utils/Reveal';

const MySliderArr = [
  { image: "/images/app_page_images/four-slide (2).png" },
  { image: "/images/app_page_images/four-slide (1).png" },
  { image: "/images/app_page_images/four-slide (3).png" },
  { image: "/images/app_page_images/four-slide (1).png" },
  { image: "/images/app_page_images/four-slide (3).png" },
  { image: "/images/app_page_images/four-slide (1).png" },
  { image: "/images/app_page_images/four-slide (3).png" },
]

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
    <div className="w-full overflow-hidden mt-15" 
   >
      <Slider {...settings}>
        {MySliderArr.map((item, index) => (
          <div key={index} className="flex justify-between w-auto h-auto gap-3 m-4">
              <Image
                src={item.image}
                alt={`Slide ${index + 1}`}
                width={250}
                height={250}
                className="filter-invert relative"
                />
              <div className='absolute bg-custom-gradient rounded-md bottom-[12px] translate-x-[17vw] text-xl py-1 px-2 z-20] hidden md:block'>
                <FaArrowRight className=' text-[10px]'/>
                </div>
              {/* <div className='absolute bottom-[-20px] z-30'><p>Lorem ipsum dolor sit.</p></div> */}
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default function RevolvingIndustries() {
  return (
    <main className='w-full px-6 md:px-0 md:w-[1200px] md:mx-auto py-6 mt-10 md:mt-0' 
    style={{
      backgroundImage:"url('/images/app_page_images/radial.png')",
      backgroundSize:'contain',
      backgroundRepeat:'no-repeat'
  }}>
      <div className="text-2xl md:text-4xl font-bold leading-tight text-center mt-3 flex justify-center " >
        <Reveal>  
        <h2>Revolutionizing Industries with Top Mobile <br/>App Development Services</h2>
        </Reveal>
      </div>

      <ChooseCardsSlider />
    </main>
  )
}