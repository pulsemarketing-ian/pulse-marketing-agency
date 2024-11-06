import React from "react";
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";

const AllInOneSection = () => {
    return (
         <main 
          className="relative pb-6 text-white overflow-hidden" 
           style={{
             backgroundColor: '#040117',
             backgroundSize:'cover',
             borderBottom:'4px solid #363445',
           }}
        >
  
        {/* Main Content Section */}
        <div className="relative container mx-auto px-4 py-16">
            
        <div className="text-center z-10">
            <p className="text-xl mb-2">We are experts in</p>
            <h1 className="text-6xl font-bold tracking-wide">All-In-One CRO</h1>
          </div>
          <div 
            className="rounded-xl p-8 flex flex-col lg:flex-row gap-8 items-center justify-between"
            style={{
            backgroundImage: `url('/images/services_page_images/sixsection-img.png')`,
            backgroundSize:'cover',
            marginTop:'15px'
            // backdropFilter: 'blur(30px)',
            }}
          >
            {/* Left Column */}
            <div className="space-y-6 lg:w-[40%]">
              <h2 className="text-5xl font-medium leading-tight">
              Boost your  <br/> leads
              </h2>
              <p className="text-gray-300 leading-relaxed">
              Sending personalized messages with the press of a button! Let Us Get You Any International Mobile Number You Want… Pluse Marketing CRM is an all-in-one sales and marketing platform that automatically grows your business.
              </p>          
              <PrimaryBtn text="Learn More" />
            </div>
  
          
  
            {/* Right Column */}
            <div className="space-y-6 lg:w-[30%]">
              <h3 className="text-xl font-semibold pb-2 border-b border-purple-400/30">
              CRM & Lead Catch!
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-3">
                Emails & Texts That Are <br/>Hard To Ignore.
                </li>
                <li className="flex items-center gap-3">
                Smart And Hassel Free <br/>Business Line.
                </li>
              </ul>
            </div>
          </div>
       
        {/* Background Text Overlay */}
        <div
          className="absolute bottom-[-10%] left-0 w-full text-[10vw] text-center font-bold pointer-events-none select-none overflow-hidden"
          style={{
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)',
            color: 'transparent'
          }}
        >
          CRO
        </div>
        </div>
  
       
  
        {/* Purple Glow Effects */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px] -z-10" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full filter blur-[100px] -z-10" />
      </main>
    )
  };

export default AllInOneSection;
