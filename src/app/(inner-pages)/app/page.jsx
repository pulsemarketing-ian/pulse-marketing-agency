import React from 'react'
import HeroSection from '@/components/landing_page_components/app_page_components/HeroSection';
import PortfolioSection from '@/components/landing_page_components/app_page_components/PortfolioSection';
import AppDevelopmentSection from '@/components/landing_page_components/app_page_components/AppDevelopmentSection';
import RevolvingIndustries from '@/components/landing_page_components/app_page_components/RevolvingIndustries';
import AndriodSection from '@/components/landing_page_components/app_page_components/AndriodSection';
import Testimonials from '@/components/landing_page_components/app_page_components/Testimonials';
import FaqSection from '@/components/landing_page_components/app_page_components/FaqSection';
// import OurBlog from '@/components/landing_page_components/app_page_components/OurBlog';
import Footer from '@/components/layout/Footer';
import Offerings from '../../../components/landing_page_components/app_page_components/OfferingSection';
import IosFriendly from '../../../components/landing_page_components/app_page_components/IosFriendly';

const App = () => {
  return (
        <main className="theme_bg_color">
            <HeroSection/>
            <PortfolioSection/>
            <Offerings/>
            <IosFriendly/>
            <AppDevelopmentSection/>
            <RevolvingIndustries/>
            {/* <AndriodSection/> */}
            <Testimonials/>
            <FaqSection/>
            {/* <OurBlog/> */}
            <Footer/>
        </main>
  )
}

export default App