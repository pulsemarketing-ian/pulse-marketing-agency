"use client";
import Image from "next/image";
import Slider from "react-slick";

const BrandLogoCards = () => {
  const MySliderArr = [
    { image: "/images/tiktok.png" },
    { image: "/images/shopify-partners.png" },
    { image: "/images/google-partner.png" },
    { image: "/images/canada-logo.png" },
    { image: "/images/meta-logo.png" },
    { image: "/images/tiktok.png" },
    { image: "/images/shopify-partners.png" },
    { image: "/images/google-partner.png" },
    { image: "/images/canada-logo.png" },
    { image: "/images/meta-logo.png" },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768, // Tablet & Mobile view
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Mobile view
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="w-full overflow-hidden mt-20 md:mt-5 md:mb-5">
      <Slider {...settings}>
        {MySliderArr.map((item, index) => (
          <div key={index} className="flex justify-center">
            <div className="flex h-[10vh] md:h-[15vh] lg:h-[20vh] w-full items-center justify-center rounded-md px-4 md:px-6">
                 <Image
                  src={item.image}
                  alt={index}
                  width={200}
                  height={0}
                  className="filter-invert"
                />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandLogoCards;
