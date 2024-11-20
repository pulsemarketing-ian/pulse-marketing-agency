'use client'
import { Reveal } from "@/utils/Reveal";
import Image from "next/image";
import React from "react";

const SeoApproach = () => {

  return (
    <React.Fragment>
      <main className="relative w-full pb-32 md:pb-0">
        <div
          style={{
            backgroundImage: "url('/images/services_page_images/circle.png/')",
            backgroundSize: "cover",
            transform: "translateY(-50%)",
          }}
          className="h-[50vh] md:h-[95vh]"
        />
        <div className="absolute top-0 md:top-12 z-10 flex w-full flex-col items-center justify-center " 
         style={{
            backgroundImage:"url('/images/app_page_images/radial.png')",
            backgroundSize:'contain',
            backgroundRepeat:'no-repeat'
            }}>
          <div className="z-10 md:mt-8 text-center">
            <Reveal>
              <h1 className="text-xl md:text-4xl font-bold tracking-wide">Our Approach to SEO</h1>
            </Reveal>
          </div>

            {/* inner content  */}
          <div
            className="mt-6 flex-col md:flex lg:flex-row px-6 md:px-0  md:w-[1200px] md:mx-auto md:items-center md:justify-between overflow-hidden "
          >
                {/* left box  */}
                <div className=" w-full md:w-[55%] flex md:flex-col" >
                <div className="relative h-[200px] mb-16 md:mb-0 w-full transform transition-transform duration-700 ease-in-out hover:scale-105 md:h-[300px]">
                    <Image
                    layout="fill"
                    objectFit="cover"
                    src={'/images/seo_page_images/second-banner.png'}
                    className="mt-5 rounded-2xl"
                    />
                    </div>

                    <div className="cards-seo md:flex gap-3 mt-8 hidden md:mt-12">

                        <div className="w-[28%] border-r-2 pr-3 gap-2 flex justify-around items-center">
                            <div ><Image width={30} height={30} src={'/images/seo_page_images/100.png'}/></div>

                            {/* card heading  */}
                            <Reveal>
                            <div>
                                <h2 className="text-4xl font-bold tracking-wide">100%</h2>
                                <p>Total Visitors<br/>Per Month</p>
                            </div>
                            </Reveal>
                    </div>

                        <div className="w-[28%] border-r-2 pr-3 gap-2 flex justify-around items-center">
                            <div ><Image width={20} height={20} src={'/images/seo_page_images/50.png'}/></div>

                            {/* card heading  */}
                            <Reveal>
                            <div>
                                <h2 className="text-4xl font-bold tracking-wide">50%</h2>
                                <p>Traffic  <br/>Increased</p>
                            </div>
                            </Reveal>
                        </div>

                        <div className="w-[28%] border-r-2 pr-3 gap-2 flex justify-around items-center">
                            <div ><Image width={30} height={30} src={'/images/seo_page_images/100.png'}/></div>

                            {/* card heading  */}
                            <Reveal>
                            <div>
                                <h2 className="text-4xl font-bold tracking-wide">100%</h2>
                                <p>Leads Per  <br/>Month</p>
                            </div>
                            </Reveal>
                    </div>
                </div>
                </div>

                <div className="w-full md:w-[40%] flex flex-col gap-4" 
            style={{
              backgroundImage:"url('/images/app_page_images/radial.png)",
              backgroundSize:'contain',
              backgroundRepeat:'no-repeat'
            }}>
                          <Reveal>
                            <h4 className="text-xl text-center md:text-3xl font-bold tracking-wide">Train Me Consultino</h4>
                          </Reveal>
                          <Reveal>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                          </Reveal>
                          <Reveal>
                          <p>Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
                          </Reveal>
                </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default SeoApproach;
