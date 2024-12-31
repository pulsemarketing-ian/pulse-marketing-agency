'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import Modal from '@mui/material/Modal';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import { IoMdPlay } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

export default function Slider() {
  const [open, setOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  const images = [
    { src: '/images/video_page_images/video (1).webp', video: 'https://www.youtube.com/watch?v=5aCdZz_Zj4s' },
    { src: '/images/video_page_images/video (2).webp', video: 'https://www.youtube.com/watch?v=5aCdZz_Zj4s' },
    { src: '/images/video_page_images/video (3).webp', video: 'https://www.youtube.com/watch?v=5aCdZz_Zj4s' },
    { src: '/images/video_page_images/video (4).webp', video: 'https://www.youtube.com/watch?v=5aCdZz_Zj4s' },
    { src: '/images/video_page_images/video (5).webp', video: 'https://www.youtube.com/watch?v=5aCdZz_Zj4s' },
    { src: '/images/video_page_images/video (6).webp', video: 'https://www.youtube.com/watch?v=5aCdZz_Zj4s' },
    { src: '/images/video_page_images/video (7).webp', video: 'https://www.youtube.com/watch?v=5aCdZz_Zj4s' },
    { src: '/images/video_page_images/video (8).webp', video: 'https://www.youtube.com/watch?v=5aCdZz_Zj4s' },
    { src: '/images/video_page_images/video (9).webp', video: 'https://www.youtube.com/watch?v=5aCdZz_Zj4s' },
    { src: '/images/video_page_images/video (1).webp', video: 'https://www.youtube.com/watch?v=5aCdZz_Zj4s' },
    { src: '/images/video_page_images/video (2).webp', video: 'https://www.youtube.com/watch?v=5aCdZz_Zj4s' },
    { src: '/images/video_page_images/video (3).webp', video: 'https://www.youtube.com/watch?v=5aCdZz_Zj4s' },
    { src: '/images/video_page_images/video (4).webp', video: 'https://www.youtube.com/watch?v=5aCdZz_Zj4s' },
    { src: '/images/video_page_images/video (5).webp', video: 'https://www.youtube.com/watch?v=5aCdZz_Zj4s' },
    { src: '/images/video_page_images/video (6).webp', video: 'https://www.youtube.com/watch?v=5aCdZz_Zj4s' },
    { src: '/images/video_page_images/video (7).webp', video: 'https://www.youtube.com/watch?v=5aCdZz_Zj4s' },
    { src: '/images/video_page_images/video (8).webp', video: 'https://www.youtube.com/watch?v=5aCdZz_Zj4s' },
    { src: '/images/video_page_images/video (9).webp', video: 'https://www.youtube.com/watch?v=5aCdZz_Zj4s' },

  ];

  const handleOpen = (video) => {
    setCurrentVideo(video);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentVideo('');
  };

  return (
    <>
      <div className="w-full min-h-screen relative overflow-hidden py-16">
        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          initialSlide={2}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="w-full -mt-10"
        >
          {images.map((item, index) => (
            <SwiperSlide key={index} className="w-[280px] md:w-[370px] mx-5">
              <div className="relative group" onClick={() => handleOpen(item.video)}>
                <div className="relative overflow-hidden rounded-xl transition-all duration-300 transform group-hover:scale-[1.02] cursor-pointer">
                  <img
                    src={item.src}
                    alt={`Video thumbnail ${index + 1}`}
                    className="w-full md:w-[360px] h-[250px] md:h-[360px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className='bg-blue-500 w-16 h-16 flex rounded-full p-6 items-center justify-center'>
                    <IoMdPlay className="text-white text-5xl" />
                  </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx global>{`
          .swiper-slide {
            transition: all 0.3s ease;
          }
          .swiper-slide-active {
            transform: scale(1.1);
            z-index: 2;
          }
        `}</style>

        <Modal open={open} onClose={handleClose} className="flex justify-center items-center">
          <div className="bg-black bg-opacity-20 p-4 rounded-lg shadow-lg max-w-[90%] w-full md:max-w-[600px] relative">
            <iframe
              src={currentVideo}
              className="w-full h-[360px] md:h-[480px]"
              title="Video Player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <div
              onClick={handleClose}
              className="mt-2 px-4 py-2 text-white text-[2rem] rounded absolute top-2 right-2 cursor-pointer"
            >
              <IoCloseSharp />
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}
