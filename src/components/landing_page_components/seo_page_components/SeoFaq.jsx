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
        "What is SEO, and why is it important?",
      answer:
        "SEO (Search Engine Optimization) is the process of improving your website’s visibility on search engines like Google. A strong SEO strategy helps businesses rank higher in search results, attract more organic traffic, and increase conversions.",
    },
    {
      question: "What SEO services does Pulse Marketing offer?",
      answer:[
            "We provide a full range of SEO services, including:\n ",

             " • Keyword research & strategy\n\n ",
             " • On-page SEO (content, meta tags, headers, URL structure)\n ",
             " • Technical SEO (site speed, mobile optimization, schema markup)\n ",
             " • Off-page SEO (backlink building, citations, authority growth)\n ",
             " • Local SEO (Google My Business, location-based optimization)\n ",
             " • SEO content creation & blogging\n ",
             " • E-commerce SEO for Shopify, WooCommerce, and other platforms\n ",
         ]
    },
    {
      question: "How long does it take to see SEO results?",
      answer:
        "SEO is a long-term strategy. While some businesses see improvements within 3-6 months, major results often take 6-12 months, depending on competition, industry, and strategy.",
    },
    {
      question: "Do you guarantee first-page rankings on Google?",
      answer:
        "No ethical SEO agency can guarantee first-page rankings because Google’s algorithm constantly changes. However, we follow proven strategies to improve rankings, traffic, and conversions over time.",
    },
    {
      question:
        "What industries do you specialize in for SEO?",
      answer:
        "We’ve successfully helped businesses in real estate, mortgage services, e-commerce, personal training, automotive, hospitality, and more. Our SEO strategies are customized for each industry",
    },
    {
      question:
        "How long does it take to see results?",
      answer:
        "Results vary depending on your business goals and the services you choose. SEO and content marketing typically take 3-6 months to gain traction, while paid advertising can generate leads and sales within weeks.",
    },
    {
      question:
         "How does local SEO help my business?",
      answer:
        "Local SEO improves your visibility in location-based searches. It includes optimizing Google My Business, local citations, and geo-targeted keywords to help you rank for searches like “best [service] near me.”",
    },
    {
      question:
        "What is technical SEO, and do I need it?",
      answer:
        "Technical SEO focuses on website performance, mobile-friendliness, site speed, and structured data. It’s essential for higher search rankings, better user experience, and reducing bounce rates.",
    },
    {
      question:
        "Can you help with SEO for e-commerce websites?",
      answer:
        "Yes! We specialize in e-commerce SEO for platforms like Shopify, WooCommerce, and Magento, ensuring your product pages rank higher and attract more buyers.",
    },
    {
      question:
        "Do I need ongoing SEO, or is it a one-time service?",
      answer:
        "SEO is an ongoing process. Search engines constantly update their algorithms, and competitors improve their strategies. Regular SEO maintenance ensures you stay ahead.",
    },
    {
      question:
        "How do I track my SEO progress?",
      answer:
        "We provide detailed analytics reports showing keyword rankings, traffic growth, backlinks, and conversions. We also use tools like Google Analytics and Search Console to track your SEO performance.",
    },
    {
      question:
        "Can SEO work alongside paid ads (PPC)?",
      answer:
        "Yes! SEO and PPC work together to maximize visibility. SEO provides long-term traffic growth, while PPC delivers immediate results. A combined strategy ensures a steady flow of leads and sales.",
    },
    {
      question:
        "How do I get started with Pulse Marketing’s SEO services?",
      answer:
        "Simply book a consultation with us! We’ll analyze your current SEO performance, discuss your business goals, and create a customized strategy to increase rankings, traffic, and revenue.",
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
