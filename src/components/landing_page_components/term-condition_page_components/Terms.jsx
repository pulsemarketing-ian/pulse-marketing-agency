'use client';
import { Reveal } from "@/utils/Reveal";
import React from "react";

const Terms = () => {
  return (
      <main className="relative w-full">
        <div
          style={{
            backgroundImage: "url('/images/services_page_images/circle.png/')",
            backgroundSize: "cover",
            transform: "translateY(-50%)",
          }}
          className="h-[36vh] md:h-[30rem] xl:h-[32rem] md:-mt-[150px] lg:-mt-[100px]"
        />
        <div className="absolute top-0 md:top-26 z-10 flex w-full flex-col items-center justify-center xl:py-20">
          <div className="z-10 text-center">
            <Reveal>
                <h2 className="text-xl md:text-4xl font-bold tracking-wide">Interpretation</h2>
            </Reveal>
          </div>

          <div
            style={{
              backgroundImage:"url('/images/app_page_images/radial.png)",
              backgroundSize:'contain',
              backgroundRepeat:'no-repeat'
            }}
            className="mt-4 flex flex-col gap-3 items-center justify-center text-center md:w-[70%] mx-auto px-6 md:px-0"
          >
            <Reveal>
                <p className="pl-15 pr-15">The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
            </Reveal>

            <div className="z-10 mt-8 text-center flex-col items-center justify-center">
            {/* <Reveal> */}
                <h2 className="text-xl md:text-4xl font-bold tracking-wide text-center">Deﬁnitions</h2>
            {/* </Reveal> */}

            <Reveal>
                  <p className="mt-3">
                  For the purposes of these Terms and Conditions: Affiliate means an entity that controls, is controlled by or is under common control with a party, where control; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                  </p>
            </Reveal>
            <Reveal>
                  <p className="mt-3">
                  Country refers to: British Columbia, Canada Company referred to as either the Company, We, Us or Our; in this Agreements refers to Pulse Marketing Inc., 595 Burrard Street, Vancouver, BC V7X 1L4, Canada.
                  </p>
            </Reveal>
            <Reveal>
                  <p className="mt-3">
                  Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.
                  </p>
            </Reveal>

          </div>
            
          </div>
        </div>
      </main>
  );
};

export default Terms;
