import React from "react";

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
    </main>
  );
};

export default HeroSection;
