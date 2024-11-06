"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { Reveal } from "../../utils/Reveal";
import { FireApi } from "../../../utils/useRequest";

const UpperTextTestimonials = () => {

  const [testiHeading, setTestiHeading] = useState([]);
  
  const TestimonialHeading = async() => {
    try {
      const res = await FireApi(
        "component/read/?section=testmonnial-content",
        "GET",
      );

      if (res.status === true) {
        setTestiHeading(res?.data?.components);
      } else {
        console.log("An error occurred");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    TestimonialHeading();
  }, [])

  return (
    <>
      <main>
        <div className="lg:w-[90%] w-[90%] md:flex flex-row justify-between items-center pb-10 md:pb-12 m-auto">
          <div className=" w-[80%] md:w-[100%] text-center">
            <Reveal>
            {testiHeading?.map((item) => (
              <h1 key={item._id} className="poppins-medium text-5xl ct-heading">
                {/* Our clients are our biggest advocates. */}
                {item?.content}
              </h1>
              ))}
            </Reveal>
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

  const [testimonialOne, setTestimonialOne] = useState([]);
  const [testimonialTwo, setTestimonialTwo] = useState([]);
  const [testimonialThree, setTestimonialThree] = useState([]);

  const TestimonialOne = async() => {
    try {
      const res = await FireApi(
        "component/read/?section=testimonial-one",
        "GET",
      );

      if (res.status === true) {
        setTestimonialOne(res?.data?.components);
      } else {
        console.log("An error occurred");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const TestimonialTwo = async() => {
    try {
      const res = await FireApi(
        "component/read/?section=testimonial-two",
        "GET",
      );

      if (res.status === true) {
        setTestimonialTwo(res?.data?.components);
      } else {
        console.log("An error occurred");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const TestimonialThree = async() => {
    try {
      const res = await FireApi(
        "component/read/?section=testimonial-three",
        "GET",
      );

      if (res.status === true) {
        setTestimonialThree(res?.data?.components);
      } else {
        console.log("An error occurred");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    TestimonialOne();
    TestimonialTwo();
    TestimonialThree();
  }, [])
  
  return (
    <>
      <main className="w-full lg:w-[75%] m-auto py-20 md:pt-0 md:px-10 testimonial">
        <UpperTextTestimonials />
        <div className="slider-container w-[80%] lg:w-[75%] py-20 m-auto  shadow-lg   rounded-3xl ">
          <Slider {...settings}>
            {/* testimonial one */}
            {testimonialOne?.map((item) => (
            <div key={item._id} className="text-center">
              {/* <h3 className=''>1</h3> */}
              <div className="flex justify-center">
                <Image
                  src={"/tetimonial.jpeg.webp"}
                  alt="asdsad"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>

              <h2 className="poppins-medium pt-4 text-[18px]">{item?.name}</h2>
              <span className="text-[#50A2D4] poppins-light text-[13px]">
                {item?.header}
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

              <div className="text-center poppins-light text-[13px] w-[80%] m-auto">
                <p>
                  {item?.content}
                </p>
              </div>
            </div>
            ))}

            {/* testimonial 2 */}
               {testimonialTwo?.map((item) => (
            <div key={item._id} className="text-center">
              {/* <h3 className=''>1</h3> */}
              <div className="flex justify-center">
                <Image
                  src={"/tetimonial.jpeg.webp"}
                  alt="asdsad"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>

              <h2 className="poppins-medium pt-4 text-[18px]">{item?.name}</h2>
              <span className="text-[#50A2D4] poppins-light text-[13px]">
                {item?.header}
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

              <div className="text-center poppins-light text-[13px] w-[80%] m-auto">
                <p>
                  {item?.content}
                </p>
              </div>
            </div>
            ))}

            {/* testimonial 3  */}
                {testimonialThree?.map((item) => (
            <div key={item._id} className="text-center">
              {/* <h3 className=''>1</h3> */}
              <div className="flex justify-center">
                <Image
                  src={"/tetimonial.jpeg.webp"}
                  alt="asdsad"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>

              <h2 className="poppins-medium pt-4 text-[18px]">{item?.name}</h2>
              <span className="text-[#50A2D4] poppins-light text-[13px]">
                {item?.header}
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

              <div className="text-center poppins-light text-[13px] w-[80%] m-auto">
                <p>
                  {item?.content}
                </p>
              </div>
            </div>
            ))}
          </Slider>
        </div>
      </main>
      <hr />
    </>
  );
};

export default Testimonial;
