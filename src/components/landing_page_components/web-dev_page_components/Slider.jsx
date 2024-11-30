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
    { src: '/images/app_page_images/img (1).webp', link: 'https://studio9p.com/en/' },
    { src: '/images/app_page_images/img (2).webp', link: 'https://www.clouarchitects.com/' },
    { src: '/images/app_page_images/img (3).webp', link: 'https://rumblestudios.tv/' },
    { src: '/images/app_page_images/img (4).webp', link: 'https://www.oneupstudio.it/'},
    { src: '/images/app_page_images/img (5).webp', link: 'https://petertarka.com/' },
    { src: '/images/app_page_images/img (6).webp', link: 'https://www.steelwavellc.com/' },
    { src: '/images/app_page_images/img (1).webp', link: 'https://studio9p.com/en/' },
    { src: '/images/app_page_images/img (2).webp', link: 'https://www.clouarchitects.com/' },
    { src: '/images/app_page_images/img (3).webp', link: 'https://rumblestudios.tv/' },
    { src: '/images/app_page_images/img (4).webp', link: 'https://www.oneupstudio.it/'},
    { src: '/images/app_page_images/img (5).webp', link: 'https://petertarka.com/' },
    { src: '/images/app_page_images/img (6).webp', link: 'https://www.steelwavellc.com/' },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
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
            className="flex justify-center items-center "
            style={{
              width: '300px',
            }}
          >
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <img
                src={image.src}
                alt={`Portfolio Image ${index + 1}`}
                className="flex gap-4 rounded-lg shadow-lg m-3"
                style={{
                  width: '300px',
                  height: '300px',
                  objectFit: 'cover',
                }}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
