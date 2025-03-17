// 'use client';

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow, Autoplay } from 'swiper/modules';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/autoplay';

// export default function Slider() {
//   const images = [
//     '/images/branding_page_images/portfolio (1).jpg',
//     '/images/branding_page_images/portfolio (1).png',
//     '/images/branding_page_images/portfolio (2).jpg',
//     '/images/branding_page_images/portfolio (2).png',
//     '/images/branding_page_images/portfolio (3).jpg',
//     '/images/branding_page_images/portfolio (3).png',
//     '/images/branding_page_images/portfolio (1).jpg',
//     '/images/branding_page_images/portfolio (1).png',
//     '/images/branding_page_images/portfolio (2).jpg',
//     '/images/branding_page_images/portfolio (2).png',
//     '/images/branding_page_images/portfolio (3).jpg',
//     '/images/branding_page_images/portfolio (3).png',
//   ];

//   return (
//     <div className="w-full">
//       <Swiper
//         modules={[EffectCoverflow, Autoplay]}
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView="auto"
//         loop={true} // Enable infinite looping
//         coverflowEffect={{
//           rotate: 30,
//           stretch: 0,
//           depth: 200,
//           modifier: 1,
//           slideShadows: false,
//         }}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         className="w-full h-[400px] md:h-[250px]"
//       >
//         {images.map((image, index) => (
//           <SwiperSlide
//             key={index}
//             className="flex justify-center items-center gap-5"
//             style={{
//               width: '300px',
//             }}
//           >
//             <img
//               src={image}
//               alt={`Portfolio Image ${index + 1}`}
//               className="rounded-lg shadow-lg"
//               style={{
//                 width: '300px',
//                 height: '300px',
//                 objectFit: 'cover',
//               }}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }




import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';

export default function PortfolioSlider() {
  const images = [
    { src: '/images/branding_page_images/businesscard portfolio-01.jpg', text: "Card Design 01"},
    { src: '/images/branding_page_images/businesscard portfolio-02.jpg', text: "Card Design 02" },
    { src: '/images/branding_page_images/businesscard portfolio-03.jpg', text: "Card Design 03" },
    { src: '/images/branding_page_images/businesscard portfolio-04.jpg', text: "Card Design 04" },
    { src: '/images/branding_page_images/businesscard portfolio-05.jpg', text: "Card Design 05" },
    { src: '/images/branding_page_images/businesscard portfolio-06.jpg', text: "Card Design 06" },
    { src: '/images/branding_page_images/businesscard portfolio-07.jpg', text: "Card Design 07" },
    { src: '/images/branding_page_images/businesscard portfolio-08.jpg', text: "Card Design 08" },
    { src: '/images/branding_page_images/businesscard portfolio-09.jpg', text: "Card Design 09" },
    { src: '/images/branding_page_images/businesscard portfolio-10.jpg', text: "Card Design 10" },
    { src: '/images/branding_page_images/businesscard portfolio-11.jpg', text: "Card Design 11" },
    { src: '/images/branding_page_images/businesscard portfolio-12.jpg', text: "Card Design 12" },
  ];

  return (
    <div className="w-full min-h-screen md:mt-0 mt-28 relative overflow-hidden py-16">
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
            <div className="relative group">
              <a rel="noopener noreferrer">
                <div className="relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 transform group-hover:scale-[1.02]">
                  <img
                    src={item.src}
                    alt={item.src}
                    className="w-full md:w-[360px] h-[250px] md:h-[360px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className='relative text-center w-full pt-4'>
                    <h2 className="md:text-2xl text-lg font-semibold">{item.text}</h2>
                </div>
              </a>
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
    </div>
  );
};
