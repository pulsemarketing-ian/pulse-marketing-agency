'use client';
import { Reveal } from '@/utils/Reveal';
import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;
  return (
    <main
      className="mx-10 md:mx-14 py-16"
      style={{
        backgroundImage: "url('/images/app_page_images/radial.png')",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Reveal>
        <h2 className="text-4xl font-bold tracking-wide text-left">Services</h2>
      </Reveal>

      <div className="flex flex-col gap-4 md:flex-row flex-wrap justify-between items-center mt-8">
        {[
          {
            title: 'Website Design and Development',
            description:
              'We design and develop custom, responsive websites that are visually appealing, user-friendly, and aligned with your business goals, using the latest technologies.',
            delay: 0.2,
          },
          {
            title: 'Annual Maintenance Service',
            description:
              'Our annual maintenance packages include regular updates, security patches, and performance checks to ensure your website remains secure and up-to-date throughout the year.',
            delay: 0.25,
          },
          {
            title: 'Website Maintenance',
            description:
              'We provide ongoing website maintenance, including content updates, bug fixes, and performance improvements, ensuring your site operates smoothly and efficiently.',
            delay: 0.27,
          },
          {
            title: 'Hosting and Administration',
            description:
              'We offer reliable hosting services with 24/7 monitoring, server management, and domain registration to ensure your website is secure, fast, and always operational.',
            delay: 0.28,
          },
        ].map((card, index) => (
          <div
            key={index}
            className="w-full md:w-[24%] rounded-2xl border border-1 gap-3 bg-white bg-opacity-10 backdrop-blur-md p-5 flex flex-col min-h-[220px] transform transition-transform duration-700 ease-in-out hover:scale-105"
          >
            <h3 className="text-xl font-bold tracking-wide">{card.title}</h3>
            <p className="text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Services;