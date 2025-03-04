"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/landing_page_components/Navbar";

export default function HeroSection() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://online.seranking.com/frontend-dist/widget-manager/main.js";
    script1.defer = true;

    const script2 = document.createElement("script");
    script2.src = "https://online.seranking.com/frontend-dist/Widgets/js/main.js";
    script2.defer = true;
    script2.setAttribute("data-widget-type", "form");
    script2.setAttribute("data-widget-page-audit-id", "4127606-31");

    script2.onload = () => {
      console.log("SEO Ranking Widget Loaded");
      if (window.Widgets && typeof window.Widgets.init === "function") {
        window.Widgets.init(); // Initialize widget after script loads
      }
    };

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <main
      style={{
        backgroundImage: "url('/images/seo_page_images/seo-hero.png')",
        backgroundSize: "cover",
      }}
      className=""
    >
      <Navbar />
      <div className="md:h-[700px] h-[850px] w-[100%] justify-center items-center flex flex-row">
        {/* Hero Heading */}
        <div className="md:h-[550px] h-[600px] flex items-center flex-col md:flex-row md:justify-between w-[90%]">
        {/* <motion.div
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        > */}
          <h2 className="text-3xl md:ml-16 font-bold leading-tight text-white md:text-7xl">
            SEO Audit
          </h2>
        {/* </motion.div> */}

        {/* Hero Form */}
        <div
          className="md:w-[450px] w-full md:mr-0 mr-8 text-white">
          {/* External Widget Form */}
          <div id="se-widget-container" className="md:mt-7 mt-5"></div>
          </div>
        </div>
      </div>
    </main>
 );
}