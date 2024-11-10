'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { IoIosMail, IoIosCall } from "react-icons/io"
import { FaBars, FaTimes } from "react-icons/fa"
import { MdArrowDropDown } from "react-icons/md";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/app" },
  {
    label: "Services",
    path: "/services",
    subItems: [
      { label: "Our Services", path: "services" },
      { label: "Web Development", path: "web-development" },
      { label: "SEO", path: "seo" },
      { label: "Branding", path: "branding" },
      { label: "Video Photo", path: "video-photo" },
    ],
  },
  { label: "Portfolio", path: "our-work" },
  { label: "Terms", path: "term-condition" },
  { label: "Our Policy", path: "privacy" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  return (
    <nav className="bg-transparent absolute w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-auto" src="/white-logo.png" alt="Logo" />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.subItems ? (
                    <>
                      <button
                        onClick={toggleServices}
                        className="text-white hover:bg-my-blue-gradient px-3 py-2 rounded-md text-sm font-medium flex items-center"
                      >
                        {item.label}
                        <MdArrowDropDown  className="ml-1 h-4 w-4" />
                      </button>
                      {isServicesOpen && (
                        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.label}
                                href={subItem.path}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.path}
                      className="text-white hover:bg-my-blue-gradient px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-my-blue-gradient text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-my-blue-gradient focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                Book
              </button>
              <a href="mailto:hi@pulsemarketing.io" target="_blank" rel="noopener noreferrer" className="cursor-pointer ml-3 bg-transparent hover:bg-my-blue-gradient text-white font-bold py-2 px-2 rounded-full border border-white hover:border-transparent">
                <IoIosMail />
              </a>
              <a href="tel:18443303141" target="_blank" rel="noopener noreferrer" className="cursor-pointer ml-3 bg-transparent hover:bg-my-blue-gradient text-white font-bold py-2 px-2 rounded-full border border-white hover:border-transparent">
                <IoIosCall />
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white bg-my-blue-gradient hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu" 
        style={{ 
          backgroundColor:'#030017', 
          display:'flex', 
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'center' 
        }}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <div key={item.label}>
                {item.subItems ? (
                  <>
                    <button
                      onClick={toggleServices}
                      className="text-gray-300 hover:bg-my-blue-gradient hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {isServicesOpen && (
                      <div className="pl-4">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.path}
                            className="text-gray-300 hover:bg-my-blue-gradient hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            onClick={toggleMenu}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.path}
                    className="text-gray-300 hover:bg-my-blue-gradient hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5 space-x-3">
              <button className="bg-my-blue-gradient text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-my-blue-gradient focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Book
              </button>
              <a href="mailto:hi@pulsemarketing.io" target="_blank" rel="noopener noreferrer" className="bg-transparent hover:bg-my-blue-gradient text-white font-bold py-2 px-4 rounded-full border border-white hover:border-transparent">
                <IoIosMail />
              </a>
              <a href="tel:18443303141" target="_blank" rel="noopener noreferrer" className="bg-transparent hover:bg-my-blue-gradient text-white font-bold py-2 px-4 rounded-full border border-white hover:border-transparent">
                <IoIosCall />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}