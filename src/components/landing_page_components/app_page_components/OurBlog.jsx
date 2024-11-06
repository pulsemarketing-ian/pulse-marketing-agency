import React from 'react';
import PrimaryBtn from '../PrimaryBtns/PrimaryBtn';
import Image from 'next/image';

const OurBlog = () => {
  return (
    <React.Fragment>
        <main className="w-[1200px] mx-auto py-6">
            {/* top heading */}
            <div className="flex justify-between items-baseline">
                <div>
                    <p> <span class="text-cyan-500 mr-2">•</span> Our Blog</p>
                    <h2 className="text-5xl font-medium leading-tight">What's New <br/>in Our Blogs</h2>
                </div>
                <PrimaryBtn text={'View All Blogs'}/>
            </div>

            {/* blog content  */}
            <div className="flex flex-wrap justify-between my-4">
                    <div className="flex flex-col space-y-2 w-[28%]">
                        <Image src={"/images/app_page_images/blog-img (1).png"} alt="" width={300} height={300} />
                        <div className="px-4 flex flex-col gap-3  mt-3">
                        <span className="bg-[#222020] border-white text-sm rounded-2xl px-4 w-[50%]">App Development</span>
                        <p>
                        UAE's Rapid Rise in AI: Groundbreaking Developments Shaping the Future
                        </p>
                        <ul>
                        <li className="list-disc">10 min read</li>
                        </ul>
                        </div>
                    </div>

                    {/* blog 2 */}
                    <div className="flex flex-col space-y-2 w-[28%]">
                        <Image src={"/images/app_page_images/blog-img (3).png"} alt="" width={300} height={300} />
                        <div className="px-4 flex flex-col gap-3 mt-3">
                        <span className="bg-[#222020] border-white text-sm rounded-2xl px-4 w-[50%]">App Development</span>
                        <p>
                        UAE's Rapid Rise in AI: Groundbreaking Developments Shaping the Future
                        </p>
                        <ul>
                        <li className="list-disc">10 min read</li>
                        </ul>
                        </div>
                    </div>

                    {/* blog 3 */}
                    <div className="flex flex-col space-y-2 w-[35%]">
                        <Image src={"/images/app_page_images/blog-img (2).png"} alt="" width={430} height={430} />
                        <div className="px-4 flex flex-col gap-3  mt-3">
                        <span className="bg-[#222020] border-white text-sm rounded-2xl px-4 w-[45%]">App Development</span>
                        <p>
                        UAE's Rapid Rise in AI: Groundbreaking Developments Shaping the Future
                        </p>
                        <ul>
                        <li className="list-disc">10 min read</li>
                        </ul>
                        </div>
                    </div>
            </div>
        </main>
    </React.Fragment>
  )
}

export default OurBlog