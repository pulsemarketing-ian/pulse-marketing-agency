import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import ChoosePlus from "../ChoosePlus";
import Tabs from "../MyTabs/Tabs";
import Projects from "../Projects/Projects";
import Cards from "../DigitalAgencyCards/Cards";
import Testimonials from "../landing_page_components/app_page_components/Testimonials";
import Calender from "../Calender/Calender";
import Video from "../TiktokVideo/Video";
import Footer from "./Footer";
import SEORankingWidget from "../landing_page_components/SeoRankingWidget";
import BrandLogoCards from "@/components/ChoosePlus/BrandLogoCards";
import { FaStar } from "react-icons/fa";
const ContentWrapper = () => {
  return (
    <div>
      {/* <SEORankingWidget /> */}
      <HeroSection />
      <ChoosePlus />
      <Tabs />
      <BrandLogoCards />
      <Projects />
      <Cards />
      <Video />
      <Testimonials />
      <Calender />
      <div className="flex bg-black-2 w-full flex-col text-left md:flex-row md:items-center md:justify-center md:text-center md:gap-3">
        <p> Clients rate our team and work</p>
        <div className="flex text-yellow-500">
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
