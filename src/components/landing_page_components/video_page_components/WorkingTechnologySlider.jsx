'use client'

import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

export default function WorkingTechnologySlider() {
    const techSliderImage = [
        {
            image: '/images/video_page_images/slider-img (2).png',
            content: 'Explainer Videos'
        },
        {
            image: '/images/video_page_images/slider-img (3).png',
            content: 'Product Promotions'
        },
        {
            image: '/images/video_page_images/slider-img (4).png',
            content: 'Whiteboard Animation'
        },
        {
            image: '/images/video_page_images/slider-img (1).png',
            content: 'Video Editing'
        }
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
            <Slider {...settings}>
                {techSliderImage.map((item, index) => (
                    <div className="flex flex-col items-center justify-center px-2" key={index}>
                        <Image src={item.image} alt={item.content} width={250} height={250} className="rounded-lg" />
                        <p className="text-start text-[14px] mt-3">{item.content}</p>
                    </div>
                ))}
            </Slider>
        </main>
    )
}