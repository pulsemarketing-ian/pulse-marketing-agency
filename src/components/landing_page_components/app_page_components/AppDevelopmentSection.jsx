'use client';
import Image from "next/image";
import React from "react";
import ContentTab from "./ContentTab";
import { Reveal } from '@/utils/Reveal';
import { motion } from 'framer-motion';

const AppDevelopmentSection = () => {
  const [tabImage, setTabImage] = React.useState(0);
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;

  return (
    <main className="mt-50 md:mt-10 md:my-20">
      <div className="flex justify-center mt-3">
        <Reveal>
          <h1 className="text-2xl md:text-4xl font-bold tracking-wide text-center w-full">
            Leading the Way in Mobile <br /> App Development
          </h1>
        </Reveal>
      </div>

      <main className="w-full flex-col-reverse md:flex md:flex-row lg:flex justify-between lg:mt-10">
        {/* Left Box */}
        <motion.div
          initial={isDesktop ? { x: -300, opacity: 0 } : false}
          whileInView={isDesktop ? { x: 0, opacity: 1 } : false}
          transition={
            isDesktop
              ? { delay: 0.5, duration: 0.5, ease: "easeInOut" }
              : {}
          }
          viewport={isDesktop ? { once: false, amount: 0.2 } : {}}
          className="w-[90%] rounded-md p-5 md:p-0 mx-auto md:mx-0 md:w-[50%] flex items-center justify-center"
        >
          {tabImage === 0 && (
            <div className="transform transition-transform duration-700 ease-in-out hover:scale-105 rounded-2xl">
              <Image src={"/images/app_page_images/third-sec.png"} alt="mob1" width={600} height={600} />
            </div>
          )}
          {tabImage === 1 && (
            <div className="transform transition-transform duration-700 ease-in-out hover:scale-105 rounded-2xl">
              <Image src={"/images/app_page_images/app-hero.png"} alt="mob2" width={600} height={600} />
            </div>
          )}
          {tabImage === 2 && (
            <div className="transform transition-transform duration-700 ease-in-out hover:scale-105 rounded-2xl">
              <Image src={"/images/app_page_images/third-sec.png"} alt="mob3" width={600} height={600} />
            </div>
          )}
        </motion.div>

        {/* Right Box */}
        <motion.div
          initial={isDesktop ? { x: 300, opacity: 0 } : false}
          whileInView={isDesktop ? { x: 0, opacity: 1 } : false}
          transition={
            isDesktop
              ? { delay: 0.5, duration: 0.5, ease: "easeInOut" }
              : {}
          }
          viewport={isDesktop ? { once: false, amount: 0.2 } : {}}
          className="w-[100%] px-6 md:px-0 md:w-[55%] flex flex-col md:flex-row justify-between relative ct-projects"
        >
          {/* Tab Section */}
          <div className="w-[100%] md:w-[100%]">
            <ContentTab tabImage={tabImage} setTabImage={setTabImage} />
          </div>
        </motion.div>
      </main>
    </main>
  );
};

export default AppDevelopmentSection;
