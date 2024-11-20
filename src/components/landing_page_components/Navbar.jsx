"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoIosMail, IoIosCall } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { FiMenu } from "react-icons/fi";  // React Icon for hamburger
import PrimaryBtn from "./PrimaryBtns/PrimaryBtn";
import { Drawer } from "@mui/material";  // Using MUI Drawer
import "../landing_page_components/PrimaryBtns/btn.css";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Services",
    path: "/services",
    categories: [
      {
        title: "Development",
        items: [
          {
            name: "Web Development",
            desc: "Custom websites and applications",
            path: "/web-development",
          },
          { name: "SEO", desc: "Search Engine Optimization", path: "/seo" },
          {
            name: "Branding",
            desc: "Online store solutions",
            path: "/branding",
          },
          {
            name: "Video Photo",
            desc: "Content management systems",
            path: "/video-photo",
          },
        ],
      },
      {
        title: "Marketing",
        items: [
          {
            name: "Digital Marketing",
            desc: "Online marketing strategies",
            path: "*",
          },
        ],
      },
      {
        title: "Design",
        items: [
          {
            name: "Graphic Design",
            desc: "Creative design solutions",
            link: "*",
          },
        ],
      },
    ],
  },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Terms", path: "/terms" },
  { label: "Our Policy", path: "/policy" },
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

  // Toggle Drawer
  const toggleDrawer = (open) => {
    setOpenDrawer(open);
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all ${
        isScrolled
          ? "bg-black/60 shadow-md backdrop-blur-sm"
          : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="/white-logo.png" alt="Logo" className="h-8" />
          </Link>

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden">
            <div
              onClick={() => toggleDrawer(true)}
              sx={{
                color: "white",
              }}
            >
              <FiMenu className="h-6 w-6" /> {/* Using React Icon for Hamburger */}
            </div>
          </div>

          {/* Navigation Menu (Desktop) */}
          <div className="hidden items-center space-x-8 px-8 lg:flex">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link href={item.path}>
                  <div
                    className={`flex cursor-pointer items-center space-x-1 transition-colors ${
                      isScrolled
                        ? "text-white hover:text-blue-400"
                        : "text-white hover:text-blue-400"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.categories && <MdArrowDropDown className="h-5 w-5" />}
                  </div>
                </Link>

                {/* Dropdown */}
                {item.categories && activeMenu === item.label && (
                  <div className="absolute left-0 top-[4vh] -ml-[40vw] w-screen cursor-pointer">
                    <div className="absolute inset-0 bg-[#030017]/80 backdrop-blur-md" />
                    <div className="relative">
                      <div className="animate-gradient-x absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20" />
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
                                    <div className="text-sm text-gray-400">
                                      {subItem.desc}
                                    </div>
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

          {/* Right Buttons */}
          <div className="hidden items-center space-x-4 lg:flex">
            <PrimaryBtn text={"Book"} />
            <a
              href="mailto:hi@pulsemarketing.io"
              className="rounded-full p-2 transition-colors hover:bg-white/10"
            >
              <IoIosMail className="border-1 h-4 w-4 rounded-full" />
            </a>
            <a
              href="tel:18443303141"
              className="rounded-full p-2 transition-colors hover:bg-white/10"
            >
              <IoIosCall className="border-1 h-4 w-4 rounded-full" />
            </a>
          </div>
        </div>
      </div>

      {/* Drawer for Mobile Navigation */}
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "250px",
            backgroundColor: "black",
            color: "white",
            backdropFilter: "blur(10px)",
            boxShadow: "0px 2px 12px rgba(0,0,0,0.6)",
          },
        }}
      >
        <div className="flex flex-col p-4 space-y-4 item-center">
          {menuItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.path}
                className="text-white hover:text-blue-400"
                onClick={() => toggleDrawer(false)}
              >
                {item.label}
              </Link>
              {item.categories && (
                <div className="ml-4 space-y-2">
                  {item.categories.map((category) => (
                    <div key={category.title}>
                      <h3 className="font-semibold">{category.title}</h3>
                      <div>
                        {category.items.map((subItem, index) => (
                          <Link
                            key={subItem.name || index}
                            href={subItem.path || "#"}
                            className="block text-white hover:text-blue-400 text-sm"
                            onClick={() => toggleDrawer(false)}
                          >
                            {subItem.name}
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
      </Drawer>
    </nav>
  );
}
