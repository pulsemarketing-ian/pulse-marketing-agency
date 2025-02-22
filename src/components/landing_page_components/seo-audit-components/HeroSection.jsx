"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/landing_page_components/Navbar";

export default function HeroSection() {
  useEffect(() => {
    // Load Widget Manager Script
    const script1 = document.createElement("script");
    script1.src = "https://online.seranking.com/frontend-dist/widget-manager/main.js";
    script1.defer = true;
    document.body.appendChild(script1);

    // Load Widget Form Script
    const script2 = document.createElement("script");
    script2.src = "https://online.seranking.com/frontend-dist/Widgets/js/main.js";
    script2.defer = true;
    script2.setAttribute("data-widget-type", "form");
    script2.setAttribute("data-widget-page-audit-id", "4081655-5746");

    script2.onload = () => {
      console.log("SEO Ranking Widget Loaded");
      if (window.Widgets && typeof window.Widgets.init === "function") {
        window.Widgets.init(); // Initialize widget after script loads
      }
    };

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
      className="md:pb-[150px]"
    >
      <Navbar />
      <div className="relative mx-auto flex h-[70vh] w-[1200px] flex-row items-center justify-between px-4 md:h-[110vh] md:px-0">
        {/* Hero Heading */}
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="mb-8 w-full md:mb-0 md:w-[45%]"
        >
          <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
            SEO Audit
          </h2>
        </motion.div>

        {/* Hero Form */}
        <div
          className="border-1 absolute right-0 z-20 mt-[-10%] w-full max-w-md rounded-3xl border-white bg-black bg-opacity-30 p-6 text-white shadow-xl backdrop-blur-md md:mt-10 md:w-[40%] md:px-8 md:py-3"
        >
          {/* External Widget Form */}
          <div id="seranking-widget"></div>
        </div>
      </div>
    </main>
  );
}
