// 'use client';
// import React, { useEffect, useState } from 'react';
// import '../../app/global.css';
// import { FireApi } from '../../../utils/useRequest';


// const TextScroller = () => {

//   const [footerText, setfooterText] = useState([]);

//   const GetfooterText = async () => {
//     try {
//       const res = await FireApi(
//         "component/read/?section=footer-slider",
//         "GET",
//       );

//       if (res.status === true) {
//         setfooterText(res?.data?.components);
//       } else {
//         console.log("An error occurred");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   useEffect(() => {
//     GetfooterText();
//   }, []);

//   return (
//     <div className="overflow-hidden whitespace-nowrap">
//       <div className="inline-block animate-scroll ">
//       {footerText?.map((item) => (
//         <span key={item?._id} className="inline-block">{item?.content}</span>
//       ))}
//       </div>
//     </div>
//   );
// };

// export default TextScroller;


import React from 'react';
import '../../app/global.css';


const TextScroller = ({ text }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-scroll ">
        <span className="inline-block">{text}</span>
      </div>
    </div>
  );
};

export default TextScroller;