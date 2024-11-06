"use client"
import Image from "next/image";
import React,{useState, useEffect} from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from '/public/pulse-logo.svg'
import TextScroller from "./TextScroller";
import Link from "next/link";
import { FireApi } from "../../../utils/useRequest";

const Footer = () => {
  // const settings = {
  //   dots: false, 
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 7000,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear",
  // };

  const [footer, setFooter] = useState([]);

  const FooterDetails = async () => {
    try {
      const res = await FireApi(
        "component/read/?section=footer-details",
        "GET",
      );
      console.log("Response:", res);

      if (res.status === true) {
        setFooter(res?.data?.components);
      } else {
        console.log("An error occurred");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    FooterDetails();
  }, []);

  return (
    <>
      <main className="w-full pb-12 ">
        <div className="w-full px-8 lg:px-0 lg:w-[90%] mx-auto md:flex justify-between items-center">
          <div>
            <Image 
            src={`/${footer?.pictures}`} 
            width={150} 
            height={150}
             alt="Logo" />
          </div>

          <div>
            <div className="md:flex mt-3 md:mt-0">
              <div className="flex items-center md:border-r-2 pr-6 mr-6">
                <Link className="flex items-center" href="tel:18443303141" target="_blank">
                <FaPhoneAlt />
                {footer?.map((item) => (
                <h3 className="poppins-light ml-3  text-[14px]" >
                  {item?.name}
                </h3>
                ))}
                </Link>
              </div>
              <div className="flex items-center">
                <Link className="flex items-center" href="mailto:hi@pulsemarketing.io" target="_blank">
                <MdEmail className="text-xl" />
                {footer?.map((item) => (
                <h3 className="poppins-light ml-3 text-[14px]">
                    {item?.header}
                </h3>
                ))}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center W-[100%] justify-center poppins-medium text-[4rem] lg:text-[100px] text-center overflow-hidden whitespace-nowrap text-transparent border-text w-full py-0 lg:py-2">
         <TextScroller text="Innovate. Create. Succeed: Your Journey Begins Here! Drive Your Business to New Heights!
          Innovate. Create. Succeed: Your Journey Begins Here! Drive Your Business to New Heights! Innovate. Create. Succeed: Your Journey Begins Here! Drive Your Business to New Heights! Innovate. Create. Succeed: Your Journey Begins Here! Drive Your Business to New Heights! Innovate. Create. Succeed: Your Journey Begins Here! Drive Your Business to New Heights!"/>
        </div>

    
        <div className="w-full px-8 lg:px-0 lg:w-[90%] mx-auto md:flex justify-between items-center">
          <div>
              {footer?.map((item) => (
            <h3 className="poppins-light text-[14px]">
                {item?.content}
              </h3>
              ))}
          </div>
          <div className="flex md:flex mt-3 md:mt-0">
            <div className="flex items-center md:border-r-2 pr-6 mr-6">
              <Link href={'https://pulsemarketing.io/privacy'} target="_blank">
              <h3 className="poppins-light text-[14px] ">Privacy Policy</h3>
              </Link>
            </div>
            <div className="flex items-center">
              <Link href={'https://pulsemarketing.io/terms-and-conditions/'} target="_blank">
              <h3 className="poppins-light text-[14px] ">Terms & Conditions</h3>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <style jsx>{`
        .border-text {
          -webkit-text-stroke: 2px #62c9d6; 
          text-stroke: 2px black; 
        }
      `}</style>
    </>
  );
};

export default Footer;