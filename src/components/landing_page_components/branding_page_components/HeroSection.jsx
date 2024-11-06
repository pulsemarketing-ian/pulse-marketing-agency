'use client'
import React, {useState} from 'react'
import Navbar from '@/components/landing_page_components/Navbar'
import Image from 'next/image'
import PrimaryBtn from '../PrimaryBtns/PrimaryBtn'
const HeroSection = () => {
    const [budget, setBudget] = useState(5000);

  return (
    <React.Fragment>
        <main 
         style={{
             backgroundImage: "url('/images/app_page_images/app-hero.png')",
             backgroundSize: "cover",
            }}
            >
            <Navbar/>
            <div className='h-[100vh]  flex justify-between items-center flex-row relative w-[1200px] mx-auto'>
                {/* hero heading  */}
                <div className="w-[45%] flex-col">
                    <div className='flex items-center gap-1 mb-2 w-auto'>
                        <Image
                        src="/images/services_page_images/blue-dot.png"
                        alt="blue-dot"
                        width={20}
                        height={20}
                        />
                        <p>Logo Design & Branding</p>
                    </div>

                    {/* heading main  */}
                    <h2 className="text-5xl font-medium leading-tight text-left">
                    full-service branding <br/>Agency with a difference
                    </h2>
                </div>

                    {/* hero form  */}
                    <div className="w-[30%] bg-white bg-opacity-10 backdrop-blur-md rounded-3xl py-5 px-10 max-w-md translate-y-8 shadow-lg text-white">
                        <h2 className="text-2xl font-bold mb-3">Have any questions?</h2>
                        
                        <form className="space-y-2">
                        <div>
                            <label className="block text-sm font-medium mb-1">Your name*</label>
                            <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full bg-transparent border   border-gray-300 rounded-xl px-3 py-1 outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Your email*</label>
                            <input
                            type="email"
                            placeholder="Your email"
                            className="w-full bg-transparent border  border-gray-300 rounded-xl px-3 py-1 outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Your number*</label>
                            <input
                            type="tel"
                            placeholder="Your number"
                            className="w-full bg-transparent border  border-gray-300 rounded-xl px-3 py-1 outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">What is your budget?</label>
                            <div className="flex items-center">
                            <span className="text-sm mr-2">USD 5K</span>
                            <input
                                type="range"
                                min="5000"
                                max="100000"
                                value={budget}
                                onChange={(e) => setBudget(e.target.value)}
                                className="flex-grow appearance-none bg-gray-300 h-1 rounded-full outline-none"
                            />
                            <span className="text-sm ml-2">USD 100K +</span>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Tell us about the project</label>
                            <textarea
                            placeholder="Type Here"
                            className="w-full bg-transparent border  border-gray-300 rounded-xl px-3 py-1 outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                            ></textarea>
                        </div>
                            <PrimaryBtn text={'Submit'}/>
                        </form>
                    </div>

            {/* <div className='bg-my-blue-gradient rounded-full p-3 absolute bottom-6 right-6'>
                <Image
                src={'/images/services_page_images/inbox.png'}
                alt="inbox"
                width={15}
                height={15}
                />
            </div> */}

            </div>
        </main>
    </React.Fragment>
  )
}

export default HeroSection






