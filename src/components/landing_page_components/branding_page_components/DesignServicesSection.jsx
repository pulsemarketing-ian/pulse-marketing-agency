"use client";
import { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import Image from "next/image";
import { Reveal } from "@/utils/Reveal";
import {motion} from 'motion/react';

export default function DesignServicesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const tabContent = [
    {
      title: "Logo Design",
      items: [
        {
          image: "/images/branding_page_images/portfolio (1).png",
          title:
            "Logos That Speak, Brands That Resonate.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        },
        {
          image: "/images/branding_page_images/portfolio (2).png",
          title:
            "Logos That Speak, Brands That Resonate.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        },
        {
          image: "/images/branding_page_images/portfolio (3).png",
          title:"Logos That Speak, Brands That Resonate.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        },
      ],
    },
    {
      title: "Branding Design",
      items: [
        {
          image: "/images/branding_page_images/portfolio (1).jpg",
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        },
        {
          image: "/images/branding_page_images/portfolio (3).jpg",
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        },
        {
          image: "/images/branding_page_images/portfolio (2).jpg",
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        },
      ],
    },
  ];

  return (
    <section className=" px-0 py-16 text-white md:mx-auto md:w-[1200px] md:px-0 ">
      <div className="mb-8 px-6 text-start md:px-0">
        <Reveal>
        <h2 className="text-2xl font-medium leading-tight md:text-4xl md:w-[70%] lg:w-[60%]">
          Custom design services tailored to 
          your unique brand identity.
        </h2>
        </Reveal>
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
        className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3"
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
          viewport={{ once: false, amount: 0.2 }} key={index} className="overflow-hidden rounded-lg p-4 shadow-lg">
            <div className="relative mb-4 h-48 w-full transform transition-transform duration-700 ease-in-out hover:scale-105">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <Reveal>
            <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
            </Reveal>
            <Reveal>
            <p className="text-[13px] text-gray-300">{item.description}</p>
            </Reveal>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
