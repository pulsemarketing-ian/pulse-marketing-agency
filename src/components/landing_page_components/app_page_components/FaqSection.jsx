'use client'
import React, { useState } from 'react';
import PrimaryBtn from '../PrimaryBtns/PrimaryBtn';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    "There are many variations of passages of Lorem Ipsum",
    "There are many variations of passages of Lorem Ipsum",
    "There are many variations of passages of Lorem Ipsum",
    "There are many variations of passages of Lorem Ipsum",
    "There are many variations of passages of Lorem Ipsum",
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" text-white py-12 flex justify-between w-[1200px] mx-auto">
            <div className="space-y-4 lg:w-[35%]">
            <p className="uppercase text-sm"> <span class="text-cyan-500 mr-2">•</span>FAQs</p>
        <h2 className="text-5xl font-medium leading-tight mb-4">Everything You <br/> Need to Know</h2>
        <p className="text-gray-300 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer.
        </p>
        <PrimaryBtn text={'View All FAQs'}/>
      </div>

      <div className="space-y-6 lg:w-[50%]"  style={{
        backgroundImage:"url('/images/app_page_images/radial.png')",
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat'
      }}>
      {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#000000] rounded-lg font-medium shadow-md border-[0.5px] px-4 py-2 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <p className="text-white font-semibold">{faq}</p>
              <span className="text-cyan-500 text-xl">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <p className="text-gray-400 mt-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
