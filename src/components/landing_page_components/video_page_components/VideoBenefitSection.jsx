"use client";
// import { Reveal } from '@/utils/Reveal';
import Image from "next/image";
import { motion } from "motion/react";

export default function VideoBenefitSection() {
  return (
    <section
      className="px-6 pb-16  text-white md:mx-auto md:w-[1200px] md:px-0"
      style={{
        backgroundImage: "url('/images/app_page_images/radial.png)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="item-center grid grid-cols-1 gap-8 md:container md:mx-auto md:grid-cols-3">
        {/* Left Content */}
        <motion.div
          initial={{
            y: -300,
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
        >
          <h2 className="mb-6 text-3xl font-medium leading-tight md:text-4xl">
            Animated Explainer <br />
            Video Benefits
          </h2>

          <div className="transform transition-transform duration-700 ease-in-out hover:scale-105">
            <Image
              className="rounded-lg shadow-lg"
              src={"/images/video_page_images/benefit-img (1).png"}
              width={500}
              height={500}
            />
          </div>
        </motion.div>

        <div className="translate-y-[25%] text-[16px] text-white">
          <p className="mb-6">
            Animated explainer videos are a powerful tool for simplifying
            complex ideas and conveying your message clearly. At Pulse, we
            create engaging, visually appealing videos that capture attention
            and enhance understanding. These videos effectively explain
            products, services, or concepts in a concise and memorable way. They
            increase engagement, improve conversion rates, and boost brand
            awareness. Animated explainer videos help you connect with your
            audience, build trust, and drive action, all while standing out in a
            competitive digital landscape.
          </p>
        </div>
        {/* Right Content - Image */}
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
          className="relative mt-32 flex items-center justify-center md:mt-0"
        >
          <div className="relative h-72 w-full transform overflow-hidden rounded-lg shadow-lg transition-transform duration-700 ease-in-out hover:scale-105 md:h-96">
            <Image
              src={"/images/video_page_images/benefit-img (2).png"}
              alt="Video Editing Setup"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
