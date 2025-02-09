"use client";
import Image from "next/image";
import React from "react";
import { FaPhoneAlt, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { IoLogoYoutube } from "react-icons/io5";
import { AiFillTikTok, AiOutlineWhatsApp } from "react-icons/ai";
import Link from "next/link";
import TextScroller from "./TextScroller";
import Tooltip from "@mui/material/Tooltip";

const Footer = () => {
  return (
    <>
      <main className="w-full pb-12 pt-12 text-white relative">
        <div className="md:justify-none mx-auto flex w-full flex-wrap justify-between gap-8 px-8 lg:w-[88%] lg:px-0">
          {/* Logo & About Section */}
          <div className="flex flex-col items-start gap-4 md:min-h-[250px] md:w-[20%]">
            <img className="h-8 w-auto" src="/white-logo.png" alt="Logo" />
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
            ].map((item, index) => (
              <Link key={index} href={item.link} className="group flex items-center gap-2">
                <Image src={"/images/services_page_images/blue-dot.png"} width={10} height={10} alt="Dot" />
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
            ].map((service, index) => (
              <Link key={index} href={service.link} className="group flex items-center gap-2">
                <Image src={"/images/services_page_images/blue-dot.png"} width={10} height={10} alt="Dot" />
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
              <Link href="mailto:hi@pulsemarketing.io" target="_blank" className="flex items-center">
                <MdEmail />
                <span className="ml-3 text-[18px]">hi@pulsemarketing.io</span>
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-6 md:min-h-[250px]">
            <h1 className="text-xl font-medium">Follow Us</h1>
            <div className="mt-4 flex flex-wrap gap-6 text-[21px]">
              <Link href="https://www.facebook.com/pulsemarketing.io/" target="_blank" className="hover:text-blue-600">
                <FaFacebookF />
              </Link>
              <Link href="https://www.instagram.com/pulsemarketing.io/" target="_blank" className="hover:text-pink-500">
                <FiInstagram />
              </Link>
              <Link href="https://www.youtube.com/" target="_blank" className="hover:text-red-500">
                <IoLogoYoutube />
              </Link>
              <Link href="https://www.linkedin.com/" target="_blank" className="hover:text-blue-800">
                <FaLinkedin />
              </Link>
              <Link href="https://www.tiktok.com/@pulsemarketing.io" target="_blank" className="hover:text-blue-800">
                <AiFillTikTok />
              </Link>
            </div>
          </div>
        </div>

        {/* Text Scroller */}
        <div className="W-[100%] poppins-medium border-text flex w-full items-center justify-center overflow-hidden whitespace-nowrap py-0 text-center text-[4rem] text-transparent lg:py-2 lg:text-[100px]">
          <TextScroller text="Innovate. Create. Succeed: Your Journey Begins Here! Drive Your Business to New Heights!" />
        </div>

        {/* Footer Bottom */}
        <div className="mx-auto flex w-full flex-col items-center justify-between gap-4 px-8 md:flex-row lg:w-[88%] lg:px-0">
          <h3 className="text-[18px]">© 2024 Pulse. All rights reserved.</h3>
          <div className="flex gap-6 text-[18px]">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/term-condition">Terms & Conditions</Link>
          </div>
        </div>

        {/* WhatsApp Business Icon */}
        <Tooltip title="Need help? Chat with us" arrow
         sx={{
          fontSize: "1.2rem", // Tooltip text size
          "& .MuiTooltip-tooltip": {
            fontSize: "1.2rem", // Tooltip font size
            padding: "10px 15px", // Increase padding
          },
        }}>
          <Link
            href="https://wa.me/17789607426"
            target="_blank"
            className="fixed bottom-6 right-6 flex items-center justify-center rounded-full bg-green-500 p-4 text-white shadow-lg hover:bg-green-600 transition duration-300"
          >
            <AiOutlineWhatsApp className="text-3xl" />
          </Link>
        </Tooltip>
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
