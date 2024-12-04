'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { FireApi } from '../../../../utils/useRequest';
import { toast } from 'react-toastify';

export default function Testimonials() {

  const [testimonials, setTestimonials] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // const testimonialDetails = [
  //   {
  //     name:"Waldo Villeda",
  //     role:"Owner- F45 Fitness",
  //     para:"Pulse Marketing is a highly skilled and results-driven marketing agency. They have helped us build a strong digital presence and increase our online visibility through effective SEO and PPC campaigns. Their team is responsive, proactive, and always willing to go the extra mile to ensure our success. We highly recommend Pulse Marketing to any business looking to improve their online marketing efforts."
  //   },
  //   {
  //     name:"Peter Szaly",
  //     role:"Owner- Brilliant Electric",
  //     para:"I have been working with Pulse Marketing for several years now, and I can confidently say that they are the best in the business. Their team is dedicated, creative, and always willing to listen to our needs and concerns. They have helped  us build a strong brand identity and establish ourselves as leaders in our industry. I highly recommend Pulse Marketing to any business looking for a top-notch marketing agenc",
  //   },
  //   {
  //     name:"Paul Schipizky",
  //     role:"Owner- Brilliant ...",
  //     para:"This team has been instrumental in our business growth. Pulse has helped us establish a strong social media presence and build relationships with our audience through engaging content and effective community management. They are highly skilled, professional, and always willing to go the extra mile. We highly recommend Pulse Marketing to any business looking to improve their social media marketing efforts."
  //   },
  //   {
  //     name:"Johnny Bananas",
  //     role:"MTV Studios ...",
  //     para:"Truly exceeded our expectations with their website development services. From the initial consultation to the final launch, their team exhibited a remarkable level of professionalism,  creativity expertise. We are thrilled with the end result and have received numerous compliments on the website's design and functionality. We wholeheartedly endorse Pulse Marketing for their exceptional website development services."
  //   }
  // ];

  const GettingTestimonials = async () => {
    try {
        const res = await FireApi('component/read/?page=674f05d56fb5f6230e019d44', "GET");
        if (res.status === true) {
           console.log(res, 'testimonials data');
           setTestimonials(res?.data?.components);
        } else {
            toast.error('Failed to fetch data.');
        }
    } catch (error) {
        toast.error('Error fetching data: ' + error.message);
    }
};

useEffect(() => {
  GettingTestimonials();
}, [])


  return (
    <div
      className="text-white py-12 px-6 md:px-0 lg:px-0 w-full md:w-[1200px] md:mx-auto"
      style={{
        backgroundImage: "url('/images/app_page_images/radial.png')",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Header */}
      <div className="text-start mb-10">
        <p className="uppercase text-sm font-light text-cyan-500">
          <span className="text-cyan-500 mr-2">•</span>Client Testimonials & Reviews
        </p>
        <h2 className="text-2xl md:text-4xl font-medium leading-tight">
          What Our Happy <br /> Clients Say About Us
        </h2>
      </div>

      {/* Slider */}
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="group flex gap-3 flex-wrap">
            <div className="bg-[#1c192c] rounded-2xl p-6 text-center shadow-lg mx-2 relative">
              {/* Image */}
              <div className="relative w-full h-[400px] flex items-center justify-center rounded-lg overflow-hidden mb-4">
                <Image src={'/white-logo.png'} width={100} height={100} alt="Logo" />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 cursor-pointer">
                  <p className="text-black font-medium text-[14px] text-center">
                    {testimonial.content}
                  </p>
                </div>
              </div>
              {/* Name and Circle */}
              <div className="flex justify-between w-full items-center">
                {/* <Image
                  src={'/images/app_page_images/circle.png'}
                  width={70}
                  height={50}
                  alt="Circle"
                /> */}
                <p className='text-[12px]'>{testimonial.header}</p>
                <p className="text-[16px] text-white">{testimonial.name}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
