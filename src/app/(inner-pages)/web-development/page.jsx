import React from 'react'
import HeroSection from '../../../components/landing_page_components/web-dev_page_components/HeroSection'
import PorfolioSection from '../../../components/landing_page_components/web-dev_page_components/PortfolioSection'
import DigitalAgency from '../../../components/landing_page_components/web-dev_page_components/DigitalAgency'
import TechStack from '../../../components/landing_page_components/web-dev_page_components/TechStack'
import Services from '../../../components/landing_page_components/web-dev_page_components/Services'
import TakeSteps from '../../../components/landing_page_components/web-dev_page_components/TakeSteps'
import Testimonials from '@/components/landing_page_components/app_page_components/Testimonials';
import FAQSection from '../../../components/landing_page_components/web-dev_page_components/WebFaq';
// import OurBlog from '@/components/landing_page_components/app_page_components/OurBlog';
import Calender from '@/components/Calender/Calender';
import Footer from '@/components/layout/Footer';
import Tabs from "../../../components/MyTabs/Tabs";

const page = () => {
 
  return (
    <main className="theme_bg_color">
        <HeroSection/>
        <PorfolioSection/>
        {/* <div className='md:-mt-30 -mt-46 '>
        <DigitalAgency/>
        </div> */}
        <TechStack/>
        <Services/>
        <TakeSteps/>
        <div>
          <div className="w-[80%] md:mt-0 md:mb-9 mb-4 mt-0 md:ml-36 ml-8 md:w-[60%]">
            <h1 className="poppins-medium ct-heading text-5xl">
              Sales-Driven Conversion Optimized Platforms.
            </h1>
          </div>
          <Tabs />
        </div>
        <Testimonials/>
        <FAQSection />
        {/* <OurBlog/> */}
        <div className='md:mt-0 -mt-12'>
        <Calender/>
        </div>
        <div>
        <Footer/>
        </div>
    </main>
  )
}

export default page