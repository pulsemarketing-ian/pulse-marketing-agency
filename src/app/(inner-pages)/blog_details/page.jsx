'use client';
import React from 'react';
import { FireApi } from '../../../../utils/useRequest';
import Navbar from '@/components/landing_page_components/Navbar';
import Image from 'next/image';
import { Reveal } from '@/utils/Reveal';
import {motion} from 'motion/react';
import { Typography } from '@mui/material';
import Footer from '@/components/layout/Footer';

const Page = () => {

  const [blogInner, setBlogInner] = React.useState([]);

  const token = localStorage.getItem('blogId');

  const getBlogContent = async () => {
    try {
      const res = await FireApi(`component/read/${token}`, 'GET');
      setBlogInner(res?.data);      
    } catch (err) {
      console.error('Error fetching pages:', err);
    }
  };

  React.useEffect(() => {
    if(token){
      getBlogContent();
    }
  }, []);

  return (
    <>
      <main className="theme_bg_color">
        <main 
          key={blogInner._id}
          className="relative"
          style={{
            backgroundImage: `url(${blogInner?.component?.pictures})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Overlay div */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <Navbar />
          <div className='h-[100vh] md:h-[100vh] w-full flex justify-center items-center flex-col relative'>
            <div className='translate-y-[-4rem] flex-col item-center'>
              {/* Service heading */}
              <div className='flex items-center gap-1 mb-2 justify-center'>
                <Image
                  src="/images/services_page_images/blue-dot.png"
                  alt="blue-dot"
                  width={20}
                  height={20}
                />
                <p>Blog Details</p>
              </div>

              {/* Heading main */}
              <Reveal>
                <h2
                  className="text-3xl md:text-5xl font-bold text-center text-white" // Text color set to white
                  style={{ lineHeight: '1.2' }}
                >
                  {blogInner?.component?.name
                    ?.split(' ') 
                    .reduce((result, word, index, array) => {
                      if (index % 3 === 0) result.push(array.slice(index, index + 3)); 
                      return result;
                    }, [] )
                    .map((group, index) => (
                      <React.Fragment key={index}>
                        {group.join(' ')}
                        <br />
                      </React.Fragment>
                    ))}
                </h2>
              </Reveal>
            </div>

            <div className='bg-my-blue-gradient rounded-full p-3 absolute bottom-6 right-6'>
              <Image
                src={'/images/services_page_images/inbox.png'}
                alt="inbox"
                width={15}
                height={15}
              />
            </div>

          </div>
        </main>
        
        {/* circle image and section text  */}
        <main className="relative w-full pb-32 md:pb-0 z-30">
        <div
          style={{
            backgroundImage: "url('/images/services_page_images/circle.png/')",
            backgroundSize: "cover",
            // transform: "translateY(-100%)",
          }}
          className="h-[50vh] md:h-[100vh] transform translate-y-[-50%] md:translate-y-[-60%]"
        />
        <div
          className="absolute top-0 z-10 flex w-full flex-col items-center justify-center md:top-12 theme_bg_color"
          style={{
            backgroundImage: "url('/images/app_page_images/radial.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="z-10 text-center md:-mt-4">
            <Reveal>
              <p className="mb-2 text-[16px]  tracking-wide md:text-md md:w-[60%] md:mx-auto translate-y-[4vh]">
                {blogInner?.component?.section}
              </p>
            </Reveal>
          </div>

        

        

        </div>
        </main>

          {/* main content  */}
        <div className='max-w-[1200px] mx-auto -mt-[26%]'>
              <div
                dangerouslySetInnerHTML={{ __html: blogInner?.component?.content }}
                className="content-style px-4 " 
              />
          </div>

      <Footer/>
      </main>

 
    </>
  );
};

export default Page;
