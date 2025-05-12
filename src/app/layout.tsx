"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import "./global.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en" className="scroll-smooth" style={{ overflowX: "hidden" }}>
      <head>
        <title>Pulse • Vancouver, BC</title>

        {/* Basic Meta */}
        <meta name="description" content="Our Objective: Increase Your Revenue." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Pulse • Vancouver, BC" />
        <meta property="og:description" content="Our Objective: Increase Your Revenue." />
        <meta property="og:image" content="https://pulsemarketing.io/og-image-hy.PNG" />
        <meta property="og:image:alt" content="Pulse • Vancouver, BC" />
        <meta property="og:image:type" content="image/PNG" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pulsemarketing.io" />


        {/* Twitter Meta Tags */}
        <meta name="twitter:title" content="Pulse • Vancouver, BC" />
        <meta name="twitter:description" content="Our Objective: Increase Your
Revenue." />
        <meta name="twitter:image" content="og-image-hy.PNG" />

        {/* Fonts and Styles */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>

      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          {loading ? <Loader /> : children}
        </div>
      </body>
    </html>
  );
}
