'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { IoIosMail, IoIosCall } from "react-icons/io"
import { FaBars, FaTimes } from "react-icons/fa"

const menuItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/app" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/branding" },
  { label: "CRM", path: "#" },
  { label: "Blog", path: "/blog" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
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
                <Link
                  key={item.label}
                  href={item.path}
                  className="text-white hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Book
              </button>
              <button className="ml-3 bg-transparent hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full border border-white hover:border-transparent">
                <IoIosMail />
              </button>
              <button className="ml-3 bg-transparent hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full border border-white hover:border-transparent">
                <IoIosCall />
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5 space-x-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Book
              </button>
              <button className="bg-transparent hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full border border-white hover:border-transparent">
                <IoIosMail />
              </button>
              <button className="bg-transparent hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full border border-white hover:border-transparent">
                <IoIosCall />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}