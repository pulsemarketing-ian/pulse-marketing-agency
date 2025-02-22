import React from 'react'
import HeroSection from '@/components/landing_page_components/video_page_components/HeroSection'
import PortfolioSection from '@/components/landing_page_components/video_page_components/PortfolioSection'
import VideoBenefitSection from '@/components/landing_page_components/video_page_components/VideoBenefitSection'
import WorkingTechnologySlider from '@/components/landing_page_components/video_page_components/WorkingTechnologySlider'
import Testimonials from '@/components/landing_page_components/app_page_components/Testimonials';
import FaqSection from '@/components/landing_page_components/app_page_components/FaqSection';
import OurBlog from '@/components/landing_page_components/app_page_components/OurBlog';
import Footer from '@/components/layout/Footer';

const page = () => {
  return (
        <main className="theme_bg_color">
            <HeroSection/>
            <PortfolioSection/>
            <VideoBenefitSection/>
            <WorkingTechnologySlider/>
            <Testimonials/>
            <FaqSection/>
            <OurBlog/>
            <Footer/>
        </main>
  )
}

export default page