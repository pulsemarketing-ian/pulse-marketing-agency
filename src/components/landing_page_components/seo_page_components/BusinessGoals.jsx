'use client'
import { Reveal } from '@/utils/Reveal'
import React from 'react'
import {motion} from 'motion/react';

const BusinessGoals = () => {
  return (
    <main className='w-full px-6 md:px-0 md:w-[1200px] md:mx-auto py-16 mt-[280px] md:mt-0' 
    style={{
        backgroundImage:"url('/images/app_page_images/radial.png')",
        backgroundSize:'contain',
        backgroundRepeat:'no-repeat'
    }}>       
      <div className='w-full mx-auto flex items-center justify-center text-center'>
        <Reveal>
            <h2 className='mt-40 text-xl md:text-5xl font-bold tracking-wide text-center mb-3'>What We Offer: SEO Services That Deliver</h2>
            
        </Reveal>
        </div>     

        <div className='flex flex-wrap px-4 md:px-0 gap-3 md:gap-0 justify-between items-center mt-8'>
    {/* First row */}
    <div className='flex flex-wrap w-full justify-between gap-6'>
        {/* card one  */}
        <div
            className='w-full md:w-[32%] rounded-2xl border border-1 gap-3 bg-white bg-opacity-10 backdrop-blur-md p-5 flex flex-col min-h-[50px] md:min-h-[240px]'>
            <h4>01</h4>
            <h3 className='text-xl font-bold tracking-wide'>Business Assessment</h3>
            <p className='text-sm'>At Pulse, we conduct a thorough business assessment to understand your goals, audience, and competition. This allows us to create a tailored SEO plan that boosts your online visibility and drives growth.</p>
        </div>

        {/* card two  */}
        <div
            className='w-full md:w-[32%] rounded-2xl border border-1 gap-3 bg-white bg-opacity-10 backdrop-blur-md p-5 flex flex-col min-h-[50px] md:min-h-[240px]'>
            <h4>02</h4>
            <h3 className='text-xl font-bold tracking-wide'>Target Customer</h3>
            <p className='text-sm'>At Pulse, we analyze your target customers behavior, demographics, and preferences to craft a tailored SEO strategy. This ensures your website reaches the right audience, driving conversions and business growth.</p>
        </div>

        {/* card three  */}
        <div
            className='w-full md:w-[32%] rounded-2xl border border-1 gap-3 bg-white bg-opacity-10 backdrop-blur-md p-5 flex flex-col min-h-[50px] md:min-h-[240px]'>
            <h4>03</h4>
            <h3 className='text-xl font-bold tracking-wide'>Competitor Analysis</h3>
            <p className='text-sm'>At Pulse, we conduct a thorough competitor analysis to understand your market landscape. By identifying your competitors strengths and weaknesses, we create an SEO strategy that gives you a competitive edge and drives better results.</p>
        </div>
    </div>
    
    {/* Space between rows */}
    {/* <div className='h-8'></div> */}

    {/* Second row */}
    <div className='flex flex-wrap w-full justify-between gap-6 mt-3'>
        {/* card four */}
        <div className='w-full md:w-[32%] rounded-2xl border border-1 gap-3 bg-white bg-opacity-10 backdrop-blur-md p-5 flex flex-col min-h-[50px] md:min-h-[240px]'>
            <h4>04</h4>
            <h3 className='text-xl font-bold tracking-wide'>Content Strategy</h3>
            <p className='text-sm'>We develop a strong content strategy that aligns with your business goals and engages your audience effectively.</p>
        </div>

        {/* card five */}
        <div className='w-full md:w-[32%] rounded-2xl border border-1 gap-3 bg-white bg-opacity-10 backdrop-blur-md p-5 flex flex-col min-h-[50px] md:min-h-[240px]'>
            <h4>05</h4>
            <h3 className='text-xl font-bold tracking-wide'>On-Page Optimization</h3>
            <p className='text-sm'>Our on-page SEO techniques improve website structure, content relevance, and user experience.</p>
        </div>

        {/* card six */}
        <div className='w-full md:w-[32%] rounded-2xl border border-1 gap-3 bg-white bg-opacity-10 backdrop-blur-md p-5 flex flex-col min-h-[50px] md:min-h-[240px]'>
            <h4>06</h4>
            <h3 className='text-xl font-bold tracking-wide'>Performance Tracking</h3>
            <p className='text-sm'>We track SEO performance with analytics and reporting to ensure continuous improvement.</p>
        </div>
    </div>
    
    {/* Space between rows */}
    {/* <div className='h-8'></div> */}

    {/* Third row (Single Centered Card) */}
    <div className='w-full flex justify-center mt-3'>
        <div className='w-full md:w-[32%] rounded-2xl border border-1 gap-3 bg-white bg-opacity-10 backdrop-blur-md p-5 flex flex-col min-h-[50px] md:min-h-[240px]'>
            <h4>07</h4>
            <h3 className='text-xl font-bold tracking-wide'>SEO Consultation</h3>
            <p className='text-sm'>Get expert SEO consultation to develop a roadmap for your business success online.</p>
        </div>
    </div>
</div>


    </main>
)
}

export default BusinessGoals