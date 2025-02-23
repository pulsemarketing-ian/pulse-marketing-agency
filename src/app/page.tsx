"use client";
import ContentWrapper from "@/components/layout/ContentWrapper";
import "./global.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script
        src="https://online.seranking.com/frontend-dist/widget-manager/main.js"
        strategy="afterInteractive" // Load after the page becomes interactive
        defer
      />

      {/* Load the second script */}
      <Script
        defer
        src="https://online.seranking.com/frontend-dist/Widgets/js/main.js"
        data-widget-type="push"
        data-widget-page-audit-id="4127606-29"
      />

      <div style={{ background: "#040117" }}>
        <ContentWrapper />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
        />
      </div>
    </>
  );
}
