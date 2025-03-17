"use client";
import React, { useState, useEffect } from "react";
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
// import { Reveal } from '@/utils/Reveal';
import { motion } from "framer-motion";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const faqs = [
    {
      question:
        "Who is Pulse Marketing?",
      answer:
        "Pulse Marketing is a full-service digital agency specializing in AI-powered solutions, web development, SEO, and growth-driven marketing strategies. We focus on increasing revenue, conversions, and customer engagement for businesses across various industries.",
    },
    {
      question: "What services does Pulse Marketing offer?",
      answer:[
            "We provide a comprehensive suite of services, including: ",

             " • Website development & design ",
             " • AI-powered software solutions ",
             " • SEO & content marketing ",
             " • Social media management & paid ads ",
             " • E-commerce optimization ",
             " • Branding & creative design ",
             " • Lead generation & conversion rate optimization ",
         ]
    },
    {
      question: "How does Pulse Marketing help businesses grow?",
      answer:
        "We take a data-driven approach to digital marketing, combining AI automation, SEO expertise, and cutting-edge strategies to improve brand visibility, drive leads, and increase revenue.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We’ve worked with a wide range of industries, including real estate, mortgage services, e-commerce, personal training, automotive detailing, and more. Our strategies are adaptable to any business looking to scale online.",
    },
    {
      question:
        "Why should I choose Pulse Marketing over other agencies?",
      answer:
        "We focus on measurable ROI, not just marketing fluff. Our strategies are designed to increase sales, optimize conversions, and generate leads that turn into paying customers. With over 8,000 satisfied clients and 25,000+ successful projects, we deliver real results.",
    },
    {
      question:
        "How long does it take to see results?",
      answer:
        "Results vary depending on your business goals and the services you choose. SEO and content marketing typically take 3-6 months to gain traction, while paid advertising can generate leads and sales within weeks.",
    },
    {
      question:
        "Do you offer customized marketing strategies?",
      answer:
        "Yes! Every business is unique, so we tailor our marketing strategies to your specific needs, audience, and industry to maximize impact and results.",
    },
    {
      question:
        "Can Pulse Marketing help with website redesigns?",
      answer:
        "Absolutely! We specialize in designing and optimizing websites for better user experience, higher conversions, and SEO performance. Whether you need a complete redesign or just improvements, we can help.",
    },
    {
      question:
        "Do you offer ongoing support and maintenance?",
      answer:
        "Yes, we offer monthly maintenance, analytics tracking, performance reports, and ongoing optimization to ensure your marketing efforts continue to deliver results.",
    },
    {
      question:
        "How do I get started with Pulse Marketing?",
      answer:
        "Getting started is easy! Simply book a consultation with our team, and we’ll discuss your business goals, challenges, and the best marketing strategy to drive success",
    },
  ];

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize(); // Check on component mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex w-full flex-col gap-4 px-6 pb-18 pt-6 text-white md:mx-auto md:w-[1200px] md:px-0 lg:flex-col lg:justify-between">
      {/* Left Column */}
      <motion.div
        initial={isDesktop ? { x: -300, opacity: 0 } : {}}
        whileInView={isDesktop ? { x: 0, opacity: 1 } : {}}
        transition={
          isDesktop ? { delay: 0.5, duration: 0.5, ease: "easeInOut" } : {}
        }
        viewport={isDesktop ? { once: false, amount: 0.2 } : {}}
        className="w-full space-y-4 md:flex md:ml-3 md:flex-col lg:w-[100%]"
      >
        <p className="text-sm uppercase">
          {" "}
          <span className="mr-2 md:text-left text-cyan-500">•</span>FAQs
        </p>

        <h2 className="mb-4 text-3xl font-semibold leading-tight md:text-4xl">
          Everything You <br className='md:hidden' /> Need to Know
        </h2>

        <p className="mb-6 text-gray-300">
          Have questions about how we can help your business grow?<br /> Check out our
          FAQs for clear insights into our services and processes.
        </p>
      </motion.div>

      {/* Right Column */}
      <motion.div
        initial={isDesktop ? { x: 300, opacity: 0 } : {}}
        whileInView={isDesktop ? { x: 0, opacity: 1 } : {}}
        transition={
          isDesktop ? { delay: 0.5, duration: 0.5, ease: "easeInOut" } : {}
        }
        viewport={isDesktop ? { once: false, amount: 0.2 } : {}}
        className="w-full space-y-6 lg:w-[100%]"
        style={{
          backgroundImage: "url('/images/app_page_images/radial.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="cursor-pointer rounded-lg border-[0.5px] bg-[#02020e] px-4 py-2 font-medium shadow-md transition-all duration-200 ease-in-out hover:shadow-lg"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex items-center justify-between">
              <p className="font-semibold text-center text-white">{faq.question}</p>
              <span className="text-xl text-white">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-sm text-gray-400">{faq.answer}</p>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FAQSection;
