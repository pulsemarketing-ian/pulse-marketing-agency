import Image from "next/image";
import Slider from "react-slick";
const BrandLogoCards = () => {
    const MySliderArr = [
      
      { image: "/images/Tiktok-logo.webp" },
      { image: "/images/shopify-logo.webp" },
      { image: "/images/google-partner-logo.webp" },
      { image: "/images/cdpa-logo.webp" },
      { image: "/images/meta-logo.webp" },
      { image: "/images/Tiktok-logo.webp" },
      { image: "/images/shopify-logo.webp" },
      { image: "/images/google-partner-logo.webp" },
      { image: "/images/cdpa-logo.webp" },
      { image: "/images/meta-logo.webp" },
    ];
  
    const settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
  
    return (
      <div className="w-full overflow-hidden lg:mt-15 ">
        <Slider {...settings}>
          {MySliderArr.map((item, index) => (
            <div key={index} className="flex justify-between">
              <div className="flex h-[10vh] w-[93%] items-center justify-center rounded-md px-6 py-8 md:w-[95%] lg:h-[20vh]">
                <Image
                  src={item.image}
                  alt={`Slide ${index + 1}`}
                  width={300}
                  height={300}
                  className="filter-invert"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
export default BrandLogoCards