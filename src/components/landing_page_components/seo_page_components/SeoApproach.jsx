"use client";
// import { Reveal } from "@/utils/Reveal";
import Image from "next/image";
import React from "react";

const SeoApproach = () => {
  return (
    <React.Fragment>
      <main className="relative w-full z-20 pb-32 md:-mt-[100px] md:pb-0">
        <div
          style={{
            backgroundImage: "url('/images/services_page_images/circle.png/')",
            backgroundSize: "cover",
            transform: "translateY(-50%)",
          }}
          className="h-[50vh] md:h-[42rem]"
        />
        <div
          className="absolute top-0 z-20 flex w-full flex-col items-center justify-center md:top-15 "
          style={{
            backgroundImage: "url('/images/app_page_images/radial.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="z-20 -mt-[65px] px-4 text-center md:mt-0 md:px-0">
            {/* <p className="pt-20">
              Let rebuild the SEO with improvements easier to understand and
              better layout of <br />
              workflow of process here is some details to start with that:
            </p> */}
            <h1 className="pt-14 text-xl font-bold tracking-wide md:text-5xl">
              Why SEO Matters for Your Business
            </h1>
          </div>

          {/* inner content  */}
          <div className="mt-6 flex-col overflow-hidden px-6 md:mx-auto  md:mt-16 md:flex  md:w-[1200px] md:justify-between md:px-0 lg:flex-row">
            {/* left box  */}
            <div className=" flex w-full md:w-[55%] md:flex-col">
              <div className=" relative mb-25 h-[200px] w-full transform transition-transform duration-700 ease-in-out hover:scale-105 md:mb-0 md:h-[360px]">
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={"/images/seo_page_images/second-banner.png"}
                  className="mt-5 rounded-2xl"
                />
              </div>

              <div className="cards-seo mt-8 hidden gap-3 md:mt-28 md:flex ">
                <div className="flex w-[33%] items-center justify-around gap-2 border-r border-gray-2 pr-3 ">
                  <div>
                    <Image
                      width={30}
                      height={30}
                      src={"/images/seo_page_images/100.png"}
                    />
                  </div>

                  {/* card heading  */}

                  <div>
                    <h2 className="text-4xl font-bold tracking-wide">+126%</h2>
                    <p>
                      Total Visitors
                      <br />
                      Per Month
                    </p>
                  </div>
                </div>

                <div className="flex w-[33%] items-center justify-around gap-2 border-r border-gray-2  pr-10">
                  <div>
                    <Image
                      width={25}
                      height={20}
                      src={"/images/seo_page_images/50.png"}
                    />
                  </div>

                  {/* card heading  */}

                  <div>
                    <h2 className="text-4xl font-bold tracking-wide">+43%</h2>
                    <p>
                      Traffic <br />
                      Increased
                    </p>
                  </div>
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

                  <div>
                    <h2 className="text-4xl font-bold tracking-wide">+220%</h2>
                    <p>
                      Leads Per <br />
                      Month
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* right box  */}
            <div
              className="md: flex w-full flex-col gap-4 md:mt-8 md:w-[40%]"
              style={{
                backgroundImage: "url('/images/app_page_images/radial.png)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h4 className=" text-xl font-bold tracking-wide md:text-3xl">
                Are you struggling to get your website noticed?
              </h4>

              <p>
                Do you want more traffic, leads, and sales without spending a
                fortune on ads? <br />
                Is your website buried deep in search results? <br />
                Wondering why your competitors are outranking you?
                <br />
                <p className="mt-4">
                  Partner with us to stay ahead in the competitive digital
                  landscape and achieve measurable results. Elevate your brand
                  today with Pulse Marketing!
                </p>
              </p>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default SeoApproach;
