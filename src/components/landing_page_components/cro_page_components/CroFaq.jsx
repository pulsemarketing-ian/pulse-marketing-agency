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
        "What is Conversion Rate Optimization (CRO)?",
      answer:
        "CRO is the process of improving your website’s design, content, and user experience to increase the percentage of visitors who take a desired action, such as making a purchase, filling out a form, or signing up for a service.",
    },
    {
      question:
        "Why is CRO important for my business?",
      answer:
        "CRO helps you maximize revenue from your existing traffic by reducing friction, improving user experience, and optimizing key touchpoints. This leads to higher sales, more leads, and better ROI without needing to increase ad spend.",
    },
    {
      question: "What industries benefit from CRO?",
      answer:
           "CRO is valuable for any business with an online presence, including e-commerce stores, SaaS companies, service providers, real estate businesses, and more. If you rely on website conversions, CRO can help improve performance." 
    },
    {
      question: "How does Pulse Marketing approach CRO?",
      answer:
        "We use a data-driven approach, analyzing user behavior, identifying friction points, running A/B tests, and implementing strategies that enhance user experience and increase conversions.",
    },
    {
      question: " How long does it take to see CRO results?",
      answer:
        "It depends on your website and industry, but many businesses start seeing improvements within weeks of implementing CRO strategies. Long-term optimization can lead to sustained growth over months.",
    },
    {
      question:
        "What platforms do you optimize for CRO?",
      answer:
        "We specialize in optimizing Shopify, WooCommerce, Magento, BigCommerce, and other custom e-commerce and service-based websites.",
    },
    {
      question:
        "Can CRO work alongside my existing SEO and paid ads strategy?",
      answer:
        "Yes! CRO complements SEO and paid advertising by ensuring that the traffic coming to your website converts at a higher rate, increasing your return on investment (ROI).",
    },
    {
      question:
         " Do you offer one-time CRO audits or ongoing optimization?",
      answer:
        "We provide both one-time audits with actionable recommendations and ongoing optimization services to continually improve performance based on data insights.",
    },
    {
      question:
        "What kind of CRO changes can I expect?",
      answer:
        "Depending on your website’s needs, CRO improvements may include landing page design changes, checkout process enhancements, CTA optimizations, mobile usability improvements, and personalized content strategies.",
    },
    {
      question:
        "How do I get started with Pulse Marketing’s CRO services?",
      answer:
        "Simply book a consultation with us! We’ll analyze your website’s current conversion performance, discuss your goals, and create a strategy to boost conversions and maximize revenue.",
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
