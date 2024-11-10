import React from 'react'
import HeroSection from '../../../components/landing_page_components/web-dev_page_components/HeroSection'
import PorfolioSection from '../../../components/landing_page_components/web-dev_page_components/PortfolioSection'
import DigitalAgency from '../../../components/landing_page_components/web-dev_page_components/DigitalAgency'
import TechStack from '../../../components/landing_page_components/web-dev_page_components/TechStack'
import Services from '../../../components/landing_page_components/web-dev_page_components/Services'
import TakeSteps from '../../../components/landing_page_components/web-dev_page_components/TakeSteps'
import Testimonials from '@/components/landing_page_components/app_page_components/Testimonials';
import FaqSection from '@/components/landing_page_components/app_page_components/FaqSection';
import OurBlog from '@/components/landing_page_components/app_page_components/OurBlog';
import Footer from '@/components/layout/Footer';

const page = () => {
 
  return (
    <main className="theme_bg_color">
        <HeroSection/>
        <PorfolioSection/>
        <DigitalAgency/>
        <TechStack/>
        <Services/>
        <TakeSteps/>
        <Testimonials/>
        <FaqSection/>
        <OurBlog/>
        <Footer/>
    </main>
  )
}

export default page