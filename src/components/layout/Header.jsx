"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosMail } from "react-icons/io";
// import logo from "/public/pulse-logo.svg";
import { FireApi } from "../../../utils/useRequest";

const Header = () => {
  const [headData, setHeadData] = useState([]);

  const GettingHeaderData = async () => {
    try {
      const res = await FireApi('component/read/?section=navbar', "GET");
      console.log("Response:", res);

      if (res.status === true) {
        setHeadData(res?.data?.components);
      } else {
        console.log('An error occurred');
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    GettingHeaderData();
  }, []);

  return (
    <>
      <main className="header absolute z-20 my-4 flex h-24 w-full items-center justify-between md:my-0 md:px-8 lg:mx-auto lg:w-[100%] lg:px-4">
        {/* logo  */}
        {headData.map((item) => (
          <div className="w-100" key={item.id}>
            <Link href={"/"}>
              <Image
                alt="logo"
                src={`/components/${item.pictures[0]}`}
                width={150}
                height={150}
              />
            </Link>
          </div>
        ))}

        {/* right side mail box  */}
        {headData &&
          headData.map((index) => (
            <div key={index?._id}  className="hover:duration-600 my-3 flex cursor-pointer items-center justify-center rounded-3xl bg-[#50A2D4] px-3 py-1 text-white hover:bg-white hover:text-[#62c9d6] hover:transition-all hover:ease-in-out md:my-0 md:px-5 md:py-2">
              <IoIosMail className="mr-1 text-xl" />
              <p className="poppins-regular text-[11px] md:text-[15px]">
                <Link href="mailto:hi@pulsemarketing.io">{index?.content}</Link>
              </p>
            </div>
          ))}
      </main>
    </>
  );
};

export default Header;
