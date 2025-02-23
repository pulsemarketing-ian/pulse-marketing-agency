// export default TextScroller;


import React from 'react';
import '../../app/global.css';


const TextScroller = ({ text }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-scroll ">
        <span className="inline-block md:mb-2">{text}</span>
      </div>
    </div>
  );
};



// import React from "react";

// const TextScroller = ({ text }) => {
//   return (
//     <div className="overflow-hidden whitespace-nowrap w-full">
//       <div className="animate-scroll flex space-x-4">
//         <span className="text-4xl">{text}</span>
//         <span className="text-4xl">{text}</span> {/* Duplicate for smooth loop */}
//       </div>
//     </div>
//   );
// };

export default TextScroller;
