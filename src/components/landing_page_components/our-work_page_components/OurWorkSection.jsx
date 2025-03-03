"use client";
import React from "react";
import Image from "next/image";
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
// import { Reveal } from "@/utils/Reveal";
import { motion } from "motion/react";
import Link from "next/link";

const OurWorkSection = () => {
  return (
    <React.Fragment>
      <main className="relative w-full">
        <div
          style={{
            backgroundImage: "url('/images/services_page_images/circle.png/')",
            backgroundSize: "cover",
            transform: "translateY(-50%)",
          }}
          className="h-[30vh] md:h-[95vh]"
        />
        <div
          className="absolute top-0 z-10 flex w-full flex-col items-center justify-center px-4 md:top-12 md:px-0"
          style={{
            backgroundImage: "url('/images/app_page_images/radial.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="z-10 text-center">
            <h1 className="text-xl font-bold tracking-wide md:text-4xl">
              Our Work Your Inspiration
            </h1>
          </div>

          {/* inner content  */}
          <div className="mx-auto mt-6 flex w-full flex-col items-center justify-between overflow-hidden md:mb-12 md:w-[90%] md:flex-row lg:w-[1200px]">
            {/* left box  */}
            <div
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
              className="mb-8 flex w-full flex-col gap-3 md:mb-0 md:w-[45%]"
            >
              <div className="relative h-[200px] w-full transform transition-transform duration-700 ease-in-out hover:scale-105 md:h-[400px]">
                <Link href={"/work-details"}>
                  <Image
                    src={"/images/our-work_page_images/img (1).png"}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                    alt="Project Image"
                  />
                </Link>
              </div>

              <h4 className="text-xl font-semibold tracking-wide">
                Project Name
              </h4>

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
                <PrimaryBtn text={"View Case Study"} />
              </div>
            </div>
            {/* <div className="flex w-full md:w-[45%] flex-col gap-3 mb-8 md:mb-0">
            <div className="relative h-[200px] w-full transform transition-transform duration-700 ease-in-out hover:scale-105 md:h-[400px]">
            <Image
                  src={"/images/our-work_page_images/img (1).png"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                  alt="Project Image"
                />
              </div>
              
              <h4 className="text-xl font-semibold tracking-wide">
                Project Name
              </h4>
              
              

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-4">
                  {["Design", "Development", "SEO"].map((tag, index) => (
                    <div key={index} className="flex items-center gap-1 mb-2 w-auto">
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
                <PrimaryBtn text={"View Case Study"} />
              </div>
              

            </div> */}

            {/* right box */}
            <div
              initial={{
                y: -400,
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
              className="flex w-full flex-col gap-4 md:mt-20 md:w-[45%]"
            >
              <div className="relative h-[200px] w-full transform transition-transform duration-700 ease-in-out hover:scale-105 md:h-[400px]">
                <Link href={"/work-details"}>
                  <Image
                    src={"/images/our-work_page_images/img (6).png"}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                    alt="Project Image"
                  />
                </Link>
              </div>
              <h4 className="text-xl font-semibold tracking-wide">
                Project Name
              </h4>
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
                <PrimaryBtn text={"View Case Study"} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default OurWorkSection;
