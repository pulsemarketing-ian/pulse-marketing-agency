// "use client";
// import * as React from "react";
// import { useState, useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import Image from "next/image";
// import Link from "next/link";

// export default function Tabs() {
//   const [activeTab, setActiveTab] = useState(0);
//   const tabContentRef = useRef(null);

//   useEffect(() => {
//     if (tabContentRef.current) {
//       gsap.fromTo(
//         tabContentRef.current,
//         { opacity: 0 },
//         { opacity: 1, duration: 1 }
//       );
//     }
//   }, [activeTab]);

//   const tabs = [
//     {
//       label: "Animated",
//       content: (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
//           {/* ---------  */}
//           <div className="m-auto cursor-n-resize windowm-auto window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/animated01.webp"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//           {/* ---------  */}

//           <div className="m-auto cursor-n-resize windowm-auto window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/img-tab (1).jpg"
//                 alt="Image 1"
//                 className="image w-auto h-auto rounded object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>

//           <div className="m-auto cursor-n-resize windowm-auto window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/animated03.webp"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>

//           <div className="m-auto cursor-n-resize windowm-auto window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/steelwave-image.png"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>

//           <div className="m-auto cursor-n-resize windowm-auto window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/img-tab (2).jpg"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>

//           <div className="m-auto cursor-n-resize windowm-auto window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/img-tab (3).jpg"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded  object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//         </div>
//         </div>
//       ),
//     },
//     {
//       label: "Hospitality",
//       content: (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/hospa-01.webp"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//           <div className="m-auto cursor-n-resize windowm-auto  window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/hos-02.webp"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//           <div className="m-auto cursor-n-resize windowm-auto window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/hos-03.webp"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>

//           <div className="m-auto cursor-n-resize windowm-auto  window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/hos-04.webp"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//           <div className="m-auto cursor-n-resize windowm-auto window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/hos-05.png"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//           <div className="m-auto cursor-n-resize windowm-auto window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/hospi-o6.webp"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//         </div>
//       ),
//     },
//     {
//       label: "Contractors",
//       content: (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
//            <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/contractor- (1).png"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//           <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/contractor- (2).png"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//           <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/contractor- (3).png"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//           <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/hassan (1).png"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//           <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/hassan (2).png"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//           <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/contractor- (6).png"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//         </div>
//       ),
//     },
//     {
//       label: "E-Commerce",
//       content: (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//            <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/e-commerce-01.webp"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//           <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/e-commerce-02.webp"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//           <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/e-commerce-03.webp"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//           <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/e-commerce-04.webp"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//           <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/e-commerce-05.webp"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>   <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/e-commerce-06.webp"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//         </div>
//       ),
//     },
//     {
//       label: "Services",
//       content: (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//            <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/service-01.webp"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//           <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/service-02.webp"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//           <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/service-03.webp"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//           <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/service-04.webp"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//           <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/service-05.webp"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>   <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/service-06.webp"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//         </div>
//       ),
//     },
//     {
//       label: "Landing Pages",
//       content: (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//              <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/landingpage-01.webp"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//           <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/landingpage-02.webp"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//           <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/landingpage-03.webp"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//           <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/landing-04.png"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//           <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/landing-image.png"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//           <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/landingpage-06.webp"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//         </div>
//       ),
//     },
//     {
//       label: "Real Estate",
//       content: (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//         <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//           <Image
//             src="/real-01.webp"
//             alt="Image 1"
//             className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//             width={500}
//             height={500}
//           />
//         </Link>
//       </div>
//       <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/real-02.webp"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//           <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/real-03.webp"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//           <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/real-04.webp"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//           <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/real-05.webp"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//           <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/real-06.webp"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//         </div>
//       ),
//     },
//     {
//       label: "Dispensaries",
//       content: (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//         <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//           <Image
//             src="/disp01.webp"
//             alt="Image 1"
//             className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//             width={500}
//             height={500}
//           />
//         </Link>
//       </div>
//       <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//         <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//           <Image
//             src="/disp02.webp"
//             alt="Image 1"
//             className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//             width={500}
//             height={500}
//           />
//         </Link>
//       </div>
//       <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//         <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//           <Image
//             src="/disp03.webp"
//             alt="Image 1"
//             className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//             width={500}
//             height={500}
//           />
//         </Link>
//       </div>
//       <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//         <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//           <Image
//             src="/disp04.webp"
//             alt="Image 1"
//             className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//             width={500}
//             height={500}
//           />
//         </Link>
//       </div>
//       <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//         <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//           <Image
//             src="/disp05.webp"
//             alt="Image 1"
//             className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//             width={500}
//             height={500}
//           />
//         </Link>
//       </div>
//       <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//         <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//           <Image
//             src="/disp06.webp"
//             alt="Image 1"
//             className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//             width={500}
//             height={500}
//           />
//         </Link>
//       </div>
//         </div>
//       ),
//     },
//     {
//       label: "TurnKey Sites",
//       content: (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//              <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/turnkey-site-1.webp"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//           <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/turnkey-site02.webp"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//           <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/turnkey-site03.webp"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//           <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/truck-replace.png"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>   <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/turnkey-site05.webp"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//           <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
//             <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//               <Image
//                 src="/turnkey-site06.webp"
//                 alt="Image 1"
//                 className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
//                 width={500}
//                 height={500}
//               />
//             </Link>
//           </div>
//         </div>
//       ),
//     },
//     {
//       label: "Apps",
//       content: (
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//             <Image
//               src="/ap-01.webp"
//               alt="Image 1"
//               className="w-full h-auto rounded  hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300"
//               width={500}
//               height={500}
//             />
//           </Link>
//           <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//             <Image
//               src="/ap-02.webp"
//               alt="Image 2"
//               className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300 "
//               width={500}
//               height={500}
//             />
//           </Link>
//           <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//             <Image
//               src="/ap-03.webp"
//               alt="Image 2"
//               className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300 "
//               width={500}
//               height={500}
//             />
//           </Link>
//           <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//             <Image
//               src="/ap-04.webp"
//               alt="Image 2"
//               className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300 "
//               width={500}
//               height={500}
//             />
//           </Link>
//           <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//             <Image
//               src="/ap-05.webp"
//               alt="Image 2"
//               className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300 "
//               width={500}
//               height={500}
//             />
//           </Link>
//           <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//             <Image
//               src="/ap-06.webp"
//               alt="Image 2"
//               className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300 "
//               width={500}
//               height={500}
//             />
//           </Link>

//           <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//             <Image
//               src="/ap-07.webp"
//               alt="Image 2"
//               className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300 "
//               width={500}
//               height={500}
//             />
//           </Link>

//           <Link href="https://pulsemarketing.io/portfolio" target="_blank">
//             <Image
//               src="/ap-08.webp"
//               alt="Image 2"
//               className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300 "
//               width={500}
//               height={500}
//             />
//           </Link>

//         </div>
//       ),
//     },

//   ];

//   useEffect(() => {
//     const images = tabContentRef.current.querySelectorAll("img");
//     gsap.fromTo(
//       images,
//       { y: 50, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1, stagger: 0.3 }
//     );
//   }, [activeTab]);

//   return (
//     <>
//       <main className=" w-full lg:w-full m-auto pb-14">
//         <div>
//         <div className=" flex-wrap justify-center flex   gap-8 mb-4 md:mb-14 mx-auto px-4 lg:px-0 lg:w-[80%]">
//         {tabs.map((tab, index) => (
//           <buttons
//             key={index}
//             className={`py-4 px-4 md:px-10 rounded w-[45%] flex md:flex-[0_0_17%] text-center items-center justify-center md:w-auto ${
//               index === activeTab
//                 ? "bg-my-blue-gradient text-white"
//                 : "border"
//             }`}
//             onClick={() => setActiveTab(index)}
//           >
//             {tab.label}
//           </buttons>
//         ))}
//       </div>

//           <div ref={tabContentRef} className="px-6 md:px-2 py-2 lg:w-[80%] mx-auto">
//             {tabs[activeTab].content}
//           </div>
//         </div>
//       </main>

//       <style jsx>{`
//         .image-hover {
//           transition: transform 0.3s ease;
//         }
//         .image-hover:hover {
//           transform: scale(1.1);
//         }
//       `}</style>
//     </>
//   );
// }
'use client'
import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { baseURL } from "../../../utils/useRequest";
import { Reveal } from "@/utils/Reveal";
import PrimaryBtn from "../landing_page_components/PrimaryBtns/PrimaryBtn";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabContent, setTabContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const tabs = [
    { label: "Animated", endpoint: "component/read?page=674f6c452eb453a1457758e9" },
    { label: "Hospitality", endpoint: "component/read?page=674f753f54e5bff06e4ba7f8" },
    { label: "Contractors", endpoint: "component/read?page=674f767b54e5bff06e4ba80e" },
    { label: "E-Commerce", endpoint: "component/read?page=674f8684f094b86dc391900b" },
    { label: "Services", endpoint: "component/read?page=674f886ef094b86dc3919021" },
    { label: "Landing Pages", endpoint: "component/read?page=674f89eef094b86dc3919040" },
    { label: "Real Estate", endpoint: "component/read?page=674f8ac9f094b86dc3919052" },
    { label: "Dispensaries", endpoint: "component/read?page=674f8b63f094b86dc3919062" },
    { label: "TurnKey Sites", endpoint: "component/read?page=674f8bc8f094b86dc391906d" },
    { label: "Apps", endpoint: "component/read?page=674f8d4af094b86dc3919097" },
  ];

  const fetchTabContent = useCallback(async (endpoint) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${baseURL}/${endpoint}`);
      if (!response.ok) {
        throw new Error("Failed to fetch portfolio content");
      }
      const data = await response.json();
      setTabContent(data?.data?.components);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching portfolio content:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTabContent(tabs[activeTab].endpoint);
  }, [activeTab, fetchTabContent]);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const renderTabContent = () => {
    if (isLoading) {
      return (
        <div className="flex min-h-[500px] items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-blue-500"></div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex min-h-[500px] items-center justify-center text-center text-red-500">
          {error}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
      {tabContent.map((item, index) => (
        <div key={index} className="animate-left mb-8 flex w-full flex-col gap-3 md:mb-0 md:w-[100%]">
          <div className="relative h-[200px] w-full md:h-[300px]">
            <Link href={'/work-details'}>
              <Image
                src={item?.pictures[0]}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
                alt="Project Image"
                priority
              />
            </Link>
          </div>
          <Reveal>
            <h4 className="text-xl font-semibold tracking-wide capitalize">
              {item?.name}
            </h4>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-4">
                {["Design", "Development", "SEO"].map((tag, index) => (
                  <div
                    key={index}
                    className="mb-2 flex w-auto items-center gap-1"
                  >
                    <Image
                      src="/images/services_page_images/blue-dot.png"
                      alt="blue-dot"
                      width={20}
                      height={20}
                    />
                    <p>{tag}</p>
                  </div>
                ))}
              </div>
              <PrimaryBtn text={"View Case Study"} />
            </div>
          </Reveal>
        </div>
      ))}
    </div>
    
    );
  };

  return (
    <main className="m-auto w-full pb-14 lg:w-full">
    <div>
      <div className="mx-auto mb-4 flex flex-wrap justify-center gap-8 px-4 md:mb-14 lg:w-[80%] lg:px-0">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`py-4 px-4 md:px-10 rounded w-[45%] flex md:flex-[0_0_17%] text-center items-center justify-center md:w-auto cursor-pointer ${
              index === activeTab
                ? "bg-my-blue-gradient text-white"
                : "border bg-none"
            }`}
            onClick={() => handleTabChange(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
  
      <div className="mx-auto px-6 py-2 md:px-2 lg:w-[80%]">
        {renderTabContent()}
      </div>
    </div>
  </main>
  
  );
}
