'use client'
import { Reveal } from '@/utils/Reveal'
import React from 'react'
import {motion} from 'motion/react';

const BusinessGoals = () => {
  return (
    <main className='w-full px-6 md:px-0 md:w-[1200px] md:mx-auto py-16' 
    style={{
        backgroundImage:"url('/images/app_page_images/radial.png')",
        backgroundSize:'contain',
        backgroundRepeat:'no-repeat'
    }}>       
      <div className='w-full mx-auto flex items-center justify-center text-center'>
        <Reveal>
            <h2 className='text-xl md:text-4xl font-bold tracking-wide text-center mb-3'>Developing SEO Strategy And Plan!</h2>
            <p className='text-center w-[80%] mx-auto'>We work together to understand your business goals and identify the best path for success. We will discuss how a strong online presence can lead you toward greate r things to come, as well as what needs improvement.</p>
        </Reveal>
        </div>     

            <div className='flex flex-wrap px-4 md:px-0 gap-3 md:gap-0 justify-between items-center mt-8'>
                    {/* card one  */}
                    <motion.div  
                    initial={{
                    y: 200,
                    opacity: 0,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.2,
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }} className='w-full md:w-[32%] rounded-2xl border border-1 gap-3 bg-white bg-opacity-10 backdrop-blur-md p-5 flex flex-col min-h-[50px] md:min-h-[240px]'>
                        <h4>01</h4>
                        <h3 className='text-xl font-bold tracking-wide'>Business Assessment</h3>
                        <p className='text-sm'>At Pulse, we conduct a thorough business assessment to understand your goals, audience, and competition. This allows us to create a tailored SEO plan that boosts your online visibility and drives growth</p>
                    </motion.div>

                    {/* card otwo  */}
                    <motion.div  
                    initial={{
                    y: 200,
                    opacity: 0,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.21,
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }} className='w-full md:w-[32%] rounded-2xl border border-1 gap-3 bg-white bg-opacity-10 backdrop-blur-md p-5 flex flex-col min-h-[50px] md:min-h-[240px]'>
                        <h4>02</h4>
                        <h3 className='text-xl font-bold tracking-wide'>Target Customer</h3>
                        <p className='text-sm'>At Pulse, we analyze your target customers behavior, demographics, and preferences to craft a tailored SEO strategy. This ensures your website reaches the right audience, driving conversions and business growth</p>
                    </motion.div>

                    {/* card three  */}
                    <motion.div  
                    initial={{
                    y: 200,
                    opacity: 0,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.22,
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }} className='w-full md:w-[32%] rounded-2xl border border-1 gap-3 bg-white bg-opacity-10 backdrop-blur-md p-5 flex flex-col min-h-[50px] md:min-h-[240px]'>
                        <h4>03</h4>
                        <h3 className='text-xl font-bold tracking-wide'>Competitor Analysis</h3>
                        <p className='text-sm'>At Pulse, we conduct a thorough competitor analysis to understand your market landscape. By identifying your competitors strengths and weaknesses, we create an SEO strategy that gives you a competitive edge and drives better results.</p>
                    </motion.div>
            </div>
    </main>
)
}

export default BusinessGoals