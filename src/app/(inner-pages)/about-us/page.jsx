import React from 'react'
import HeroSection from '../../../components/landing_page_components/about_page_components/HeroSection';
import AboutText from '../../../components/landing_page_components/about_page_components/AboutText';
import Testimonial from '@/components/landing_page_components/app_page_components/Testimonials';
import FaqSection from '@/components/landing_page_components/app_page_components/FaqSection';
import Footer from '@/components/layout/Footer';
import OurBlog from '@/components/landing_page_components/app_page_components/OurBlog';
import BrandLogoCards from '@/components/ChoosePlus/BrandLogoCards';

const AboutUs = () => {
  return (
    <main className="theme_bg_color">
        <HeroSection/>
        <AboutText/>
        <BrandLogoCards/>
        <div className='mt-32 md:mt-0'>
        <Testimonial/>
        </div>
        <OurBlog/>
        <FaqSection/>
        <Footer/>
    </main>
  )
}

export default AboutUs