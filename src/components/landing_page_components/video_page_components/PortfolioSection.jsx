import React from "react";
import Slider from './Slider'
const PortfolioSection = () => {

  return (
    <React.Fragment>
      <main className="relative w-full">
        <div
          style={{
            backgroundImage: "url('/images/services_page_images/circle.png/')",
            backgroundSize: "cover",
            // height: "80vh",
            transform: "translateY(-50%)",
          }}
          className="h-[60vh] md:h-[80vh]"
        />
        <div className="absolute top-0 md:top-5 z-10 flex w-full flex-col items-center justify-center " >
          <div className="z-10 mt-8 text-center">
            <h1 className="text-5xl font-bold tracking-wide">Our Portfolio</h1>
          </div>

          <div
            style={{
              backgroundImage:"url('/images/app_page_images/radial.png)",
              backgroundSize:'cover',
            }}
            className="mt-3 min-h-[200px] md:min-h-[180px] w-full md:w-full md:mx-auto md:translate-y-10 md:py-6"
            >
            <Slider/>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default PortfolioSection;
