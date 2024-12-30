// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { Reveal } from "../../utils/Reveal";
// import Slider from "react-slick";
// import BrandsSlider from "./BrandsSlider";
// import { FireApi } from "../../../utils/useRequest";

// export const ChooseCardsSlider = () => {
//   const MySliderArr = [
//     { image: "/17.png" },
//     { image: "/1 (1).png" },
//     // { image: "/13.png" },
//     { image: "/19.png" },
//     { image: "/1 (11).png" },
//     { image: "/11.png" },
//     { image: "/1 (6).png" },
//     { image: "/10.png" },
//     { image: "/15.png" },
//     { image: "/1 (12).png" },
//   ];

//   const settings = {
//     infinite: true,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 3000,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//   };

//   const [sliderImage, setSliderImage] = useState([]);

//   const ChooseUsSlider = async () => {
//     try {
//       const res = await FireApi("component/read/?section=choose-us-slider", "GET");
//       console.log("Response:", res);

//       if (res.status === true) {
//         setSliderImage(res.data[0]?.pictures || []);
//       } else {
//         console.log("An error occurred");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   useEffect(() => {
//     ChooseUsSlider()
//   }, [])

//   return (
//     <div className="w-full overflow-hidden lg:mt-15 ">
//       <Slider {...settings}>
//         {sliderImage.map((item, index) => (
//           <div key={index} className="flex justify-between">
//             <div className="flex h-[10vh] w-[93%] items-center justify-center rounded-md bg-custom-gradient px-6 py-8 md:w-[95%] lg:h-[20vh]">
//               <Image
//                 src={`/${item}`}
//                 alt={`Slide ${index + 1}`}
//                 width={170}
//                 height={170}
//                 className="filter-invert"
//               />
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export const SomethingGreat = () => {

//   const [getData, setGetData] = useState([])

//   const FetchingData = async () => {
//     try {
//       const res = await FireApi("component/read/?section=something-great", "GET");
//       console.log("Response:", res);

//       if (res.status === true) {
//         setGetData(res?.data?.components);
//       } else {
//         console.log("An error occurred");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   useEffect(()=>{
//     FetchingData()
//   },[])

//   return(
//     <main className="mx-auto w-full px-4 md:px-0  lg:w-[77%]">
//         <div className="flex-row items-center justify-between pb-10 md:flex md:pb-12">
//           <div className=" w-[80%] md:w-[50%]">
//             <Reveal>
//               {getData.map((item) => (
//                 <h1 key={item._id} className="poppins-medium ct-heading text-5xl">
//                 {item.header}
//               </h1>
//               ))}
//             </Reveal>
//           </div>
//           <div className="poppins-light mt-6 w-[90%] font-light md:mt-0  md:w-[35%]">
//             <Reveal>
//             {getData.map((item) => (
//                 <p  key={item._id}>
//                 {item?.content}
//               </p>
//               ))}
//             </Reveal>
//           </div>
//         </div>
//       </main>
//   )
// };

// function ChoosePlus() {
//   const [chooseUs, setChooseUs] = useState([]);

//   const ChooseUs = async () => {
//     try {
//       const res = await FireApi("component/read/?section=choose-us", "GET");
//       console.log("Response:", res);

//       if (res.status === true) {
//         setChooseUs(res?.data?.components);
//       } else {
//         console.log("An error occurred");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   // calling my api
//   useEffect(() => {
//     ChooseUs();
//   }, []);

//   return (
//     <>
//       <main className="ct-padding mx-auto w-full px-8 lg:w-[75%]">
//         <div className="flex-row items-center justify-between pb-10 md:flex md:pb-12">
//           <div className=" w-[80%] md:w-[50%]">
//             <Reveal>
//               {chooseUs.map((item) => (
//                 <h1 key={item._id} className="poppins-medium ct-heading text-5xl">
//                   {item.header}
//                 </h1>
//               ))}
//             </Reveal>
//           </div>
//           <div className="poppins-light mt-6 w-[90%] font-light md:mt-0 md:w-[35%]">
//             <Reveal>
//               {chooseUs.map((item) => (
//                 <p key={item._id}>
//                  {item?.content}
//                 </p>
//               ))}
//             </Reveal>
//           </div>
//         </div>
//       </main>

//       <ChooseCardsSlider />

//       {/* <BrandsSlider /> */}
//       <hr className="my-16" />

//       <SomethingGreat/>
//     </>
//   );
// }

// export default ChoosePlus;

import React from "react";
import Image from "next/image";
import { Reveal } from "../../utils/Reveal";
import Slider from "react-slick";
import BrandsSlider from "./BrandsSlider";

export const ChooseCardsSlider = () => {
  const MySliderArr = [
    { image: "/17.png" },
    { image: "/1 (1).png" },
    // { image: "/13.png" },
    { image: "/19.png" },
    { image: "/1 (11).png" },
    { image: "/11.png" },
    { image: "/1 (6).png" },
    { image: "/10.png" },
    { image: "/15.png" },
    { image: "/1 (12).png" },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="w-full overflow-hidden lg:mt-15 ">
      <Slider {...settings}>
        {MySliderArr.map((item, index) => (
          <div key={index} className="flex justify-between">
            <div className="flex h-[10vh] w-[93%] items-center justify-center rounded-md bg-custom-gradient px-6 py-8 md:w-[95%] lg:h-[20vh]">
              <Image
                src={item.image}
                alt={`Slide ${index + 1}`}
                width={170}
                height={170}
                className="filter-invert"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

function ChoosePlus() {
  return (
    <div
      style={{
        backgroundImage: "url('/images/app_page_images/radial.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <main className="ct-padding mx-auto w-full px-8 lg:w-[75%]">
        <div className="flex-row items-center justify-between pb-10 md:flex md:pb-12">
          <div className=" w-[80%] md:w-[50%]">
            <Reveal>
              <h1 className="poppins-medium ct-heading text-5xl">
                Why Leaders <br /> Choose Pulse
              </h1>
            </Reveal>
          </div>
          <div className="poppins-light mt-6 w-[90%] font-light md:mt-0 md:w-[35%]">
            <Reveal>
              <p>
                Pulse empowers business leaders to achieve their objectives more
                swiftly and effectively. Our primary focus is to enhance client
                revenue.
              </p>
            </Reveal>
          </div>
        </div>
      </main>

      <ChooseCardsSlider />

      {/* <BrandsSlider /> */}
      <hr className="my-16" />

      <main className="mx-auto w-full px-4 md:px-0  lg:w-[77%]">
        <div className="flex-row items-center justify-between pb-10 md:flex md:pb-12">
          <div className=" w-[80%] md:w-[50%]">
            <Reveal>
              <h1 className="poppins-medium ct-heading text-5xl">
                Lets Build <br /> Something Great!
              </h1>
            </Reveal>
          </div>
          <div className="poppins-light mt-6 w-[90%] font-light md:mt-0  md:w-[35%]">
            <Reveal>
              <p>
                Join us on a journey to create something truly extraordinary.
                Together, we&apos;ll turn your dreams into reality.
              </p>
            </Reveal>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ChoosePlus;
