// components/VideoBenefitsSection.js
import Image from 'next/image';

export default function VideoBenefitSection() {
  return (
    <section className="text-white py-16  w-[1200px] mx-auto" style={{
      backgroundImage:"url('/images/app_page_images/radial.png)",
      backgroundSize:'contain',
      backgroundRepeat:'no-repeat'
    }}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 item-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-6">
            Animated Explainer <br/>Video Benefits
          </h2>
          <Image
          className='rounded-lg shadow-lg'
          src={'/images/video_page_images/benefit-img (1).png'}
          width={500}
          height={500}
          />
        </div>

      <div className='text-white text-[14px] translate-y-[40%]'>
        <p className='mb-6'>
        Our animators connect you with your prospects and turn them into sales-ready leads. We are not just bragging; we have our work to speak for us!
        </p>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
      </div>
        {/* Right Content - Image */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
          src={'/images/video_page_images/benefit-img (2).png'}
          alt="Video Editing Setup"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
