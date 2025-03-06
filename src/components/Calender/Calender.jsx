"use client";
import React, { useEffect, useRef } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import { Reveal } from "../../utils/Reveal";
import Link from "next/link";

const Calender = () => {
  const calendlyContainerRef = useRef(null);

  useEffect(() => {
    const container = calendlyContainerRef.current;

    if (container) {
      container.innerHTML = ""; // Clear any previous content

      const div = document.createElement("div");
      div.className = "calendly-inline-widget";
      div.dataset.url = "https://calendly.com/ianpslater/20min"; // Replace with your Calendly link
      div.style.minWidth = "100%"; // Ensure it fits within mobile screens
      div.style.height = "600px";
      div.style.display = "flex";
      div.style.justifyContent = "center";
      container.appendChild(div);

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      container.appendChild(script);
    }
  }, []);

  return (
    <>
      <main
        className="flex w-full md:pb-0 pb-10 justify-center px-4 md:px-10 md:py-16"
        style={{
          backgroundImage: "url('/images/app_page_images/radial.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex w-full flex-col items-center justify-between lg:w-[100%] lg:flex-col">
          {/* Left Side Content */}
          {/* <div className="mb-14 w-full px-8 text-center lg:mb-0 lg:w-[50%] lg:px-0 lg:text-left">
          </div> */}
          <div className="w-full px-6 py-12 text-center text-white md:mx-auto md:w-[1200px] lg:w-full md:px-0 lg:px-30">
          <h2 className="poppins-medium hero-text text-[1.5rem] md:text-5xl">
              Got A Project Or Partnership <br/> In Mind?
            </h2>

            {/* <div className="poppins-light w-full py-4 text-[16px] md:w-[80%]">
              <p>
                Boost your brand with our expert websites, apps, and branding
                solutions. Bring your vision to life with Pulse.
              </p>
            </div> */}
{/* 
            <div className="flex justify-center md:justify-start">
              <div className="flex items-center">
                <Link
                  className="flex items-center"
                  href="mailto:hi@pulsemarketing.io"
                  target="_blank"
                >
                  <MdEmail className="text-xl" />

                  <h3 className="poppins-light ml-3">hi@pulsemarketing.io</h3>
                </Link>
              </div>
            </div> */}
          </div>

          {/* Calendly Inline Widget */}
          <div
            className="flex w-full justify-center md:w-[90%] lg:w-[100%]"
            ref={calendlyContainerRef}
          ></div>
        </div>
      </main>
    </>
  );
};

export default Calender;
