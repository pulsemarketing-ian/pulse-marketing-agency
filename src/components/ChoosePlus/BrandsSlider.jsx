// import React from "react";
// import Image from "next/image";
// import Slider from "react-slick";


// const BrandsSlider = () => {
//   const brandImagesArr = [
//     { img: "/01-1.png" },
//     { img: "/2.webp" },
//     { img: "/3.webp" },
//     { img: "/4.webp" },
//     { img: "/5.webp" },
//     { img: "/6.webp" },
//     { img: "/7.webp" },
//     { img: "/8.webp" },
//     // { img: "/9.webp" },
//     // { img: "/10.png" },
//   ];

//   const SecondSliderArr = [
//     { img: "/10.png" },
//     { img: "/11.png" },
//     { img: "/12.webp" },
//     { img: "/13.png" },
//     { img: "/14.webp" },
//     { img: "/15.png" },
//     { img: "/16.webp" },
//     { img: "/17.png" },
//     // { img: "/18.png" },
//     // { img: "/19.png" },
//     // { img: "/20.webp" },
//   ];

//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <>
//     <main className="lg:w-[90%] px-4 m-auto overflow-hidden">
//       {/* <div className="md:w-[100%] flex flex-wrap justify-between items-center">
//         {brandImagesArr.map((item, index) => (
//           <div
//             key={index}
//             className="bg-[#f5f5f5] transition-all duration-500 hover:rounded-none ease-in-out
//              hover:scale-110 w-[45%] md:w-[30%] lg:w-[18%] mx-2 my-2 flex items-center justify-center h-[220px]
//               md:h-[270px] rounded-lg p-4"
//           >
//             <Image
//               src={item.img}
//               alt="Brand Image"
//               width={170}
//               height={170}
//               placeholder="blur"
//               blurDataURL={item.img}
//             />
//           </div>
//         ))}
//       </div> */}
//     <div className="w-full overflow-hidden">
//   <Slider {...settings}>
//   {/* <div className="flex flex-row flex-wrap items-center w-[80%] ">
//       {brandImagesArr.map((item, index) => (
//         <div
//           key={index}
//           className="bg-[#f5f5f5] transition-all duration-500 hover:rounded-none ease-in-out
//            hover:scale-110 sm:w-[45%] w-[45%] md:w-[10%] lg:w-[30.333%] lg:m-4 mx-2 my-2 flex items-center justify-center h-[220px]
//             md:h-[270px] rounded-lg p-4 float-left"
//         >
//           <Image
//             src={item.img}
//             alt="Brand Image"
//             width={170}
//             height={170}
//             placeholder="blur"
//             blurDataURL={item.img}
//           />
//         </div>
//       ))}
//     </div> */}

// <div className="flex flex-row flex-wrap items-center justify-center w-[80%] ">
//       {brandImagesArr.map((item, index) => (
//         <div
//           key={index}
//           className="bg-[#f5f5f5] transition-all duration-500 hover:rounded-none ease-in-out
//            hover:scale-110 sm:w-[45%] w-[45%] md:w-[20%] lg:w-[22%] lg:m-4 mx-2 my-2 flex items-center justify-center h-[220px]
//             md:h-[270px] rounded-lg p-4 float-left"
//         >
//           <Image
//             src={item.img}
//             alt="Brand Image"
//             width={170}
//             height={170}
//             placeholder="blur"
//             blurDataURL={item.img}
//           />
//         </div>
//       ))}
//     </div>


//     <div className="flex flex-row flex-wrap items-center justify-center w-[80%] ">
//       {SecondSliderArr.map((item, index) => (
//         <div
//           key={index}
//           className="bg-[#f5f5f5] transition-all duration-500 hover:rounded-none ease-in-out
//            hover:scale-110 sm:w-[45%] w-[45%] md:w-[20%] lg:w-[22%] lg:m-4 mx-2 my-2 flex items-center justify-center h-[220px]
//             md:h-[270px] rounded-lg p-4 float-left"
//         >
//           <Image
//             src={item.img}
//             alt="Brand Image"
//             width={170}
//             height={170}
//             placeholder="blur"
//             blurDataURL={item.img}
//           />
//         </div>
//       ))}
//     </div>

//   </Slider>
// </div>
// </main>

//     </>
//   );
// };

// export default BrandsSlider;








import React from "react";
import Image from "next/image";
import Slider from "react-slick";


const BrandsSlider = () => {
  const brandImagesArr = [
    { img: "/01-1.png" },
    { img: "/2.webp" },
    { img: "/3.webp" },
    { img: "/4.webp" },
    { img: "/5.webp" },
    { img: "/6.webp" },
    { img: "/7.webp" },
    { img: "/8.webp" },
    // { img: "/9.webp" },
    // { img: "/10.png" },
  ];

  const SecondSliderArr = [
    { img: "/10.png" },
    { img: "/11.png" },
    { img: "/12.webp" },
    { img: "/13.png" },
    { img: "/14.webp" },
    { img: "/15.png" },
    { img: "/16.webp" },
    { img: "/17.png" },
    // { img: "/18.png" },
    // { img: "/19.png" },
    // { img: "/20.webp" },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
    <main className="lg:w-[90%] px-4 m-auto overflow-hidden">
      {/* <div className="md:w-[100%] flex flex-wrap justify-between items-center">
        {brandImagesArr.map((item, index) => (
          <div
            key={index}
            className="bg-[#f5f5f5] transition-all duration-500 hover:rounded-none ease-in-out
             hover:scale-110 w-[45%] md:w-[30%] lg:w-[18%] mx-2 my-2 flex items-center justify-center h-[220px]
              md:h-[270px] rounded-lg p-4"
          >
            <Image
              src={item.img}
              alt="Brand Image"
              width={170}
              height={170}
              placeholder="blur"
              blurDataURL={item.img}
            />
          </div>
        ))}
      </div> */}
    <div className="w-full overflow-hidden">
  <Slider {...settings}>
  {/* <div className="flex flex-row flex-wrap items-center w-[80%] ">
      {brandImagesArr.map((item, index) => (
        <div
          key={index}
          className="bg-[#f5f5f5] transition-all duration-500 hover:rounded-none ease-in-out
           hover:scale-110 sm:w-[45%] w-[45%] md:w-[10%] lg:w-[30.333%] lg:m-4 mx-2 my-2 flex items-center justify-center h-[220px]
            md:h-[270px] rounded-lg p-4 float-left"
        >
          <Image
            src={item.img}
            alt="Brand Image"
            width={170}
            height={170}
            placeholder="blur"
            blurDataURL={item.img}
          />
        </div>
      ))}
    </div> */}

<div className="flex flex-row flex-wrap items-center justify-center w-[80%] ">
      {brandImagesArr.map((item, index) => (
        <div
          key={index}
          className="bg-[#f5f5f5] transition-all duration-500 hover:rounded-none ease-in-out
           hover:scale-110 sm:w-[45%] w-[45%] md:w-[20%] lg:w-[22%] lg:m-4 mx-2 my-2 flex items-center justify-center h-[220px]
            md:h-[270px] rounded-lg p-4 float-left"
        >
          <Image
            src={item.img}
            alt="Brand Image"
            width={170}
            height={170}
            placeholder="blur"
            blurDataURL={item.img}
          />
        </div>
      ))}
    </div>


    <div className="flex flex-row flex-wrap items-center justify-center w-[80%] ">
      {SecondSliderArr.map((item, index) => (
        <div
          key={index}
          className="bg-[#f5f5f5] transition-all duration-500 hover:rounded-none ease-in-out
           hover:scale-110 sm:w-[45%] w-[45%] md:w-[20%] lg:w-[22%] lg:m-4 mx-2 my-2 flex items-center justify-center h-[220px]
            md:h-[270px] rounded-lg p-4 float-left"
        >
          <Image
            src={item.img}
            alt="Brand Image"
            width={170}
            height={170}
            placeholder="blur"
            blurDataURL={item.img}
          />
        </div>
      ))}
    </div>

  </Slider>
</div>
</main>

    </>
  );
};

export default BrandsSlider;