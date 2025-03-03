"use client";
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
        className="h-[36vh] md:h-[35rem]"
      />
      <div className="absolute top-0 z-10 flex w-full flex-col items-center justify-center md:top-26 ">
        <div className="z-10 text-center md:mt-8">
          <h2 className="pb-2 text-xl font-bold tracking-wide md:text-4xl">
            Privacy Policy.
          </h2>
        </div>
        <div
          style={{
            backgroundImage: "url('/images/app_page_images/radial.png)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          className="mx-auto mt-4 flex w-full flex-col items-center justify-center gap-3 px-6 text-center md:mt-8 md:w-[70%] md:px-8"
        >
          <p>
            This Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your information when You use the
            Service and tells You about Your privacy rights and how the law
            protects you.
          </p>

          <p>
            We use Your Personal data to provide and improve the Service. By
            using the Service, You agree to the collection and use of
            information in accordance with this Privacy Policy.
          </p>

          <p>
            The words of which the initial letter is capitalized have meanings
            deﬁned under the following conditions. The following deﬁnitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </p>
        </div>

        <div className="z-10 flex flex-col items-center justify-center text-center md:mt-8 ">
          <h2 className="pb-2 text-xl font-bold tracking-wide md:text-4xl">
            Deﬁnitions
          </h2>

          <p className="mt-3">For the purposes of this Privacy Policy:</p>
          <p className="mt-3">
            Account means a unique account created for You to access our Service
            or parts of our service.
          </p>

          {/* <p className="mt-3">Company (referred to as either the Company, We;, Us; or Our; in this Agreement) refers to Pulse Marketing Inc., 595 Burrard Street, Vancouver, BC V7X 1L4, Canada.</p> */}

          {/* <p className="mt-3">Country refers to: British Columbia, Canada.</p> */}
        </div>
      </div>
    </main>
  );
};

export default Privacy;
