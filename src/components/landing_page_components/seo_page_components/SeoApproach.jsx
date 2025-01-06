"use client";
import { Reveal } from "@/utils/Reveal";
import Image from "next/image";
import React from "react";

const SeoApproach = () => {
  return (
    <React.Fragment>
      <main className="relative w-full pb-32 md:-mt-[100px] md:pb-0">
        <div
          style={{
            backgroundImage: "url('/images/services_page_images/circle.png/')",
            backgroundSize: "cover",
            transform: "translateY(-50%)",
          }}
          className="h-[50vh] md:h-[42rem]"
        />
        <div
          className="absolute top-0 z-10 flex w-full flex-col items-center justify-center md:top-15 "
          style={{
            backgroundImage: "url('/images/app_page_images/radial.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="z-10  text-center">
            <Reveal>
              <h1 className="text-xl font-bold tracking-wide md:text-5xl">
                Our Approach to SEO
              </h1>
            </Reveal>
          </div>

          {/* inner content  */}
          <div className="mt-6 flex-col overflow-hidden px-6 md:mx-auto  md:mt-10 md:flex  md:w-[1200px] md:justify-between md:px-0 lg:flex-row">
            {/* left box  */}
            <div className=" flex w-full md:w-[55%] md:flex-col">
              <div className="relative mb-16 h-[200px] w-full transform transition-transform duration-700 ease-in-out hover:scale-105 md:mb-0 md:h-[360px]">
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={"/images/seo_page_images/second-banner.png"}
                  className="mt-5 rounded-2xl"
                />
              </div>

              <div className="cards-seo mt-8 hidden gap-3 md:mt-12 md:flex">
                <div className="flex w-[33%] items-center justify-around gap-2 border-r border-gray-2 pr-3">
                  <div>
                    <Image
                      width={30}
                      height={30}
                      src={"/images/seo_page_images/100.png"}
                    />
                  </div>

                  {/* card heading  */}
                  <Reveal>
                    <div>
                      <h2 className="text-4xl font-bold tracking-wide">100%</h2>
                      <p>
                        Total Visitors
                        <br />
                        Per Month
                      </p>
                    </div>
                  </Reveal>
                </div>

                <div className="flex w-[33%] items-center justify-around gap-2 border-r border-gray-2 pr-3">
                  <div>
                    <Image
                      width={20}
                      height={20}
                      src={"/images/seo_page_images/50.png"}
                    />
                  </div>

                  {/* card heading  */}
                  <Reveal>
                    <div>
                      <h2 className="text-4xl font-bold tracking-wide">50%</h2>
                      <p>
                        Traffic <br />
                        Increased
                      </p>
                    </div>
                  </Reveal>
                </div>

                <div className="flex w-[33%] items-center justify-around gap-2 pr-3">
                  <div>
                    <Image
                      width={30}
                      height={30}
                      src={"/images/seo_page_images/100.png"}
                    />
                  </div>

                  {/* card heading  */}
                  <Reveal>
                    <div>
                      <h2 className="text-4xl font-bold tracking-wide">100%</h2>
                      <p>
                        Leads Per <br />
                        Month
                      </p>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>

            {/* right box  */}
            <div
              className="md: flex w-full flex-col gap-4 md:w-[40%] md:mt-8"
              style={{
                backgroundImage: "url('/images/app_page_images/radial.png)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Reveal>
                <h4 className="text-center text-xl font-bold tracking-wide md:text-3xl">
                  Train Me Consultation
                </h4>
              </Reveal>
              <Reveal>
                <p>
                  Unlock the full potential of your online presence with Pulse
                  Marketing is expert SEO services. Our dedicated team crafts
                  personalized strategies to improve your search engine
                  rankings, drive organic traffic, and enhance your digital
                  visibility. From advanced keyword research to cutting-edge
                  optimization techniques, we provide comprehensive solutions
                  tailored to your business needs. <br/>
                  <p className="mt-4">
                  Partner with us to stay ahead in the competitive digital
                  landscape and achieve measurable results. Elevate your brand
                  today with Pulse Marketing! .
                  </p>
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default SeoApproach;
