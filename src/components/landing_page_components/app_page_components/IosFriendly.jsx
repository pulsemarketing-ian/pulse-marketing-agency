import Image from "next/image";
import React from "react";

const IosFriendly = () => {

    const data= [
        {
            image: "/images/app_page_images/ios (2).png",
            category:"APPLE WATCH"
        },
        {
            image: "/images/app_page_images/ios (3).png",
            category:"IPHONE"
        },
        {
            image: "/images/app_page_images/ios (4).png",
            category:"IPAD"
        },
        {
            image: "/images/app_page_images/ios (1).png",
            category:"INTERNET OF THINGS"
        },
    ];

  return (
    <main className="flex flex-col gap-5 py-20 translate-y-[10%] md:translate-y-0">
      <h1 className="w-full text-center text-2xl font-bold tracking-wide md:text-5xl">
        iOS-Friendly Devices
      </h1>

      <p className="poppins-light font-light text-[14px] w-full px-4 text-center text-xl md:mx-auto md:w-[70%] md:px-0">
        At Pulse Marketing, we build scalable, robust, and high-performance
        applications for various iOS devices, like iPhones, iPads, Apple
        Watches, and more. Our versatility and dynamic solutions have helped us
        build a strong reputation as the trusted name for Apple watch app
        development.
      </p>

      <div className="flex flex-col gap-5 md:flex-row md:justify-between md:w-[70%] md:mx-auto mt-14">
        {data.map((item) => (
        <div key={item} className="flex flex-col items-center gap-5 md:gap-2">
          <Image
            width={290}
            height={290}
            src={item?.image}
            alt="ios-friendly"
          />
          <h5 className="text-xl font-medium mt-2">{item?.category}</h5>
        </div> 
        ))}
      </div>
    </main>
  );
};

export default IosFriendly;
