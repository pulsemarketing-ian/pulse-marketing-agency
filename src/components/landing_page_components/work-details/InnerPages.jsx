"use client";
// import { Reveal } from "@/utils/Reveal";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const InnerPages = () => {
  const Images = [
    { image: "/images/work-details/inner-pages (2).png" },
    { image: "/images/work-details/inner-pages (3).png" },
    { image: "/images/work-details/inner-pages (1).png" },
  ];

  return (
    <main
      className="w-full px-4 py-10 md:mx-auto md:w-[1200px] md:px-0 md:py-16"
      style={{
        backgroundImage: "url('/images/app_page_images/radial.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="mt-3 text-2xl font-bold leading-tight md:text-4xl">
        Inner Pages
      </h2>

      <div className="mt-8 flex flex-wrap justify-between gap-3 md:gap-0">
        <motion.div
          initial={{
            x: -300,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: false, amount: 0.2 }}
          className="w-full md:w-[32%]"
        >
          <Image
            src={"/images/work-details/inner-pages (2).png"}
            width={500}
            height={500}
          />
        </motion.div>

        <motion.div
          initial={{
            scale: 0.1,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: false, amount: 0.2 }}
          className="w-full md:w-[32%]"
        >
          <Image
            src={"/images/work-details/inner-pages (3).png"}
            width={500}
            height={500}
          />
        </motion.div>

        <motion.div
          initial={{
            x: 300,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: false, amount: 0.2 }}
          className="w-full md:w-[32%]"
        >
          <Image
            src={"/images/work-details/inner-pages (1).png"}
            width={500}
            height={500}
          />
        </motion.div>
      </div>
    </main>
  );
};

export default InnerPages;
