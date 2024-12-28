'use client'
import React, { useState, useEffect } from 'react';
import PrimaryBtn from '../PrimaryBtns/PrimaryBtn';
import { Reveal } from '@/utils/Reveal';
import { motion } from 'motion/react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const faqs = [
    "There are many variations of passages of Lorem Ipsum",
    "There are many variations of passages of Lorem Ipsum",
    "There are many variations of passages of Lorem Ipsum",
    "There are many variations of passages of Lorem Ipsum",
    "There are many variations of passages of Lorem Ipsum",
  ];

  useEffect(() => {
    // Check if the window width is for desktop
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize(); // Check on component mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="text-white py-12 flex flex-col lg:flex-row lg:justify-between w-full px-6 md:px-0 md:w-[1200px] md:mx-auto gap-4">
      {/* Left Column */}
      <motion.div
        initial={isDesktop ? { x: -300, opacity: 0 } : {}}
        whileInView={isDesktop ? { x: 0, opacity: 1 } : {}}
        transition={isDesktop ? { delay: 0.5, duration: 0.5, ease: "easeInOut" } : {}}
        viewport={isDesktop ? { once: false, amount: 0.2 } : {}}
        className="space-y-4 lg:w-[35%] w-full"
      >
        <Reveal>
          <p className="uppercase text-sm"> <span className="text-cyan-500 mr-2">•</span>FAQs</p>
        </Reveal>
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">Everything You <br /> Need to Know</h2>
        </Reveal>
        <Reveal>
          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer.
          </p>
        </Reveal>
        <PrimaryBtn text={'View All FAQs'} />
      </motion.div>

      {/* Right Column */}
      <motion.div
        initial={isDesktop ? { x: 300, opacity: 0 } : {}}
        whileInView={isDesktop ? { x: 0, opacity: 1 } : {}}
        transition={isDesktop ? { delay: 0.5, duration: 0.5, ease: "easeInOut" } : {}}
        viewport={isDesktop ? { once: false, amount: 0.2 } : {}}
        className="space-y-6 lg:w-[50%] w-full"
        style={{
          backgroundImage: "url('/images/app_page_images/radial.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          padding: '10px',
          borderRadius: '8px'
        }}
      >
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#02020e] rounded-lg font-medium shadow-md border-[0.5px] px-4 py-2 cursor-pointer transition-all duration-200 ease-in-out hover:shadow-lg"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <p className="text-white font-semibold">{faq}</p>
              <span className="text-white text-xl">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <p className="text-gray-400 mt-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FAQSection;
