import Image from "next/image";
import React from "react";

const SeoApproach = () => {
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
      <main className="relative w-full" style={{borderBottom:'4px solid #363445',}}>
        <div
          style={{
            backgroundImage: "url('/images/services_page_images/circle.png/')",
            backgroundSize: "cover",
            height: "95vh",
            transform: "translateY(-50%)",
          }}
        />
        <div className="absolute top-12 z-10 flex w-full flex-col items-center justify-center " 
         style={{
            backgroundImage:"url('/images/app_page_images/radial.png')",
            backgroundSize:'contain',
            backgroundRepeat:'no-repeat'
            }}>
          <div className="z-10 mt-8 text-center">
            <h1 className="text-4xl font-bold tracking-wide">Our Approach to SEO</h1>
          </div>

            {/* inner content  */}
          <div
            className="mt-6 flex  w-[1200px] mx-auto items-center justify-between overflow-hidden "
          >
                {/* left box  */}
                <div className="w-[55%] flex flex-col" >
                    <Image
                    width={555}
                    height={555}
                    src={'/images/seo_page_images/second-banner.png'}
                    className="mt-5 rounded-2xl"
                    />

                    <div className="cards-seo flex gap-3 mt-8">

                        <div className="w-[22%] border-r-2 pr-3 gap-2 flex justify-between items-center">
                            <div ><Image width={30} height={30} src={'/images/seo_page_images/100.png'}/></div>

                            {/* card heading  */}
                            <div>
                                <h2 className="text-4xl font-bold tracking-wide">100%</h2>
                                <p>Total Visitors<br/>Per Month</p>
                            </div>
                    </div>

                        <div className="w-[22%] border-r-2 pr-3 gap-2 flex justify-between items-center">
                            <div ><Image width={20} height={20} src={'/images/seo_page_images/50.png'}/></div>

                            {/* card heading  */}
                            <div>
                                <h2 className="text-4xl font-bold tracking-wide">50%</h2>
                                <p>Traffic  <br/>Increased</p>
                            </div>
                        </div>

                        <div className="w-[22%] border-r-2 pr-3 gap-2 flex justify-between items-center">
                            <div ><Image width={30} height={30} src={'/images/seo_page_images/100.png'}/></div>

                            {/* card heading  */}
                            <div>
                                <h2 className="text-4xl font-bold tracking-wide">100%</h2>
                                <p>Leads Per  <br/>Month</p>
                            </div>
                    </div>
                </div>
                </div>

                <div className="w-[40%] flex flex-col gap-4" 
            style={{
              backgroundImage:"url('/images/app_page_images/radial.png)",
              backgroundSize:'contain',
              backgroundRepeat:'no-repeat'
            }}>
                    <h4 className="text-3xl font-bold tracking-wide">Train Me Consultino</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    <p>Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
                </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default SeoApproach;
