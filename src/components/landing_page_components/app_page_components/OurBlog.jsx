'use client';
import React from 'react';
import PrimaryBtn from '../PrimaryBtns/PrimaryBtn';
import Image from 'next/image';
import { Reveal } from '@/utils/Reveal';

const OurBlog = () => {
  return (
    <React.Fragment>
      <main className="max-w-[1200px] mx-auto py-6 px-4">
        {/* Top Heading */}
        <div className="flex flex-col lg:flex-row justify-between items-baseline gap-5 md:gap-0">
          <div className='flex-col gap-3'>
            <Reveal>
              <p>
                <span className="text-cyan-500 mr-2">•</span> Our Blog
              </p>
            </Reveal>
            <Reveal>
            <h2 className="text-xl md:text-4xl font-medium leading-tight">
              What is New <br /> in Our Blogs
            </h2>
            </Reveal>

          </div>
          <PrimaryBtn text={'View All Blogs'} />
        </div>

        {/* Blog Content */}
        <div className="flex flex-wrap justify-between my-4 gap-4">
          {/* Blog 1 */}
          <div className="flex flex-col space-y-2 w-full sm:w-[45%] md:w-[30%] lg:w-[28%]">
          <div className="transform transition-transform duration-700 ease-in-out hover:scale-105">
            <Image src={"/images/app_page_images/blog-img (1).png"} alt="" width={300} height={300} className="rounded-lg" />
          </div>
            <div className="px-4 flex flex-col gap-3 mt-3">
            <Reveal>
              <span className="bg-[#222020] border-white text-sm rounded-2xl px-4 w-[50%]">App Development</span>
              </Reveal>
              <Reveal>
              <p>
                UAE is Rapid Rise in AI: Groundbreaking Developments Shaping the Future
              </p>
              </Reveal>
              <Reveal>
              <ul>
                <li className="list-disc">10 min read</li>
              </ul>
              </Reveal>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="flex flex-col space-y-2 w-full sm:w-[45%] md:w-[30%] lg:w-[28%]">
          <div className="transform transition-transform duration-700 ease-in-out hover:scale-105">
            <Image src={"/images/app_page_images/blog-img (3).png"} alt="" width={300} height={300} className="rounded-lg" />
          </div>
            <div className="px-4 flex flex-col gap-3 mt-3">
            <Reveal>
              <span className="bg-[#222020] border-white text-sm rounded-2xl px-4 w-[50%]">App Development</span>
              </Reveal>
              <Reveal>
              <p>
                UAE is Rapid Rise in AI: Groundbreaking Developments Shaping the Future
              </p>
              </Reveal>
              <Reveal>
              <ul>
                <li className="list-disc">10 min read</li>
              </ul>
              </Reveal>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="flex flex-col space-y-2 w-full sm:w-[45%] md:w-[30%] lg:w-[35%]">
          <div className="transform transition-transform duration-700 ease-in-out hover:scale-105">
            <Image src={"/images/app_page_images/blog-img (2).png"} alt="" width={430} height={430} className="rounded-lg" />
          </div>
            <div className="px-4 flex flex-col gap-3 mt-3">
            <Reveal>
              <span className="bg-[#222020] border-white text-sm rounded-2xl px-4 w-[45%]">App Development</span>
              </Reveal>
              <Reveal>
              <p>
                UAE is Rapid Rise in AI: Groundbreaking Developments Shaping the Future
              </p>
              </Reveal>
              <Reveal>
              <ul>
                <li className="list-disc">10 min read</li>
              </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  )
}

export default OurBlog;