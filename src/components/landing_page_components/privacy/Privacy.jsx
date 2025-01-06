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
          className="h-[36vh] md:h-[35rem]"
        />
        <div className="absolute top-0 md:top-26 z-10 flex w-full flex-col items-center justify-center ">
          <div className="z-10 md:mt-8 text-center">
            <Reveal>
                <h2 className="text-xl md:text-4xl font-bold tracking-wide pb-2">Privacy Policy.</h2>
            </Reveal>
          </div>
          <div
            style={{
              backgroundImage:"url('/images/app_page_images/radial.png)",
              backgroundSize:'contain',
              backgroundRepeat:'no-repeat'
            }}
            className="mt-4 flex flex-col gap-3 items-center justify-center text-center w-full md:w-[70%] mx-auto px-6 md:px-8 md:mt-8"
          >
            <Reveal>
                <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects you.</p>

            </Reveal>
            <Reveal>
                <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>
            </Reveal>
            <Reveal>
                <p>The words of which the initial letter is capitalized have meanings deﬁned under the following conditions. The following deﬁnitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
            </Reveal>
          </div>

          <div className="z-10 md:mt-8 text-center flex flex-col items-center justify-center ">
            <Reveal>
                <h2 className="text-xl md:text-4xl font-bold tracking-wide pb-2">Deﬁnitions</h2>
            </Reveal>

            <Reveal>
                <p className="mt-3">For the purposes of this Privacy Policy:</p>
                <p className="mt-3">Account means a unique account created for You to access our Service or parts of our service.</p>

                {/* <p className="mt-3">Company (referred to as either the Company, We;, Us; or Our; in this Agreement) refers to Pulse Marketing Inc., 595 Burrard Street, Vancouver, BC V7X 1L4, Canada.</p> */}


                {/* <p className="mt-3">Country refers to: British Columbia, Canada.</p> */}
            </Reveal>
          </div>
        </div>

       
      </main>
  );
};

export default Privacy;
