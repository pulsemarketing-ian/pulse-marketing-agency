'use client';
import Image from "next/image";
import React from "react";
import ContentTab from "./ContentTab";
import {Reveal} from '@/utils/Reveal';
import {motion} from 'motion/react';

const AppDevelopmentSection = () => {
  const [tabImage, setTabImage] = React.useState(0);

  return (
    <main className="mt-30 md:mt-10 md:my-20">
         <div className="flex justify-center mt-3">
        <Reveal>
          <h1 className="text-2xl md:text-4xl font-bold tracking-wide text-center w-full">
            Leading the Way in Mobile <br/> App Development
          </h1>
        </Reveal>
      </div>
      
      <main className="w-full flex-col-reverse md:flex md:flex-row lg:flex justify-between ">
        {/* project section left box  */}
        <motion.div 
                  initial={{
                    x: -300,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.5,
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }} className="w-[90%] rounded-md p-5 md:p-0 mx-auto md:mx-0 md:w-[50%] flex items-center justify-center ">
          {tabImage === 0 && (
            <div className="transform transition-transform duration-700 ease-in-out hover:scale-105">
            <Image src={"/images/app_page_images/third-sec.png"} alt="mob1" width={500} height={500} />
            </div>
          )}
          {tabImage === 1 && (
              <div className="transform transition-transform duration-700 ease-in-out hover:scale-105">
              <Image src={"/images/app_page_images/app-hero.png"} alt="mob2" width={500} height={500} />
              </div>
          )}
          {tabImage === 2 && (
              <div className="transform transition-transform duration-700 ease-in-out hover:scale-105">
            <Image src={"/images/app_page_images/third-sec.png"} alt="mob3" width={500} height={500} />
            </div>
          )}
        </motion.div>

        {/* project section right box */}
        <motion.div 
                  initial={{
                    x: 300,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.5,
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }} className="w-[100%] px-6 md:px-0 md:w-[55%] flex flex-col md:flex-row justify-between relative ct-projects">
          {/* tab box for project  */}
          <div className="w-[100%] md:w-[70%]">
            {/* top heading */}
            {/* <main className=" w-full m-auto">
              <div className=" justify-between items-center py-8 md:py-20">
                <div className="w-[100%] justify-center items-center">
                  <Reveal>
                    <h1 className="poppins-medium text-4xl">
                      Some of our <br /> favorite projects
                    </h1>
                  </Reveal>
                </div>

                <div className="w-[90%]">
                  <Reveal>
                    <p className=" poppins-light font-light text-[14px] my-3">
                      Join us on a journey to create something truly
                      extraordinary. Together, we&apos;ll turn your dreams into
                      reality.
                    </p>
                  </Reveal>
                </div>
              </div>
            </main> */}

            <ContentTab tabImage={tabImage} setTabImage={setTabImage} />
          </div>

          <div className="w-full md:w-[30%] md:absolute md:top-0 md:right-6 mt-5 md:mt-0">
            {tabImage === 0 && (
              <div>
                <Image className="rounded-2xl" src={"/images/app_page_images/third-sec-2.png"} alt="mob" width={300} height={300} />
                <h5 className="text-right text-[#68D7D6]">02</h5>
                <h4 className="text-right">iOS App <br/> Development</h4>
              </div>
            )}
            {tabImage === 1 && (
              <Image className="rounded-2xl" src={"/images/app_page_images/third-sec.png"} alt="mob4" width={300} height={300} />
            )}
            {tabImage === 2 && (
              <Image className="rounded-2xl" src={"/images/app_page_images/third-sec-2.png"} alt="mob5" width={300} height={300} />
            )}

            
          </div>
        </motion.div>
      </main>
    </main>
  );
};

export default AppDevelopmentSection;