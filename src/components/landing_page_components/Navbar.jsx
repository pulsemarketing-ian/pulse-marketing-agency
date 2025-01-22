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
          // {
          //   name: "Video Photo",
          //   desc: "Content management systems",
          //   path: "/video-photo",
          // },
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
    <>
    <nav
      className={`fixed left-0 right-0 top-0 z-50 py-2 transition-all bg-black/70 shadow-md backdrop-blur-sm`}
    >
      <div className="mx-auto max-w-[1300px]">
        <div className="flex h-16 items-center justify-between px-4">
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
                className="group relative"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={item.path}
                  className="flex items-center space-x-1 hover:text-blue-400"
                >
                  <span className="text-[18px]">{item.label}</span>
                  {item.categories && <MdArrowDropDown className="h-5 w-5" />}
                </Link>

                {/* Dropdown for mega menu */}
                {item.categories && activeMenu === item.label && (
                  <div className="left-[-50%] z-50 w-screen -translate-x-[42%] transform bg-opacity-10 bg-gradient-to-r from-[#040117] to-black px-6 py-10 text-white shadow-2xl md:absolute">
                    <div className="mx-auto grid max-w-[1210px] grid-cols-3 gap-8 pl-6">
                      <div>
                        <h4 className="mb-4 text-lg font-semibold">
                          What Can We Do
                        </h4>
                        <Link
                          href={"/web-development"}
                          className="mb-2 block rounded-lg py-3 hover:bg-black/20 hover:text-blue-400"
                        >
                          <h5 className="font-medium">Web Development</h5>
                          <p className="text-sm text-gray-300">
                          Custom Websites and Applications
                          </p>
                        </Link>

                        <Link
                          href={"/seo"}
                          className="mb-2 block rounded-lg py-3 hover:bg-black/20 hover:text-blue-400"
                        >
                          <h5 className="font-medium">SEO</h5>
                          <p className="text-sm text-gray-300">
                            Search Engine Optimization
                          </p>
                        </Link>

                        <Link
                          href={"/branding"}
                          className="mb-2 block rounded-lg py-3 hover:bg-black/20 hover:text-blue-400"
                        >
                          <h5 className="font-medium">Branding</h5>
                          <p className="text-sm text-gray-300">
                          Custom Brand Catalogues
                          </p>
                        </Link>

                        {/* <Link
                          href={"/video-photo"}
                          className="mb-2 block rounded-lg py-3 hover:bg-black/20 hover:text-blue-400"
                        >
                          <h5 className="font-medium">Video Photo</h5>
                          <p className="text-sm text-gray-300">
                            Content Management Systems
                          </p>
                        </Link> */}

                        <Link
                          href={"/cro"}
                          className="mb-2 block rounded-lg py-3 hover:bg-black/20 hover:text-blue-400"
                        >
                          <h5 className="font-medium">CRO</h5>
                          <p className="text-sm text-gray-300">
                            Conversion Rate Optimization
                          </p>
                        </Link>
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <div className="relative h-[160px] w-[400px] rounded-lg">
                          <Link href={"/web-development"}>
                            <Image
                              src={"/images/web-dev_page_images/hero.png"}
                              alt="Web Development"
                              layout="fill"
                              objectFit="cover"
                            />
                          </Link>
                        </div>

                        <div className="relative h-[160px] w-[400px] rounded-lg">
                          <Link href={"/seo"}>
                            <Image
                              src={"/images/seo_page_images/seo-hero.png"}
                              alt="SEO"
                              layout="fill"
                              objectFit="cover"
                            />
                          </Link>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <div className="relative h-[160px] w-[400px] rounded-lg">
                          <Link href={"/our-work"}>
                            <Image
                              src={"/images/our-work_page_images/our-work.png"}
                              alt="App Development"
                              layout="fill"
                              objectFit="cover"
                            />
                          </Link>
                        </div>

                        <div className="relative h-[160px] w-[400px] rounded-lg">
                          <Link href={"/cro"}>
                            <Image
                              src={"/images/cro_page_images/herosection.png"}
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
          <Drawer
            anchor="right"
            open={openDrawer}
            onClose={() => toggleDrawer(false)}
          >
            <div className="flex h-[100vh] w-[300px] flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-black p-4 text-white shadow-lg">
              <div className="flex items-center justify-between border-b border-gray-700 pb-3">
                <h3 className="text-lg font-bold uppercase tracking-wide">
                  Menu
                </h3>
                <div onClick={() => toggleDrawer(false)}>
                  <IoClose size={24} style={{ color: "white" }} />
                </div>
              </div>

              {/* Menu items in the mobile drawer */}
              <div className="mt-6 space-y-6">
                {menuItems.map((item, index) => (
                  <div key={item.label}>
                    <Link href={item.path}>
                      <div
                        className={`block cursor-pointer rounded-lg bg-gray-800/70 p-3 text-lg font-medium tracking-wide transition duration-200 hover:bg-blue-600/70 ${
                          item.categories
                            ? "flex items-center justify-between"
                            : ""
                        }`}
                        onClick={() =>
                          item.categories
                            ? handleSubmenuToggle(index)
                            : toggleDrawer(false)
                        }
                      >
                        {item.label}
                        {item.categories && (
                          <span className="ml-2">
                            {openSubmenu === index ? "-" : "+"}
                          </span>
                        )}
                      </div>
                    </Link>

                    {/* Subcategories dropdown */}
                    {item.categories && openSubmenu === index && (
                      <div className="mt-4 space-y-6 pl-4">
                        {item.categories.map((category) => (
                          <div key={category.title}>
                            <h4 className="text-md mb-2 font-semibold text-blue-400">
                              {category.title}
                            </h4>
                            <div className="space-y-2 pl-4">
                              {category.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.path}
                                  onClick={() => toggleDrawer(false)}
                                  className="block text-sm text-gray-400 transition duration-200 hover:text-blue-300"
                                >
                                  <h5 className="font-medium">
                                    {subItem.name}
                                  </h5>
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
          <div className="hidden space-x-4 lg:flex lg:items-center">
            <PrimaryBtn text={"Book"} onClick={toggleForm} />
            <a
              href="mailto:hi@pulsemarketing.io"
              target="_blank"
              className="rounded-full border p-3 hover:bg-white/10"
            >
              <IoIosMail className="h-5 w-5" />
            </a>
            {/* <a
              href="tel:+1-778-960-7426"
              target="_blank"
              className="rounded-full border p-3 hover:bg-white/10"
            >
              <IoIosCall className="h-5 w-5" />
            </a> */}
          </div>

        </div>
      </div>
    </nav>
          {showForm && (
           <div className="fixed z-99 inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
           <div className="relative w-full max-w-lg rounded-lg bg-white p-4 md:w-[80%] lg:w-[60%]">
             <div
               onClick={toggleForm}
               className="absolute right-3 top-2 cursor-pointer px-2 text-2xl font-bold text-blue-500"
             >
               <IoCloseSharp />
             </div>
         
             <h2 className="mb-4 text-xl">Schedule Your Meeting</h2>
             <div
               className="h-[60vh] overflow-auto"
               ref={calendlyContainerRef}
             ></div>
           </div>
         </div>  
          )}
          </>
  );
}
