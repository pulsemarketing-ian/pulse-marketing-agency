import React from 'react'
import HeroSection from '../../../components/landing_page_components/seo_page_components/HeroSection'
import SeoApproach from '../../../components/landing_page_components/seo_page_components/SeoApproach'
import BusinessGoals from '../../../components/landing_page_components/seo_page_components/BusinessGoals'
import Strategies from '../../../components/landing_page_components/seo_page_components/Strategies'
import SeoProcess from '../../../components/landing_page_components/seo_page_components/SeoProcess'
import Results from '../../../components/landing_page_components/seo_page_components/Results'
import Rank from '../../../components/landing_page_components/seo_page_components/Rank'
import Testimonials from '@/components/landing_page_components/app_page_components/Testimonials';
import FaqSection from '@/components/landing_page_components/app_page_components/FaqSection';
import OurBlog from '@/components/landing_page_components/app_page_components/OurBlog';
import Footer from '@/components/layout/Footer';
import Calender from '@/components/Calender/Calender'

const page = () => {
  return (
    <main className="theme_bg_color">
            <HeroSection/>
            <SeoApproach/>
            <BusinessGoals/>
            <SeoProcess/>
            <Results/>
            <Strategies/>
            <Rank/>
            <Testimonials/>
            <FaqSection/>
            <OurBlog/>
            <Calender/>
            <div className='-mt-52 md:mt-0'>
            <Footer/>
            </div>
    </main>  
    )
}

export default page