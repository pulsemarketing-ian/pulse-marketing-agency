"use client";
import React, { useEffect, useState, useRef } from "react";
import { FaStar } from "react-icons/fa";
import Header from "../layout/Header";
import Image from "next/image";
import { MdArrowForward } from "react-icons/md";
// import { Reveal } from "../../utils/Reveal";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import Navbar from "../landing_page_components/Navbar";
import { AiFillTikTok } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Box, Modal } from "@mui/material";
import SEORankingWidget from "../landing_page_components/SeoRankingWidget";

const HeroLeftContent = () => {
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
      <main className="hre-section mt-16 w-full px-5 lg:mt-0">
        <div className="flex">
          <Link
            href={
              "https://www.bbb.org/ca/bc/vancouver/profile/digital-marketing/pulse-marketing-inc-0037-2428735/#sealclick"
            }
            target="_blank"
          >
            <Image
              alt="image"
              className="mr-8"
              src={"/accrebited-bussiness-logo2.png"}
              width={125}
              height={125}
            />
          </Link>

          <Link
            href={
              "https://www.google.com/search?sca_esv=09379ecd0b6efd91&sca_upv=1&q=Pulse+Marketing+Inc.&ludocid=8690602816288484550&lsig=AB86z5VS1uhD8C0TEf_4MQU5HsGp&kgs=dd8e1417abb4f44a&shndl=30&shem=lnole,lsde,lsp&source=sh/x/loc/act/m1/1"
            }
            target="_blank"
          >
            <Image
              alt="image"
              src={"/google-review-logo2.png"}
              width={125}
              height={125}
            />
          </Link>
        </div>
        {/* Content Heading  */}
        <div>
          <h1 className="poppins-medium mt-8 text-[1.5em]  leading-[49px] md:text-[60px] md:leading-[1.3em] lg:text-[60px]">
            Our Objective:
            <br /> Increase Your <br /> Revenue.
          </h1>

          <div className="my-4 w-[90%] border-l-2 pl-3">
            <p className="poppins-light">
              Boost your brand with our expert websites, apps, and branding
              solutions. Bring your vision to life with Pulse.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col flex-wrap gap-2 text-left md:flex-row md:items-center md:gap-3">
          <p> Clients rate our team and work</p>
          <div className="flex text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p>4.8/5</p>
          <p className="text-gray-500 md:pb-0 pb-4">based on 86 client reviews</p>
        </div>

        <button
          onClick={toggleForm}
          className="poppins-regular contact-btn md:mb-0 mb-10 md:mt-[24px] mt-10 flex items-center justify-between rounded-3xl border-none bg-white px-4 py-2 text-black outline-none ease-in-out hover:bg-my-blue-gradient hover:text-white hover:transition-all"
        >
          Book Now
          <div className="ml-2 h-full rounded-full bg-[#6EE3D7] p-[2px]">
            <MdArrowForward />
          </div>
        </button>

        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gray-500 bg-opacity-50">
            <div className="relative h-[70vh] w-full max-w-2xl rounded-lg bg-white p-6 md:w-[85%] lg:w-[65%]">
              <div
                onClick={toggleForm}
                className="absolute right-3 top-2 cursor-pointer px-2 text-2xl font-bold text-blue-500"
              >
                <IoCloseSharp />
              </div>

              <h2 className="mb-4 text-xl">Schedule Your Meeting</h2>
              <div
                className="h-[60vh] overflow-x-auto overflow-y-auto sm:overflow-x-hidden"
                ref={calendlyContainerRef}
              ></div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

const HeroRightContent = ({ showForm, toggleForm }) => {
  const calendlyContainerRef = useRef(null);

  useEffect(() => {
    if (showForm) {
      const container = calendlyContainerRef.current;

      if (container) {
        // Clear the container to ensure a fresh Calendly widget is loaded each time
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
      <div className="h-[100vh]">
        <div className="block-33 display--inline-top">
          <div className="gutter relative">
            <div className="gallery-h">
              <div className="gallery-image relative">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img first-banner-img"></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img first-banner-img2"></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img first-banner-img3"></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img first-banner-img4"></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img first-banner-img5"></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img first-banner-img6"></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img first-banner-img7"></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img first-banner-img8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block-33 display--inline-top">
          <div className="gutter relative">
            <div className="gallery-h gallery-h--tb">
              <div className="gallery-image relative">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img second-banner"></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div
                    className="fill-dimensions cover-img second-banner-img2"
                    style={{ backgroundImage: "/web banner-02.png" }}
                  ></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img second-banner-img3"></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img second-banner-img4"></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img second-banner-img5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block-33 display--inline-top">
          <div className="gutter relative">
            <div className="gallery-h">
              <div className="gallery-image relative">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img third-banner"></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img third-banner-img1"></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img third-banner-img2"></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img third-banner-img3"></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img third-banner-img4"></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img third-banner-img5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showForm && (
          <div className="absolute bottom-0 right-0 h-[70%] w-[30%] -translate-y-20 overflow-x-hidden overflow-y-scroll rounded-lg bg-white">
            <div className="relative inset-0 flex w-full items-center justify-center">
              <button
                onClick={toggleForm}
                className="absolute right-2 top-2 z-20 bg-my-blue-gradient text-lg text-white"
              >
                {/* &times; */}
                <IoMdClose />
              </button>
              <div ref={calendlyContainerRef}></div>
            </div>
          </div>
        )}

        {/* <div
        onClick={toggleForm}
        className="absolute bottom-0 right-0 w-[30%] -translate-y-[70%] get-btn"
      >
        <div className="bg-[#50A2D4] px-6 rounded-tl-[40px] py-3">
          <h3 className="poppins-light text-white text-lg">Get in touch</h3>
        </div>
      </div> */}
      </div>
    </>
  );
};

const HeroSection = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <main
        className="relative m-auto w-full py-[0px] md:py-[60px] lg:w-full"
        // style={{ backgroundImage: "url('/images/home0-banner.jpg')"; background-size: cover}}>
        style={{
          backgroundImage: "url('/images/home-banner.jpg')",
          // backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
        }}
      >
        <div className="relative flex w-[100%] flex-row justify-between ">
          {/* my header component  */}
          {/* <Header /> */}
          {/* <SEORankingWidget/> */}
          <Navbar />

          <div className="my-20 flex w-[100%] flex-row  items-center lg:my-0 lg:w-[50%]">
            {/* social icon component  */}
            <div className="social-logos flex w-[8%] translate-x-0 flex-col justify-center gap-1">
              <Link
                href={"https://www.facebook.com/share/15tKgzAGc8/?mibextid=wwXIfr"}
                target="_blank"
              >
                <div
                  className="flex  items-center justify-center
               rounded-full px-0 py-3 hover:cursor-pointer hover:bg-blue-400 hover:duration-100 hover:ease-in-out"
                >
                  <Image
                    src={"/Facebook.png"}
                    alt="facebook"
                    width={8}
                    height={8}
                  />
                </div>
              </Link>

              <Link
                href={"https://www.instagram.com/pulsemarketing.io"}
                target="_blank"
              >
                <div
                  className="flex items-center  justify-center rounded-full 
               py-3 hover:cursor-pointer hover:bg-blue-400 hover:duration-100 hover:ease-in-out"
                >
                  <Image
                    src={"/Subtract.png"}
                    alt="subtract"
                    width={12}
                    height={12}
                  />
                </div>
              </Link>

              <Link
                href={
                  "https://www.linkedin.com/company/pulse-inc/"
                }
                target="_blank"
              >
                <div
                  className="flex  items-center justify-center rounded-full 
              py-3 hover:cursor-pointer hover:bg-blue-400 hover:duration-100 hover:ease-in-out"
                >
                  <Image
                    src={"/Linkedin.png"}
                    alt="linkedin"
                    width={12}
                    height={12}
                  />
                </div>
              </Link>

              <Link
                href={"https://youtube.com/@pulsemarketinginc?si=dSVTlmbIx-Kqzbcv"}
                target="_blank"
              >
                <div
                  className="flex  items-center justify-center rounded-full
               py-[14px] hover:cursor-pointer hover:bg-blue-400 hover:duration-100 hover:ease-in-out"
                >
                  <Image
                    src={"/Youtube.png"}
                    alt="youtube"
                    width={12}
                    height={12}
                  />
                </div>
              </Link>

              <Link
                href="https://www.tiktok.com/@pulsemarketing.io"
                target="_blank"
                className="hover:text-blue-800"
              >
                <div
                  className="flex items-center justify-center rounded-full py-[14px]
               text-[20px] hover:cursor-pointer hover:bg-blue-400 hover:text-white hover:duration-100 hover:ease-in-out"
                >
                  <AiFillTikTok />
                </div>
              </Link>
            </div>

            <div className="md:mt-20">
              <HeroLeftContent toggleForm={toggleForm} showForm={showForm} />
            </div>
          </div>

          <div className="hidden w-[50%] overflow-y-hidden md:h-[100vh] lg:block">
            <HeroRightContent />
          </div>

          {showForm && (
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gray-500 bg-opacity-50">
              <div className="relative h-[70vh] w-full max-w-2xl rounded-lg bg-white p-6 md:w-[85%] lg:w-[65%]">
                <div
                  onClick={toggleForm}
                  className="absolute right-3 top-2 cursor-pointer px-2 text-2xl font-bold text-blue-500"
                >
                  <IoCloseSharp />
                </div>

                <h2 className="mb-4 text-xl">Schedule Your Meeting</h2>
                <div
                  className="h-[60vh] overflow-y-auto overflow-x-hidden"
                  ref={calendlyContainerRef}
                ></div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default HeroSection;
