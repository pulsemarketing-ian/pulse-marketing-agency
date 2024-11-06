import React from "react";
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";

const WebDevSection = () => {
    return (
      <main className="relative min-h-screen text-white overflow-hidden pb-10 z-20" 
      style={{backgroundColor: '#040117',
          borderBottom:'4px solid white',
          borderRadius:'10px'

      }}>
        {/* Top Section with curved background */}
        <div className="relative w-full h-[60vh] flex items-center justify-center">
          {/* Curved glowing background */}
          <div 
            className="absolute bottom-0 left-1/2 w-[200%] aspect-[3/1]"
            style={{
              transform: 'translateX(-35%) translateY(25%)',
              backgroundImage: `url('/images/services_page_images/circle.png')`,
              // filter: 'blur(100px)',
              borderRadius: '100%'
            }}
          />
          
          {/* Main heading */}
          <div className="text-center z-10">
            <p className="text-xl mb-2">We are experts in</p>
            <h1 className="text-6xl font-bold tracking-wide">Development</h1>
          </div>
        </div>
  
        {/* Three Column Section */}
        <div className="relative container mx-auto px-4 -mt-32">
          <div 
          style={{
              backgroundImage: `url('/images/services_page_images/second-section-img.png')`,
              backgroundSize:'cover',
            }}
            className="backdrop-blur-sm rounded-xl p-8 flex flex-row gap-8 items-center justify-between">
            {/* Left Column */}
            <div className="space-y-4 w-[40%]">
              <h2 className="text-3xl font-medium">Web Development</h2>
              <p className="text-gray-300 leading-relaxed">
                Every decision we make needs to answer the million-dollar question: how will this benefit our partners' goals? We work to develop solutions, step into our digital workshop, where innovative ideas converge with technical prowess to build bespoke online experiences.
              </p>
             <PrimaryBtn text={'Learn More'}/>
            </div>
  
  
            {/* Right Column */}
            <div className="space-y-6 w-auto">
              <h3 className="text-xl font-semibold border-b-2 border-white">Tailored Solutions</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  Cutting-Edge Technology
                </li>
                <li className="flex items-center gap-2">
                  User-Centric Design
                </li>
                <li className="flex items-center gap-2">
                  SEO Optimization
                </li>
                <li className="flex items-center gap-2">
                  Continuous Evolution
                </li>
                <li className="flex items-center gap-2">
                  Elevate Your Online Presence
                </li>
              </ul>
            </div>
          </div>
        </div>
  
        {/* Large Development Text Overlay */}
        <div
          className="absolute bottom-[-5%] left-0 w-full text-[10vw] text-center font-bold pointer-events-none select-none overflow-hidden"
          style={{
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)',
            color: 'transparent'
          }}
        >
        Development
      </div>
      </main>
    )
  };

export default WebDevSection;
