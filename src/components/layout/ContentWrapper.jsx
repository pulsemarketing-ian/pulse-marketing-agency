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
import BrandLogoCards from '@/components/ChoosePlus/BrandLogoCards';
const ContentWrapper = () => {
  return (
    <div>
      <SEORankingWidget />
      <HeroSection />
      <ChoosePlus />
      <Tabs />
      <BrandLogoCards/>
      <Projects />
      <Cards />
      <Video />
      <Testimonials />
      <Calender />
      <Footer />
    </div>
  );
};

export default ContentWrapper;
