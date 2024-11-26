'use client';
import React from 'react';
import PrimaryBtn from '../PrimaryBtns/PrimaryBtn';
import Image from 'next/image';
import { Reveal } from '@/utils/Reveal';
import { motion } from 'motion/react';

const OurBlog = () => {
  return (
    <React.Fragment>
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
                src={'/images/app_page_images/blog-img (1).png'}
                alt=""
                width={350}
                height={350}
                className="rounded-lg object-cover h-[250px] w-full"
              />
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <Reveal>
                <div className="bg-[#1d1a2e] border-white text-sm rounded-3xl px-4 py-1">App Development</div>
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
                src={'/images/app_page_images/blog-img (3).png'}
                alt=""
                width={350}
                height={350}
                className="rounded-lg object-cover h-[250px] w-full"
              />
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <Reveal>
                <div className="bg-[#1d1a2e] border-white text-sm rounded-3xl px-4 py-1">Branding</div>
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
                src={'/images/app_page_images/blog-img (2).png'}
                alt=""
                width={350}
                height={350}
                className="rounded-lg object-cover h-[250px] w-full"
              />
            </div>
            <div className=" flex flex-col gap-3 mt-3">
              <Reveal>
                <div className="bg-[#1d1a2e] border-white text-sm rounded-3xl px-4 py-1">Branding</div>
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
          </motion.div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default OurBlog;
