// 'use client';
// import React, { useEffect, useRef, useState } from 'react';

// const SEORankingWidget = () => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const widgetContainerRef = useRef(null);

//   useEffect(() => {
//     const widgetElement = document.createElement('div');
//     widgetElement.id = 'se-ranking-widget';
    
//     if (widgetContainerRef.current) {
//       widgetContainerRef.current.appendChild(widgetElement);
//     }

//     const loadMainScript = () => {
//       return new Promise((resolve, reject) => {
//         const script = document.createElement('script');
//         script.src = "https://online.seranking.com/frontend-dist/widget-manager/main.js";
//         script.defer = true;
//         script.onload = resolve;
//         script.onerror = reject;
//         document.head.appendChild(script);
//       });
//     };

//     const loadWidgetScript = () => {
//       return new Promise((resolve, reject) => {
//         const script = document.createElement('script');
//         script.src = "https://online.seranking.com/frontend-dist/Widgets/js/main.js";
//         script.defer = true;
//         script.setAttribute('data-widget-type', 'push');
//         script.setAttribute('data-widget-page-audit-id', '4081655-5743');
//         script.onload = resolve;
//         script.onerror = reject;
//         document.head.appendChild(script);
//       });
//     };

//     const loadScripts = async () => {
//       try {
//         await loadMainScript();
//         await loadWidgetScript();
//         setIsLoaded(true);
//       } catch (error) {
//         console.error('Error loading SE Ranking scripts:', error);
//       }
//     };

//     loadScripts();

//     // Cleanup function with proper child node check
//     return () => {
//       if (widgetContainerRef.current) {
//         widgetContainerRef.current.innerHTML = '';
//       }
//       const scripts = document.querySelectorAll('script[src*="seranking.com"]');
//       scripts.forEach(script => {
//         if (script.parentNode) {
//           script.parentNode.removeChild(script);
//         }
//       });
//     };
//   }, []);

//   return (
//     <div className="relative w-full">
//       <div 
//         ref={widgetContainerRef} 
//         className="w-full h-auto relative z-10"
//       >
//         {!isLoaded && <div className="text-center py-4">Loading widget...</div>}
//       </div>
//     </div>
//   );
// };

// export default SEORankingWidget;


// "use client"
// import Script from "next/script"
// import { useEffect, useState } from "react"


// export default function SEORankingWidget({ pageAuditId }) {
//   const [isClient, setIsClient] = useState(false)

//   useEffect(() => {
//     setIsClient(true)
//   }, [])

//   if (!isClient) {
//     return null // Return null on server-side to avoid hydration mismatch
//   }

//   return (
//     <>
//       <Script src="https://online.seranking.com/frontend-dist/widget-manager/main.js" strategy="afterInteractive" />
//       <Script
//         src="https://online.seranking.com/frontend-dist/Widgets/js/main.js"
//         strategy="afterInteractive"
//         data-widget-type="push"
//         data-widget-page-audit-id={pageAuditId}
//       />
//       <div id="seranking-widget-container"></div>
//     </>
//   )
// };

// 'use client';
// import { useEffect, useRef } from 'react';

// const SEORankingWidget = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     // if (showForm) {
//       const container = containerRef.current;

//       if (container) {
        
//         container.innerHTML = "";

        
//         const script1 = document.createElement("script");
//         script1.src = "https://online.seranking.com/frontend-dist/widget-manager/main.js";
//         script1.defer = true;
//         container.appendChild(script1);

        
//         const script2 = document.createElement("script");
//         script2.src = "https://online.seranking.com/frontend-dist/Widgets/js/main.js";
//         script2.defer = true;
//         script2.setAttribute("data-widget-type", "push");
//         script2.setAttribute("data-widget-page-audit-id", "4081655-5743");
//         container.appendChild(script2);
//       }
//     }, []);

//   return <div ref={containerRef}></div>;
// };

// export default SEORankingWidget;






'use client';
import { useEffect } from "react";

const SEORankingWidget = () => {
  useEffect(() => {
    // Load first script
    const script1 = document.createElement("script");
    script1.src = "https://online.seranking.com/frontend-dist/widget-manager/main.js";
    script1.defer = true;
    document.body.appendChild(script1);

    // Load second script with data attributes
    const script2 = document.createElement("script");
    script2.src = "https://online.seranking.com/frontend-dist/Widgets/js/main.js";
    script2.defer = true;
    script2.setAttribute("data-widget-type", "push");
    script2.setAttribute("data-widget-page-audit-id", "4081655-5743");
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return <div id="se-ranking-widget"></div>; // Ensure the widget has a container
};

export default SEORankingWidget;
