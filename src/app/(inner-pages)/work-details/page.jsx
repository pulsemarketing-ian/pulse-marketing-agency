"use client";
import React from "react";
import HeroSection from "../../../components/landing_page_components/work-details/HeroSection";
import SecondSection from "../../../components/landing_page_components/work-details/SecondSection";
import CommuteCounts from "../../../components/landing_page_components/work-details/CommuteCounts";
import InnerPages from "../../../components/landing_page_components/work-details/InnerPages";
import Testimonial from "@/components/landing_page_components/app_page_components/Testimonials";
import FaqSection from "@/components/landing_page_components/app_page_components/FaqSection";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import PrimaryBtn from "@/components/landing_page_components/PrimaryBtns/PrimaryBtn";
// import { Reveal } from '@/utils/Reveal';
import Navbar from "@/components/landing_page_components/Navbar";
import { motion } from "motion/react";
import { FireApi } from "../../../../utils/useRequest";
import Link from "next/link";

const WorkDetails = () => {
  const industryData = [
    {
      name: "Industry",
      desc: "Commute",
    },
    {
      name: "Technologies",
      desc: "Mobile, Frontend",
    },
    {
      name: "Launched",
      desc: "2022",
    },
    {
      name: "Country",
      desc: "USA",
    },
  ];

  const [innerContent, setInnerContent] = React.useState([]);
  const portfolioComponentId = localStorage.getItem("portfolioId");

  const getInnerPageData = async () => {
    try {
      const res = await FireApi(
        `component/read/${portfolioComponentId}`,
        "GET",
      );
      // console.log(res?.data?.component?.child_components, 'setInnerContent');
      setInnerContent(res?.data?.component?.child_components || []);
    } catch (err) {
      console.error("Error fetching pages:", err);
    }
  };

  React.useEffect(() => {
    getInnerPageData();
  }, [portfolioComponentId]);

  const visitWebsite = localStorage.getItem("visit-website");

  return (
    <main className="theme_bg_color">
      {/* hero section  */}
      <main
        style={{
          backgroundImage: "url('/images/work-details/our-work.png')",
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <div className=" flex  h-[60vh] flex-col-reverse items-center justify-between pt-[10vh] md:mx-auto md:h-[100vh] md:w-[1200px] md:flex-row md:pt-0">
          {/* hero heading  */}
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
            viewport={{ once: false, amount: 0.2 }}
            className="w-full translate-y-[-2rem] flex-col px-6 md:w-[40%] md:translate-y-0 md:px-0"
          >
            <div className="mb-2 flex w-auto items-center gap-1">
              <Image
                src="/images/services_page_images/blue-dot.png"
                alt="blue-dot"
                width={20}
                height={20}
              />
              <p>Case Study</p>
            </div>

            {/* heading main  */}
            <div className="flex flex-wrap items-center gap-6 ">
              <h2 className=" w-auto text-xl font-bold leading-tight text-white md:text-5xl">
                {innerContent[0]?.name || "No data found for this page"}
              </h2>

              <p>{innerContent[0]?.section || "No data found for this page"}</p>

              <Link href={`${visitWebsite}`}>
                <PrimaryBtn text={"Visit Website"} />
              </Link>
            </div>
          </motion.div>

          {/* right images  */}
          <motion.div
            initial={{
              scale: 0,
              opacity: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              ease: "easeInOut",
            }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full flex-col px-6 md:w-[50%] md:translate-y-10 md:px-0"
          >
            <Image
              // src={"/images/work-details/hero-img.png"}
              src={`${innerContent[0]?.pictures[0] || "/images/work-details/hero-img.png"}`}
              width={700}
              height={700}
              className="rounded-3xl"
            />
          </motion.div>

          <div className="absolute bottom-6 right-6 rounded-full bg-my-blue-gradient p-3">
            <Image
              src={"/images/services_page_images/inbox.png"}
              alt="inbox"
              width={15}
              height={15}
            />
          </div>
        </div>
      </main>

      {/* second section */}
      {/* <main
      className="w-full px-4 py-8 md:py-20 md:mx-auto md:w-[1200px]"
      style={{
        backgroundImage: "url('/images/app_page_images/radial.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full rounded-lg border">
        <div className="flex flex-col md:flex-row justify-between">
          left side
          <div className="flex w-full md:w-[70%] flex-wrap items-center border-b md:border-b-0 md:border-r p-4">
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </h6>
          </div>

          right side
          <div className="flex w-full md:w-[30%] flex-wrap justify-center p-4">
            {industryData.map((item, index) => (
              <div className="mb-2 w-[50%] md:w-[40%]" key={index}>
                <h3 className="font-bold">{item.name}</h3>
                <p className="opacity-50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <hr />

        <motion.div
           initial={{
            scale: 0,
            opacity:0
        }}
        whileInView={{
            scale: 1,
            opacity:1
        }}
        transition={{
          delay: 0.3, 
          duration: 0.8,
          ease: "anticipate",
        }}
        viewport={{ once: false, amount: 0.2 }}  
        className="w-full p-4 flex justify-center items-center">
          <Image
            className="py-4 rounded-4xl"
            src={"/images/work-details/video-img.png"}
            width={900}
            height={900}
            alt="Video Image"
          />
        </motion.div>
      </div>
    </main> */}

      {/* commute about this project section buddy  */}
      <main
        className="w-full pt-10 md:mx-auto md:w-[1200px] md:pb-16 md:pt-24"
        style={{
          backgroundImage: "url('/images/app_page_images/radial.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full flex-col px-6 md:w-[50%] md:px-0">
          <div className="mb-2 flex w-auto items-center gap-1">
            <Image
              src="/images/services_page_images/blue-dot.png"
              alt="blue-dot"
              width={20}
              height={20}
            />
            <p>About This Project</p>
          </div>

          {/* heading main  */}
          <div className="flex flex-wrap items-center gap-6 ">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  innerContent[0]?.header || "No data found for this page",
              }}
              className="content-style "
            />
          </div>
        </div>

        <div className="mt-10 flex h-auto w-full flex-wrap justify-between gap-4 px-4 md:h-[60vh] md:gap-0 md:px-0">
          {/* left box */}
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
            viewport={{ once: false, amount: 0.2 }}
            className="h-[100%] w-full rounded-2xl bg-[#120E28] p-10 md:w-[48%]"
          >
            <h2 className="mb-3 text-2xl font-bold">Overview</h2>
            <p>{innerContent[0]?.content || "No data found for this page"}</p>
          </motion.div>

          {/* right box  */}
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
            viewport={{ once: false, amount: 0.2 }}
            className="flex w-full justify-end rounded-2xl md:w-[48%]"
          >
            <Image
              src={"/images/work-details/about-project.png"}
              alt="about-project"
              width={550}
              height={550}
            />
          </motion.div>
        </div>
      </main>

      <InnerPages />
      <Testimonial />
      {/* <HeroSection/> */}
      {/* <SecondSection/> */}
      {/* <CommuteCounts/> */}
      {/* <FaqSection/> */}
      <Footer />
    </main>
  );
};

export default WorkDetails;
