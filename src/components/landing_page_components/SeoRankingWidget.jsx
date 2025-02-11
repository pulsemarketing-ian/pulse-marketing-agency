'use client';
import React, { useEffect, useRef, useState } from 'react';

const SEORankingWidget = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const widgetContainerRef = useRef(null);

  useEffect(() => {
    const widgetElement = document.createElement('div');
    widgetElement.id = 'se-ranking-widget';
    
    if (widgetContainerRef.current) {
      widgetContainerRef.current.appendChild(widgetElement);
    }

    const loadMainScript = () => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = "https://online.seranking.com/frontend-dist/widget-manager/main.js";
        script.defer = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const loadWidgetScript = () => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = "https://online.seranking.com/frontend-dist/Widgets/js/main.js";
        script.defer = true;
        script.setAttribute('data-widget-type', 'push');
        script.setAttribute('data-widget-page-audit-id', '4081655-5743');
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const loadScripts = async () => {
      try {
        await loadMainScript();
        await loadWidgetScript();
        setIsLoaded(true);
      } catch (error) {
        console.error('Error loading SE Ranking scripts:', error);
      }
    };

    loadScripts();

    // Cleanup function with proper child node check
    return () => {
      if (widgetContainerRef.current) {
        widgetContainerRef.current.innerHTML = '';
      }
      const scripts = document.querySelectorAll('script[src*="seranking.com"]');
      scripts.forEach(script => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* <h1 className="text-2xl font-bold mb-4">SEO Ranking Widget</h1> */}
      <div 
        ref={widgetContainerRef} 
        className="w-full h-auto relative z-10"
      >
        {!isLoaded && <div className="text-center py-4">Loading widget...</div>}
      </div>
    </div>
  );
};

export default SEORankingWidget;
