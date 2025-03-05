import React from "react";
import Link from "next/link";
import PrimaryBtn from "../landing_page_components/PrimaryBtns/PrimaryBtn";

const HeroSection = () => {
  return (
    <main
      style={{
        backgroundImage:
          "url('/images/cro_page_images/cro-banner-min (1).jpg')",
        backgroundSize: "cover",
      }}
      className="flex h-[80vh] flex-col items-center justify-center text-center md:h-[70vh]"
    >
      <div className="">
        <p>CRO Services</p>

        <h2 className="text-4xl font-bold leading-tight md:text-5xl">
          Conversion Rate <br /> Optimization
        </h2>
      </div>
      <div className="mt-4">
        <Link href={"/cro"}>
        <PrimaryBtn text="Learn More" />
        </Link>
      </div>
    </main>
  );
};

export default HeroSection;
