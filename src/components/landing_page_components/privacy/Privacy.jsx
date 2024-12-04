'use client';
import { Reveal } from "@/utils/Reveal";
import React from "react";

const Privacy = () => {
  return (
      <main className="relative w-full">
        <div
          style={{
            backgroundImage: "url('/images/services_page_images/circle.png/')",
            backgroundSize: "cover",
            transform: "translateY(-50%)",
          }}
          className="h-[36vh] md:h-[62vh]"
        />
        <div className="absolute top-0 md:top-26 z-10 flex w-full flex-col items-center justify-center ">
          <div className="z-10 md:mt-8 text-center">
            <Reveal>
                <h2 className="text-xl md:text-4xl font-bold tracking-wide">Because Your Privacy <br/>Is Important To Us.</h2>
            </Reveal>
          </div>

          <div
            style={{
              backgroundImage:"url('/images/app_page_images/radial.png)",
              backgroundSize:'contain',
              backgroundRepeat:'no-repeat'
            }}
            className="mt-4 flex flex-col gap-3 items-center justify-center text-center w-full md:w-[70%] mx-auto px-6 md:px-0 md:mt-8"
          >
            <Reveal>
                <p>We value your trust and are committed to protecting your personal information. When you engage with our services—be it logo design, digital marketing, web development, or any other offering—we collect only the necessary data to deliver a seamless experience. This includes your name, contact information, and project details.</p>

            </Reveal>
                <p>Your data is never shared with unauthorized third parties. Any third-party tools we use, such as analytics or payment gateways, are secure and comply with industry standards.
                If you have any questions or wish to update or delete your information, you can contact us at [your contact     email].</p>
            <Reveal>
            </Reveal>
          </div>
        </div>
      </main>
  );
};

export default Privacy;
