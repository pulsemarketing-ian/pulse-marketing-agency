import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import ChoosePlus from "../ChoosePlus";
import Tabs from "../MyTabs/Tabs";
import Projects from "../Projects/Projects";
import HeroSection2 from "../CroinHome/HeroSection2";
import Cards from "../DigitalAgencyCards/Cards";
import Testimonials from "../landing_page_components/app_page_components/Testimonials";
import Calender from "../Calender/Calender";
// import Video from "../TiktokVideo/Video";
import Footer from "./Footer";
import SeorankingWidget from "../landing_page_components/SeoRankingWidget";
import BrandLogoCards from "@/components/ChoosePlus/BrandLogoCards";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import DownloadBook from "@/components/DownloadBook/DownloadBook";
import Expertise from "@/components/landing_page_components/cro_page_components/Expertise"
import PowerSignatureSection from "../landing_page_components/app_page_components/PowerSignatureSection";
const ContentWrapper = () => {

  return (
    <div>
      {/* <SeorankingWidget />   */}
      <HeroSection />
      <ChoosePlus />
      <Tabs />
      <BrandLogoCards />
      <Projects />
      <DownloadBook/>
      <HeroSection2/>
      <div className="relative top-[500px] md:top-[530px] ">
      <Expertise />
      </div>
      <Cards /> 
      {/* <Video /> */}
      <PowerSignatureSection/>
      <Testimonials/>
      <Calender />
      <div className="flex bg-black-2 w-full flex-col md:flex-row md:items-center md:justify-center text-center gap-3 py-4 md:py-2 mb-3 mt-[2rem] md:mt-0">
        <p> Clients rate our team and work</p>
        <div className="flex text-yellow-500 text-center justify-center items-center">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p>4.8/5</p>
        <p className="text-gray-500">based on 86 client reviews</p>
      </div>
      <Footer />
    </div>
  );
};

export default ContentWrapper;








