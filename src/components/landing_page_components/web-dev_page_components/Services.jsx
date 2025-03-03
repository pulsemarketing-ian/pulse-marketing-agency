"use client";
// import { Reveal } from "@/utils/Reveal";
import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;
  return (
    <main
      className="mx-10 py-16 md:mx-14"
      style={{
        backgroundImage: "url('/images/app_page_images/radial.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      
        <h2 className="text-left text-4xl font-bold tracking-wide">Services</h2>
      

      <div className="mt-8 flex flex-col flex-wrap items-center justify-between gap-4 md:flex-row">
        {[
          {
            title: "Website Design and Development",
            description:
              "We design and develop custom, responsive websites that are visually appealing, user-friendly, and aligned with your business goals, using the latest technologies.",
            delay: 0.2,
          },
          {
            title: "Annual Maintenance Service",
            description:
              "Our annual maintenance packages include regular updates, security patches, and performance checks to ensure your website remains secure and up-to-date throughout the year.",
            delay: 0.25,
          },
          {
            title: "Website Maintenance",
            description:
              "We provide ongoing website maintenance, including content updates, bug fixes, and performance improvements, ensuring your site operates smoothly and efficiently.",
            delay: 0.27,
          },
          {
            title: "Hosting and Administration",
            description:
              "We offer reliable hosting services with 24/7 monitoring, server management, and domain registration to ensure your website is secure, fast, and always operational.",
            delay: 0.28,
          },
        ].map((card, index) => (
          <div
            key={index}
            className="border-1 flex min-h-[220px] w-full transform flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md transition-transform duration-700 ease-in-out hover:scale-105 md:w-[24%] lg:min-h-[240px] xl:min-h-[292px] 2xl:min-h-[200px]"
          >
            <h3 className="text-xl font-bold tracking-wide">{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Services;
