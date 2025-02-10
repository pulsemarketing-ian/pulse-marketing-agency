"use client";
import React, { useEffect, useRef } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Reveal } from "../../utils/Reveal";
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
      div.style.height = "1200px";
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
        className="w-full flex justify-center md:py-16 px-4 md:px-10"
        style={{
          backgroundImage: "url('/images/app_page_images/radial.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full lg:w-[75%] flex flex-col lg:flex-row justify-between items-center">
          {/* Left Side Content */}
          <div className="w-full text-center lg:text-left px-8 lg:px-0 lg:w-[50%] mb-14 lg:mb-0">
            <Reveal>
              <h2 className="poppins-medium text-[1.5rem] md:text-5xl hero-text">
                Got A Project <br /> Or Partnership In <br /> Mind?
              </h2>
            </Reveal>

            <div className="poppins-light text-[16px] w-full md:w-[80%] py-4">
              <Reveal>
                <p>
                  Boost your brand with our expert websites, apps, and branding
                  solutions. Bring your vision to life with Pulse.
                </p>
              </Reveal>
            </div>

            <div className="flex justify-center md:justify-start">
              <div className="flex items-center">
                <Link
                  className="flex items-center"
                  href="mailto:hi@pulsemarketing.io"
                  target="_blank"
                >
                  <MdEmail className="text-xl" />
                  <Reveal>
                    <h3 className="poppins-light ml-3">hi@pulsemarketing.io</h3>
                  </Reveal>
                </Link>
              </div>
            </div>
          </div>

          {/* Calendly Inline Widget */}
          <div
            className="w-full md:w-[90%] lg:w-[50%] flex justify-center"
            ref={calendlyContainerRef}
          ></div>
        </div>
      </main>
    </>
  );
};

export default Calender;
