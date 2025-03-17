"use client";
// import { Reveal } from '@/utils/Reveal';
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Results = () => {
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

  return (
    <main
      className="relative overflow-hidden pb-6 text-white"
      style={{
        backgroundColor: "#040117",
        backgroundSize: "cover",
        borderBottom: "4px solid #363445",
        backgroundImage: "url('/images/app_page_images/radial.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Main Content Section */}
      <div className="relative mx-auto px-8 py-0">
        <div className="flex flex-col items-start justify-between gap-8 rounded-xl p-8 lg:flex-row">
          {/* Left Column */}
          <motion.div
            initial={isDesktop ? { x: -300, opacity: 0 } : false}
            whileInView={isDesktop ? { x: 0, opacity: 1 } : false}
            transition={
              isDesktop ? { delay: 0.5, duration: 0.5, ease: "easeInOut" } : {}
            }
            viewport={isDesktop ? { once: false, amount: 0.2 } : {}}
            className="flex flex-col items-start justify-center space-y-6"
          >
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
              Results You Can Expect
            </h2>

            <ul className="text-md space-y-2 text-gray-300 md:text-[26px]">
              <li className="ct-r-li ">
                <span className="mr-2 text-cyan-500">•</span> Increased sales
                and revenue.
              </li>

              <li className="ct-r-li">
                <span
                style={{
                  backgroundImage:"url('/images/cro_page_images/icons/icon02.png')"
                }}
                 className="mr-2 text-cyan-500">•</span> Higher average
                order value.
              </li>

              <li className="ct-r-li">
                <span
                  style={{
                    backgroundImage:"url('/images/cro_page_images/icons/icon03.png')"
                  }}
                 className="mr-2 text-cyan-500">•</span> Improved customer
                satisfaction and retention.
              </li>

              <li className="ct-r-li">
                <span
                  style={{
                    backgroundImage:"url('/images/cro_page_images/icons/icon04.png')"
                  }}
                 className="mr-2 text-cyan-500">•</span> Lower cart
                abandonment rates.
              </li>

              <li className="ct-r-li">
                <span
                  style={{
                    backgroundImage:"url('/images/cro_page_images/icons/icon05.png')"
                  }}
                 className="mr-2 text-cyan-500">•</span> Scalable results
                for long-term growth.
              </li>
            </ul>
          </motion.div>

          {/* Right Column */}
          {/* <motion.div
              initial={isDesktop ? { scale: 0.1, opacity: 0 } : false}
              whileInView={isDesktop ? { scale: 1, opacity: 1 } : false}
              transition={
                isDesktop
                  ? { delay: 0.3, duration: 0.5, ease: 'easeInOut' }
                  : {}
              }
              viewport={isDesktop ? { once: false, amount: 0.2 } : {}}
              className="space-y-6 lg:w-[50%] transform transition-transform duration-700 ease-in-out hover:scale-105"
            >
              <Image
                src={'/images/cro_page_images/result.png'}
                alt={'image'}
                width={1500}
                height={1500}
              />
            </motion.div> */}
        </div>
      </div>

      {/* Purple Glow Effects */}
      <div className="absolute left-1/4 top-1/2 -z-10 h-96 w-96 rounded-full bg-purple-600/20 blur-[100px] filter" />
      <div className="absolute right-1/4 top-1/4 -z-10 h-96 w-96 rounded-full bg-pink-600/20 blur-[100px] filter" />
    </main>
  );
};

export default Results;
