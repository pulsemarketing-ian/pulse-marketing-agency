"use client";
// import { Reveal } from '@/utils/Reveal'
import React from "react";
import { motion } from "motion/react";

const BusinessGoals = () => {
  return (
    <main
      className="mt-[100px] w-full px-6 py-16 md:mx-auto md:mt-0 md:w-[1200px] md:px-0"
      style={{
        backgroundImage: "url('/images/app_page_images/radial.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto flex w-full items-center justify-center text-center">
        <h2 className="mb-3 mt-40 text-center text-xl font-bold tracking-wide md:text-5xl">
          What We Offer: SEO Services That Deliver
        </h2>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 px-4 md:gap-0 md:px-0">
        {/* First row */}
        <div className="flex w-full flex-wrap justify-between gap-6">
          {/* card one  */}
          <div className="border-1 flex min-h-[50px] w-full flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md md:min-h-[240px] md:w-[32%]">
            <h4>01</h4>
            <h3 className="text-xl font-bold tracking-wide">
              Business Assessment
            </h3>
            <p className="text-sm">
              At Pulse, we conduct a thorough business assessment to understand
              your goals, audience, and competition. This allows us to create a
              tailored SEO plan that boosts your online visibility and drives
              growth.
            </p>
          </div>

          {/* card two  */}
          <div className="border-1 flex min-h-[50px] w-full flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md md:min-h-[240px] md:w-[32%]">
            <h4>02</h4>
            <h3 className="text-xl font-bold tracking-wide">Target Customer</h3>
            <p className="text-sm">
              At Pulse, we analyze your target customers behavior, demographics,
              and preferences to craft a tailored SEO strategy. This ensures
              your website reaches the right audience, driving conversions and
              business growth.
            </p>
          </div>

          {/* card three  */}
          <div className="border-1 flex min-h-[50px] w-full flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md md:min-h-[240px] md:w-[32%]">
            <h4>03</h4>
            <h3 className="text-xl font-bold tracking-wide">
              Competitor Analysis
            </h3>
            <p className="text-sm">
              At Pulse, we conduct a thorough competitor analysis to understand
              your market landscape. By identifying your competitors strengths
              and weaknesses, we create an SEO strategy that gives you a
              competitive edge and drives better results.
            </p>
          </div>
        </div>

        {/* Space between rows */}
        {/* <div className='h-8'></div> */}

        {/* Second row */}
        <div className="md:mt-5 mt-3 flex w-full flex-wrap justify-between gap-6 md:gap-3">
          {/* card four */}
          <div className="border-1 flex min-h-[50px] w-full flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md md:min-h-[240px] md:w-[23%]">
            <h4>04</h4>
            <h3 className="text-xl font-bold tracking-wide">
              Content Strategy
            </h3>
            <p className="text-sm">
              We develop a strong content strategy that aligns with your
              business goals and engages your audience effectively.
            </p>
          </div>

          {/* card five */}
          <div className="border-1 flex min-h-[50px] w-full flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md md:min-h-[240px] md:w-[23%]">
            <h4>05</h4>
            <h3 className="text-xl font-bold tracking-wide">
              On-Page Optimization
            </h3>
            <p className="text-sm">
              Our on-page SEO techniques improve website structure, content
              relevance, and user experience.
            </p>
          </div>

          {/* card six */}
          <div className="border-1 flex min-h-[50px] w-full flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md md:min-h-[240px] md:w-[23%]">
            <h4>06</h4>
            <h3 className="text-xl font-bold tracking-wide">
              Performance Tracking
            </h3>
            <p className="text-sm">
              We track SEO performance with analytics and reporting to ensure
              continuous improvement.
            </p>
          </div>

          <div className="border-1 flex min-h-[50px] w-full flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md md:min-h-[240px] md:w-[23%]">
            <h4>07</h4>
            <h3 className="text-xl font-bold tracking-wide">
              SEO Consultation
            </h3>
            <p className="text-sm">
              Get expert SEO consultation to develop a roadmap for your business
              success online.
            </p>
          </div>
        </div>

        {/* Space between rows */}
        {/* <div className='h-8'></div> */}

        {/* Third row (Single Centered Card) */}
        {/* <div className="mt-3 flex w-full justify-center"> */}
          {/* <div className="border-1 flex min-h-[50px] w-full flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md md:min-h-[240px] md:w-[28%]">
            <h4>07</h4>
            <h3 className="text-xl font-bold tracking-wide">
              SEO Consultation
            </h3>
            <p className="text-sm">
              Get expert SEO consultation to develop a roadmap for your business
              success online.
            </p>
          </div> */}
        {/* </div> */}
      </div>
    </main>
  );
};

export default BusinessGoals;
