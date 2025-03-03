"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
// import { Reveal } from "../../utils/Reveal";

const UpperTextTestimonials = () => {
  return (
    <>
      <main>
        <div className="m-auto w-[90%] flex-row items-center justify-between pb-10 md:flex md:pb-12 lg:w-[90%]">
          <div className=" w-[80%] text-center md:w-[100%]">
            <h1 className="poppins-medium ct-heading text-5xl">
              {/* Our clients are our biggest */}
              Our clients are our biggest advocates.
            </h1>
          </div>
        </div>
      </main>
    </>
  );
};

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      company: "Doe Inc.",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/testimonial-1.jpg",
    },
    {
      id: 2,
      name: "Jane Doe",
      company: "Doe Inc.",
      quote:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/testimonial-2.jpg",
    },
    {
      id: 3,
      name: "Peter Jones",
      company: "Jones & Co.",
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/testimonial-3.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <main className="testimonial m-auto w-full py-20 md:px-10 md:pt-0 lg:w-[75%]">
        <UpperTextTestimonials />
        <div className="slider-container m-auto w-[80%] rounded-3xl py-0  pt-5 shadow-lg  md:pt-10   lg:w-[75%] ">
          <Slider {...settings}>
            {/* testimonial one */}
            <div className="text-center">
              {/* <h3 className=''>1</h3> */}
              <div className="flex justify-center">
                <Image
                  src={"/logo-img.jpg"}
                  alt="asdsad"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>

              <h2 className="poppins-medium pt-4 text-[18px]">Stuart Holmes</h2>
              <span className="poppins-light text-[13px] text-[#50A2D4]">
                CEO, Green Collar Brigade
              </span>
              <div className="flex justify-center py-3">
                <Image
                  src={"/Group 1000002716.png"}
                  alt="asdsad"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>

              <div className="poppins-light m-auto w-[80%] text-center text-[13px]">
                <p>
                  Pulse, thank you for your outstanding work. My vision is now a
                  tangible reality. Five stars are an understatement for the
                  exceptional quality and service you provide. Truly amazing and
                  highly recommended.
                </p>
              </div>
            </div>

            {/* testimonial 2 */}
            <div className="text-center">
              <div className="flex justify-center">
                <Image
                  src={"/logo-img.jpg"}
                  alt="asdsad"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>

              <h2 className="poppins-medium pt-4 text-[18px]">
                Joshua Mclennon
              </h2>
              <span className="poppins-light text-[13px] text-[#50A2D4]">
                Owner, Drear Cleaning Services
              </span>
              <div className="flex justify-center py-3">
                <Image
                  src={"/Group 1000002716.png"}
                  alt="asdsad"
                  width={100}
                  height={100}
                />
              </div>

              <div className="poppins-light m-auto w-[80%] text-center text-[13px]">
                <p>
                  Very good agency to work with, Pulse got my logo to me very
                  quickly which is what I needed and delivered a good product.
                  Highly recommend them. Quick, efficient, and very
                  professional. Truly a pleasure to work with Pulse. Excellent
                  job!
                </p>
              </div>
            </div>

            {/* testimonial 3  */}
            <div className="text-center">
              <div className="flex justify-center">
                <Image
                  src={"/logo-img.jpg"}
                  alt="asdsad"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>

              <h2 className="poppins-medium pt-4 text-[18px]">
                Robert Jenkins
              </h2>
              <span className="poppins-light text-[13px] text-[#50A2D4]">
                CEO, Asap security
              </span>
              <div className="flex justify-center py-3">
                <Image
                  src={"/Group 1000002716.png"}
                  alt="asdsad"
                  width={100}
                  height={100}
                />
              </div>

              <div className="poppins-light m-auto w-[80%] text-center text-[13px]">
                <p>
                  Pulse was one of the best I have worked with on Upwork in 10
                  years. Very knowledgeable and has great communication. They
                  are also very reliable. Outstanding performance and highly
                  recommended. Consistently delivers high quality work.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </main>
      <hr />
    </>
  );
};

export default Testimonial;
