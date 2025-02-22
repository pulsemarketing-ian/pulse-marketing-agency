'use client';
import { useEffect, useRef } from 'react';

const SeorankingWidget = () => {
  const widgetRef = useRef(null); // Create a ref for the container div

  useEffect(() => {
    // Create the first script element
    const script1 = document.createElement('script');
    script1.src = 'https://online.seranking.com/frontend-dist/widget-manager/main.js';
    script1.defer = true;

    // Create the second script element
    const script2 = document.createElement('script');
    script2.src = 'https://online.seranking.com/frontend-dist/Widgets/js/main.js';
    script2.defer = true;
    script2.setAttribute('data-widget-type', 'push');
    script2.setAttribute('data-widget-page-audit-id', '4081655-5743');

    // Append the scripts to the container div
    if (widgetRef.current) {
      widgetRef.current.appendChild(script1);
      widgetRef.current.appendChild(script2);
    }

    // Cleanup function to remove the scripts when the component unmounts
    return () => {
      if (widgetRef.current) {
        widgetRef.current.removeChild(script1);
        widgetRef.current.removeChild(script2);
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return <div ref={widgetRef}></div>; // Render the container div
};

export default SeorankingWidget;