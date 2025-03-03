"use client";
// import { Reveal } from "@/utils/Reveal";
import React from "react";
import { motion } from "framer-motion";

const CROProcess = () => {
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

  return (
    <main
      className="mx-10 py-16 md:mx-14"
      style={{
        backgroundImage: "url('/images/app_page_images/radial.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mt-3 flex items-center justify-center">
        <h2 className="text-center text-4xl font-bold tracking-wide">
          Our CRO Process
        </h2>
      </div>

      <div className="mt-8 grid w-full gap-4 md:grid-cols-3">
        {[
          {
            count: "01",
            title: "In-Depth Audit",
            description:
              "Analyze your Shopify or e-commerce store's performance using tools like Google Analytics, Shopify reports, and session recordings. Identify leaks in your sales funnel and evaluate metrics such as bounce rate, cart abandonment, and average order value.",
            delay: 0.2,
          },
          {
            count: "02",
            title: "Customer Insights",
            description:
              "Use feedback tools and customer surveys to understand what is working and what is not. Map out the customer journey to identify opportunities for improvement.",
            delay: 0.25,
          },
          {
            count: "03",
            title: "A/B Testing",
            description:
              "Experiment with product pages, checkout flows, and CTAs to identify the best-performing versions. Conduct platform-specific optimizations to align with Shopify’s unique capabilities.",
            delay: 0.27,
          },
          {
            count: "04",
            title: "Landing Page Optimization",
            description:
              "Create high-impact, mobile-responsive landing pages. Ensure they load quickly and deliver clear, actionable messaging.",
            delay: 0.28,
          },
          {
            count: "05",
            title: "Checkout Process Optimization",
            description:
              "Simplify your Shopify checkout flow with streamlined forms, trusted payment gateways, and progress indicators. Reduce cart abandonment and improve conversions by creating a frictionless buying experience.",
            delay: 0.28,
          },
          {
            count: "06",
            title: "Ongoing Monitoring & Improvement",
            description:
              "Continuously track your Shopify store’s performance with tools like Shopify Analytics and real-time monitoring. Stay ahead of e-commerce trends and customer expectations.",
            delay: 0.28,
          },
        ].map((card, index) => (
          <div
            key={index}
            className={`flex min-h-[220px] transform flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 transition-transform duration-700 ease-in-out ${
              isDesktop ? "hover:scale-105" : ""
            }`}
          >
            <motion.div
              initial={isDesktop ? { y: -300, opacity: 0 } : {}}
              animate={isDesktop ? { y: 0, opacity: 1 } : {}}
              transition={
                isDesktop
                  ? {
                      delay: card.delay,
                      duration: 0.5,
                      ease: "easeInOut",
                    }
                  : {}
              }
              viewport={isDesktop ? { once: true, amount: 0.2 } : {}}
            >
              <h6 className="text-md font-bold tracking-wide">{card.count}</h6>
              <h3 className="text-xl font-bold tracking-wide">{card.title}</h3>
              <p className="text-sm">{card.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CROProcess;
