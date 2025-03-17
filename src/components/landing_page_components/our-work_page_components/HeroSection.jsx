"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";
import Navbar from "@/components/landing_page_components/Navbar";
import Image from "next/image";
// import { Reveal } from "@/utils/Reveal";
import Link from "next/link";
import "./index.css";
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
import { motion } from "motion/react";
import { baseURL } from "../../../../utils/useRequest";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [portfolioContent, setPortfolioContent] = useState([]);
  const imageSectionRef = useRef(null);

  const handleTabChange = (index) => {
    if (index >= 0 && index < industries.length) {
      setActiveTab(index);
      imageSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("Invalid tab index:", index);
    }
  };

  const industries = [
    {
      name: "Animated",
    },
    {
      name: "Hospitality",
    },
    {
      name: "Contractors",
    },
    {
      name: "E-Commerce",
    },
    {
      name: "Services",
    },
    {
      name: "Landing Pages",
    },
    {
      name: "Real Estate",
    },
    {
      name: "Dispensaries",
    },
    {
      name: "TurnKey Sites",
    },
    {
      name: "Apps",
    },
  ];

  const tabs = [
    {
      label: "Animated",
      endpoint: "component/read?page=674f6c452eb453a1457758e9",
    },
    {
      label: "Hospitality",
      endpoint: "component/read?page=674f753f54e5bff06e4ba7f8",
    },
    {
      label: "Contractors",
      endpoint: "component/read?page=674f767b54e5bff06e4ba80e",
    },
    {
      label: "E-Commerce",
      endpoint: "component/read?page=674f8684f094b86dc391900b",
    },
    {
      label: "Services",
      endpoint: "component/read?page=674f886ef094b86dc3919021",
    },
    {
      label: "Landing Pages",
      endpoint: "component/read?page=674f89eef094b86dc3919040",
    },
    {
      label: "Real Estate",
      endpoint: "component/read?page=674f8ac9f094b86dc3919052",
    },
    {
      label: "Dispensaries",
      endpoint: "component/read?page=674f8b63f094b86dc3919062",
    },
    {
      label: "TurnKey Sites",
      endpoint: "component/read?page=674f8bc8f094b86dc391906d",
    },
    { label: "Apps", endpoint: "component/read?page=674f8d4af094b86dc3919097" },
  ];

  const fetchTabContent = useCallback(async (endpoint) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${baseURL}/${endpoint}`);
      if (!response.ok) {
        throw new Error("Failed to fetch portfolio content");
      }
      const data = await response.json();
      setPortfolioContent(data?.data?.components);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching portfolio content:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTabContent(tabs[activeTab].endpoint);
  }, [activeTab, fetchTabContent]);

  if (isLoading) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[500px] items-center justify-center text-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <>
      <main
        style={{
          backgroundImage: "url('/images/our-work_page_images/our-work.png')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
        className=" md:pb-[150px]"
      >
        <Navbar />
        <div className="relative mx-auto flex h-[82vh] max-w-[1200px] flex-row items-center justify-center md:h-[85vh]">
          <div className="absolute z-20 w-[100%] translate-y-7 flex-col px-6 md:translate-y-13 md:px-0">
            <div className="mb-2 flex w-auto items-center gap-1">
              <Image
                src="/images/services_page_images/blue-dot.png"
                alt="blue-dot"
                width={20}
                height={20}
              />
              <p>Our Portfolio</p>
            </div>

            <div className="flex-col flex-wrap items-center justify-center gap-6 md:flex-row md:justify-start">
              <div>
                <h2 className="w-auto text-3xl font-bold leading-tight text-white md:text-5xl">
                  Explore All Industries
                </h2>
              </div>

              <div className="-ml-3 mt-4 flex flex-wrap justify-start gap-0 px-0 lg:w-full lg:px-0">
                {industries.map((industry, index) => (
                  <div
                    key={index}
                    className={`flex w-[49%] cursor-pointer flex-wrap items-center justify-start rounded px-4 py-2 text-center text-[1.2rem] font-medium md:w-auto md:px-4 md:py-0 md:text-[1.6rem] ${
                      index === activeTab ? "text-white" : "text-gray-500"
                    }`}
                    onClick={() => handleTabChange(index)}
                  >
                    {industry.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="z-10 flex flex-col items-center md:translate-y-[-55px]">
            <div className="mb-2 flex items-center justify-center gap-1">
              <Image
                src="/images/services_page_images/blue-dot.png"
                alt="blue-dot"
                width={20}
                height={20}
              />
              <p>Our Portfolio</p>
            </div>

            
              <h2
                className="text-3xl font-bold capitalize text-white md:text-5xl text-center"
                style={{ lineHeight: "1.2" }}
              >
                Explore All Industries
              </h2>
            

            
              <p className="mx-auto mt-2 w-[80%] text-center text-gray-200 md:w-[45%]">
              Explore our portfolio, where creativity meets innovation. As a top designing agency, we create stunning, user-friendly designs that bring your ideas to life and elevate your brand.
              </p>
            
          </div> */}
        </div>
      </main>

      {/* Images Section */}
      <main
        className="relative z-0 mb-20 w-full md:-mt-[0px]"
        ref={imageSectionRef}
      >
        <div
          style={{
            backgroundImage: "url('/images/services_page_images/circle.png/')",
            backgroundSize: "cover",
          }}
          className="h-[30vh] translate-y-[-50%] transform overflow-auto md:h-[32rem] md:translate-y-[-80%]"
        />
        <div
          className="absolute top-0 z-10 flex w-full flex-col items-center justify-center px-4 md:-top-14 md:px-0"
          style={{
            backgroundImage: "url('/images/app_page_images/radial.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="z-10 translate-y-0 sm:p-0 p-4 transform text-center md:translate-y-10">
            {/* <h1 className="text-lg font-bold tracking-wide md:text-5xl">
              Our Work Your Inspiration
            </h1> */}
          </div>

          <div className="mx-auto mt-6 flex w-full flex-wrap items-center justify-center md:mb-12 md:mt-22 md:w-[90%] lg:w-[1200px]">
            {portfolioContent?.slice(0, 2)?.map((image, index) => (
              <div
                className="flex w-full flex-col justify-center md:w-1/2"
                key={index}
              >
                <div className="relative mb-8 h-[200px] w-[95%] transform rounded-2xl transition-transform duration-700 ease-in-out hover:scale-105 md:mb-0 md:h-[350px]">
                  <Link href={image?.section} target="_blank">
                    <Image
                      src={image?.pictures[0]}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-2xl"
                      alt={`Industry Image ${index + 1}`}
                    />
                  </Link>
                </div>

                <div className="-mt-2 md:mt-2">
                  <h4 className="text-center text-xl font-semibold tracking-wide">
                    {image?.name.toUpperCase()}
                  </h4>

                  <div className="mb-7 flex flex-wrap items-center justify-between gap-4 md:mb-0">
                    <div className="flex flex-wrap gap-4">
                      {["Design", "Development", "SEO"].map((tag, idx) => (
                        <div
                          key={idx}
                          className="mb-2 flex w-auto items-center gap-1"
                        >
                          <Image
                            src="/images/services_page_images/blue-dot.png"
                            alt="blue-dot"
                            width={20}
                            height={20}
                          />
                          <p>{tag}</p>
                        </div>
                      ))}
                    </div>
                    <PrimaryBtn
                      text="View Site"
                      onClick={() => {
                        window.open(`${image?.section}`, "_blank");
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <main className="mx-auto mb-10 mt-[580px] px-4 md:mb-0 md:mt-0 md:px-0 lg:-mt-54 lg:-translate-y-24 lg:transform xl:mt-0">
        <div
          className="mx-auto mt-6 flex w-full flex-col flex-wrap items-center justify-between overflow-hidden md:w-[90%] md:flex-row lg:w-[1200px]"
          style={{
            backgroundImage: "url('/images/app_page_images/radial.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          {portfolioContent?.slice(2)?.map((image, index) => (
            <div
              className="flex w-full flex-col flex-wrap justify-center md:w-1/2 "
              key={index}
            >
              <div className="relative mb-8 h-[200px] w-[95%] transform transition-transform duration-700 ease-in-out hover:scale-105 md:mb-0 md:h-[350px]">
                <Link href={image?.section} target="_blank">
                  <Image
                    src={image?.pictures[0]}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-2xl"
                    alt={`Industry Image ${index + 1}`}
                  />
                </Link>
              </div>

              <div className="-mt-2 md:mt-2 md:mb-6">
                <h4 className="text-center text-xl font-semibold tracking-wide">
                  {image?.name.toUpperCase()}
                </h4>

                <div className="mb-7 flex flex-wrap items-center justify-between gap-4 md:mb-0">
                  <div className="flex flex-wrap gap-4">
                    {["Design", "Development", "SEO"].map((tag, idx) => (
                      <div
                        key={idx}
                        className="mb-2 flex w-auto items-center gap-1"
                      >
                        <Image
                          src="/images/services_page_images/blue-dot.png"
                          alt="blue-dot"
                          width={20}
                          height={20}
                        />
                        <p>{tag}</p>
                      </div>
                    ))}
                  </div>
                  <PrimaryBtn
                    text="View Site"
                    onClick={() => {
                      window.open(`${image?.section}`, "_blank");
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default HeroSection;
