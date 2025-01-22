// 'use client';
// import React, {useEffect} from "react";
// import Image from "next/image";
// import ContentTab from "./ContentTab";
// import { Reveal } from "../../utils/Reveal";
// import { FireApi } from "../../../utils/useRequest";

// const Projects = () => {
//   const [tabImage, setTabImage] = React.useState(0);
//   const [tabImageIndex, setTabImageIndex] = React.useState(0);
//   const [projectContent, setProjectContent] = React.useState([]);
//   const [projectImages, setProjectImages] = React.useState([]);
  
//   const GetProjectContent = async () => {
//     try {
//       const res = await FireApi("component/read/?section=project-content", "GET");
//       console.log("Response:", res);

//       if (res.status === true) {
//         setProjectContent(res?.data?.components);
//       } else {
//         console.log("An error occurred");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const GetProjectTabsImages = async () => {
//     try {
//       const res = await FireApi("component/read/?section=project-tab-images", "GET");
//       console.log("Response:", res);

//       if (res.status === true) {
//         const images = res.data?.components[0]?.pictures || [];
//         setProjectImages(images);
//       } else {
//         console.log("An error occurred");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   useEffect(() => {
//     GetProjectTabsImages();
//     GetProjectContent();
//   }, [])

//   return (
//     <>
//        <main className="w-full flex-col-reverse md:flex md:flex-row lg:flex justify-between">
//         {/* Project section left box */}
//         <div className="w-[90%] rounded-md p-5 md:p-0 mx-auto md:mx-0 md:w-[40%] flex items-center justify-center">
//           {projectImages[tabImageIndex] && (
//             <Image
//               src={`/${projectImages[tabImageIndex]}`}
//               alt={`tab-image-${tabImageIndex}`}
//               width={200}
//               height={200}
//             />
//           )}
//         </div>

//         {/* Project section right box */}
//         <div className="w-[100%] px-6 md:px-0 md:w-[56%] flex flex-row justify-between relative ct-projects">
//           <div className="w-[100%] md:w-[70%]">
//             {/* Top heading */}
//             <main className="w-full m-auto">
//               <div className="justify-between items-center py-8 md:py-20">
//                 <div className="w-[100%] justify-center items-center">
//                   <Reveal>
//                     {projectContent.map((item, index) => (
//                       <h1 key={index} className="poppins-medium text-4xl">
//                         {item.header}
//                       </h1>
//                     ))}
//                   </Reveal>
//                 </div>

//                 <div className="w-[90%]">
//                   <Reveal>
//                     {projectContent.map((item, index) => (
//                       <p key={index} className="poppins-light font-light text-[14px] my-3">
//                         {item.content}
//                       </p>
//                     ))}
//                   </Reveal>
//                 </div>
//               </div>
//             </main>

//             {/* Tab component */}
//             <ContentTab
//               tabImage={tabImageIndex}
//               setTabImage={setTabImageIndex}
//             />
//           </div>

//           {/* Additional images if needed */}
//           <div className="w-[28%] absolute bottom-0 right-0">
//             {projectImages[tabImageIndex] && (
//               <Image
//                 src={`/${projectImages[tabImageIndex]}`}
//                 alt={`tab-image-${tabImageIndex}`}
//                 width={300}
//                 height={300}
//               />
//             )}
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default Projects;




'use client';
import Image from "next/image";
import React from "react";
import ContentTab from "./ContentTab";
import { Reveal } from "../../utils/Reveal";

const Projects = () => {
  const [tabImage, setTabImage] = React.useState(0);

  return (
    <>
      <main className="w-full flex-col-reverse md:flex md:flex-row lg:flex justify-between "     
      style={{
      backgroundImage: "url('/images/app_page_images/radial.png')",
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat'
    }}>
        {/* project section left box  */}
        <div className="w-[90%] rounded-md p-5 md:p-0 mx-auto md:mx-0 md:w-[40%] flex items-center justify-center ">
          {tabImage === 0 && (
            <Image src={"/mob-app01.png"} alt="mob1" width={200} height={200} />
          )}
          {tabImage === 1 && (
            <Image src={"/mob-app03.png"} alt="mob2" width={200} height={200} />
          )}
          {tabImage === 2 && (
            <Image src={"/mob-app02.png"} alt="mob3" width={200} height={200} />
          )}
        </div>

        {/* project section right box */}
        <div className="w-[100%] px-6 md:px-0 md:w-[56%] flex flex-row justify-between relative ct-projects">
          {/* tab box for project  */}
          <div className="w-[100%] md:w-[70%]">
            {/* top heading */}
            <main className=" w-full m-auto">
              <div className=" justify-between items-center py-8 md:py-20">
                <div className="w-[100%] justify-center items-center">
                  <Reveal>
                    <h1 className="poppins-medium text-4xl">
                      Some of our <br /> favorite projects
                    </h1>
                  </Reveal>
                </div>

                <div className="w-[90%]">
                  <Reveal>
                    <p className=" poppins-light font-light text-[14px] my-3">
                    Join us on a journey to create something truly extraordinary. Together, we&apos;ll turn your dreams into reality. Partner with us to get the job done right—professionally, efficiently, and with exceptional results.
                    </p>
                  </Reveal>
                </div>
              </div>
            </main>

            <ContentTab tabImage={tabImage} setTabImage={setTabImage} />
          </div>

          <div className="w-[28%] absolute bottom-0 right-0">
            {tabImage === 0 && (
              <Image src={"/mob-app-mock01.png"} alt="mob" width={300} height={300} />
            )}
            {tabImage === 1 && (
              <Image src={"/mob-app-mock03.png"} alt="mob4" width={300} height={300} />
            )}
            {tabImage === 2 && (
              <Image src={"/mob-app-mock02.png"} alt="mob5" width={300} height={300} />
            )}

            
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;