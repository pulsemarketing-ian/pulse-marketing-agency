import React from 'react';
import Footer from '@/components/layout/Footer';
import Privacy from '../../../components/landing_page_components/privacy/Privacy';
import OtherContent from '../../../components/landing_page_components/privacy/OtherContent';
import HeroSection from '../../../components/landing_page_components/privacy/HeroSection';

const page = () => {
  return (
    <main className="theme_bg_color">
        <HeroSection/>
        <Privacy/>
        <OtherContent/>
        <Footer/>
    </main>
  )
}

export default page