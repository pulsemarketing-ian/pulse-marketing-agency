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
        "What makes Pulse Agency different from other IT service providers?",
      answer:
        "At Pulse Agency, we combine creativity, technical expertise, and client-focused solutions to deliver exceptional results. Our team ensures every project is customized to meet your unique needs, from web development to branding and beyond. We prioritize transparency, quality, and timely delivery, ensuring your satisfaction at every step.",
    },
    {
      question: "How does Pulse handle web development projects?",
      answer:
        "We follow a structured approach to web development, starting with understanding your business goals and audience. Our process includes detailed planning, custom design, and development using the latest technologies. We ensure your website is responsive, fast, and optimized for SEO and user experience.",
    },
    {
      question: "Can you help improve my website's ranking on search engines?",
      answer:
        "Absolutely! Our SEO experts use proven strategies, including keyword optimization, technical audits, and content enhancements, to improve your website's visibility on search engines. We aim to drive organic traffic, improve your rankings, and increase conversions.",
    },
    {
      question: "How does your branding process work?",
      answer:
        "Our branding process begins with a deep understanding of your business, values, and target audience. We create a cohesive brand identity, including logo design, color schemes, and messaging, to ensure your brand stands out in the competitive market. We collaborate closely with you to achieve a look and feel that aligns with your vision.",
    },
    {
      question:
        "What can I expect from your photo & video and mobile app development services?",
      answer:
        "Our photo and video services capture your brand's essence through professional visuals that resonate with your audience. For mobile app development, we design user-friendly, high-performance apps tailored to your business needs, whether for Android, iOS, or cross-platform solutions.",
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
    <div className="flex w-full flex-col gap-4 px-6 pb-18 pt-6 text-white md:mx-auto md:w-[1200px] md:px-0 lg:flex-row lg:justify-between">
      {/* Left Column */}
      <motion.div
        initial={isDesktop ? { x: -300, opacity: 0 } : {}}
        whileInView={isDesktop ? { x: 0, opacity: 1 } : {}}
        transition={
          isDesktop ? { delay: 0.5, duration: 0.5, ease: "easeInOut" } : {}
        }
        viewport={isDesktop ? { once: false, amount: 0.2 } : {}}
        className="w-full space-y-4 lg:w-[35%]"
      >
        <p className="text-sm uppercase">
          {" "}
          <span className="mr-2 text-cyan-500">•</span>FAQs
        </p>

        <h2 className="mb-4 text-3xl font-semibold leading-tight md:text-4xl">
          Everything You <br /> Need to Know
        </h2>

        <p className="mb-6 text-gray-300">
          Have questions about how we can help your business grow? Check out our
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
        className="w-full space-y-6 lg:w-[50%]"
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
              <p className="font-semibold text-white">{faq.question}</p>
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
