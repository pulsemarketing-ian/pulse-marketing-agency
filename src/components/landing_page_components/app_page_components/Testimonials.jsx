import Image from 'next/image';
import React from 'react';
import { MdPlayArrow } from "react-icons/md";

const Testimonials = () => {

  return (
    <>
      <div className="bg-darkblue text-white py-12 w-[1200px] mx-auto"
     style={{
      backgroundImage:"url('/images/app_page_images/radial.png')",
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat'
    }}
      >
        <div className="text-start mb-10"  style={{
        backgroundImage:"url('/images/app_page_images/radial.png')",
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat'
      }}>
          <p className="uppercase text-sm font-light"> <span class="text-cyan-500 mr-2">•</span>Client Testimonials & Reviews</p>
          <h2 className="text-5xl font-medium leading-tight">What Our Happy <br/> Clients Say About Us</h2>
        </div>
        <div className="flex justify-center gap-6 px-8">
          {/* Testimonial Card 1 */}
          <div className="bg-[#28282B] rounded-2xl p-6 w-[20%] flex-shrink-0 text-center shadow-lg">
            <div className="relative w-auto h-auto rounded-lg overflow-hidden mb-4">
              <Image src={"/images/app_page_images/client (1).png"} width={1000} height={1000}  alt="Client 1" className="w-full h-full object-contain" />

              {/* play icon */}
              <div className="flex absolute bottom-0 items-center justify-center space-x-2">
                <div className="rounded-full bg-white w-8 h-8 flex items-center justify-center text-cyan-500">
                <MdPlayArrow />
                </div>
              </div>
            </div>

            <div className='flex justify-between w-full item-center'>

              <Image src={'/images/app_page_images/circle.png'} width={70} height={50}/>
              <p className="text-sm text-white">Name</p>
            </div>

          </div>

          {/* Testimonial Card 2 */}
          <div className="bg-[#28282B] rounded-2xl p-6 w-[20%] flex-shrink-0 text-center shadow-lg">
            <div className="relative w-auto h-auto rounded-lg overflow-hidden mb-4">
              <Image src={"/images/app_page_images/client (2).png"} width={1000} height={1000}  alt="Client 1" className="w-full h-full object-contain" />

              {/* play icon */}
              <div className="flex absolute bottom-0 items-center justify-center space-x-2">
                <div className="rounded-full bg-white w-8 h-8 flex items-center justify-center text-cyan-500">
                <MdPlayArrow />
                </div>
              </div>
            </div>

            <div className='flex justify-between w-full item-center'>

              <Image src={'/images/app_page_images/circle.png'} width={70} height={50}/>
              <p className="text-sm text-white">Name</p>
            </div>

          </div>


          <div className="bg-[#28282B] rounded-2xl p-6 w-[20%] flex-shrink-0 text-center shadow-lg">
            <div className="relative w-auto h-auto rounded-lg overflow-hidden mb-4">
              <Image src={"/images/app_page_images/client (1).png"} width={1000} height={1000}  alt="Client 1" className="w-full h-full object-contain" />

              {/* play icon */}
              <div className="flex absolute bottom-0 items-center justify-center space-x-2">
                <div className="rounded-full bg-white w-8 h-8 flex items-center justify-center text-cyan-500">
                <MdPlayArrow />
                </div>
              </div>
            </div>

            <div className='flex justify-between w-full item-center'>

              <Image src={'/images/app_page_images/circle.png'} width={70} height={50}/>
              <p className="text-sm text-white">Name</p>
            </div>

          </div>


          <div className="bg-[#28282B] rounded-2xl p-6 w-[20%] flex-shrink-0 text-center shadow-lg">
            <div className="relative w-auto h-auto rounded-lg overflow-hidden mb-4">
              <Image src={"/images/app_page_images/client (2).png"} width={1000} height={1000}  alt="Client 1" className="w-full h-full object-contain" />

              {/* play icon */}
              <div className="flex absolute bottom-0 items-center justify-center space-x-2">
                <div className="rounded-full bg-white w-8 h-8 flex items-center justify-center text-cyan-500">
                <MdPlayArrow />
                </div>
              </div>
            </div>

            <div className='flex justify-between w-full item-center'>

              <Image src={'/images/app_page_images/circle.png'} width={70} height={50}/>
              <p className="text-sm text-white">Name</p>
            </div>

          </div>

          <div className="bg-[#28282B] rounded-2xl p-6 w-[20%] flex-shrink-0 text-center shadow-lg">
            <div className="relative w-auto h-auto rounded-lg overflow-hidden mb-4">
              <Image src={"/images/app_page_images/client (1).png"} width={1000} height={1000}  alt="Client 1" className="w-full h-full object-contain" />

              {/* play icon */}
              <div className="flex absolute bottom-0 items-center justify-center space-x-2">
                <div className="rounded-full bg-white w-8 h-8 flex items-center justify-center text-cyan-500">
                <MdPlayArrow />
                </div>
              </div>
            </div>

            <div className='flex justify-between w-full item-center'>

              <Image src={'/images/app_page_images/circle.png'} width={70} height={50}/>
              <p className="text-sm text-white">Name</p>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Testimonials;
