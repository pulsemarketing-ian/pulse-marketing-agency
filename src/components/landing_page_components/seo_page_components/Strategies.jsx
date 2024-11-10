'use client';
import { Reveal } from '@/utils/Reveal'
import Image from 'next/image'
import React from 'react'

const Strategies = () => {
  return (
    <main className="w-full px-4 md:px-0 md:w-[1200px] mx-auto py-10 flex flex-wrap justify-between "  >
        <div className="flex flex-col gap-4 md:w-[48%]">
          <Reveal>
          <h2 className="text-xl md:text-4xl font-bold tracking-wide">We implement the latest<br/> SEO strategies and <br/>marketing techniques</h2>
          </Reveal>
          <Reveal>
            <h4 className='text-md font-light text-[#0EB1CF] tracking-wide'>SEO Experts at your service</h4>
          </Reveal>

          <Reveal>
            <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
            <p className="text-sm">but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Reveal>

            <Image src="/images/seo_page_images/sm.png" width={200} height={200} alt="seo-strategies"/>
        </div>

        <div className="w-full md:w-[48%] flex justify-items-end justify-end mt-8 md:mt-0"  style={{
            backgroundImage:"url('/images/app_page_images/radial.png')",
            backgroundSize:'contain',
            backgroundRepeat:'no-repeat'
        }}>
            <Image src={'/images/seo_page_images/strategy.png'} width={450} height={450} className="rounded-3xl"/>
        </div>
    </main>
  )
}

export default Strategies