// "use client";
// import React, { useEffect, useState, useRef } from "react";
// import Header from "../layout/Header";
// import Image from "next/image";
// import { MdArrowForward } from "react-icons/md";
// import { Reveal } from "../../utils/Reveal";
// import Link from "next/link";
// import { IoMdClose } from "react-icons/io";
// import { FireApi } from "../../../utils/useRequest";

// const HeroLeftContent = ({ toggleForm, showForm }) => {
//   const calendlyContainerRef = useRef(null);
//   const [heroContent, setHeroContent] = useState([]);

//   const GettingHeroData = async () => {
//     try {
//       const res = await FireApi("component/read/?section=hero-content", "GET");

//       if (res.status === true) {
//         setHeroContent(res?.data?.components);
//       } else {
//         console.log("An error occurred");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   // calling my api
//   useEffect(() => {
//     GettingHeroData();
//   }, []);

//   useEffect(() => {
//     if (showForm) {
//       const container = calendlyContainerRef.current;

//       if (container) {
//         // Clear the container to ensure a fresh Calendly widget is loaded each time
//         container.innerHTML = "";

//         const div = document.createElement("div");
//         div.className = "calendly-inline-widget";
//         div.dataset.url = "https://calendly.com/ianpslater/20min";
//         div.style.minWidth = "150px";
//         div.style.height = "1200px";
//         container.appendChild(div);

//         const script = document.createElement("script");
//         script.type = "text/javascript";
//         script.src = "https://assets.calendly.com/assets/external/widget.js";
//         script.async = true;
//         container.appendChild(script);
//       }
//     }
//   }, [showForm]);

//   return (
//     <>
//       <main className="hre-section mt-16 w-full px-5 lg:mt-0">
//         {/* upper logos container*/}
//         <div className="flex">
//           <Reveal>
//             <Link
//               href={
//                 "https://www.bbb.org/ca/bc/vancouver/profile/digital-marketing/pulse-marketing-inc-0037-2428735/#sealclick"
//               }
//               target="_blank"
//             >
//               <Image
//                 alt="image"
//                 className="mr-8"
//                 src={"/accrebited-bussiness-logo.png"}
//                 width={125}
//                 height={125}
//               />
//             </Link>
//           </Reveal>

//           <Reveal>
//             <Link
//               href={
//                 "https://www.google.com/search?sca_esv=09379ecd0b6efd91&sca_upv=1&q=Pulse+Marketing+Inc.&ludocid=8690602816288484550&lsig=AB86z5VS1uhD8C0TEf_4MQU5HsGp&kgs=dd8e1417abb4f44a&shndl=30&shem=lnole,lsde,lsp&source=sh/x/loc/act/m1/1"
//               }
//               target="_blank"
//             >
//               <Image
//                 alt="image"
//                 src={"/google-review-logo.png"}
//                 width={125}
//                 height={125}
//               />
//             </Link>
//           </Reveal>
//         </div>
//         {/* Content Heading  */}
//         <div>
//           <Reveal>
//             {heroContent.map((item) => (
//               <h1
//                 key={item._id}
//                 className="poppins-medium mt-8 text-[1.5em] leading-[49px] md:text-[60px] md:leading-[1.3em] lg:text-[60px]"
//               >
//                 {item.header}
//               </h1>
//             ))}
//             {/* Our Objective:<br /> Increase Your <br /> Revenue. */}
//           </Reveal>
//           <div className="my-4 w-[90%] border-l-2 pl-3">
//             <Reveal>
//               {heroContent.map((item) => (
//                 <p key={item._id} className="poppins-light">{item.content}</p>
//               ))}
//             </Reveal>
//           </div>
//         </div>
//         {/* Contact Us button  */}
//         <Reveal>
//           {heroContent.map((item) => (
//             <button
//               key={item._id}
//               onClick={toggleForm}
//               className="poppins-regular contact-btn mt-8 flex items-center justify-between rounded-3xl border-none bg-white px-4 py-2 text-black outline-none ease-in-out hover:bg-my-blue-gradient hover:text-white hover:transition-all"
//             >
//               {item.name}
//               <div className="ml-2 h-full rounded-full bg-[#6EE3D7] p-[2px]">
//                 <MdArrowForward />
//               </div>
//             </button>
//           ))}
//         </Reveal>
//         <div className="md:hidden">
//           {showForm && (
//             <>
//               <div className="absolute bottom-0 right-0 h-[58%] w-[70%] -translate-y-[80px] overflow-x-hidden overflow-y-scroll rounded-lg bg-white">
//                 <div className="relative inset-0 flex w-full items-center justify-center">
//                   <button
//                     onClick={toggleForm}
//                     className="absolute right-2 top-2 z-30 bg-my-blue-gradient text-lg text-white"
//                   >
//                     {/* &times; */}
//                     <IoMdClose />
//                   </button>
//                   <div ref={calendlyContainerRef}></div>
//                 </div>
//               </div>
//             </>
//           )}

//           <div
//             onClick={toggleForm}
//             className="absolute bottom-0 right-0 w-[30%] -translate-y-16"
//           >
//             <div className="get-mv-btbn flex items-center justify-end rounded-tl-[40px] bg-[#50A2D4] px-6 py-3">
//               <h3 className="poppins-light text-lg text-white">Get in touch</h3>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// const HeroRightContent = ({ showForm, toggleForm }) => {
//   const calendlyContainerRef = useRef(null);

//   useEffect(() => {
//     if (showForm) {
//       const container = calendlyContainerRef.current;

//       if (container) {
//         // Clear the container to ensure a fresh Calendly widget is loaded each time
//         container.innerHTML = "";

//         const div = document.createElement("div");
//         div.className = "calendly-inline-widget";
//         div.dataset.url = "https://calendly.com/ianpslater/20min";
//         div.style.minWidth = "500px";
//         div.style.height = "1200px";
//         container.appendChild(div);

//         const script = document.createElement("script");
//         script.type = "text/javascript";
//         script.src = "https://assets.calendly.com/assets/external/widget.js";
//         script.async = true;
//         container.appendChild(script);
//       }
//     }
//   }, [showForm]);

//   return (
//     <>
//       <div className="h-[100vh]">
//         <div className="block-33 display--inline-top">
//           <div className="gutter relative">
//             <div className="gallery-h">
//               <div className="gallery-image relative">
//                 <div className="gallery-image__img relative">
//                   <div className="fill-dimensions cover-img first-banner-img"></div>
//                 </div>
//               </div>
//               <div className="gallery-image">
//                 <div className="gallery-image__img relative">
//                   <div className="fill-dimensions cover-img first-banner-img2"></div>
//                 </div>
//               </div>
//               <div className="gallery-image">
//                 <div className="gallery-image__img relative">
//                   <div className="fill-dimensions cover-img first-banner-img3"></div>
//                 </div>
//               </div>
//               <div className="gallery-image">
//                 <div className="gallery-image__img relative">
//                   <div className="fill-dimensions cover-img first-banner-img4"></div>
//                 </div>
//               </div>
//               <div className="gallery-image">
//                 <div className="gallery-image__img relative">
//                   <div className="fill-dimensions cover-img first-banner-img5"></div>
//                 </div>
//               </div>
//               <div className="gallery-image">
//                 <div className="gallery-image__img relative">
//                   <div className="fill-dimensions cover-img first-banner-img6"></div>
//                 </div>
//               </div>
//               <div className="gallery-image">
//                 <div className="gallery-image__img relative">
//                   <div className="fill-dimensions cover-img first-banner-img7"></div>
//                 </div>
//               </div>
//               <div className="gallery-image">
//                 <div className="gallery-image__img relative">
//                   <div className="fill-dimensions cover-img first-banner-img8"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="block-33 display--inline-top">
//           <div className="gutter relative">
//             <div className="gallery-h gallery-h--tb">
//               <div className="gallery-image relative">
//                 <div className="gallery-image__img relative">
//                   <div className="fill-dimensions cover-img second-banner"></div>
//                 </div>
//               </div>
//               <div className="gallery-image">
//                 <div className="gallery-image__img relative">
//                   <div
//                     className="fill-dimensions cover-img second-banner-img2"
//                     style={{ backgroundImage: "/web banner-02.png" }}
//                   ></div>
//                 </div>
//               </div>
//               <div className="gallery-image">
//                 <div className="gallery-image__img relative">
//                   <div className="fill-dimensions cover-img second-banner-img3"></div>
//                 </div>
//               </div>
//               <div className="gallery-image">
//                 <div className="gallery-image__img relative">
//                   <div className="fill-dimensions cover-img second-banner-img4"></div>
//                 </div>
//               </div>
//               <div className="gallery-image">
//                 <div className="gallery-image__img relative">
//                   <div className="fill-dimensions cover-img second-banner-img5"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="block-33 display--inline-top">
//           <div className="gutter relative">
//             <div className="gallery-h">
//               <div className="gallery-image relative">
//                 <div className="gallery-image__img relative">
//                   <div className="fill-dimensions cover-img third-banner"></div>
//                 </div>
//               </div>
//               <div className="gallery-image">
//                 <div className="gallery-image__img relative">
//                   <div className="fill-dimensions cover-img third-banner-img1"></div>
//                 </div>
//               </div>
//               <div className="gallery-image">
//                 <div className="gallery-image__img relative">
//                   <div className="fill-dimensions cover-img third-banner-img2"></div>
//                 </div>
//               </div>
//               <div className="gallery-image">
//                 <div className="gallery-image__img relative">
//                   <div className="fill-dimensions cover-img third-banner-img3"></div>
//                 </div>
//               </div>
//               <div className="gallery-image">
//                 <div className="gallery-image__img relative">
//                   <div className="fill-dimensions cover-img third-banner-img4"></div>
//                 </div>
//               </div>
//               <div className="gallery-image">
//                 <div className="gallery-image__img relative">
//                   <div className="fill-dimensions cover-img third-banner-img5"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {showForm && (
//           <div className="absolute bottom-0 right-0 h-[70%] w-[30%] -translate-y-20 overflow-x-hidden overflow-y-scroll rounded-lg bg-white">
//             <div className="relative inset-0 flex w-full items-center justify-center">
//               <button
//                 onClick={toggleForm}
//                 className="absolute right-2 top-2 z-20 bg-my-blue-gradient text-lg text-white"
//               >
//                 {/* &times; */}
//                 <IoMdClose />
//               </button>
//               <div ref={calendlyContainerRef}></div>
//             </div>
//           </div>
//         )}

//         <div
//           onClick={toggleForm}
//           className="get-btn absolute bottom-0 right-0 w-[30%] -translate-y-[70%]"
//         >
//           <div className="rounded-tl-[40px] bg-[#50A2D4] px-6 py-3">
//             <h3 className="poppins-light text-lg text-white">Get in touch</h3>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// const HeroSection = () => {
//   const [showForm, setShowForm] = useState(false);

//   const toggleForm = () => {
//     setShowForm(!showForm);
//   };

//   return (
//     <>
//       <main className="relative m-auto w-full lg:h-[100vh] lg:w-full">
//         <div className="relative flex w-[100%] flex-row justify-between ">
//           {/* my header component  */}

//           <Header />

//           <div className="my-20 flex w-[100%] flex-row  items-center lg:my-0 lg:w-[50%]">
//             {/* social icon component  */}
//             <div className="social-logos flex w-[8%] translate-x-0 flex-col justify-center gap-1">
//               <Link
//                 href={"https://www.facebook.com/pulsemarketing.io/"}
//                 target="_blank"
//               >
//                 <div
//                   className="flex  items-center justify-center
//                rounded-full px-0 py-3 hover:cursor-pointer hover:bg-blue-400 hover:duration-100 hover:ease-in-out"
//                 >
//                   <Image
//                     src={"/Facebook.png"}
//                     alt="facebook"
//                     width={8}
//                     height={8}
//                   />
//                 </div>
//               </Link>

//               <Link
//                 href={"https://www.instagram.com/pulsemarketing.io"}
//                 target="_blank"
//               >
//                 <div
//                   className="flex items-center  justify-center rounded-full 
//                py-3 hover:cursor-pointer hover:bg-blue-400 hover:duration-100 hover:ease-in-out"
//                 >
//                   <Image
//                     src={"/Subtract.png"}
//                     alt="subtract"
//                     width={12}
//                     height={12}
//                   />
//                 </div>
//               </Link>

//               <Link
//                 href={
//                   "https://www.linkedin.com/company/29302818/admin/feed/posts/"
//                 }
//                 target="_blank"
//               >
//                 <div
//                   className="flex  items-center justify-center rounded-full 
//               py-3 hover:cursor-pointer hover:bg-blue-400 hover:duration-100 hover:ease-in-out"
//                 >
//                   <Image
//                     src={"/Linkedin.png"}
//                     alt="linkedin"
//                     width={12}
//                     height={12}
//                   />
//                 </div>
//               </Link>

//               <Link
//                 href={"https://www.youtube.com/watch?v=mEhNo-fnGxU"}
//                 target="_blank"
//               >
//                 <div
//                   className="flex  items-center justify-center rounded-full
//                py-[14px] hover:cursor-pointer hover:bg-blue-400 hover:duration-100 hover:ease-in-out"
//                 >
//                   <Image
//                     src={"/Youtube.png"}
//                     alt="youtube"
//                     width={12}
//                     height={12}
//                   />
//                 </div>
//               </Link>
//             </div>

//             <div className="md:mt-20">
//               <HeroLeftContent toggleForm={toggleForm} showForm={showForm} />
//             </div>
//           </div>

//           <div className="hidden w-[50%] overflow-y-hidden md:h-[100vh] lg:block">
//             <HeroRightContent showForm={showForm} toggleForm={toggleForm} />
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default HeroSection;



"use client";
import React, { useEffect, useState, useRef } from "react";
import Header from "../layout/Header";
import Image from "next/image";
import { MdArrowForward } from "react-icons/md";
import { Reveal } from "../../utils/Reveal";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import Navbar from "../landing_page_components/Navbar";

const HeroLeftContent = ({ toggleForm, showForm }) => {

  const calendlyContainerRef = useRef(null);

  useEffect(() => {
    if (showForm) {
      const container = calendlyContainerRef.current;

      if (container) {
        // Clear the container to ensure a fresh Calendly widget is loaded each time
        container.innerHTML = "";

        const div = document.createElement("div");
        div.className = "calendly-inline-widget";
        div.dataset.url = "https://calendly.com/ianpslater/20min";
        div.style.minWidth = "150px";
        div.style.height = "1200px";
        container.appendChild(div);

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        container.appendChild(script);
      }
    }
  }, [showForm]);

  return (
    <>
      <main className="w-full mt-16 lg:mt-0 px-5 hre-section">
        {/* upper logos container*/}
        <div className="flex">
          <Reveal>
            <Link href={'https://www.bbb.org/ca/bc/vancouver/profile/digital-marketing/pulse-marketing-inc-0037-2428735/#sealclick'} target="_blank">
              <Image
                alt="image"
                className="mr-8"
                src={"/accrebited-bussiness-logo.png"}
                width={125}
                height={125}
              />
            </Link>
          </Reveal>
          <Reveal>
            <Link
              href={
                "https://www.google.com/search?sca_esv=09379ecd0b6efd91&sca_upv=1&q=Pulse+Marketing+Inc.&ludocid=8690602816288484550&lsig=AB86z5VS1uhD8C0TEf_4MQU5HsGp&kgs=dd8e1417abb4f44a&shndl=30&shem=lnole,lsde,lsp&source=sh/x/loc/act/m1/1"
              }
              target="_blank"
            >
              <Image
                alt="image"
                src={"/google-review-logo.png"}
                width={125}
                height={125}
              />
            </Link>
          </Reveal>
        </div>
        {/* Content Heading  */}
        <div>
          <Reveal>
            <h1 className="text-[1.5em] md:text-[60px] lg:text-[60px]  mt-8 poppins-medium leading-[49px] md:leading-[1.3em]">
              Our Objective:<br /> Increase Your <br /> Revenue.
            </h1>
          </Reveal>
          <div className="w-[90%] border-l-2 my-4 pl-3">
            <Reveal>
              <p className="poppins-light">
                Boost your brand with our expert websites, apps, and branding
                solutions. Bring your vision to life with Pulse.
              </p>
            </Reveal>
          </div>
        </div>
        {/* Contact Us button  */}
        <Reveal>
          <button
            onClick={toggleForm}
            className="bg-white hover:bg-my-blue-gradient hover:text-white hover:transition-all ease-in-out poppins-regular text-black py-2 px-4 mt-8 rounded-3xl flex justify-between items-center border-none outline-none contact-btn">
            Book Now
            <div className="bg-[#6EE3D7] p-[2px] ml-2 h-full rounded-full">
              <MdArrowForward />
            </div>
          </button>
        </Reveal>
        <div className="md:hidden">
      {showForm && (
        <>
        <div className="bg-white rounded-lg overflow-x-hidden overflow-y-scroll h-[58%] w-[70%] -translate-y-[80px] absolute bottom-0 right-0">
          
          <div className="relative w-full inset-0 flex justify-center items-center">
          <button
              onClick={toggleForm}
              className="absolute z-30 top-2 right-2 text-white text-lg bg-my-blue-gradient"
            >
              {/* &times; */}
              <IoMdClose />

            </button>
            <div ref={calendlyContainerRef}></div>

          </div>
        </div>
              </>
      )}
      
      <div
        onClick={toggleForm}
        className="absolute bottom-0 right-0 w-[30%] -translate-y-16"
      >
        <div className="bg-[#50A2D4] px-6 rounded-tl-[40px] py-3 flex items-center justify-end get-mv-btbn">
          <h3 className="poppins-light text-white text-lg">Get in touch</h3>
        </div>
      </div>
    </div>
      </main>
    </>
  );
};

const HeroRightContent = ({ showForm, toggleForm }) => {

  const calendlyContainerRef = useRef(null);

  useEffect(() => {
    if (showForm) {
      const container = calendlyContainerRef.current;

      if (container) {
        // Clear the container to ensure a fresh Calendly widget is loaded each time
        container.innerHTML = "";

        const div = document.createElement("div");
        div.className = "calendly-inline-widget";
        div.dataset.url = "https://calendly.com/ianpslater/20min";
        div.style.minWidth = "500px";
        div.style.height = "1200px";
        container.appendChild(div);

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        container.appendChild(script);
      }
    }
  }, [showForm]);
  
  return (
    <>
      <div className="h-[100vh]">
        <div className="block-33 display--inline-top">
          <div className="gutter relative">
            <div className="gallery-h">
              <div className="gallery-image relative">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img first-banner-img"></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img first-banner-img2"></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img first-banner-img3"></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img first-banner-img4"></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img first-banner-img5"></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img first-banner-img6"></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img first-banner-img7"></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img first-banner-img8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block-33 display--inline-top">
          <div className="gutter relative">
            <div className="gallery-h gallery-h--tb">
              <div className="gallery-image relative">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img second-banner"></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div
                    className="fill-dimensions cover-img second-banner-img2"
                    style={{ backgroundImage: "/web banner-02.png" }}
                  ></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img second-banner-img3"></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img second-banner-img4"></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img second-banner-img5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block-33 display--inline-top">
          <div className="gutter relative">
            <div className="gallery-h">
              <div className="gallery-image relative">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img third-banner"></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img third-banner-img1"></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img third-banner-img2"></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img third-banner-img3"></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img third-banner-img4"></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img third-banner-img5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

     {showForm && (
  <div className="bg-white rounded-lg overflow-x-hidden overflow-y-scroll h-[70%] w-[30%] -translate-y-20 absolute bottom-0 right-0">
    <div className="w-full inset-0 flex justify-center items-center relative">
      <button
        onClick={toggleForm}
        className="absolute top-2 right-2 text-white text-lg bg-my-blue-gradient z-20"
      >
        {/* &times; */}
        <IoMdClose />
      </button>
      <div ref={calendlyContainerRef}></div>

    </div>
  </div>
)}

      <div
        onClick={toggleForm}
        className="absolute bottom-0 right-0 w-[30%] -translate-y-[70%] get-btn"
      >
        <div className="bg-[#50A2D4] px-6 rounded-tl-[40px] py-3">
          <h3 className="poppins-light text-white text-lg">Get in touch</h3>
        </div>
      </div>
      </div>
    </>
  );
};

const HeroSection = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <main className="w-full lg:w-full lg:h-[100vh] m-auto relative">
        <div className="flex flex-row relative w-[100%] justify-between ">
          {/* my header component  */}

          {/* <Header /> */}
          <Navbar/>

          <div className="my-20 lg:my-0 flex flex-row  items-center w-[100%] lg:w-[50%]">
            {/* social icon component  */}
            <div className="w-[8%] flex flex-col gap-1 justify-center translate-x-0 social-logos">
              <Link 
              href={"https://www.facebook.com/pulsemarketing.io/"}
              target="_blank"
              >
              <div className="hover:bg-blue-400  hover:duration-100 hover:ease-in-out
               hover:cursor-pointer rounded-full flex items-center justify-center py-3 px-0">
                <Image
                  src={"/Facebook.png"}
                  alt="facebook"
                  width={8}
                  height={8}
                  />
              </div>
                  </Link>

            <Link 
            href={"https://www.instagram.com/pulsemarketing.io"}
            target="_blank"
            >
              <div className="hover:bg-blue-400 hover:duration-100  hover:ease-in-out hover:cursor-pointer 
               rounded-full flex items-center justify-center py-3">
                <Image
                  src={"/Subtract.png"}
                  alt="subtract"
                  width={12}
                  height={12}
                  />
              </div>  
            </Link>

              
            <Link 
            href={'https://www.linkedin.com/company/29302818/admin/feed/posts/'}
            target="_blank"
            >
              <div className="hover:bg-blue-400  hover:duration-100 hover:ease-in-out hover:cursor-pointer 
              rounded-full flex items-center justify-center py-3">
                <Image
                  src={"/Linkedin.png"}
                  alt="linkedin"
                  width={12}
                  height={12}
                  />
              </div>
                  </Link>

            <Link 
            href={'https://www.youtube.com/watch?v=mEhNo-fnGxU'}
            target="_blank"
            >
              <div className="hover:bg-blue-400  hover:duration-100 hover:ease-in-out hover:cursor-pointer
               rounded-full flex items-center justify-center py-[14px]">
                <Image
                  src={"/Youtube.png"}
                  alt="youtube"
                  width={12}
                  height={12}
                  />
              </div>
                  </Link>
            </div>

            <div className="md:mt-20">
              <HeroLeftContent toggleForm={toggleForm} showForm={showForm} />
            </div>
          </div>

          <div className="w-[50%] md:h-[100vh] overflow-y-hidden hidden lg:block">
            <HeroRightContent showForm={showForm} toggleForm={toggleForm} />
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroSection;