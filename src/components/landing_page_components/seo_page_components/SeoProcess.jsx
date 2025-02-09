import Image from "next/image";
import React from "react";

const SeoProcess = () => {
  return (
    <main className="mt-10">
      <div>
        <h1 className="mb-3 text-center text-xl font-bold tracking-wide md:text-5xl">
          <span className="block md:inline">The Pulse SEO Process:</span>
          <span className="block md:inline">How We Work</span>
        </h1>
      </div>
      <div className="mx-10 mt-10 md:mt-18 flex items-center justify-center">
        <img
          src="/images/seo_page_images/seo-workpic.png"
          alt=""
          className="w-full md:w-[60%] lg:w-[65%] xl:w-[65%]"
        />
      </div>
      <div className="items-center justify-center hidden md:flex md:flex-row mt-6">
        <p className="mb-10 text-center text-[14px] md:font-semibold md:mb-0 md:mr-40 md:text-2xl">
          Strategy Development Tailored <br /> to Your Business
        </p>
        <p className="text-center text-4xl font-semibold md:ml-50 md:text-2xl">
          Content Creation & <br /> Link Building
        </p>
      </div>
    </main>
  );
};

export default SeoProcess;
