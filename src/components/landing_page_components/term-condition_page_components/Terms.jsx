"use client";
// import { Reveal } from "@/utils/Reveal";
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
        className="h-[36vh] md:-mt-[150px] md:h-[30rem] lg:-mt-[100px] xl:h-[32rem]"
      />
      <div className="absolute top-0 z-10 flex w-full flex-col items-center justify-center md:top-26 xl:py-20">
        <div className="z-10 text-center">
          <h2 className="text-xl font-bold tracking-wide md:text-4xl">
            Interpretation
          </h2>
        </div>

        <div
          style={{
            backgroundImage: "url('/images/app_page_images/radial.png)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          className="mx-auto mt-4 flex flex-col items-center justify-center gap-3 px-6 text-center md:w-[70%] md:px-0"
        >
          <p className="pl-15 pr-15">
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </p>

          <div className="z-10 mt-8 flex-col items-center justify-center text-center">
            {/* <Reveal> */}
            <h2 className="text-center text-xl font-bold tracking-wide md:text-4xl">
              Deﬁnitions
            </h2>
            {/* </Reveal> */}

            <p className="mt-3">
              For the purposes of these Terms and Conditions: Affiliate means an
              entity that controls, is controlled by or is under common control
              with a party, where control; means ownership of 50% or more of the
              shares, equity interest or other securities entitled to vote for
              election of directors or other managing authority.
            </p>

            <p className="mt-3">
              Country refers to: British Columbia, Canada Company referred to as
              either the Company, We, Us or Our; in this Agreements refers to
              Pulse Marketing Inc., 595 Burrard Street, Vancouver, BC V7X 1L4,
              Canada.
            </p>

            <p className="mt-3">
              Device means any device that can access the Service such as a
              computer, a cellphone or a digital tablet.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Terms;
