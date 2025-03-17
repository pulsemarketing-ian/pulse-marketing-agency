"use client";
import React from "react";
import Image from "next/image";
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
// import { Reveal } from "@/utils/Reveal";
import { motion } from "motion/react";
import Link from "next/link";

const ImagesWorkSection = () => {
  return (
    <main className="mx-auto mb-10 mt-[400px] px-4 md:mb-0 md:mt-0 md:px-0 lg:mt-50 xl:mt-0">
      <div className="mx-auto mt-6 flex w-full flex-col items-center justify-between overflow-hidden md:w-[90%] md:flex-row lg:w-[1200px]">
        {/* Left Box */}
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.1,
            duration: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: false, amount: 0.2 }}
          className="animate-left mb-8 flex w-full flex-col gap-3 md:mb-0 md:w-[48%]"
        >
          <div className="relative h-[200px] w-full transform transition-transform duration-700 ease-in-out hover:scale-105 md:h-[400px]">
            <Link href={"/www.google.com"}>
              <Image
                src={"/images/our-work_page_images/img (2).png"}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
                alt="Project Image"
              />
            </Link>
          </div>

          <h4 className="text-xl font-semibold tracking-wide">Project Name</h4>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-4">
              {["Design", "Development", "SEO"].map((tag, index) => (
                <div
                  key={index}
                  className="mb-2 flex w-auto items-center gap-1"
                >
                  <Image
                    src="/images/services_page_images/blue-dot.png"
                    alt="blue-dot"
                    width={20}
                    height={20}
                  />
                  <p>{tag}</p>
                </div>
              ))}
            </div>
            <PrimaryBtn
              text="View Site"
              onClick={() => {
                window.open("https://www.google.com/", "_blank");
              }}
            />
          </div>
        </motion.div>

        {/* Right Box */}
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.1,
            duration: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: false, amount: 0.2 }}
          className="animate-right flex w-full flex-col gap-4 md:mt-20 md:w-[49%]"
        >
          <div className="relative h-[200px] w-full transform transition-transform duration-700 ease-in-out hover:scale-105 md:h-[400px]">
            <Link href={"/www.google.com"}>
              <Image
                src={"/images/our-work_page_images/img (4).png"}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
                alt="Project Image"
              />
            </Link>
          </div>

          <h4 className="text-xl font-semibold tracking-wide">Project Name</h4>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-4">
              {["Design", "Development", "SEO"].map((tag, index) => (
                <div
                  key={index}
                  className="mb-2 flex w-auto items-center gap-1"
                >
                  <Image
                    src="/images/services_page_images/blue-dot.png"
                    alt="blue-dot"
                    width={20}
                    height={20}
                  />
                  <p>{tag}</p>
                </div>
              ))}
             
              <PrimaryBtn
                text="View Site"
                onClick={() => {
                  window.open("https://www.google.com/", "_blank");
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto  flex w-full flex-col items-center justify-between overflow-hidden md:w-[90%] md:flex-row lg:w-[1200px]">
        {/* Left Box */}
        <motion.div
          initial={{
            y: 200,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.1,
            duration: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: false, amount: 0.2 }}
          className="animate-left mb-8 flex w-full flex-col gap-3 md:mb-0 md:w-[48%]"
        >
          <div className="relative h-[200px] w-full transform transition-transform duration-700 ease-in-out hover:scale-105 md:h-[400px]">
            <Link href={"/www.google.com"}>
              <Image
                src={"/images/our-work_page_images/img (2).png"}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
                alt="Project Image"
              />
            </Link>
          </div>

          <h4 className="text-xl font-semibold tracking-wide">Project Name</h4>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-4">
              {["Design", "Development", "SEO"].map((tag, index) => (
                <div
                  key={index}
                  className="mb-2 flex w-auto items-center gap-1"
                >
                  <Image
                    src="/images/services_page_images/blue-dot.png"
                    alt="blue-dot"
                    width={20}
                    height={20}
                  />
                  <p>{tag}</p>
                </div>
              ))}
            </div>
            <PrimaryBtn
              text="View Site"
              onClick={() => {
                window.open("https://www.google.com/", "_blank");
              }}
            />
          </div>
        </motion.div>

        {/* Right Box */}
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.1,
            duration: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: false, amount: 0.2 }}
          className="animate-right flex w-full flex-col gap-4 md:mt-20 md:w-[49%]"
        >
          <div className="relative h-[200px] w-full transform transition-transform duration-700 ease-in-out hover:scale-105 md:h-[400px]">
            <Link href={"/www.google.com"}>
              <Image
                src={"/images/our-work_page_images/img (4).png"}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
                alt="Project Image"
              />
            </Link>
          </div>

          <h4 className="text-xl font-semibold tracking-wide">Project Name</h4>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-4">
              {["Design", "Development", "SEO"].map((tag, index) => (
                <div
                  key={index}
                  className="mb-2 flex w-auto items-center gap-1"
                >
                  <Image
                    src="/images/services_page_images/blue-dot.png"
                    alt="blue-dot"
                    width={20}
                    height={20}
                  />
                  <p>{tag}</p>
                </div>
              ))}
              <PrimaryBtn
                text="View Site"
                onClick={() => {
                  window.open("https://www.google.com/", "_blank");
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default ImagesWorkSection;
