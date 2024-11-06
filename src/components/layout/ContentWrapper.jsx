import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import ChoosePlus from '../ChoosePlus'
import Tabs from '../MyTabs/Tabs'
import Projects from '../Projects/Projects'
import Cards from '../DigitalAgencyCards/Cards'
import Testimonials from '../Testimonials/Testimonials'
import Calender from '../Calender/Calender'
import Footer from './Footer'

const ContentWrapper = () => {
  return (
    <div>
      <HeroSection/>
      <ChoosePlus/>
      <Tabs/>
      <Projects/>
      <Cards/>
      <Testimonials/>
      <Calender/>
      <Footer/>
    </div>
  )
}

export default ContentWrapper