'use client'
import React from 'react'
import Slider from "react-slick"
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa6";

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
  }

  return (
    <div className="w-full overflow-hidden lg:mt-15" 
   >
      <Slider {...settings}>
        {MySliderArr.map((item, index) => (
          <div key={index} className="flex justify-between w-auto h-auto">
              <Image
                src={item.image}
                alt={`Slide ${index + 1}`}
                width={250}
                height={250}
                className="filter-invert relative"
                />
              <div className='absolute bg-custom-gradient rounded-md bottom-[6px] translate-x-[16vw] text-xl py-1 px-2 z-20'><FaArrowRight /></div>
              {/* <div className='absolute bottom-[-20px] z-30'><p>Lorem ipsum dolor sit.</p></div> */}
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default function RevolvingIndustries() {
  return (
    <main className='w-[1200px] mx-auto py-6' 
    style={{
      backgroundImage:"url('/images/app_page_images/radial.png')",
      backgroundSize:'contain',
      backgroundRepeat:'no-repeat'
  }}>
      <div className="text-4xl font-bold leading-tight text-center mt-3" >
        <h2>Revolutionizing Industries with Top Mobile <br/>App Development Services</h2>
      </div>
      <ChooseCardsSlider />
    </main>
  )
}