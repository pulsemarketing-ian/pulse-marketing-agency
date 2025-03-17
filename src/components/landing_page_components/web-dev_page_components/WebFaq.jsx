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
      question: "What types of websites do you build?",
      answer:[
            "We specialize in developing a wide range of websites, including: ",

             " • Business websites ",
             " • E-commerce stores ",
             " • Landing pages ",
             " • Membership sites ",
             " • Custom web applications ",
             " • AI-integrated websites ",
             " • Portfolio & personal brand websites ",
         ]
    },
    {
      question: "What platforms do you use for website development?",
      answer:[
            "We work with industry-leading platforms such as: ",

             " • WordPress ",
             " • Shopify ",
             " • Webflow ",
             " • WooCommerce ",
             " • Next.js & React for custom web apps ",
             " • Laravel & PHP for complex solutions ",
         ]
    },
    {
      question: "How long does it take to build a website?",
      answer:[
        "The timeline depends on the project scope and complexity: ",

         " • Basic websites: 2-4 weeks ",
         " • Custom business sites: 4-6 weeks ",
         " • E-commerce & web apps: 6-12+ weeks ",
      ]
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Yes! Every website we build is fully responsive and optimized for mobile, tablet, and desktop users.",
    },
    {
      question:
        "Do you offer website redesign services?",
      answer:
        "Absolutely! We can revamp your existing site to improve design, functionality, speed, and conversion rates.",
    },
    {
      question:
        "Can I update my website myself after it's built?",
      answer:
        "Yes, we build user-friendly websites with easy-to-manage content systems (CMS) so you can make updates without coding knowledge.",
    },
    {
      question:
        "Will my website be optimized for SEO?",
      answer:
        "Basic SEO best practices are included, such as fast loading speeds, mobile-first design, and structured data. However, advanced SEO strategies (keyword optimization, content strategy, backlinking, etc.) may require additional cost",
    },
    {
      question:
        "Do you offer website maintenance and support?",
      answer:
        "Yes! We offer monthly maintenance packages that include updates, security monitoring, backups, and performance optimizations.",
    },
    {
      question:
        "Can you integrate third-party tools and software?",
      answer:
        "Yes, we integrate with CRMs, payment gateways, marketing automation tools, booking systems, and more.",
    },
    {
      question:
        "Do you provide hosting and domain registration?",
      answer:
        "We can help you set up domain registration and secure web hosting with top-tier performance and security",
    },
    {
      question:
        "How do I get started with my web project?",
      answer:
        "Getting started is simple! Book a consultation with our team, and we’ll discuss your vision, goals, and the best approach for your new website.",
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
        className="w-full space-y-4 md:flex-col md:ml-3 lg:w-[100%]"
      >
        <p className="text-sm uppercase">
          {" "}
          <span className="mr-2 md:text-left text-cyan-500">•</span>FAQs
        </p>

        <h2 className="mb-4 text-3xl font-semibold leading-tight md:text-4xl">
          Everything You <br className="md:hidden" /> Need to Know
        </h2>

        <p className="mb-6 md:mb-16 text-gray-300">
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
