import Image from "next/image";
import React from "react";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      image: "/images/app_page_images/slide1.png",
      alt: "Fitness app interface showing workout tracking features",
      className: "-rotate-12 translate-y-4",
    },
    {
      id: 2,
      image: "/images/app_page_images/slide2.png",
      alt: "Health tracking app showing daily statistics",
      className: "-rotate-6 translate-y-2",
    },
    {
      id: 3,
      image: "/images/app_page_images/slide3.png",
      alt: "Social media app dark theme interface",
      className: "rotate-3",
    },
    {
      id: 4,
      image: "/images/app_page_images/slide4.png",
      alt: "Property listing app showing modern interface",
      className: "rotate-12 translate-y-6",
    },
    {
      id: 5,
      image: "/images/app_page_images/slide5.png",
      alt: "Food delivery app showing restaurant listings",
      className: "rotate-[20deg] translate-y-4",
    },
  ];

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
            <h1 className="text-4xl font-bold tracking-wide">Our Portfolio</h1>
          </div>

          <div
            style={{
              backgroundImage:"url('/images/app_page_images/radial.png)",
              backgroundSize:'cover',
            }}
            className="mt-3 flex min-h-[300px] items-center justify-center overflow-hidden md:min-h-[350px]"
          >
            <div className="flex flex-nowrap items-center justify-center gap-4 px-4 md:gap-6 md:px-8">
              {portfolioItems.map((item) => (
                <div key={item.id} className={`w-[11rem]`}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    className="h-auto w-full rounded-2xl shadow-lg shadow-purple-500/20"
                    width={120}
                    height={120}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default PortfolioSection;
