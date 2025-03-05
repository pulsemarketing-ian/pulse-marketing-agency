"use client";
import { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import Image from "next/image";
// import { Reveal } from "@/utils/Reveal";
import { motion } from "motion/react";

export default function DesignServicesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const tabContent = [
    {
      title: "Logo Design",
      items: [
        { image: "/logs/AirOTours-logo-final-vector-file-03.svg" },
        { image: "/logs/artist-logo.svg" },
        { image: "/logs/Christine-.svg" },
        { image: "/logs/E-H-Contracting-01.svg" },
        { image: "/logs/Jordan-Rentals-06.svg" },
        { image: "/logs/logo-1.svg" },
        { image: "/logs/logo01.svg" },
        { image: "/logs/plane-logo.svg" },
        { image: "/logs/Season-.svg" },
        // { image: "/images/branding_page_images/logo portfolio-10.jpg" },
        // { image: "/images/branding_page_images/logo portfolio-11.jpg" },
        // { image: "/images/branding_page_images/logo portfolio-12.jpg" },
        // { image: "/images/branding_page_images/logo portfolio-13.jpg" },
        // { image: "/images/branding_page_images/logo portfolio-14.jpg" },
        // { image: "/images/branding_page_images/logo portfolio-15.jpg" },
        // { image: "/images/branding_page_images/logo portfolio-16.jpg" },
      ],
    },
    {
      title: "Branding Design",
      items: [
        { image: "/images/branding_page_images/businesscard portfolio-01.jpg" },
        { image: "/images/branding_page_images/businesscard portfolio-02.jpg" },
        { image: "/images/branding_page_images/businesscard portfolio-03.jpg" },
        { image: "/images/branding_page_images/businesscard portfolio-04.jpg" },
        { image: "/images/branding_page_images/businesscard portfolio-05.jpg" },
        { image: "/images/branding_page_images/businesscard portfolio-06.jpg" },
        { image: "/images/branding_page_images/businesscard portfolio-07.jpg" },
        { image: "/images/branding_page_images/businesscard portfolio-08.jpg" },
        { image: "/images/branding_page_images/businesscard portfolio-09.jpg" },
        { image: "/images/branding_page_images/businesscard portfolio-10.jpg" },
        { image: "/images/branding_page_images/businesscard portfolio-11.jpg" },
        { image: "/images/branding_page_images/businesscard portfolio-12.jpg" },
      ],
    },
  ];

  return (
    <section className=" px-0 py-16 text-white md:mx-auto md:w-[1200px] md:px-0 ">
      <div className="mb-8 px-6 text-start md:px-0">
        <h2 className="text-2xl font-medium leading-tight md:w-[80%] md:text-4xl lg:w-[80%]">
          Custom Design Services Tailored To Your Unique <br/> Brand Identity.
        </h2>
      </div>

      {/* Tabs */}
      <div className="mb-8 flex justify-start px-10 md:px-0">
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          textColor="inherit"
          indicatorColor="primary"
          centered
          sx={{
            fontFamily: "Poppins, san-serif",
            fontSize: "14px",
          }}
        >
          {tabContent.map((tab, index) => (
            <Tab key={index} label={tab.title} />
          ))}
        </Tabs>
      </div>

      {/* Tab Content */}
      <div
        className="container mx-auto grid grid-cols-2 gap-6 md:grid-cols-4"
        style={{
          backgroundImage: "url('/images/app_page_images/radial.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        {tabContent[activeTab].items.map((item, index) => (
          <motion.div
            initial={{
              y: 300,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              ease: "easeInOut",
            }}
            viewport={{ once: false, amount: 0.2 }}
            key={index}
            // className="overflow-hidden rounded-lg p-2 "
          >
            <div className="relative mb-4 h-32 w-full transform transition-transform duration-700 ease-in-out hover:scale-105 md:h-[300px]">
              <Image
                src={item.image}
                alt={item.title || `Image ${index + 1}`}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
