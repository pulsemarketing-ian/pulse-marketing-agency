"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaPhoneAlt, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { IoCloseSharp, IoLogoYoutube } from "react-icons/io5";
import { AiFillTikTok, AiOutlineWhatsApp } from "react-icons/ai";
import Link from "next/link";
import TextScroller from "./TextScroller";
import Tooltip from "@mui/material/Tooltip";
import { IoMdClose } from "react-icons/io";
import { Box, Modal } from "@mui/material";
// import { Reveal } from "@/utils/Reveal";

const Footer = () => {
  const [showForm, setShowForm] = useState(false);
  const calendlyContainerRef = useRef(null);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  useEffect(() => {
    if (showForm) {
      const container = calendlyContainerRef.current;

      if (container) {
        container.innerHTML = "";

        const div = document.createElement("div");
        div.className = "calendly-inline-widget";
        div.dataset.url = "https://calendly.com/ianpslater/20min";
        div.style.minWidth = "500px";
        div.style.height = "1200px";
        container.appendChild(div);

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        container.appendChild(script);
      }
    }
  }, [showForm]);

  return (
    <>
      <main className="relative mt-4 w-full pb-12 text-white sm:mt-20 md:pt-12">
        <div className="md:justify-none mx-auto flex w-full flex-wrap justify-between gap-8 px-8 lg:w-[88%] lg:px-0">
          {/* Logo & About Section */}
          <div className="mt-10 flex flex-col items-start gap-4 sm:mt-40 md:mt-0 md:min-h-[250px] md:w-[20%]">
            <img className="h-8 w-auto " src="/white-logo.png" alt="Logo" />
            <p className="text-sm leading-relaxed">
              Welcome to Pulse, a Vancouver-based marketing firm with years of
              experience in the field serving 8,000+ clients from various
              industries. We have successfully completed more than 25,000
              projects.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4 md:min-h-[250px]">
            <h1 className="text-xl font-medium">Quick Links</h1>
            {[
              { name: "Home", link: "/" },
              { name: "About", link: "/about-us" },
              { name: "App", link: "/app" },
              { name: "Portfolio", link: "/our-work" },
              { name: "Insights", link: "/blog" },
              { name: "CRO Calculator", link: "/cro/#cal" },
              {name: "Power Signature", link: "/#power-signature"}
            ].map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="group flex items-center gap-2"
              >
                <Image
                  src={"/images/services_page_images/blue-dot.png"}
                  width={10}
                  height={10}
                  alt="Dot"
                />
                <span className="hover:underline-animation relative text-[18px]">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Services */}
          <div className="flex flex-col gap-[9px] md:min-h-[250px]">
            <h1 className="text-xl font-medium">Services</h1>
            {[
              { name: "Web Development", link: "/web-development" },
              { name: "App Development", link: "/app" },
              { name: "SEO", link: "/seo" },
              { name: "Branding", link: "/branding" },
              { name: "CRO", link: "/cro" },
              {name: "SEO Audit", link: "/seo-audit"}
            ].map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group flex items-center gap-2"
              >
                <Image
                  src={"/images/services_page_images/blue-dot.png"}
                  width={10}
                  height={10}
                  alt="Dot"
                />
                <span className="hover:underline-animation relative text-[18px]">
                  {service.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4 md:min-h-[250px]">
            <h1 className="text-xl font-medium">Contact</h1>
            <div className="flex items-center gap-2">
              <Link
                href="mailto:hi@pulsemarketing.io"
                target="_blank"
                className="flex items-center"
              >
                <MdEmail />
                <span className="ml-3 text-[18px]">hi@pulsemarketing.io</span>
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-6 md:min-h-[250px]">
            <h1 className="text-xl font-medium">Follow Us</h1>
            <div className="mt-4 flex flex-wrap gap-6 text-[21px]">
              <Link
                href="https://www.facebook.com/pulsemarketing.io/"
                target="_blank"
                className="hover:text-blue-600"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://www.instagram.com/pulsemarketing.io/"
                target="_blank"
                className="hover:text-pink-500"
              >
                <FiInstagram />
              </Link>
              <Link
                href="https://youtube.com/@pulsemarketinginc?si=dSVTlmbIx-Kqzbcv"
                target="_blank"
                className="hover:text-red-500"
              >
                <IoLogoYoutube />
              </Link>
              <Link
                href="https://www.linkedin.com/company/pulse-inc/"
                target="_blank"
                className="hover:text-blue-800"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://www.tiktok.com/@pulsemarketing.io"
                target="_blank"
                className="hover:text-blue-800"
              >
                <AiFillTikTok />
              </Link>
            </div>
            <div className="flex-col">
              <Link
                href={
                  "https://www.bbb.org/ca/bc/vancouver/profile/digital-marketing/pulse-marketing-inc-0037-2428735/#sealclick"
                }
                target="_blank"
              >
                <Image
                  alt="image"
                  className="mb-5 mr-8"
                  src={"/accrebited-bussiness-logo2.png"}
                  width={125}
                  height={125}
                />
              </Link>

              <Link
                href={
                  "https://www.google.com/search?sca_esv=09379ecd0b6efd91&sca_upv=1&q=Pulse+Marketing+Inc.&ludocid=8690602816288484550&lsig=AB86z5VS1uhD8C0TEf_4MQU5HsGp&kgs=dd8e1417abb4f44a&shndl=30&shem=lnole,lsde,lsp&source=sh/x/loc/act/m1/1"
                }
                target="_blank"
              >
                <Image
                  alt="image"
                  src={"/google-review-logo2.png"}
                  width={125}
                  height={125}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Text Scroller */}
        {/* <div className="W-[100%] poppins-medium border-text mb-10 mt-10 flex w-full items-center justify-center overflow-hidden whitespace-nowrap py-0 text-center text-[4rem] text-transparent lg:py-2 lg:text-[100px]"> */}
        <div className="W-[100%] poppins-medium border-text flex w-full items-center justify-center overflow-hidden whitespace-nowrap py-0 text-center text-[4rem] text-transparent lg:py-2 lg:text-[100px]">
          <TextScroller text="Innovate. Create. Succeed: Your Journey Begins Here! Drive Your Business to New Heights!  Innovate. Create. Succeed: Your Journey Begins Here! Drive Your Business to New Heights! Innovate. Create. Succeed: Your Journey Begins Here! Drive Your Business to New Heights! Innovate. Create. Succeed: Your Journey Begins Here! Drive Your Business to New Heights!" />
        </div>
        {/* </div> */}
        {/* Footer Bottom */}
        <div className="mx-auto flex w-full flex-col items-center justify-between gap-4 px-8 md:flex-row lg:w-[88%] lg:px-0">
          <h3 className="text-[18px]">© 2025 Pulse. All Rights Reserved.</h3>
          <div className="flex gap-6 text-[18px]">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/term-condition">Terms & Conditions</Link>
          </div>
        </div>

        {/* WhatsApp Business Icon */}
        <Tooltip
          title="Need help? Chat with us"
          arrow
          sx={{
            fontSize: "1.2rem",
            "& .MuiTooltip-tooltip": {
              fontSize: "1.2rem",
              padding: "10px 15px",
            },
          }}
        >
          <Link
            href="https://wa.me/17789607426"
            target="_blank"
            className="fixed bottom-20 right-6 z-[9999] flex items-center justify-center rounded-full bg-green-500 p-4 text-white shadow-lg transition duration-300 hover:bg-green-600"
          >
            <AiOutlineWhatsApp className="text-3xl" />
          </Link>
        </Tooltip>

        <button
          onClick={toggleForm}
          className="poppins-regular contact-btn fixed bottom-5 right-6 z-[9999] mt-8 flex items-center justify-between rounded-3xl border-none bg-white px-4 py-2 text-black outline-none ease-in-out hover:bg-my-blue-gradient hover:text-white hover:transition-all"
        >
          Book Now
        </button>

        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gray-500 bg-opacity-50">
            <div className="relative h-[70vh] w-full max-w-2xl rounded-lg bg-white p-6 md:w-[85%] lg:w-[65%]">
              <div
                onClick={toggleForm}
                className="absolute right-3 top-2 cursor-pointer px-2 text-2xl font-bold text-blue-500"
              >
                <IoCloseSharp />
              </div>

              <h2 className="mb-4 text-xl">Schedule Your Meeting</h2>
              <div
                className="h-[60vh] overflow-x-auto overflow-y-auto sm:overflow-x-hidden"
                ref={calendlyContainerRef}
              ></div>
            </div>
          </div>
        )}
      </main>

      {/* Styles for hover underline animation */}
      <style jsx>{`
        .hover:underline-animation::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 2px;
          background-color: #62c9d6;
          transition: width 0.3s ease-in-out;
        }

        .hover:underline-animation:hover::after {
          width: 100%;
        }

        .border-text {
          -webkit-text-stroke: 2px #62c9d6;
          text-stroke: 2px black;
        }
      `}</style>
    </>
  );
};

export default Footer;
