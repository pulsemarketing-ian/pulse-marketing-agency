'use client';
import Image from "next/image";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import TextScroller from "./TextScroller";
import Link from "next/link";
import { FaXTwitter, FaFacebookF, FaLinkedin } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <main className="w-full pb-12 pt-12 text-white">
        <div className="w-full px-8 lg:px-0 lg:w-[88%] mx-auto flex flex-wrap justify-between md:justify-none gap-8">

          {/* Logo & About Section */}
          <div className="flex flex-col gap-4 items-start md:min-h-[250px] md:w-[20%]">
            <img className="h-8 w-auto" src="/white-logo.png" alt="Logo" />
            <p className="text-sm leading-relaxed">
              Welcome to Pulse, a Vancouver-based marketing firm with years
              of experience in the field serving 8,000+ clients from various industries.
              We have successfully completed more than 25,000 projects.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4 md:min-h-[250px]">
            <h1 className="font-medium text-xl">Quick Links</h1>
            {[
              { name: "Home", link: "/" },
              { name: "About", link: "/about-us" },
              { name: "App", link: "/app" },
              { name: "Portfolio", link: "/our-work" },
              { name: "Blog", link: "/blog" },
            ].map((item, index) => (
              <Link key={index} href={item.link} className="group flex items-center gap-2">
                <Image src={'/images/services_page_images/blue-dot.png'} width={10} height={10} alt="Dot" />
                <span className="relative hover:underline-animation text-[18px]">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Services */}
          <div className="flex flex-col gap-[9px] md:min-h-[250px]">
            <h1 className="font-medium text-xl">Services</h1>
            {[
              { name: "Web Development", link: "/web-development" },
              { name: "App Development", link: "/app" },
              { name: "SEO", link: "/seo" },
              { name: "Branding", link: "/branding" },
              { name: "Video Photo", link: "/video-photo" },
              { name: "CRO", link: "/cro" },
            ].map((service, index) => (
              <Link key={index} href={service.link} className="group flex items-center gap-2">
                <Image src={'/images/services_page_images/blue-dot.png'} width={10} height={10} alt="Dot" />
                <span className="relative hover:underline-animation text-[18px]">{service.name}</span>
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4 md:min-h-[250px]">
            <h1 className="font-medium text-xl">Contact</h1>
            <div className="flex items-center gap-2">
              <Link href="tel:18443303141" target="_blank" className="flex items-center">
                <FaPhoneAlt />
                <span className="ml-3 text-[18px]">18443303141</span>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Link href="mailto:hi@pulsemarketing.io" target="_blank" className="flex items-center">
                <MdEmail />
                <span className="ml-3 text-[18px]">hi@pulsemarketing.io</span>
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-4 md:min-h-[250px]">
            <h1 className="font-medium text-xl">Follow Us</h1>
            <div className="flex gap-4 mt-3 items-center text-xl cursor-pointer">
              <FaXTwitter />
              <FaFacebookF />
              <FiInstagram />
              <IoLogoYoutube />
              <FaLinkedin />
            </div>
          </div>

        </div>

          {/* Text Scroller */}
          <div className="flex items-center W-[100%] justify-center poppins-medium text-[4rem] lg:text-[100px] text-center overflow-hidden whitespace-nowrap text-transparent border-text w-full py-0 lg:py-2">
         <TextScroller text="Innovate. Create. Succeed: Your Journey Begins Here! Drive Your Business to New Heights!
          Innovate. Create. Succeed: Your Journey Begins Here! Drive Your Business to New Heights! Innovate. Create. Succeed: Your Journey Begins Here! Drive Your Business to New Heights! Innovate. Create. Succeed: Your Journey Begins Here! Drive Your Business to New Heights! Innovate. Create. Succeed: Your Journey Begins Here! Drive Your Business to New Heights!"/>
        </div>


        {/* Footer Bottom */}
        <div className="w-full px-8 lg:px-0 lg:w-[88%] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <h3 className="text-[18px]">© 2024 Pulse. All rights reserved.</h3>
          <div className="flex gap-6 text-[18px]">
            <Link href="/privacy" target="_blank">
              Privacy Policy
            </Link>
            <Link href="/term-condition" target="_blank">
              Terms & Conditions
            </Link>
          </div>
        </div>
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
