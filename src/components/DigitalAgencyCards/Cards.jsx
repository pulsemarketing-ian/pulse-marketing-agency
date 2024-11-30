// "use client";
// import React, { useEffect, useState } from "react";
// import { Reveal } from "../../utils/Reveal";
// import Image from "next/image";
// import { FireApi } from "../../../utils/useRequest";

// const UpperTextComponent = () => {
//   const [agencyDetails, setAgencyDetails] = useState([]);

//   const DigitalAgencyContent = async () => {
//     try {
//       const res = await FireApi(
//         "component/read/?section=digital-agency-content",
//         "GET",
//       );
//       console.log("Response:", res);

//       if (res.status === true) {
//         setAgencyDetails(res?.data?.components);
//       } else {
//         console.log("An error occurred");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   useEffect(() => {
//     DigitalAgencyContent();
//   }, []);
//   return (
//     <>
//      <main>
//         <div className="m-auto flex-row items-center justify-between pb-10 md:flex md:pb-12 lg:w-[85%]">
//           <div className="w-[80%] md:w-[50%]">
//             <Reveal>
//               {agencyDetails?.map((item) => (
//                 <h1 key={item._id} className="poppins-medium ct-heading text-5xl">
//                   {item?.header}
//                 </h1>
//               ))}
//             </Reveal>
//           </div>
//           <div className="poppins-light mt-6 w-[90%] font-light md:mt-0 md:w-[50%]">
//             <Reveal>
//               {agencyDetails?.map((item) => (
//                 <p key={item._id} className="float-right md:w-[60%]">
//                   {item?.content}
//                 </p>
//               ))}
//             </Reveal>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// const Cards = () => {
//   return (
//     <>
//       <main className="card-section m-auto w-full pt-16 lg:w-[85%]">
//         <div className="m-auto  w-full px-10">
//           <UpperTextComponent />

//           <div className="mx-auto flex w-full flex-wrap items-center justify-between px-8 lg:w-[85%] lg:px-0">
//             {/* card -one  */}
//             <div className="card-css relative z-10 w-[48%] rotate-[-8deg] transform rounded-2xl bg-my-blue-gradient py-12 transition-transform duration-300 hover:rotate-0 hover:scale-110 hover:cursor-pointer hover:shadow-glow lg:w-[16%]">
//               <div className="flex translate-x-6 flex-col justify-center gap-4">
//                 <Image
//                   alt="img-alt"
//                   src={"/img (1).png"}
//                   width={40}
//                   height={40}
//                 />
//                 <h3 className="poppins-medium card-text">
//                   Web Design <br />
//                   Development
//                 </h3>
//               </div>

//               <h2 className="poppins-bold absolute right-0 top-0 px-[15px] pt-3 text-8xl opacity-[50%]">
//                 1
//               </h2>
//             </div>

//             <div className="card-css relative w-[48%] translate-y-3 rotate-[5deg] transform rounded-2xl bg-my-green-gradient py-12 transition-transform duration-300 hover:rotate-0 hover:scale-110 hover:cursor-pointer hover:shadow-glow lg:w-[16%]">
//               <div className="flex translate-x-6 flex-col justify-center gap-4">
//                 <Image
//                   alt="img-alt"
//                   src={"/img (6).png"}
//                   width={40}
//                   height={40}
//                 />
//                 <h3 className="poppins-medium card-text">
//                   Search Engine <br />
//                   Optimization
//                 </h3>
//               </div>
//               <h2 className="poppins-bold absolute right-0 top-0 px-[15px] pt-3 text-8xl opacity-[50%]">
//                 2
//               </h2>
//             </div>

//             <div className="card-css relative  w-[48%] -translate-y-4 rotate-[-6deg] transform rounded-2xl bg-my-purple-gradient py-12 transition-transform duration-300 hover:rotate-0 hover:scale-110 hover:cursor-pointer hover:shadow-glow lg:w-[16%]">
//               <div className="flex translate-x-6 flex-col justify-center gap-4">
//                 <Image
//                   alt="img-alt"
//                   src={"/img (5).png"}
//                   width={40}
//                   height={40}
//                 />
//                 <h3 className="poppins-medium card-text">
//                   Photography & <br />
//                   Videography
//                 </h3>
//               </div>
//               <h2 className="poppins-bold absolute right-0 top-0 px-[15px] pt-3 text-8xl opacity-[50%]">
//                 3
//               </h2>
//             </div>

//             <div className="card-css relative z-10 w-[48%] translate-y-3 rotate-[8deg] transform rounded-2xl bg-my-blue-gradient py-12 transition-transform duration-300 hover:rotate-0 hover:scale-110 hover:cursor-pointer hover:shadow-glow lg:w-[16%]">
//               <div className="flex translate-x-6 flex-col justify-center gap-4">
//                 <Image
//                   alt="img-alt"
//                   src={"/img (4).png"}
//                   width={40}
//                   height={40}
//                 />
//                 <h3 className="poppins-medium card-text w-[50%] md:w-full">
//                   Online <br />
//                   Reputation <br />
//                   Management
//                 </h3>
//               </div>
//               <h2 className="poppins-bold absolute right-0 top-0 px-[15px] pt-3 text-8xl opacity-[50%]">
//                 4
//               </h2>
//             </div>

//             <div className="card-css relative  w-[48%] -translate-y-3 rotate-[-6deg] transform rounded-2xl bg-my-green-gradient py-12 transition-transform duration-300 hover:rotate-0 hover:scale-110 hover:cursor-pointer hover:shadow-glow lg:w-[16%]">
//               <div className="flex translate-x-6 flex-col justify-center gap-4">
//                 <Image
//                   alt="img-alt"
//                   src={"/img (3).png"}
//                   width={40}
//                   height={40}
//                 />
//                 <h3 className="poppins-medium card-text">
//                   Branding <br />
//                   Packages
//                 </h3>
//               </div>
//               <h2 className="poppins-bold absolute right-0 top-0 px-[15px] pt-3 text-8xl opacity-[50%]">
//                 5
//               </h2>
//             </div>

//             <div className="card-css relative w-[48%] translate-y-4 rotate-[8deg] transform rounded-2xl bg-my-purple-gradient py-12 transition-transform duration-300 hover:rotate-0 hover:scale-110 hover:cursor-pointer hover:shadow-glow lg:w-[16%]">
//               <div className="flex translate-x-6 flex-col justify-center gap-4">
//                 <Image
//                   alt="img-alt"
//                   src={"/img (2).png"}
//                   width={40}
//                   height={40}
//                 />
//                 <h3 className="poppins-medium card-text">
//                   Mobile App <br />
//                   Development
//                 </h3>
//               </div>
//               <h2 className="poppins-bold absolute right-0 top-0 px-[15px] pt-3 text-8xl opacity-[50%]">
//                 6
//               </h2>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default Cards;

































import { Reveal } from "../../utils/Reveal";
import Image from "next/image";
import React from "react";

const UpperTextComponent = () => {
  return (
    <>
    <main>
          <div className="lg:w-[85%] md:flex flex-row justify-between items-center pb-10 md:pb-12 m-auto">
          <div className=" w-[80%] md:w-[50%]">
            <Reveal>
              <h1 className="poppins-medium text-5xl ct-heading">
              We are a full-service <br /> digital agency.
              </h1>
            </Reveal>
          </div>
          <div className="w-[90%] mt-6 md:mt-0 md:w-[50%] poppins-light font-light">
            <Reveal>
              <p className="md:w-[60%] float-right">
              Elevate your brands success with Pulse - Your trusted partner for
              cutting-edge digital solutions and unparalleled customer care in
              the USA.{" "}
              </p>
            </Reveal>
          </div>
        </div>
      </main>
    </>
  );
};

const Cards = () => {
  return (
    <>
      <main className="w-full lg:w-[85%] m-auto pt-16 card-section">
        <div className="w-full  m-auto px-10">
          <UpperTextComponent />

          <div className="lg:w-[85%] w-full flex flex-wrap justify-between items-center px-8 lg:px-0 mx-auto">
            {/* card -one  */}
            <div className="w-[48%] lg:w-[16%] py-12 rounded-2xl relative bg-my-blue-gradient rotate-[-8deg] z-10 hover:scale-110 hover:rotate-0 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300 card-css">
              <div className="flex flex-col gap-4 justify-center translate-x-6">
                <Image alt="img-alt" src={"/img (1).png"} width={40} height={40} />
                <h3 className="poppins-medium card-text">
                  Web Design <br />
                  Development
                </h3>
              </div>

              <h2 className="absolute top-0 right-0 text-8xl poppins-bold opacity-[50%] px-[15px] pt-3">
                1
              </h2>
            </div>

            <div className="w-[48%] lg:w-[16%] translate-y-3 py-12 rounded-2xl relative bg-my-green-gradient rotate-[5deg] hover:scale-110 hover:rotate-0 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300 card-css">
              <div className="flex flex-col gap-4 justify-center translate-x-6">
                <Image alt="img-alt" src={"/img (6).png"} width={40} height={40} />
                <h3 className="poppins-medium card-text">
                  Search Engine <br />
                  Optimization
                </h3>
              </div>
              <h2 className="absolute top-0 right-0 text-8xl poppins-bold opacity-[50%] px-[15px] pt-3">
                2
              </h2>
            </div>

            <div className="w-[48%] lg:w-[16%]  -translate-y-4 py-12 rounded-2xl relative bg-my-purple-gradient rotate-[-6deg] hover:scale-110 hover:rotate-0 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300 card-css">
              <div className="flex flex-col gap-4 justify-center translate-x-6">
                <Image alt="img-alt" src={"/img (5).png"} width={40} height={40} />
                <h3 className="poppins-medium card-text">
                  Photography & <br />
                  Videography
                </h3>
              </div>
              <h2 className="absolute top-0 right-0 text-8xl poppins-bold opacity-[50%] px-[15px] pt-3">
                3
              </h2>
            </div>

            <div className="w-[48%] lg:w-[16%] translate-y-3 z-10 py-12 rounded-2xl relative bg-my-blue-gradient rotate-[8deg] hover:scale-110 hover:rotate-0 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300 card-css">
              <div className="flex flex-col gap-4 justify-center translate-x-6">
                <Image alt="img-alt" src={"/img (4).png"} width={40} height={40} />
                <h3 className="poppins-medium card-text w-[50%] md:w-full">
                  Online <br/>Reputation <br />
                  Management
                </h3>
              </div>
              <h2 className="absolute top-0 right-0 text-8xl poppins-bold opacity-[50%] px-[15px] pt-3">
                4
              </h2>
            </div>

            <div className="w-[48%] lg:w-[16%]  -translate-y-3 py-12 rounded-2xl relative bg-my-green-gradient rotate-[-6deg] hover:scale-110 hover:rotate-0 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300 card-css">
              <div className="flex flex-col gap-4 justify-center translate-x-6">
                <Image alt="img-alt" src={"/img (3).png"} width={40} height={40} />
                <h3 className="poppins-medium card-text">
                  Branding <br />
                  Packages
                </h3>
              </div>
              <h2 className="absolute top-0 right-0 text-8xl poppins-bold opacity-[50%] px-[15px] pt-3">
                5
              </h2>
            </div>

            <div className="w-[48%] lg:w-[16%] translate-y-4 py-12 rounded-2xl relative bg-my-purple-gradient rotate-[8deg] hover:scale-110 hover:rotate-0 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300 card-css">
              <div className="flex flex-col gap-4 justify-center translate-x-6">
                <Image alt="img-alt" src={"/img (2).png"} width={40} height={40} />
                <h3 className="poppins-medium card-text">
                  Mobile App <br />
                  Development
                </h3>
              </div>
              <h2 className="absolute top-0 right-0 text-8xl poppins-bold opacity-[50%] px-[15px] pt-3">
                6
              </h2>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cards;