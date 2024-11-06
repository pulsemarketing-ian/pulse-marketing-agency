import Image from 'next/image'
import React from 'react'

const AndriodSection = () => {
  return (
    <>
      <main 
         className="relative pb-6 text-white overflow-hidden" 
         style={{
             backgroundColor: '#040117',
             backgroundSize:'cover',
             borderBottom:'4px solid #363445',
             backgroundImage:"url('/images/app_page_images/radial.png')",
             backgroundSize:'cover',
             backgroundRepeat:'no-repeat'
           }}
        >
  
        {/* Main Content Section */}
        <div className="relative container mx-auto px-4 py-6">
          <div 
            className="rounded-xl p-8 flex flex-col lg:flex-row gap-8 items-center justify-between"
          >
            {/* Left Column */}
            <div className="space-y-6 lg:w-[40%]">
              <h2 className="text-5xl font-medium leading-tight">
              Android App <br/>Development
              </h2>
              <p className="text-gray-300 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.              </p>
              <ul class="space-y-2 text-[13px] text-gray-300">
        <li class="flex items-center">
            <span class="text-cyan-500 mr-2">•</span> Android app development consultation
        </li>
        <li class="flex items-center">
            <span class="text-cyan-500 mr-2">•</span> Android app UI/UX design
        </li>
        <li class="flex items-center">
            <span class="text-cyan-500 mr-2">•</span> Custom Android app development
        </li>
        <li class="flex items-center">
            <span class="text-cyan-500 mr-2">•</span> Android software testing
        </li>
        <li class="flex items-center">
            <span class="text-cyan-500 mr-2">•</span> Play store optimization & API integration
        </li>
    </ul>
            </div>
  
          
  
            {/* Right Column */}
            <div className="space-y-6 lg:w-[40%]">
              {/* <h3 className="text-xl font-semibold pb-2 border-b border-purple-400/30">
                Our Services
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-3">
                  Flutter App Development
                </li>
                <li className="flex items-center gap-3">
                  React Native Development
                </li>
                <li className="flex items-center gap-3">
                  Native App Development
                </li>
                <li className="flex items-center gap-3">
                  Maintenance Code Review
                </li>
              </ul> */}

              <Image
                src={'/images/app_page_images/fifth-sec.png'}
                alt={'image'}
                width={850}
                height={850}
              />
            </div>
          </div>
        </div>
  
       
  
        {/* Purple Glow Effects */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px] -z-10" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full filter blur-[100px] -z-10" />
      </main>
    </>
  )
}

export default AndriodSection