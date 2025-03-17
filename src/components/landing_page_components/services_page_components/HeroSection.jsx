"use client";
import React from "react";
import Navbar from "@/components/landing_page_components/Navbar";
import Image from "next/image";
// import { Reveal } from '@/utils/Reveal'
const HeroSection = () => {
  return (
    <React.Fragment>
      <main
        style={{
          backgroundImage: "url('/images/services_page_images/hero-img.png')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
        className="ct-banner md:pb-[150px]"
      >
        <Navbar />
        <div className="relative flex h-[60vh] w-full flex-col items-center justify-center md:h-[76vh]">
          <div className=" item-center translate-y-[2rem] flex-col md:translate-y-[4rem]">
            {/* serive heading  */}
            <div className="-ml-[20px] mb-2 flex items-center justify-center gap-1 md:-ml-[45px]">
              <Image
                src="/images/services_page_images/blue-dot.png"
                alt="blue-dot"
                width={20}
                height={20}
              />
              <p>Services</p>
            </div>

            {/* heading main  */}

            <h2
              className="text-center text-3xl font-bold md:text-5xl"
              style={{ lineHeight: "1.2" }}
            >
              We Create Digital <br />
              Products That Grow <br /> Ambitious Brands.
            </h2>
          </div>

          {/* <div className='bg-my-blue-gradient rounded-full p-3 absolute bottom-6 right-6'>
                <Image
                src={'/images/services_page_images/inbox.png'}
                alt="inbox"
                width={15}
                height={15}
                />
            </div> */}
        </div>
      </main>
    </React.Fragment>
  );
};

export default HeroSection;
