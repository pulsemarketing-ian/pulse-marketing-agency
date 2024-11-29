'use client';
import React from 'react';
import PrimaryBtn from '../PrimaryBtns/PrimaryBtn';
import Image from 'next/image';
import { Reveal } from '@/utils/Reveal';
import { motion } from 'motion/react';

const OurBlog = () => {
  return (
      <main className="max-w-[1200px] mx-auto py-6 px-4">
        {/* Top Heading */}
        <div className="flex flex-col lg:flex-row justify-between items-baseline gap-5 md:gap-0">
          <div className="flex-col gap-3">
            <Reveal>
              <p>
                <span className="text-[#CD0DCE] mr-2">•</span> Our Blog
              </p>
            </Reveal>
            <Reveal>
              <h2 className="text-xl md:text-4xl font-medium leading-tight mb-2">
                What is New <br /> in Our Blogs
              </h2>
            </Reveal>
          </div>
          <PrimaryBtn text={'View All Blogs'} />
        </div>

        {/* Blog Content */}
        <div className="flex flex-wrap justify-between my-4 gap-4">
          {/* Blog 1 */}
          <motion.div
            initial={{
              x: -300,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              ease: 'easeInOut',
            }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col space-y-2 w-full sm:w-[45%] md:w-[30%] lg:w-[30%]"
          >
            <div className="transform transition-transform duration-700 ease-in-out hover:scale-105">
              <Image
                src={'/images/app_page_images/blog-images (1).png'}
                alt=""
                width={350}
                height={350}
                className="rounded-lg object-cover h-[250px] w-full"
              />
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <Reveal>
                <h2 className='text-xl'>How to Use Social Media to Boost Your..</h2>
              </Reveal>
              <Reveal>
                <p>
                As a business owner or marketer, you may wonder if paid advertising is worth the investment.
                </p>
              </Reveal>
              <Reveal>
                <ul>
                  <li className="list-disc">10 min read</li>
                </ul>
              </Reveal>
            </div>
          </motion.div>

          {/* Blog 2 */}
          <motion.div
            initial={{
              y: 300,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              ease: 'easeInOut',
            }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col space-y-2 w-full sm:w-[45%] md:w-[30%] lg:w-[30%]"
          >
            <div className="transform transition-transform duration-700 ease-in-out hover:scale-105">
              <Image
                src={'/images/app_page_images/blog-images (2).png'}
                alt=""
                width={350}
                height={350}
                className="rounded-lg object-cover h-[250px] w-full"
              />
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <Reveal>
                <h2 className='text-xl'>The Role of AI in Marketing</h2>
              </Reveal>
              <Reveal>
                <p>
                As a business owner or marketer, you may wonder if paid advertising is worth the investment.
                </p>
              </Reveal>
              <Reveal>
                <ul>
                  <li className="list-disc">10 min read</li>
                </ul>
              </Reveal>
            </div>
          </motion.div>

          {/* Blog 3 */}
          <motion.div
            initial={{
              x: 300,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              ease: 'easeInOut',
            }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col space-y-2 w-full sm:w-[45%] md:w-[30%] lg:w-[30%]"
          >
            <div className="transform transition-transform duration-700 ease-in-out hover:scale-105">
              <Image
                src={'/images/app_page_images/blog-images (3).png'}
                alt=""
                width={350}
                height={350}
                className="rounded-lg object-cover h-[250px] w-full"
              />
            </div>
            <div className=" flex flex-col gap-3 mt-3">
              <Reveal>
                  <h2 className='text-xl'>How To Create Compelling Marketing</h2>
              </Reveal>
              <Reveal>
                <p>
                In today is competitive world, creating compelling marketing copy is essential to attract and retain customers.                </p>
              </Reveal>
              <Reveal>
                <ul>
                  <li className="list-disc">10 min read</li>
                </ul>
              </Reveal>
            </div>
          </motion.div>
        </div>
      </main>
  );
};

export default OurBlog;
