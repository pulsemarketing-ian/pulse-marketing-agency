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
          }}
        >
          {/* Overlay div */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <Navbar />
          <div className='h-[60vh] md:h-[100vh] w-full flex justify-center items-center flex-col relative overflow-visible'>
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
  
        <main className="relative w-full pb-32 md:pb-0">
        <div
          style={{
            backgroundImage: "url('/images/services_page_images/circle.png/')",
            backgroundSize: "cover",
            transform: "translateY(-50%)",
          }}
          className="h-[50vh] md:h-[100vh]"
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
              <p className="mb-2 text-[16px]  tracking-wide md:text-md md:w-[60%] md:mx-auto ">
                {blogInner?.component?.section}
              </p>
            </Reveal>
          </div>

          {/* inner content  */}
          {/* <div className="mt-6 flex-col overflow-hidden px-6 md:mx-auto md:flex  md:w-[1200px] md:items-center md:justify-between md:px-0 lg:flex-row "> */}
            {/* left box  */}
            {/* <motion.div
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
                ease: "easeInOut",
              }}
              viewport={{ once: false, amount: 0.2 }}
              className="h-[100%] w-full rounded-2xl bg-[#120E28] p-10 md:w-[48%] "
            >
              <h2 className="mb-3 text-2xl font-bold">Why We Rock</h2>
              <p>
                Welcome to Pulse Marketing Inc, a Vancouver-based marketing firm
                with years of experience serving over 8,000 clients from various
                industries. We have successfully completed more than 25,000
                projects, offering comprehensive services from AI consulting,
                website and app development, ORM, branding, to digital marketing
                and more. Our highly skilled team applies the latest marketing
                strategies to meet our clients goals, including increasing brand
                awareness, lead generation and sales growth. Thanks for
                considering Pulse Marketing Inc. for your marketing needs. We
                are committed to helping you reach your goals and propelling
                your business forward.
              </p>
            </motion.div> */}

            {/* right box  */}
            {/* <motion.div
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
                ease: "easeInOut",
              }}
              viewport={{ once: false, amount: 0.2 }}
              className="flex h-full w-full justify-end rounded-2xl md:w-[48%] "
            >
              <Image
                src={"/images/work-details/about-project.png"}
                alt="about-project"
                width={550}
                height={550}
              />
            </motion.div> */}
          {/* </div> */}

          <div className='md:w-[1200px] w-full mx-4'>
              <div
                dangerouslySetInnerHTML={{ __html: blogInner?.component?.content }}
                className="content-style " 
              />
          </div>

        </div>
        </main>

      </main>
      <Footer/>

 
    </>
  );
};

export default Page;
