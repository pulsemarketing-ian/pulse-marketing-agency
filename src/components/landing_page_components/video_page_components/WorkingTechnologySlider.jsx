'use client'
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'
import {motion} from 'motion/react';

export default function WorkingTechnologySlider() {
    const techSliderImage = [
        {
            image: '/images/video_page_images/portfolio (1).webp',
        },
        {
            image: '/images/video_page_images/portfolio (2).webp',
        },
        {
            image: '/images/video_page_images/portfolio (3).webp',
        },
        {
            image: '/images/video_page_images/portfolio (4).webp',
        },
        {
            image: '/images/video_page_images/portfolio (5).webp',
        },
        {
            image: '/images/video_page_images/portfolio (6).webp',
        },
        {
            image: '/images/video_page_images/portfolio (7).webp',
        },
        {
            image: '/images/video_page_images/portfolio (8).webp',
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false, 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    

    return (
        <main className="max-w-[1200px] mx-auto py-6 px-4">
            <h2 className='text-4xl font-bold text-center '>Product Photography</h2>
            <Slider {...settings}>
                {techSliderImage.map((item, index) => (
                    <motion.div 
                    initial={{
                      scale: 0.1,
                      opacity: 0,
                    }}
                    whileInView={{
                      scale: 1,
                      opacity: 1,
                    }}
                    transition={{
                      delay: 0.5,
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                    viewport={{ once: false, amount: 0.2 }} 
                    className="flex flex-col items-center justify-center px-2 mt-10" key={index}>
                        <Image src={item.image} alt={item.content} width={250} height={250} className="rounded-lg" />
                        <p className="text-start text-[14px] mt-3">{item.content}</p>
                    </motion.div>
                ))}
            </Slider>
        </main>
    )
}