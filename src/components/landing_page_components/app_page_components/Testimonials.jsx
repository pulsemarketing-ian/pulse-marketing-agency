'use client';
import React from "react";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import Image from "next/image";
import { FireApi } from "../../../../utils/useRequest";
import "./testimonials.css"

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
      <div className="mb-10 w-[100%] text-start md:mx-24 lg:mx-0">
        <p className="text-sm font-light uppercase text-cyan-500">
          <span className="mr-2 text-cyan-500">•</span>Client Testimonials &
          Reviews
        </p>
        <h2 className="mt-2 text-2xl font-semibold leading-tight md:text-4xl">
          What Our Happy <br /> Clients Say About Us
        </h2>
      </div>

      <div className="mt-10 w-[100%] flex flex-wrap justify-start gap-6">
        {/* <Slider {...settings}> */}
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testi flex w-full transform cursor-pointer flex-col items-center rounded-lg border border-gray-300 p-4 shadow-md transition-transform hover:scale-105 hover:bg-[#1c192c] sm:w-[320px] md:w-[320px] lg:w-[320px] xl:w-[31.35%]"
          >
            <div className="mb-4 flex w-full justify-between">
              <div className="flex min-w-0 items-center">
                {/* <img src={testimonial.logo} alt="Logo" className="w-12 h-12 rounded-full mr-4" /> */}
                <div className="flex flex-col overflow-hidden">
                  <h3 className="text-xl font-semibold">
                    {testimonial.name}
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
            <div className="mb-4 flex w-full">
              {[...Array(testimonial.stars)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
            <p className="test-text text-xs leading-snug text-gray-300">
              {testimonial.text.slice(0, 200) + "..."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
