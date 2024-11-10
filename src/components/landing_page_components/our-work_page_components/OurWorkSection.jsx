'use client';
import React from "react";
import Image from "next/image";
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
import { Reveal } from "@/utils/Reveal";

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
          className="absolute top-0 md:top-12 z-10 flex w-full flex-col items-center justify-center px-4 md:px-0"
          style={{
            backgroundImage: "url('/images/app_page_images/radial.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="z-10 text-center">
            <Reveal>
              <h1 className="text-xl md:text-4xl font-bold tracking-wide">
                Our Work Your Inspiration
              </h1>
            </Reveal>
          </div>

          {/* inner content  */}
          <div className="mx-auto mt-6 flex flex-col md:flex-row w-full md:w-[90%] lg:w-[1200px] items-center justify-between overflow-hidden md:mb-12">
            {/* left box  */}
            <div className="flex w-full md:w-[45%] flex-col gap-3 mb-8 md:mb-0">
            <div className="relative h-[200px] w-full transform transition-transform duration-700 ease-in-out hover:scale-105 md:h-[400px]">
            <Image
                  src={"/images/our-work_page_images/img (1).png"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                  alt="Project Image"
                />
              </div>
              <Reveal>
              <h4 className="text-xl font-semibold tracking-wide">
                Project Name
              </h4>
              </Reveal>
              <Reveal>

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
              </Reveal>

            </div>

            {/* right box */}
            <div className="flex w-full md:w-[45%] flex-col gap-4 md:mt-20">
            <div className="relative h-[200px] w-full transform transition-transform duration-700 ease-in-out hover:scale-105 md:h-[400px]">
            <Image
                  src={"/images/our-work_page_images/img (6).png"}
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
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default OurWorkSection;