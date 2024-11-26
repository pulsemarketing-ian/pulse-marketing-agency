'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';

export default function Slider() {
  const images = [
    '/images/branding_page_images/slider (1).png',
    '/images/branding_page_images/slider (2).png',
    '/images/branding_page_images/slider (3).png',
    '/images/branding_page_images/slider (4).png',
    '/images/branding_page_images/slider (5).png',
    '/images/branding_page_images/slider (1).png',
    '/images/branding_page_images/slider (2).png',
    '/images/branding_page_images/slider (3).png',
    '/images/branding_page_images/slider (4).png',
    '/images/branding_page_images/slider (5).png',
    '/images/branding_page_images/slider (1).png',
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true} // Enable infinite looping
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="w-full h-[400px] md:h-[250px]"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center gap-5"
            style={{
              width: '300px',
            }}
          >
            <img
              src={image}
              alt={`Portfolio Image ${index + 1}`}
              className="rounded-lg shadow-lg"
              style={{
                width: '300px',
                height: '300px',
                objectFit: 'cover',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
