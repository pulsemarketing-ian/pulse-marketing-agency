'use client';
import React, { useState, useEffect } from 'react';
import PrimaryBtn from '../PrimaryBtns/PrimaryBtn';
import { Reveal } from '@/utils/Reveal';
import { motion } from 'framer-motion';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const faqs = [
    {
      question: "What makes Pulse Agency different from other IT service providers?",
      answer: "At Pulse Agency, we combine creativity, technical expertise, and client-focused solutions to deliver exceptional results. Our team ensures every project is customized to meet your unique needs, from web development to branding and beyond. We prioritize transparency, quality, and timely delivery, ensuring your satisfaction at every step.",
    },
    {
      question: "How does Pulse handle web development projects?",
      answer: "We follow a structured approach to web development, starting with understanding your business goals and audience. Our process includes detailed planning, custom design, and development using the latest technologies. We ensure your website is responsive, fast, and optimized for SEO and user experience.",
    },
    {
      question: "Can you help improve my website's ranking on search engines?",
      answer: "Absolutely! Our SEO experts use proven strategies, including keyword optimization, technical audits, and content enhancements, to improve your website's visibility on search engines. We aim to drive organic traffic, improve your rankings, and increase conversions.",
    },
    {
      question: "How does your branding process work?",
      answer: "Our branding process begins with a deep understanding of your business, values, and target audience. We create a cohesive brand identity, including logo design, color schemes, and messaging, to ensure your brand stands out in the competitive market. We collaborate closely with you to achieve a look and feel that aligns with your vision.",
    },
    {
      question: "What can I expect from your photo & video and mobile app development services?",
      answer: "Our photo and video services capture your brand's essence through professional visuals that resonate with your audience. For mobile app development, we design user-friendly, high-performance apps tailored to your business needs, whether for Android, iOS, or cross-platform solutions.",
    }
  ];

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize(); // Check on component mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="text-white pt-6 pb-18 flex flex-col lg:flex-row lg:justify-between w-full px-6 md:px-0 md:w-[1200px] md:mx-auto gap-4">
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
          Have questions about how we can help your business grow? Check out our FAQs for clear insights into our services and processes.
          </p>
        </Reveal>
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
              <p className="text-white font-semibold">{faq.question}</p>
              <span className="text-white text-xl">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <p className="text-gray-400 mt-2 text-sm">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FAQSection;
