'use client';
import { useEffect, useRef } from "react";

const SEORankingWidget = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://online.seranking.com/frontend-dist/widget-manager/main.js";
    script1.defer = true;
    document.body.appendChild(script1);

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

  return <div ref={widgetRef} id="seranking-widget-container"></div>;
};

export default SEORankingWidget;
