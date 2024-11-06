import Image from 'next/image'
import React from 'react'

const WorkingTechnologySlider = () => {

    const techSliderImage = [
        {
            image:'/images/video_page_images/slider-img (2).png',
            content:'Explainer Videos'
        },
        {
            image:'/images/video_page_images/slider-img (3).png',
            content:'Product Promotions'
        },
        {
            image:'/images/video_page_images/slider-img (4).png',
            content:'Whiteboard Animation'
        },
        {
            image:'/images/video_page_images/slider-img (1).png',
            content:'Video Editing'
        }
    ]
  return (
    <React.Fragment>
        <main className="w-[1200px] mx-auto py-6">
            <div className="flex flex-wrap justify-between items-center">

                {techSliderImage.map((item, index) => (
                    <div className="flex flex-col items-center w-[24%] h-auto" key={index}>
                        <Image src={item.image} alt="" width={250} height={250} className="rounded-lg" />
                        <p className="text-start text-[14px] mt-3">{item.content}</p>
                    </div>
                ))}
            </div>
        </main>
    </React.Fragment>
  )
}

export default WorkingTechnologySlider