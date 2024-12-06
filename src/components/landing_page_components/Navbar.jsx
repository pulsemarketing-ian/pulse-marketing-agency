"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { IoIosMail, IoIosCall } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { FiMenu } from "react-icons/fi"; 
import PrimaryBtn from "./PrimaryBtns/PrimaryBtn";
import { Drawer } from "@mui/material";
import { IoClose } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about-us" },
  {
    label: "Services",
    path: "/services",
    categories: [
      {
        title: "What We Do",
        items: [
          { name: "Web Development", desc: "Custom websites and applications", path: "/web-development" },
          { name: "SEO", desc: "Search Engine Optimization", path: "/seo" },
          { name: "Branding", desc: "Online store solutions", path: "/branding" },
          { name: "Video Photo", desc: "Content management systems", path: "/video-photo" },
        ],
      },
      // {
      //   title: "Lorem ipsum?",
      //   items: [
      //     { name: "", desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.", path: "*" },
      //   ],
      // },
      // {
      //   title: "Lorem ipsum",
      //   items: [
      //     { name: "", desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.", path: "*" },
      //   ],
      // },
    ],
  },
  { label: "App", path: "/app" },
  { label: "Portfolio", path: "/our-work" },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => {
    setOpenDrawer(open);
  };

  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleSubmenuToggle = (index) => {
    setOpenSubmenu((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const [showForm, setShowForm] = useState(false);  
  const calendlyContainerRef = useRef(null);

  const toggleForm = () => {
    setShowForm(!showForm); 
  };

  useEffect(() => {
    if (showForm) {
      const container = calendlyContainerRef.current;

      if (container) {
        container.innerHTML = "";

        const div = document.createElement("div");
        div.className = "calendly-inline-widget";
        div.dataset.url = "https://calendly.com/ianpslater/20min";
        div.style.minWidth = "500px";
        div.style.height = "1200px";
        container.appendChild(div);

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        container.appendChild(script);
      }
    }
  }, [showForm]);  

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all ${
        isScrolled ? "bg-black/70 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1300px] mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/white-logo.png" alt="Logo" className="h-8" />
          </Link>

          {/* Hamburger menu for mobile */}
          <div className="lg:hidden" onClick={() => toggleDrawer(true)}>
            <FiMenu className="h-6 w-6" />
          </div>

          {/* Menu for large screens */}
          <div className="hidden space-x-8 lg:flex">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link href={item.path} className="flex items-center space-x-1 hover:text-blue-400">
                  <span>{item.label}</span>
                  {item.categories && <MdArrowDropDown className="h-5 w-5" />}
                </Link>

                {/* Dropdown for mega menu */}
                {item.categories && activeMenu === item.label && (
                  <div className="md:absolute left-[-50%] transform -translate-x-[42%] w-screen bg-gradient-to-r from-[#040117] to-black shadow-2xl py-10 px-6 text-white z-50 bg-opacity-10">
                    <div className="grid grid-cols-3 gap-8 max-w-[1210px] mx-auto pl-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-4">What Can We Do</h4>
                            <Link
                              href={'/web-development'}
                              className="block mb-2 hover:text-blue-400 hover:bg-black/20 rounded-lg py-3"
                            >
                              <h5 className="font-medium">Web Development</h5>
                              <p className="text-sm text-gray-300">Custom websites and applications</p>
                            </Link>

                            <Link
                              href={'/seo'}
                              className="block mb-2 hover:text-blue-400 hover:bg-black/20 rounded-lg py-3"
                            >
                              <h5 className="font-medium">SEO</h5>
                              <p className="text-sm text-gray-300">Search Engine Optimization</p>
                            </Link>

                            <Link
                              href={'/branding'}
                              className="block mb-2 hover:text-blue-400 hover:bg-black/20 rounded-lg py-3"
                            >
                              <h5 className="font-medium">Branding</h5>
                              <p className="text-sm text-gray-300">Online store solutions</p>
                            </Link>

                            <Link
                              href={'/video-photo'}
                              className="block mb-2 hover:text-blue-400 hover:bg-black/20 rounded-lg py-3"
                            >
                              <h5 className="font-medium">Video Photo</h5>
                              <p className="text-sm text-gray-300">Content management systems</p>
                            </Link>
                          {/* ))} */}
                        </div>

                        <div className="flex flex-wrap gap-4">
  <div className="relative w-[400px] h-[160px]">
    <Link href={'/web-development'}>
      <Image
        src={'/images/web-dev_page_images/hero.png'}
        alt="Web Development"
        layout="fill"
        objectFit="cover"
      />
    </Link>
  </div>

  <div className="relative w-[400px] h-[160px]">
    <Link href={'/seo'}>
      <Image
        src={'/images/seo_page_images/seo-hero.png'}
        alt="SEO"
        layout="fill"
        objectFit="cover"
      />
    </Link>
  </div>
</div>

<div className="flex flex-wrap gap-4">
  <div className="relative w-[400px] h-[160px]">
    <Link href={'/app'}>
      <Image
        src={'/images/app_page_images/third-sec.png'}
        alt="App Development"
        layout="fill"
        objectFit="cover"
      />
    </Link>
  </div>

  <div className="relative w-[400px] h-[160px]">
    <Link href={'/branding'}>
      <Image
        src={'/images/branding_page_images/branding.png'}
        alt="Branding"
        layout="fill"
        objectFit="cover"
      />
    </Link>
  </div>
</div>

                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Drawer (Mobile menu) */}
          <Drawer anchor="right" open={openDrawer} onClose={() => toggleDrawer(false)}>
      <div className="p-4 w-[300px] flex flex-col h-[100vh] bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white shadow-lg">
        <div className="flex justify-between items-center border-b border-gray-700 pb-3">
          <h3 className="text-lg font-bold uppercase tracking-wide">Menu</h3>
          <div onClick={() => toggleDrawer(false)}>
            <IoClose size={24} style={{ color: "white" }} />
          </div>
        </div>

        {/* Menu items in the mobile drawer */}
        <div className="mt-6 space-y-6">
          {menuItems.map((item, index) => (
            <div key={item.label}>
              <div
                className={`block text-lg font-medium tracking-wide p-3 rounded-lg bg-gray-800/70 hover:bg-blue-600/70 transition duration-200 cursor-pointer ${
                  item.categories ? "flex justify-between items-center" : ""
                }`}
                onClick={() =>
                  item.categories ? handleSubmenuToggle(index) : toggleDrawer(false)
                }
              >
                <Link href={item.path}>{item.label}</Link>
                {item.categories && (
                  <span className="ml-2">
                    {openSubmenu === index ? "-" : "+"}
                  </span>
                )}
              </div>

              {/* Subcategories dropdown */}
              {item.categories && openSubmenu === index && (
                <div className="mt-4 space-y-6 pl-4">
                  {item.categories.map((category) => (
                    <div key={category.title}>
                      <h4 className="text-md font-semibold text-blue-400 mb-2">
                        {category.title}
                      </h4>
                      <div className="space-y-2 pl-4">
                        {category.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.path}
                            onClick={() => toggleDrawer(false)}
                            className="block text-sm text-gray-400 hover:text-blue-300 transition duration-200"
                          >
                            <h5 className="font-medium">{subItem.name}</h5>
                            <p className="text-xs">{subItem.desc}</p>
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
      </div>
    </Drawer>

          {/* Contact Icons */}
          <div className="hidden space-x-4 lg:flex">
            <PrimaryBtn text={"Book"} onClick={toggleForm} />
            <a href="mailto:hi@pulsemarketing.io" className="rounded-full p-2 border hover:bg-white/10">
              <IoIosMail className="h-4 w-4" />
            </a>
            <a href="tel:18443303141" className="rounded-full p-2 border hover:bg-white/10">
              <IoIosCall className="h-4 w-4" />
            </a>
          </div>


          {showForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
          <div className="bg-white relative p-4 rounded-lg w-full md:w-[80%] lg:w-[60%]">
            <div
              onClick={toggleForm}
               className="absolute top-2 right-3 font-bold text-2xl cursor-pointer px-2 text-blue-500  "
            >
              <IoCloseSharp
              
              />
            </div>

            <h2 className="text-xl mb-4">Schedule Your Meeting</h2>
            <div className="h-[60vh] overflow-auto" ref={calendlyContainerRef}></div>  
          </div>
        </div>
      )}
        </div>
      </div>
    </nav>
  );
}
