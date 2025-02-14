"use client";
import React from "react";
import { Reveal } from "@/utils/Reveal";
import Navbar from "@/components/landing_page_components/Navbar";
import HeroForm from "@/components/landing_page_components/HeroForm";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <main
      style={{
        backgroundImage: "url('/images/seo_page_images/seo-hero.png')",
        backgroundSize: "cover",
      }}
      className="md:pb-[150px]"
    >
      <Navbar />
      <div className="relative mx-auto  flex h-[70vh] w-[1200px] flex-row items-center justify-between px-4 md:h-[110vh] md:px-0">
        {/* hero heading */}
        <motion.div
          initial={{
            x: -300,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: false, amount: 0.2 }}
          className="mb-8 w-full md:mb-0 md:w-[45%]"
        >
          <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
            SEO Audit
          </h2>
        </motion.div>

        {/* hero form */}
        <motion.div
          initial={{ scale: 0.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="border-1 absolute right-0 z-20 mt-[-10%] w-full max-w-md rounded-3xl border-white bg-black bg-opacity-30 p-6 text-white shadow-xl backdrop-blur-md md:mt-10 md:w-[40%] md:px-8 md:py-3"
        >
          {/* External Widget Form */}
          <div id="seranking-widget"></div>
          <script
            defer
            src="https://online.seranking.com/frontend-dist/widget-manager/main.js"
          ></script>
          <script
            defer
            src="https://online.seranking.com/frontend-dist/Widgets/js/main.js"
            data-widget-type="form"
            data-widget-page-audit-id="4081655-5746"
          ></script>
        </motion.div>
      </div>
    </main>
  );
}
