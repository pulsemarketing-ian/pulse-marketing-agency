"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoIosMail, IoIosCall } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import PrimaryBtn from "./PrimaryBtns/PrimaryBtn";
import { Drawer } from "@mui/material";
import "../landing_page_components/PrimaryBtns/btn.css";

const menuItems = [
  { label: "Home", path: "/work-details" },
  { label: "About", path: "/about-us" },
  {
    
    label: "Services",
    path: "/services",
    categories: [
      {
        title: "Services We're Offering",
        items: [
          { name: "Web Development", desc: "Custom websites and applications", path: "/web-development" },
          { name: "SEO", desc: "Search Engine Optimization", path: "/seo" },
          { name: "Branding", desc: "Online store solutions", path: "/branding" },
          { name: "Video Photo", desc: "Content management systems", path: "/video-photo" },
        ],
      },
      {
        title: "Why Choose Us",
        items: [{ name: "", desc: "Empowering brands with a comprehensive digital suite—from immersive 3D web development, SEO excellence, and captivating photos Videography for distinctive logo design and online reputation management, and bespoke application development, crafting a holistic online presence that drives engagement and success.",  }],
      },
      {
        title: "What we serve",
        items: [{ name: "", desc: "Our highly skilled team applies the latest marketing strategies to meet our clients goals, including increasing brand awareness, lead generation and sales growth.We stand for fostering enduring relationships with our clients. By understanding their unique needs, we tailor strategies to achieve specific goals and ensure optimal results.Thanks for considering Pulse Marketing Inc. for your marketing needs. We are committed to helping you reach your goals and propelling your business forward.", path: "*" }],
      },
    ],
  },
  { label: "App", path: "/app" },
  { label: "Portfolio", path: "/our-work" },
  // { label: "Terms", path: "/term-condition" },
  // { label: "Our Policy", path: "/privacy" },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = (open) => {
    setOpenDrawer(open);
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all ${
        isScrolled ? "bg-black/60 shadow-md backdrop-blur-sm" : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto max-w-[1210px]">
        <div className="flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/white-logo.png" alt="Logo" className="h-8" />
          </Link>

          <div className="lg:hidden">
            <div onClick={() => toggleDrawer(true)}>
              <FiMenu className="h-6 w-6" />
            </div>
          </div>

          <div className="hidden items-center space-x-8 px-8 lg:flex">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link href={item.path}>
                  <div className="flex cursor-pointer items-center space-x-1 transition-colors hover:text-blue-400">
                    <span>{item.label}</span>
                    {item.categories && <MdArrowDropDown className="h-5 w-5" />}
                  </div>
                </Link>


          {item.categories && activeMenu === item.label && (
            <div
              className="absolute left-[50%] right-0 top-full mt-0 w-screen -translate-x-1/2 bg-[#030017]/80 shadow-md backdrop-blur-sm"
              style={{
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <div className="relative w-full">
                <div className="mx-auto max-w-7xl p-8">
                  <div className="grid grid-cols-3 gap-12">
                    {item.categories.map((category) => (
                      <div key={category.title} className="space-y-4">
                        <h3 className="border-b border-white/10 pb-2 text-lg font-semibold">
                          {category.title}
                        </h3>
                        <div className="grid gap-4">
                          {category.items.map((subItem, index) => (
                            <Link
                              key={subItem.name || index}
                              href={subItem.path || "#"}
                              className="group block rounded-lg p-3 transition-colors hover:bg-white/10"
                            >
                              <div className="font-medium transition-colors group-hover:text-blue-400">
                                {subItem.name}
                              </div>
                              <div className="text-sm text-gray-400">{subItem.desc}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
              </div>
            ))}
          </div>

          <div className="hidden items-center space-x-4 lg:flex">
            <PrimaryBtn text={"Book"} />
            <a href="mailto:hi@pulsemarketing.io" className="rounded-full p-2 border transition-colors hover:bg-white/10">
              <IoIosMail className="border-1 h-4 w-4 rounded-full" />
            </a>
            <a href="tel:18443303141" className="rounded-full p-2 border transition-colors hover:bg-white/10">
              <IoIosCall className="border-1 h-4 w-4 rounded-full" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
