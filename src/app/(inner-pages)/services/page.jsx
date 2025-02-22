import React from 'react'
import HeroSection from '@/components/landing_page_components/services_page_components/HeroSection';
import WebDevSection from '@/components/landing_page_components/services_page_components/WebDevSection';
import AppDevSection from '@/components/landing_page_components/services_page_components/AppDevSection';
import LogoDesgin from '@/components/landing_page_components/services_page_components/LogoDesgin';
import SEOSection from '@/components/landing_page_components/services_page_components/SEOSection';
import AllInOneSection from '@/components/landing_page_components/services_page_components/AllInOneSection';
import Footer from '@/components/layout/Footer';
import '../../global.css';

const Services = () => {
  return (
        <main className="theme_bg_color">
        <HeroSection/>
        <WebDevSection/>
        <AppDevSection/>
        <LogoDesgin/>
        <SEOSection/>
        <AllInOneSection/>
        <div className='mt-12 md:mt-0'>
        <Footer/>
        </div>
        </main>
  )
}

export default Services