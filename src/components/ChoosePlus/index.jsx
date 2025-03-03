import React from "react";
import Image from "next/image";
// import { Reveal } from "../../utils/Reveal";
import Slider from "react-slick";

export const ChooseCardsSlider = () => {
  const MySliderArr = [
    { image: "/17.png" },
    { image: "/1 (1).png" },
    { image: "/19.png" },
    { image: "/chose-plus (1).png" },
    { image: "/chose-plus (2).png" },
    { image: "/chose-pluse (1).png" },
    { image: "/chose-pluse (4).png" },
    { image: "/1 (11).png" },
    { image: "/11.png" },
    { image: "/1 (6).png" },
    { image: "/10.png" },
    { image: "/15.png" },
    { image: "/1 (13).png" },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="w-full overflow-hidden lg:mb-26 lg:mt-15">
      <Slider {...settings}>
        {MySliderArr.map((item, index) => (
          <div key={index} className="flex justify-between">
            <div className="mb-1 flex h-[10vh] w-[93%] items-center justify-center rounded-md bg-custom-gradient px-6 py-8 md:mb-0 md:w-[95%] lg:h-[20vh]">
              <Image
                src={item.image}
                alt={`Slide ${index + 1}`}
                width={170}
                height={170}
                className="filter-invert"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

function ChoosePlus() {
  return (
    <div
      style={{
        backgroundImage: "url('/images/app_page_images/radial.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <main className="ct-padding mx-auto w-full px-8 lg:w-[75%]">
        <div className="flex-row items-center justify-between pb-10 md:flex md:pb-12">
          <div className=" mt-10 w-[80%] md:mt-0 md:w-[50%]">
            <h1 className="poppins-medium ct-heading text-5xl">
              Why Leaders <br /> Choose Pulse
            </h1>
          </div>
          <div className="poppins-light mt-6 w-[90%] font-light md:mt-0 md:w-[35%]">
            <p>
              Pulse empowers business leaders to achieve their objectives more
              swiftly and effectively. Our primary focus is to enhance client
              revenue.
            </p>
          </div>
        </div>
      </main>

      <ChooseCardsSlider />

      {/* <BrandsSlider /> */}
      {/* <hr className="my-16" /> */}

      <main className="mx-auto w-full px-4 md:px-0  lg:w-[77%]">
        <div className="flex-row items-center justify-between pb-10 md:flex md:pb-12">
          <div className=" w-[80%] md:mt-0 mt-8 md:ml-0 ml-4 md:w-[50%]">
            <h1 className="poppins-medium ct-heading text-5xl">
              Sales-Driven <br /> Conversion-Optimized Platforms.
            </h1>
          </div>
          {/* <div className="poppins-light mt-6 w-[90%] font-light md:mt-0  md:w-[35%]">
            
              <p>
                Join us on a journey to create something truly extraordinary.
                Together, we&apos;ll turn your dreams into reality.
              </p>
            
          </div> */}
        </div>
      </main>
    </div>
  );
}

export default ChoosePlus;
