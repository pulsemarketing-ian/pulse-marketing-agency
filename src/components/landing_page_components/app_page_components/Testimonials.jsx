'use client';
// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';
// import Slider from 'react-slick';
// import { FireApi } from '../../../../utils/useRequest';
// import { toast } from 'react-toastify';

// export default function Testimonials() {

//   const [testimonials, setTestimonials] = useState([]);
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   // const testimonialDetails = [
//   //   {
//   //     name:"Waldo Villeda",
//   //     role:"Owner- F45 Fitness",
//   //     para:"Pulse Marketing is a highly skilled and results-driven marketing agency. They have helped us build a strong digital presence and increase our online visibility through effective SEO and PPC campaigns. Their team is responsive, proactive, and always willing to go the extra mile to ensure our success. We highly recommend Pulse Marketing to any business looking to improve their online marketing efforts."
//   //   },
//   //   {
//   //     name:"Peter Szaly",
//   //     role:"Owner- Brilliant Electric",
//   //     para:"I have been working with Pulse Marketing for several years now, and I can confidently say that they are the best in the business. Their team is dedicated, creative, and always willing to listen to our needs and concerns. They have helped  us build a strong brand identity and establish ourselves as leaders in our industry. I highly recommend Pulse Marketing to any business looking for a top-notch marketing agenc",
//   //   },
//   //   {
//   //     name:"Paul Schipizky",
//   //     role:"Owner- Brilliant ...",
//   //     para:"This team has been instrumental in our business growth. Pulse has helped us establish a strong social media presence and build relationships with our audience through engaging content and effective community management. They are highly skilled, professional, and always willing to go the extra mile. We highly recommend Pulse Marketing to any business looking to improve their social media marketing efforts."
//   //   },
//   //   {
//   //     name:"Johnny Bananas",
//   //     role:"MTV Studios ...",
//   //     para:"Truly exceeded our expectations with their website development services. From the initial consultation to the final launch, their team exhibited a remarkable level of professionalism,  creativity expertise. We are thrilled with the end result and have received numerous compliments on the website's design and functionality. We wholeheartedly endorse Pulse Marketing for their exceptional website development services."
//   //   }
//   // ];

//   const GettingTestimonials = async () => {
//     try {
//         const res = await FireApi('component/read/?page=674f05d56fb5f6230e019d44', "GET");
//         if (res.status === true) {
//            console.log(res, 'testimonials data');
//            setTestimonials(res?.data?.components);
//         } else {
//             toast.error('Failed to fetch data.');
//         }
//     } catch (error) {
//         toast.error('Error fetching data: ' + error.message);
//     }
// };

// useEffect(() => {
//   GettingTestimonials();
// }, [])

//   return (
//     <div
//       className="text-white py-12 px-6 md:px-0 lg:px-0 w-full md:w-[1200px] md:mx-auto"
//       style={{
//         backgroundImage: "url('/images/app_page_images/radial.png')",
//         backgroundSize: 'contain',
//         backgroundRepeat: 'no-repeat',
//       }}
//     >
//       {/* Header */}
//       <div className="text-start mb-10">
//         <p className="uppercase text-sm font-light text-cyan-500">
//           <span className="text-cyan-500 mr-2">•</span>Client Testimonials & Reviews
//         </p>
//         <h2 className="text-2xl md:text-4xl font-semibold leading-tight">
//           What Our Happy <br /> Clients Say About Us
//         </h2>
//       </div>

//       {/* Slider */}
//       <Slider {...settings}>
//         {testimonials.map((testimonial, index) => (
//           <div key={index} className="group flex gap-3 flex-wrap">
//             <div className="bg-[#1c192c] rounded-2xl p-6 text-center shadow-lg mx-2 relative">
//               {/* Image */}
//               <div className="relative w-full h-[400px] flex items-center justify-center rounded-lg overflow-hidden mb-4">
//                 <Image src={'/white-logo.png'} width={100} height={100} alt="Logo" />
//                 {/* Hover Overlay */}
//                 <div className="absolute inset-0 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 cursor-pointer overflow-auto h-[100%]">
//                   <p className="text-black font-medium text-[12px] text-center h-[100%]">
//                     {testimonial.content}
//                   </p>
//                 </div>
//               </div>
//               {/* Name and Circle */}
//               <div className="flex justify-between w-full items-center">
//                 <p className='text-[12px]'>{testimonial.header}</p>
//                 <p className="text-[16px] text-white">{testimonial.name}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// "use-client";
import React from "react";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import Image from "next/image";
import { FireApi } from "../../../../utils/useRequest";

const Testimonials = () => {
  const [testimonials, setTestimonials] = React.useState([]);

  const GettingTestimonials = async () => {
    try {
      const res = await FireApi(
        "component/read/?page=674f05d56fb5f6230e019d44",
        "GET",
      );
      if (res.status === true) {
        console.log(res, "testimonials data");
        const mappedTestimonials =
          res?.data?.components?.map((item) => ({
            logo: "/default-avatar.png",
            name: item.header || "Anonymous",
            date: new Date().toLocaleDateString(),
            stars: 5,
            text: item.content || "No review text available.",
            googleLogo: "/rightlogo.png",
          })) || [];

        setTestimonials(mappedTestimonials);
      } else {
        toast.error("Failed to fetch data.");
      }
    } catch (error) {
      toast.error("Error fetching data: " + error.message);
    }
  };

  React.useEffect(() => {
    GettingTestimonials();
  }, []);

  return (
    <div
      className="w-full px-6 py-12 text-white md:mx-auto md:w-[1200px] lg:w-full md:px-0 lg:px-40"
      style={{
        backgroundImage: "url('/images/app_page_images/radial.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mb-10 text-start md:mx-24 lg:mx-8">
        <p className="text-sm font-light uppercase text-cyan-500">
          <span className="mr-2 text-cyan-500">•</span>Client Testimonials &
          Reviews
        </p>
        <h2 className="mt-2 text-2xl font-semibold leading-tight md:text-4xl">
          What Our Happy <br /> Clients Say About Us
        </h2>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {/* <Slider {...settings}> */}
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex w-full transform cursor-pointer flex-col items-center rounded-lg border border-gray-300 p-4 shadow-md transition-transform hover:scale-105 hover:bg-[#1c192c] sm:w-80 md:w-80"
          >
            <div className="mb-4 flex w-full justify-between">
              <div className="flex min-w-0 items-center">
                {/* <img src={testimonial.logo} alt="Logo" className="w-12 h-12 rounded-full mr-4" /> */}
                <div className="flex flex-col overflow-hidden">
                  <h3 className="text-xl font-semibold">
                    {testimonial.name.slice(0, 20) + "..."}
                  </h3>
                  <span className="text-[14px] text-gray-500">
                    {testimonial.date}
                  </span>
                </div>
              </div>
              <a
                href="https://www.google.com/search?sa=X&sca_esv=47cd9fb8f57accb3&sxsrf=AHTn8zrMjdQJ0dlTGSa3NDKYhbQjex_f3Q:1739048872623&q=Pulse+Marketing&si=APYL9bthn74ZzM9ZeOfomMFmXjJ7rkBmwIcbOthlZBZALWR0yiDiBkX4LuJ6BaLbO6SSEofiikM8I_Gz3EX7mGDOYK-wuK6QyAx2GBkf5H05hbWGONlMMVGKGjM4F8UBlFaPOl0HN7f_12o6sT2kPVHgcnRSt-xIYM9Vd4wq4YXgb8Uezpp8DsbWlteMdho2oeO2UhRSlYvzNtakPoWZoJvsD1Q1pZ3klTl8JgqGWHkesfysY5UMOqAD2jSVk1gwimEw-xP8Ia-Dvbg3RHFfxsnvd4Gdic8WI9tT72iu9oD7QLVC218LD-A%3D&ved=2ahUKEwiTzbLy_bSLAxVOgv0HHdJCLgcQ6RN6BAgaEAE&biw=1366&bih=645&dpr=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={testimonial.googleLogo}
                  alt="Google Logo"
                  className="rounded-full"
                  width={30}
                  height={30}
                />
              </a>
            </div>
            <div className="mb-4 flex justify-center">
              {[...Array(testimonial.stars)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
            <p className=" text-gray-300">
              {testimonial.text.slice(0, 200) + "..."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
