"use client";
import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { baseURL } from "../../../utils/useRequest";
// import { Reveal } from "@/utils/Reveal";
import PrimaryBtn from "../landing_page_components/PrimaryBtns/PrimaryBtn";
import { useRouter } from "next/navigation";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabContent, setTabContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

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
      setTabContent(data?.data?.components);
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

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const renderTabContent = () => {
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
      <div
        className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-2"
        style={{
          backgroundImage: "url('/images/app_page_images/radial.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        {tabContent.map((item, index) => (
          <div
            key={index}
            className="animate-left flex w-full flex-col gap-5 md:gap-6"
          >
            {/* Image Section */}
            <div className="relative h-[200px] w-full rounded-2xl md:h-[380px] md:w-[100%] xl:h-[280px] xl:w-[100%] 2xl:h-[380px]">
              <Link href={item?.section} target="_blank">
                <Image
                  src={item?.pictures[0]}
                  layout="fill"
                  objectFit="contain"
                  alt="Project Image"
                  priority
                  quality={100}
                  className="cursor-pointer rounded-2xl"
                />
              </Link>
            </div>

            {/* Content Section */}
            <div className="rounded-xl md:px-6 xl:px-0 2xl:px-0">
              <h4 className="text-xl font-semibold capitalize tracking-wide">
                {item?.name.toUpperCase()}
              </h4>

              <div className="flex flex-wrap items-center justify-between gap-4 md:mb-1">
                {/* Tags Section */}
                <div className="flex flex-wrap md:p-0 p-3 gap-3">
                  {["Design", "Development", "SEO"].map((tag, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Image
                        src="/images/services_page_images/blue-dot.png"
                        alt="blue-dot"
                        width={16}
                        height={16}
                      />
                      <p className="text-sm font-medium">{tag}</p>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <div className="md:mr-0 mr-12">
                <PrimaryBtn
                  text="View Site"
                  onClick={() => window.open(item?.section, "_blank")}
                />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <main
      className="m-auto w-full md:pb-14 lg:w-full"
      style={{
        backgroundImage: "url('/images/app_page_images/radial.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <div className="mx-auto mb-4 flex flex-wrap justify-start gap-8 px-4 md:mb-14 lg:w-[80%] lg:px-0">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`flex w-[45%] cursor-pointer flex-wrap items-center justify-start rounded px-4 py-4 text-center text-[1.2rem] font-medium md:w-auto md:px-4 md:py-0 md:text-[1.6rem] ${
                index === activeTab ? "text-white" : "text-gray-500"
              }`}
              onClick={() => handleTabChange(index)}
            >
              {tab.label}
            </div>
          ))}
        </div>

        <div className="mx-auto px-6 py-2 md:px-2 lg:w-[80%]">
          {renderTabContent()}
        </div>
      </div>
    </main>
  );
}
