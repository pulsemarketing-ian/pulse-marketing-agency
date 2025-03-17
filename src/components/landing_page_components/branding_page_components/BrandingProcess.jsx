"use client";
// import { Reveal } from '@/utils/Reveal'
import React from "react";
import { motion } from "motion/react";

const BrandingProcess = () => {
  return (
    <main
      className="-mt-40 w-full px-6 py-16 md:mx-auto md:mt-0 md:w-[1200px] md:px-0"
      style={{
        backgroundImage: "url('/images/app_page_images/radial.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto flex-col flex w-full items-center justify-center text-center">
        <h2 className="mb-3 mt-40 text-center text-xl font-bold tracking-wide md:text-5xl">
          Our Branding Process
        </h2>
        <p>At Pulse Marketing, we create impactful branding that strengthens your business identity and drives growth.
           Our streamlined process ensures a smooth transition from concept to launch.
           </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 px-4 md:gap-0 md:px-0">
        {/* First row */}
        <div className="flex w-full flex-wrap justify-between gap-6">
          {/* card one  */}
          <div className="border-1 flex min-h-[50px] w-full flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md md:min-h-[240px] md:w-[32%]">
            <h4>01</h4>
            <h3 className="text-xl font-bold tracking-wide">
            Consultation & Discovery
            </h3>
            <p className="text-sm">
            We start by understanding your business, target audience, 
            and market positioning. This includes a brand audit (if applicable)
            to assess your current strengths and areas for improvement.
            </p>
          </div>

          {/* card two  */}
          <div className="border-1 flex min-h-[50px] w-full flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md md:min-h-[240px] md:w-[32%]">
            <h4>02</h4>
            <h3 className="text-xl font-bold tracking-wide">Research & Strategy Development</h3>
            <p className="text-sm">
            We conduct market research to identify trends, customer preferences,
            and competitors. From there, we develop
            a brand strategy that defines your voice, personality, and positioning.
            </p>
          </div>

          {/* card three  */}
          <div className="border-1 flex min-h-[50px] w-full flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md md:min-h-[240px] md:w-[32%]">
            <h4>03</h4>
            <h3 className="text-xl font-bold tracking-wide">
              Visual Identity Design
            </h3>
            <p className="text-sm">
            Our team creates a logo, color palette, typography, and brand style
            guide tailored to your business. We present mood boards and concepts
            for feedback and refine them until they align with your vision
            </p>
          </div>
        </div>

        {/* Space between rows */}
        {/* <div className='h-8'></div> */}

        {/* Second row */}
        <div className="md:mt-5 mt-3 flex w-full flex-wrap justify-between gap-6 md:gap-2">
          {/* card four */}
          <div className="border-1 flex min-h-[50px] w-full flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md md:min-h-[240px] md:w-[24%]">
            <h4>04</h4>
            <h3 className="text-xl font-bold tracking-wide">
            Brand Collateral Development
            </h3>
            <p className="text-sm">
            We design essential brand assets such as:
            <ul>
              <li>Business cards, brochures, and stationery</li>
              <li>Social media templates and graphics</li>
              <li>Packaging, signage, and promotional materials</li>
              <li>Website branding elements</li>
            </ul>
            </p>
          </div>

          {/* card five */}
          <div className="border-1 flex min-h-[50px] w-full flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md md:min-h-[240px] md:w-[23%]">
            <h4>05</h4>
            <h3 className="text-xl font-bold tracking-wide">
            Brand Guidelines & Implementation
            </h3>
            <p className="text-sm md:leading-snug">
            A brand guide is created to ensure consistency across all platforms.
             It includes logo usage, typography,
             brand voice, and color schemes for marketing and advertising.
            </p>
          </div>

          {/* card six */}
          <div className="border-1 flex min-h-[50px] w-full flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md md:min-h-[240px] md:w-[23%]">
            <h4>06</h4>
            <h3 className="text-xl font-bold tracking-wide">
            Brand Launch & Delivery
            </h3>
            <p className="text-sm">
            Final assets are delivered in multiple formats,
            and we provide rollout support to 
            help integrate your new brand across all channels. 
            Marketing strategy integration is available to amplify your brand’s reach.
            </p>
          </div>

          <div className="border-1 flex min-h-[50px] w-full flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md md:min-h-[240px] md:w-[23%]">
            <h4>07</h4>
            <h3 className="text-xl font-bold tracking-wide">
              Ongoing Support
            </h3>
            <p className="text-sm md:leading-snug">
             We offer ongoing branding support as your business evolves. 
             Whether you need new materials,
             social media templates, or website updates, we’re here to help.
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
      <div className="mt-5 flex w-full items-center justify-center text-center">
        <h2 className="md:text-xl text-sm"><strong>Ready to build a brand that stands out?</strong> Contact us to get started.</h2>
      </div>
    </main>
  );
};

export default BrandingProcess;
