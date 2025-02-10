"use client";
import { useEffect, useRef, useState } from "react";

const SEORankingWidget = () => {
  const widgetRef = useRef(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadScripts = async () => {
      try {
        if (!widgetRef.current) return;
        widgetRef.current.innerHTML = "";
        setIsLoading(true);

        console.log("Starting to load scripts...");

        // First script (widget manager)
        const script1 = document.createElement("script");
        script1.src = "https://online.seranking.com/frontend-dist/widget-manager/main.js";
        script1.defer = true;

        // Second script (actual widget)
        const script2 = document.createElement("script");
        script2.src = "https://online.seranking.com/frontend-dist/Widgets/js/main.js";
        script2.defer = true;
        script2.setAttribute("data-widget-type", "push");
        script2.setAttribute("data-widget-page-audit-id", "4081655-5743");

        // Append first script to <head>
        document.head.appendChild(script1);

        await new Promise((resolve, reject) => {
          script1.onload = () => {
            console.log("Widget manager script loaded successfully");
            resolve();
          };
          script1.onerror = () => reject(new Error("Failed to load widget manager"));
        });

        // Append second script to widget div
        widgetRef.current.appendChild(script2);

        await new Promise((resolve, reject) => {
          script2.onload = () => {
            console.log("Widget script loaded successfully");
            resolve();
          };
          script2.onerror = () => reject(new Error("Failed to load widget"));
        });

        console.log("Both scripts loaded successfully");
        setIsLoading(false);
      } catch (err) {
        console.error("Error loading scripts:", err);
        setError(err instanceof Error ? err.message : String(err));
        setIsLoading(false);
      }
    };

    loadScripts();

    return () => {
      if (widgetRef.current) {
        widgetRef.current.innerHTML = "";
      }
    };
  }, []);

  if (error) {
    return <div className="p-4 text-red-500">Error loading SEO widget: {error}</div>;
  }

  if (isLoading) {
    return <div className="p-4">Loading SEO widget...</div>;
  }

  return <div ref={widgetRef} id="seranking-widget-container" />;
};

export default SEORankingWidget;
