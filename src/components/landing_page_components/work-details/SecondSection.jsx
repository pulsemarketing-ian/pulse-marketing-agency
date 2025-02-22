"use client"
import Image from "next/image";
import React from "react";
import {motion} from 'motion/react';

const SecondSection = () => {
  const industryData = [
    {
      name: "Industry",
      desc: "Commute",
    },
    {
      name: "Technologies",
      desc: "Mobile, Frontend",
    },
    {
      name: "Launched",
      desc: "2022",
    },
    {
      name: "Country",
      desc: "USA",
    },
  ];
  return (
    <main
      className="w-full px-4 py-8 md:py-20 md:mx-auto md:w-[1200px]"
      style={{
        backgroundImage: "url('/images/app_page_images/radial.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full rounded-lg border">
        <div className="flex flex-col md:flex-row justify-between">
          {/* left side */}
          <div className="flex w-full md:w-[70%] flex-wrap items-center border-b md:border-b-0 md:border-r p-4">
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </h6>
          </div>

          {/* right side */}
          <div className="flex w-full md:w-[30%] flex-wrap justify-center p-4">
            {industryData.map((item, index) => (
              <div className="mb-2 w-[50%] md:w-[40%]" key={index}>
                <h3 className="font-bold">{item.name}</h3>
                <p className="opacity-50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <hr />

        <motion.div
           initial={{
            scale: 0,
            opacity:0
        }}
        whileInView={{
            scale: 1,
            opacity:1
        }}
        transition={{
          delay: 0.3, 
          duration: 0.8,
          ease: "anticipate",
        }}
        viewport={{ once: false, amount: 0.2 }}  
        className="w-full p-4 flex justify-center items-center">
          <Image
            className="py-4 rounded-4xl"
            src={"/images/work-details/video-img.png"}
            width={900}
            height={900}
            alt="Video Image"
          />
        </motion.div>
      </div>
    </main>
  );
};

export default SecondSection;
