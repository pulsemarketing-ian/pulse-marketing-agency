// "use client";
// import * as React from "react";
// import { useState, useEffect } from "react";
// import Box from "@mui/material/Box";
// import Tab from "@mui/material/Tab";
// import TabContext from "@mui/lab/TabContext";
// import TabList from "@mui/lab/TabList";
// import TabPanel from "@mui/lab/TabPanel";
// import { IoMdArrowForward } from "react-icons/io";
// import { IoMdArrowBack } from "react-icons/io";
// import { FireApi } from "../../../utils/useRequest";

// export const TabsOne = () => {
//   const [tabOne, setTabOne] = useState([]);

//   const TabOneData = async () => {
//     try {
//       const res = await FireApi(
//         "component/read/?section=project-tab-one",
//         "GET",
//       );
//       console.log("Response:", res);

//       if (res.status === true) {
//         setTabOne(res?.data?.components);
//       } else {
//         console.log("An error occurred");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   useEffect(() => {
//     TabOneData();
//   }, []);

//   return (
//     <TabPanel value="1">
//       <main className="w-full">
//         <div className="items-center justify-between">
//           <div className="w-[100%] items-center justify-center">
//             {tabOne?.map((item) => (
//               <>
//                 <h3 key={item._id} className="poppins-medium text-[20px] text-[#50A2D4]">
//                   {item?.name}
//                 </h3>
//                 <h1 className="poppins-medium text-4xl">{item?.header}</h1>
//               </>
//             ))}
//           </div>
//           <div className="w-[100%]">
//             {tabOne?.map((item) => (
//               <p key={item._id} className="poppins-light my-3 text-[14px] font-light">
//                 {/* Discover a world of music with Monster Music! Stream your favorite songs, create custom playlists, and explore new tunes with ease. Enjoy high-quality sound and a user-friendly interface. Download now and unleash the music monster in you! */}
//                 {item?.content}
//               </p>
//             ))}
//           </div>
//         </div>
//       </main>
//     </TabPanel>
//   );
// };

// export const TabsTwo = () => {
//   const [tabTwo, setTabTwo] = useState([]);

//   const TabTwoData = async () => {
//     try {
//       const res = await FireApi(
//         "component/read/?section=project-tab-two",
//         "GET",
//       );
//       console.log("Response:", res);

//       if (res.status === true) {
//         setTabTwo(res?.data?.components);
//       } else {
//         console.log("An error occurred");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   useEffect(() => {
//     TabTwoData();
//   }, []);

//   return (
//     <TabPanel value="2">
//       <main className="w-full">
//         <div className="items-center justify-between">
//           <div className="w-[100%] items-center justify-center">
//             {tabTwo?.map((item) => (
//               <>
//                 <h3 key={item._id} className="poppins-medium text-[20px] text-[#50A2D4]">
//                   {item?.name}
//                 </h3>
//                 <h1 className="poppins-medium text-4xl">{item?.header}</h1>
//               </>
//             ))}
//           </div>
//           <div className="w-[100%]">
//             {tabTwo?.map((item) => (
//               <p key={item._id} className="poppins-light my-3 text-[14px] font-light">
//                 {item?.content}
//               </p>
//             ))}
//           </div>
//         </div>
//       </main>
//     </TabPanel>
//   );
// };

// export const TabsThree = () => {
//   const [tabThree, setTabThree] = useState([]);

//   const TabThreeData = async () => {
//     try {
//       const res = await FireApi(
//         "component/read/?section=project-tab-three",
//         "GET",
//       );
//       console.log("Response:", res);

//       if (res.status === true) {
//         setTabThree(res?.data?.components);
//       } else {
//         console.log("An error occurred");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   useEffect(() => {
//     TabThreeData();
//   }, []);

//   return (
//     <TabPanel value="3">
//       <main className="w-full">
//         <div className="items-center justify-between">
//           <div className="w-[100%] items-center justify-center">
//             {tabThree?.map((item) => (
//               <>
//                 <h3 key={item._id} className="poppins-medium text-[20px] text-[#50A2D4]">
//                   {item?.name}
//                 </h3>
//                 <h1 className="poppins-medium text-4xl">{item?.header}</h1>
//               </>
//             ))}
//           </div>
//           <div className="w-[100%]">
//           {tabThree?.map((item) => (
//             <p key={item._id} className="poppins-light my-3 text-[14px] font-light">
//               {item?.content}
//             </p>
//           ))}
//           </div>
//         </div>
//       </main>
//     </TabPanel>
//   );
// };

// export default function ContentTab({ tabImage, setTabImage }) {
//   const [value, setValue] = React.useState("1");

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//     setTabImage(Number(newValue) - 1);
//   };

//   const handleNext = () => {
//     const newValue = (Number(value) % 3) + 1;
//     setValue(String(newValue));
//     setTabImage(newValue - 1);
//   };

//   const handlePrevious = () => {
//     const newValue = ((Number(value) - 2 + 3) % 3) + 1;
//     setValue(String(newValue));
//     setTabImage(newValue - 1);
//   };

//   return (
//     <Box
//       sx={{
//         width: "70%",
//         typography: "body1",
//         transform: { xs: "none", sm: "none", md: "translateX(100px)" },
//       }}
//     >
//       <TabContext value={value}>
//         <TabsOne />

//         <TabsTwo />

//         <TabsThree />
//         {/* <TabPanel value="4">
//           <main className="w-full">
//             <div className="justify-between items-center">
//               <div className="w-[100%] justify-center items-center">
//                 <h3 className="text-[#50A2D4] poppins-medium text-[20px]">04</h3>
//                 <h1 className="poppins-medium text-4xl">Hassan</h1>
//               </div>
//               <div className="w-[100%]">
//                 <p className="poppins-light font-light text-[14px] my-3">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                   do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                   Ut enim ad minim.
//                 </p>
//               </div>
//             </div>
//           </main>
//         </TabPanel>

//         <TabPanel value="5">
//           <main className="w-full">
//             <div className="justify-between items-center">
//               <div className="w-[100%] justify-center items-center">
//                 <h3 className="text-[#50A2D4] poppins-medium text-[20px]">05</h3>
//                 <h1 className="poppins-medium text-4xl">Another Tab</h1>
//               </div>
//               <div className="w-[100%]">
//                 <p className="poppins-light font-light text-[14px] my-3">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                   do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                   Ut enim ad minim.
//                 </p>
//               </div>
//             </div>
//           </main>
//         </TabPanel> */}

//         <Box sx={{ borderBottom: 1, borderColor: "divider #fffff" }}>
//           <TabList
//             onChange={handleChange}
//             aria-label="lab API tabs example"
//             sx={{
//               "& .MuiTabs-indicator": {
//                 backgroundColor: "#ffffff",
//               },
//               fontFamily: "Poppins",
//             }}
//           >
//             <Tab
//               label={
//                 <Box sx={{ display: "flex", alignItems: "center" }}>
//                   <IoMdArrowBack style={{ marginRight: 8 }} />
//                   <span className="poppins-light text-[12px]">Previous</span>
//                 </Box>
//               }
//               onClick={handlePrevious}
//               value="prev"
//               sx={{
//                 color: "#ffffff",
//                 "&.Mui-selected": {
//                   color: "#ffffff",
//                   fontFamily: "Poppins",
//                 },
//               }}
//             />
//             <Tab
//               label={
//                 <Box sx={{ display: "flex", alignItems: "center" }}>
//                   <span className="poppins-light text-[12px]">Next</span>
//                   <IoMdArrowForward style={{ marginLeft: 8 }} />
//                 </Box>
//               }
//               onClick={handleNext}
//               value="next"
//               sx={{
//                 color: "#ffffff",
//                 "&.Mui-selected": {
//                   color: "#ffffff",
//                   fontFamily: "Poppins",
//                   fontSize: "12px",
//                 },
//               }}
//             />
//           </TabList>
//         </Box>
//       </TabContext>
//     </Box>
//   );
// }




'use client';
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { IoMdArrowForward } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";

export default function ContentTab({ tabImage, setTabImage }) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setTabImage(Number(newValue) - 1);
  };

  const handleNext = () => {
    const newValue = (Number(value) % 3 ) + 1;
    setValue(String(newValue));
    setTabImage(newValue - 1);
  };

  const handlePrevious = () => {
    const newValue = (Number(value) - 2 + 3 ) % 3 + 1;
    setValue(String(newValue));
    setTabImage(newValue - 1);
  };

  return (
    <Box
      sx={{
        width: "70%",
        typography: "body1",
        transform: { xs: "none", sm: "none", md: "translateX(100px)" },
      }}
    >
      <TabContext value={value}>
        <TabPanel value="1">
          <main className="w-full">
            <div className="justify-between items-center">
              <div className="w-[100%] justify-center items-center">
                <h3 className="text-[#50A2D4] poppins-medium text-[20px]">01</h3>
                <h1 className="poppins-medium text-4xl">The Monster</h1>
              </div>
              <div className="w-[100%]">
                <p className="poppins-light font-light text-[14px] my-3">
                  Discover a world of music with Monster Music! Stream your favorite songs, create custom playlists, and explore new tunes with ease. Enjoy high-quality sound and a user-friendly interface. Download now and unleash the music monster in you!
                </p>
              </div>
            </div>
          </main>
        </TabPanel>

        <TabPanel value="2">
          <main className="w-full">
            <div className="justify-between items-center">
              <div className="w-[100%] justify-center items-center">
                <h3 className="text-[#50A2D4] poppins-medium text-[20px]">02</h3>
                <h1 className="poppins-medium text-4xl">Food App</h1>
              </div>
              <div className="w-[100%]">
                <p className="poppins-light font-light text-[14px] my-3">
                Discover a world of culinary delights with Food App! Browse thousands of recipes, order delicious meals from top restaurants, and explore local flavors. With user-friendly features and quick delivery options, satisfying your cravings has never been easier. Download now and start your mouthwatering journey!
                </p>
              </div>
              
            </div>
          </main>
        </TabPanel>

        <TabPanel value="3">
          <main className="w-full">
            <div className="justify-between items-center">
              <div className="w-[100%] justify-center items-center">
                <h3 className="text-[#50A2D4] poppins-medium text-[20px]">03</h3>
                <h1 className="poppins-medium text-4xl">Fintech App</h1>
              </div>
              <div className="w-[100%]">
                <p className="poppins-light font-light text-[14px] my-3">
                Manage your finances effortlessly with the Fintech app! Track expenses, budget wisely, and make secure transactions. Enjoy real-time updates, personalized insights, and intuitive features designed to help you achieve your financial goals. Download now and take control of your financial future!
                </p>
              </div>
            </div>
          </main>
        </TabPanel>

        {/* <TabPanel value="4">
          <main className="w-full">
            <div className="justify-between items-center">
              <div className="w-[100%] justify-center items-center">
                <h3 className="text-[#50A2D4] poppins-medium text-[20px]">04</h3>
                <h1 className="poppins-medium text-4xl">Hassan</h1>
              </div>
              <div className="w-[100%]">
                <p className="poppins-light font-light text-[14px] my-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim.
                </p>
              </div>
            </div>
          </main>
        </TabPanel>

        <TabPanel value="5">
          <main className="w-full">
            <div className="justify-between items-center">
              <div className="w-[100%] justify-center items-center">
                <h3 className="text-[#50A2D4] poppins-medium text-[20px]">05</h3>
                <h1 className="poppins-medium text-4xl">Another Tab</h1>
              </div>
              <div className="w-[100%]">
                <p className="poppins-light font-light text-[14px] my-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim.
                </p>
              </div>
            </div>
          </main>
        </TabPanel> */}

        <Box sx={{ borderBottom: 1, borderColor: "divider #fffff" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#ffffff",
              },
              fontFamily: "Poppins",
            }}
          >
            <Tab
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <IoMdArrowBack style={{ marginRight: 8 }} />
                  <span className="text-[12px] poppins-light">Previous</span>
                </Box>
              }
              onClick={handlePrevious}
              value="prev"
              sx={{
                color: "#ffffff",
                "&.Mui-selected": {
                  color: "#ffffff",
                  fontFamily: "Poppins",
                },
              }}
            />
            <Tab
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <span className="text-[12px] poppins-light">Next</span>
                  <IoMdArrowForward style={{ marginLeft: 8 }} />
                </Box>
              }
              onClick={handleNext}
              value="next"
              sx={{
                color: "#ffffff",
                "&.Mui-selected": {
                  color: "#ffffff",
                  fontFamily: "Poppins",
                  fontSize: "12px"
                },
              }}
            />
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}