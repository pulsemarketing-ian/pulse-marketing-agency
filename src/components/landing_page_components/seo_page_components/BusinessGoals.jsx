'use client'
import { Reveal } from '@/utils/Reveal'
import React from 'react'

const BusinessGoals = () => {
  return (
    <main className='w-full px-6 md:px-0 md:w-[1200px] md:mx-auto py-16' 
    style={{
        backgroundImage:"url('/images/app_page_images/radial.png')",
        backgroundSize:'contain',
        backgroundRepeat:'no-repeat'
    }}>            
        <Reveal>
            <h2 className='text-xl md:text-4xl font-bold tracking-wide text-center'>Reach business goals & generate customers <br/>by improving your website is ranking!</h2>
        </Reveal>

            <div className='flex flex-wrap px-4 md:px-0 gap-3 md:gap-0 justify-between items-center mt-8'>
                    {/* card one  */}
                    <div className='w-full md:w-[24%] rounded-2xl border border-1 gap-3 bg-white bg-opacity-10 backdrop-blur-md p-5 flex flex-col min-h-[50px]'>
                        <h4>01</h4>
                        <h3 className='text-xl font-bold tracking-wide'>Business & <br/>
                        Competitor Research</h3>
                        <p className='text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s.</p>
                    </div>

                    {/* card otwo  */}
                    <div className='w-full md:w-[24%] rounded-2xl border border-1 gap-3 bg-white bg-opacity-10 backdrop-blur-md p-5 flex flex-col min-h-[50px]'>
                        <h4>02</h4>
                        <h3 className='text-xl font-bold tracking-wide'>Strategy Planning & <br/>Prospecting</h3>
                        <p className='text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s.</p>
                    </div>
                    {/* card three  */}
                    <div className='w-full md:w-[24%] rounded-2xl border border-1 gap-3 bg-white bg-opacity-10 backdrop-blur-md p-5 flex flex-col min-h-[50px]'>
                        <h4>03</h4>
                        <h3 className='text-xl font-bold tracking-wide'>Building <br/>of Links</h3>
                        <p className='text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s.</p>
                    </div>
                    {/* card one  */}
                    <div className='w-full md:w-[24%] rounded-2xl border border-1 gap-3 bg-white bg-opacity-10 backdrop-blur-md p-5 flex flex-col min-h-[50px]'>
                        <h4>04</h4>
                        <h3 className='text-xl font-bold tracking-wide'>Monthly Progress <br/>Reporting</h3>
                        <p className='text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s.</p>
                    </div>
            </div>
    </main>
)
}

export default BusinessGoals