import Image from "next/image";
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
import Link from "next/link";

export default function IanSection(){
    return(
        <> 
        {/* main section */}
        <main className="md:h-[900px] h-[2100px] md:mt-16 w-full flex-col items-center gap-4 flex">
            {/* heading */}
            <div className="md:w-[1200px] w-full h-[80px] md:h-[50px] flex items-center justify-center">
                <h1 className="md:text-5xl text-4xl font-bold">About Us</h1>
            </div>
            {/* left text section */}
            <div className="md:w-[1200px] mt-0 w-[90%] flex flex-col items-center justify-between md:flex-row h-full md:h-[720px]">
                <div className="flex flex-col p-5 md:p-4 md:h-full h-[70%] w-full md:w-[58%]">
                    <h2 className="text-xl font-semibold">Principal, Ian Slater</h2>
                    <p className="mt-3 md:text-md text-xs md:leading-tight leading-snug"><span className="mb-2">Ian Slater<br/></span>
                    I’ve always been obsessed with business, 
                    branding, and the power of a strong narrative.
                     Growing up on the coast of British Columbia with 
                    two older brothers, I had to be competitive—whether
                    it was getting to the dinner table first, winning
                    in sports, or pushing myself in my studies. That
                     competitive mindset carried me through playing 
                     NCAA tennis in California and straight into the
                     world of business, where I quickly realized that the best brands
                     don’t just sell products—they sell trust, culture, and emotion.
                     </p>
                     <p className="mt-3 md:text-md text-xs md:leading-tight leading-snug">Nike doesn’t sell shoes. It sells an identity. Banks don’t sell
                         mortgages. They sell security. I’ve spent the last decade 
                         helping brands figure out what they really sell and how to 
                         connect with their audience in a way that lasts. From my 
                         early days raking leaves and shoveling driveways as a kid,
                          to doing $5 Fiverr jobs, to leading six-figure software 
                          projects, my journey has been about learning, failing,
                        adapting, and winning.
                    </p>
                    <p className="mt-3 md:text-md text-xs md:leading-tight leading-snug">
                    Since 2015, I’ve worked with over 8,000 clients—startups,
                     established businesses, and CEOs—helping them craft brand
                     stories that cut through the noise. At Pulse Marketing, 
                     I work daily with entrepreneurs looking to build something
                     meaningful. And I don’t do it alone—my marketing assistant,
                     Maverick, is always by my side. He’s a two-year-old 
                     purebred Siberian Husky, a trusted companion, and an 
                    expert in keeping me on my toes.
                    </p>
                    <p className="mt-3 md:text-md text-xs md:leading-tight leading-snug">
                    Brand Like a Boss isn’t just another business book.
                    It’s everything I’ve learned—through wins, losses,
                    and lessons—about branding, storytelling, and business 
                    success. Whether you’re building a brand from scratch
                    or refining what you already have, I hope this book
                    helps you level up and create something truly unforgettable. 
                    </p>
                    {/* button */}
                    <div className="mt-4">
                    <Link href={"https://www.ianslater.ca/"} target="_blank">
                    <PrimaryBtn text={"Visit my site"} onClick={""} icon={""}/>
                    </Link>
                    </div>
                </div>
                {/* right image section */}
                <div className="bg-gray-500 md:h-[670px] h-[22%] w-full md:w-[40%]">
                    <Image 
                    src={"/images/about_page_images/ian-slater.jpg"} 
                    height={0} width={0} alt="ian slater"
                    className="w-[100%] h-[100%]"></Image>
                </div>
            </div>
        </main>
        </>
    )
}