"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoIosMail, IoIosCall } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import PrimaryBtn from "./PrimaryBtns/PrimaryBtn";
import { Drawer, IconButton } from "@mui/material";
import { IoClose } from "react-icons/io5";

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
    ],
  },
  { label: "App", path: "/app" },
  { label: "Portfolio", path: "/our-work" },
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

          {/* Mobile Drawer Menu */}
          <div className="lg:hidden">
            <div onClick={() => toggleDrawer(true)}>
              <FiMenu className="h-6 w-6" />
            </div>
            <Drawer anchor="right" open={openDrawer} onClose={() => toggleDrawer(false)}>
  <div className="p-4 w-[300px] flex flex-col h-full bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white shadow-lg">
    {/* Drawer Header */}
    <div className="flex justify-between items-center border-b border-gray-700 pb-3">
      <h3 className="text-lg font-bold uppercase tracking-wide">Menu</h3>
      <IconButton onClick={() => toggleDrawer(false)}>
        <IoClose size={24} style={{ color: "white" }}/>
      </IconButton>
    </div>

    {/* Menu Items */}
    <div className="mt-6 space-y-6">
      {menuItems.map((item) => (
        <div key={item.label}>
          {/* Parent Link */}
          <Link
            href={item.path}
            onClick={() => toggleDrawer(false)}
            className="block text-lg font-medium tracking-wide p-3 rounded-lg bg-gray-800/70 hover:bg-blue-600/70 transition duration-200"
          >
            {item.label}
          </Link>

          {/* Subcategories */}
          {item.categories && (
            <div className="ml-4 mt-3 space-y-4 border-l-2 border-gray-700 pl-4">
              {item.categories.map((category) => (
                <div key={category.title}>
                  <h4 className="text-md font-semibold text-blue-400">{category.title}</h4>
                  <div className="space-y-2 mt-2">
                    {category.items.map((subItem, index) => (
                      <Link
                        key={subItem.name || index}
                        href={subItem.path || "#"}
                        onClick={() => toggleDrawer(false)}
                        className="block text-sm text-gray-400 hover:text-blue-300 transition duration-200"
                      >
                        {subItem.name || subItem.desc}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>

    {/* Footer Section */}
    <div className="mt-auto pt-6 border-t border-gray-700">
      <div className="text-center">
        <h4 className="text-sm font-semibold text-gray-400">Need Help?</h4>
        <a
          href="mailto:hi@pulsemarketing.io"
          className="block mt-2 text-blue-400 hover:text-blue-300 underline transition"
        >
          hi@pulsemarketing.io
        </a>
        <a
          href="tel:18443303141"
          className="block mt-2 text-blue-400 hover:text-blue-300 underline transition"
        >
          +1-844-330-3141
        </a>
      </div>
    </div>
  </div>
</Drawer>

          </div>

          {/* Desktop Menu */}
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
