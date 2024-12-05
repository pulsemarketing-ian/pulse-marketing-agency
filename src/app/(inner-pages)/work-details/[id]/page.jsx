import React from 'react'
import HeroSection from '../../../../components/landing_page_components/work-details/HeroSection'
import SecondSection from '../../../../components/landing_page_components/work-details/SecondSection';
import CommuteCounts from '../../../../components/landing_page_components/work-details/CommuteCounts';
import InnerPages from '../../../../components/landing_page_components/work-details/InnerPages';
import Testimonial from '@/components/landing_page_components/app_page_components/Testimonials';
import FaqSection from '@/components/landing_page_components/app_page_components/FaqSection';
import Footer from '@/components/layout/Footer';
const WorkDetails = () => {

  return (
    <main className="theme_bg_color">
        <HeroSection/>
        <SecondSection/>
        <CommuteCounts/>
        <InnerPages/>
        <Testimonial/>
        {/* <FaqSection/> */}
        <Footer/>
    </main>
  )
}

export default WorkDetails