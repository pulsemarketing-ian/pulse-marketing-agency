"use client";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabContentRef = useRef(null);

  useEffect(() => {
    if (tabContentRef.current) {
      gsap.fromTo(
        tabContentRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      );
    }
  }, [activeTab]);

  const tabs = [
    {
      label: "Animated",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {/* ---------  */}
          <div className="m-auto cursor-n-resize windowm-auto window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/animated01.webp"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
          {/* ---------  */}

          <div className="m-auto cursor-n-resize windowm-auto window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/img-tab (1).jpg"
                alt="Image 1"
                className="image w-auto h-auto rounded object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>

          <div className="m-auto cursor-n-resize windowm-auto window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/animated03.webp"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>

          <div className="m-auto cursor-n-resize windowm-auto window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/steelwave-image.png"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>

          <div className="m-auto cursor-n-resize windowm-auto window mt-2"> 
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/img-tab (2).jpg"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
          
          <div className="m-auto cursor-n-resize windowm-auto window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/img-tab (3).jpg"
                alt="Image 1"
                className="image w-full h-auto rounded  object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
        </div>
        </div>
      ),
    },
    {
      label: "Hospitality",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/hospa-01.webp"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="m-auto cursor-n-resize windowm-auto  window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/hos-02.webp"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="m-auto cursor-n-resize windowm-auto window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/hos-03.webp"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>

          <div className="m-auto cursor-n-resize windowm-auto  window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/hos-04.webp"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="m-auto cursor-n-resize windowm-auto window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/hos-05.png"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="m-auto cursor-n-resize windowm-auto window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/hospi-o6.webp"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
        </div>
      ),
    },
    {
      label: "Contractors",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
           <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/contractor- (1).png"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/contractor- (2).png"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/contractor- (3).png"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/hassan (1).png"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/hassan (2).png"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div> 
          <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/contractor- (6).png"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
        </div>
      ),
    },
    {
      label: "E-Commerce",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/e-commerce-01.webp"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>   
          <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/e-commerce-02.webp"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/e-commerce-03.webp"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/e-commerce-04.webp"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/e-commerce-05.webp"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>   <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/e-commerce-06.webp"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
        </div>
      ),
    },
    {
      label: "Services",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/service-01.webp"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/service-02.webp"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/service-03.webp"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/service-04.webp"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/service-05.webp"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>   <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/service-06.webp"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
        </div>
      ),
    },
    {
      label: "Landing Pages",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/landingpage-01.webp"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/landingpage-02.webp"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/landingpage-03.webp"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/landing-04.png"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/landing-image.png"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/landingpage-06.webp"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
        </div>
      ),
    },
    {
      label: "Real Estate",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
        <Link href="https://pulsemarketing.io/portfolio" target="_blank">
          <Image
            src="/real-01.webp"
            alt="Image 1"
            className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
            width={500}
            height={500}
          />
        </Link>
      </div>
      <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/real-02.webp"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/real-03.webp"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/real-04.webp"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/real-05.webp"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/real-06.webp"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
        </div>
      ),
    },
    {
      label: "Dispensaries",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
        <Link href="https://pulsemarketing.io/portfolio" target="_blank">
          <Image
            src="/disp01.webp"
            alt="Image 1"
            className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
            width={500}
            height={500}
          />
        </Link>
      </div>
      <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
        <Link href="https://pulsemarketing.io/portfolio" target="_blank">
          <Image
            src="/disp02.webp"
            alt="Image 1"
            className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
            width={500}
            height={500}
          />
        </Link>
      </div>
      <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
        <Link href="https://pulsemarketing.io/portfolio" target="_blank">
          <Image
            src="/disp03.webp"
            alt="Image 1"
            className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
            width={500}
            height={500}
          />
        </Link>
      </div>
      <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
        <Link href="https://pulsemarketing.io/portfolio" target="_blank">
          <Image
            src="/disp04.webp"
            alt="Image 1"
            className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
            width={500}
            height={500}
          />
        </Link>
      </div>   
      <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
        <Link href="https://pulsemarketing.io/portfolio" target="_blank">
          <Image
            src="/disp05.webp"
            alt="Image 1"
            className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
            width={500}
            height={500}
          />
        </Link>
      </div>
      <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
        <Link href="https://pulsemarketing.io/portfolio" target="_blank">
          <Image
            src="/disp06.webp"
            alt="Image 1"
            className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
            width={500}
            height={500}
          />
        </Link>
      </div>
        </div>
      ),
    },
    {
      label: "TurnKey Sites",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/turnkey-site-1.webp"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/turnkey-site02.webp"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/turnkey-site03.webp"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/truck-replace.png"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>   <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/turnkey-site05.webp"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="m-auto cursor-n-resize windowm-auto cursor-n-resize window mt-2">
            <Link href="https://pulsemarketing.io/portfolio" target="_blank">
              <Image
                src="/turnkey-site06.webp"
                alt="Image 1"
                className="image w-full h-auto rounded object-cover object-top transition-transform duration-8 hover:cursor-pointer hover:shadow-glow transform ease"
                width={500}
                height={500}
              />
            </Link>
          </div>
        </div>
      ),
    },
    {
      label: "Apps",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Link href="https://pulsemarketing.io/portfolio" target="_blank">
            <Image
              src="/ap-01.webp"
              alt="Image 1"
              className="w-full h-auto rounded  hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300"
              width={500}
              height={500}
            />
          </Link>
          <Link href="https://pulsemarketing.io/portfolio" target="_blank">
            <Image
              src="/ap-02.webp"
              alt="Image 2"
              className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300 "
              width={500}
              height={500}
            />
          </Link>
          <Link href="https://pulsemarketing.io/portfolio" target="_blank">
            <Image
              src="/ap-03.webp"
              alt="Image 2"
              className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300 "
              width={500}
              height={500}
            />
          </Link>
          <Link href="https://pulsemarketing.io/portfolio" target="_blank">
            <Image
              src="/ap-04.webp"
              alt="Image 2"
              className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300 "
              width={500}
              height={500}
            />
          </Link>
          <Link href="https://pulsemarketing.io/portfolio" target="_blank">
            <Image
              src="/ap-05.webp"
              alt="Image 2"
              className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300 "
              width={500}
              height={500}
            />
          </Link>
          <Link href="https://pulsemarketing.io/portfolio" target="_blank">
            <Image
              src="/ap-06.webp"
              alt="Image 2"
              className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300 "
              width={500}
              height={500}
            />
          </Link>

          <Link href="https://pulsemarketing.io/portfolio" target="_blank">
            <Image
              src="/ap-07.webp"
              alt="Image 2"
              className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300 "
              width={500}
              height={500}
            />
          </Link>
          
          <Link href="https://pulsemarketing.io/portfolio" target="_blank">
            <Image
              src="/ap-08.webp"
              alt="Image 2"
              className="w-full h-auto rounded hover:scale-200 hover:cursor-pointer hover:shadow-glow transform transition-transform duration-300 "
              width={500}
              height={500}
            />
          </Link>

        </div>
      ),
    },
  
  ];

  useEffect(() => {
    const images = tabContentRef.current.querySelectorAll("img");
    gsap.fromTo(
      images,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.3 }
    );
  }, [activeTab]);

  return (
    <>
      <main className=" w-full lg:w-full m-auto pb-14">
        <div>
        <div className=" flex-wrap justify-center flex   gap-8 mb-4 md:mb-14 mx-auto px-4 lg:px-0 lg:w-[80%]">
  {tabs.map((tab, index) => (
    <buttons
      key={index}
      className={`py-4 px-4 md:px-10 rounded w-[45%] flex md:flex-[0_0_17%] text-center items-center justify-center md:w-auto ${
        index === activeTab
          ? "bg-my-blue-gradient text-white"
          : "border"
      }`}
      onClick={() => setActiveTab(index)}
    >
      {tab.label}
    </buttons>
  ))}
</div>


          <div ref={tabContentRef} className="px-6 md:px-2 py-2 lg:w-[80%] mx-auto">
            {tabs[activeTab].content}
          </div>
        </div>
      </main>

      
      <style jsx>{`
        .image-hover {
          transition: transform 0.3s ease;
        }
        .image-hover:hover {
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
}
