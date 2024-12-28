import React from 'react'
import HeroSection from '../../../components/landing_page_components/cro_page_components/HeroSection'
import SecondSection from '../../../components/landing_page_components/cro_page_components/SecondSection'
import WhyChooseUs from '../../../components/landing_page_components/cro_page_components/WhyChooseUs'
import CROProcess from '../../../components/landing_page_components/cro_page_components/CROProcess'
import Expertise from '../../../components/landing_page_components/cro_page_components/Expertise'
import Results from '../../../components/landing_page_components/cro_page_components/Results'
import Testimonials from '@/components/landing_page_components/app_page_components/Testimonials'
import OurBlog from '@/components/landing_page_components/app_page_components/OurBlog'
import Footer from '@/components/layout/Footer'
import FAQSection from '@/components/landing_page_components/app_page_components/FaqSection'

const page = () => {
  return (
    <main className='theme_bg_color'>
        <HeroSection/>
        <SecondSection/>
        <WhyChooseUs/>
        <CROProcess/>
        <Expertise/>
        <Results/>
        <Testimonials/>
        <FAQSection/>
        <OurBlog/>
        <Footer/>
    </main>
  )
}

export default page