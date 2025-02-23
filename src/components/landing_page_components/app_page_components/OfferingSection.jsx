import React from "react";
import "./Offerings.css";
import Image from "next/image";

const Offerings = () => {
  return (
    <div className="offerings translate-y-[11%] md:-translate-y-5 md:py-5">
      <div className="top flex flex-col gap-6">
        <h1 className="text-2xl md:text-5xl font-bold tracking-wide text-center w-full">Pulse Marketing Offerings</h1>
        <p className="poppins-light font-light text-[11px] md:text-[14px] text-center w-full md:w-[70%] md:mx-auto px-4 md:px-0">
          We are the most sought-after destination for iOS development services
          in Canada. At our native iOS app development company, we use advanced
          tools and the latest technologies to build highly functional
          applications for businesses worldwide. From Flutter app development to
          Swift app development, you name it, and we will deliver quality
          results. Contact our team of experts to learn more about each
          technology we use and understand which one will be best suited for
          your app development process.
        </p>
      </div>
      <div className="offering-cards md:mx-auto md:mt-8">
        <div className="offeringCard">
          <Image width={100} height={100} src="/images/app_page_images/flutter.png" alt="Flutter App Development" />
          <h3>Flutter App Development</h3>
          <div className="circle-anim"></div>
        </div>
        <div className="offeringCard">
          <Image width={100} height={100} src="/images/app_page_images/react.png" alt="React Native Development" />
          <h3>React Native Development</h3>
          <div className="circle-anim"></div>
        </div>
        <div className="offeringCard">
          <Image width={100} height={100} src="/images/app_page_images/native.png" alt="Native App Development" />
          <h3>Native App Development</h3>
          <div className="circle-anim"></div>
        </div>
        <div className="offeringCard">
          <Image width={100} height={100} src="/images/app_page_images/maintenance.png" alt="Maintenance Code Review" />
          <h3>Maintenance Code Review</h3>
          <div className="circle-anim"></div>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
