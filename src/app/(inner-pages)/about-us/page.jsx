'use client'
import React from 'react'
import HeroSection from '../../../components/landing_page_components/about_page_components/HeroSection';
import AboutText from '../../../components/landing_page_components/about_page_components/AboutText';
import Testimonial from '@/components/landing_page_components/app_page_components/Testimonials';
import FaqSection from '@/components/landing_page_components/app_page_components/FaqSection';
import Footer from '@/components/layout/Footer';
// import OurBlog from '@/components/landing_page_components/app_page_components/OurBlog';
import BrandLogoCards from '@/components/ChoosePlus/BrandLogoCards';
import IanSection from '@/components/landing_page_components/about_page_components/IanSection';

const AboutUs = () => {
  return (
    <main className="theme_bg_color">
        <HeroSection/>
        <AboutText/>
        <BrandLogoCards/>
        <div className='relative md:top-0 top-[240px]'>
        <IanSection/>
        </div>
        <div className='mt-60 md:mt-0'>
        <Testimonial/>
        </div>
        {/* <div className='md:mt-0 mt-8'> 
        <OurBlog/>
        </div> */}
        <FaqSection/>
        <Footer/>
    </main>
  )
}

export default AboutUs