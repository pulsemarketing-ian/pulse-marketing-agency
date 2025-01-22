// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow, Autoplay } from 'swiper/modules';

// // Import Swiper styles
// import 'swiper/css';
// // import 'swiper/css/effect-coverflow';
// // import 'swiper/css/autoplay';

// export default function PortfolioSlider() {
//   const images = [
//     { src: '/images/app_page_images/img (1).webp', link: 'https://studio9p.com/en/' },
//     { src: '/images/app_page_images/img (2).webp', link: 'https://www.clouarchitects.com/' },
//     { src: '/images/app_page_images/img (3).webp', link: 'https://rumblestudios.tv/' },
//     { src: '/images/app_page_images/img (4).webp', link: 'https://www.oneupstudio.it/' },
//     { src: '/images/app_page_images/img (5).webp', link: 'https://petertarka.com/' },
//     { src: '/images/app_page_images/img (6).webp', link: 'https://www.steelwavellc.com/' },
//     { src: '/images/app_page_images/img (1).webp', link: 'https://studio9p.com/en/' },
//     { src: '/images/app_page_images/img (2).webp', link: 'https://www.clouarchitects.com/' },
//     { src: '/images/app_page_images/img (3).webp', link: 'https://rumblestudios.tv/' },
//     { src: '/images/app_page_images/img (4).webp', link: 'https://www.oneupstudio.it/' },
//     { src: '/images/app_page_images/img (5).webp', link: 'https://petertarka.com/' },
//     { src: '/images/app_page_images/img (6).webp', link: 'https://www.steelwavellc.com/' },
//   ];

//   return (
//     <div className="w-full min-h-screen relative overflow-hidden py-16">
//       <Swiper
//         modules={[EffectCoverflow, Autoplay]}
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView="auto"
//         initialSlide={2}
//         loop={true}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2,
//           slideShadows: false,
//         }}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         className="w-full -mt-10"
//       >
//         {images.map((item, index) => (
//           <SwiperSlide key={index} className="w-[280px] md:w-[370px] mx-5">
//             <div className="relative group">
//               <a href={item.link} target="_blank" rel="noopener noreferrer">
//                 <div className="relative overflow-hidden rounded-xl transition-all duration-300 transform group-hover:scale-[1.02]">
//                   <img
//                     src={item.src}
//                     alt={item.link}
//                     className="w-full md:w-[200px] h-[250px] md:h-[360px] object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </div>
//               </a>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <style jsx global>{`
//         .swiper-slide {
//           transition: all 0.3s ease;
//         }
//         .swiper-slide-active {
//           transform: scale(1.1);
//           z-index: 2;
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from "next/image";

export default function PortfolioSlider() {
  const images = [
    {
      src: "/images/app_page_images/img (1).webp",
      link: "https://studio9p.com/en/",
    },
    {
      src: "/images/app_page_images/img (2).webp",
      link: "https://www.clouarchitects.com/",
    },
    {
      src: "/images/app_page_images/img (3).webp",
      link: "https://rumblestudios.tv/",
    },
    {
      src: "/images/app_page_images/img (4).webp",
      link: "https://www.oneupstudio.it/",
    },
    {
      src: "/images/app_page_images/img (5).webp",
      link: "https://petertarka.com/",
    },
    {
      src: "/images/app_page_images/img (6).webp",
      link: "https://www.steelwavellc.com/",
    },
    {
      src: "/images/app_page_images/img (1).webp",
      link: "https://studio9p.com/en/",
    },
    {
      src: "/images/app_page_images/img (2).webp",
      link: "https://www.clouarchitects.com/",
    },
    {
      src: "/images/app_page_images/img (3).webp",
      link: "https://rumblestudios.tv/",
    },
    {
      src: "/images/app_page_images/img (4).webp",
      link: "https://www.oneupstudio.it/",
    },
    {
      src: "/images/app_page_images/img (5).webp",
      link: "https://petertarka.com/",
    },
    {
      src: "/images/app_page_images/img (6).webp",
      link: "https://www.steelwavellc.com/",
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden py-16">
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
        className="-mt-12"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} className="mx-5 w-[280px] md:w-[370px]">
            <div className="group relative">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="relative transform overflow-hidden rounded-xl transition-all duration-300 group-hover:scale-[1.02]">
                  <Image
                    src={item.src}
                    alt={`Portfolio item ${index + 1}`}
                    width={370}
                    height={450}
                    className="h-[250px] w-full object-cover md:h-[360px]"
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .swiper-slide {
          transition: all 0.3s ease;
        }
        .swiper-slide-active {
          transform: scale(1.1);
          z-index: 2;
        }
      `}</style>
    </div>
  );
}
