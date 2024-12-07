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
            className="relative flex justify-center items-center"
            style={{ width: '300px' }}
          >
            <img
              src={image.src}
              alt={`Portfolio Image ${index + 1}`}
              className="rounded-lg shadow-lg m-3"
              style={{
                width: '300px',
                height: '300px',
                objectFit: 'cover',
              }}
            />
            <button
              onClick={() => handleOpen(image.video)}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-400 p-5 rounded-full text-white"
            >
              <IoMdPlay />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal open={open} onClose={handleClose} className="flex justify-center items-center ">
        <div className="bg-black bg-opacity-20 p-4 rounded-lg shadow-lg max-w-[90%] w-full md:max-w-[600px] relative">
          <video controls autoPlay className="w-full">
            <source src={currentVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div  onClick={handleClose} className="mt-2 px-4 py-2 text-white text-[2rem] rounded absolute top-2 right-2 cursor-pointer">
          <IoCloseSharp/>
          </div>
        </div>
      </Modal>
    </div>
  );
}
