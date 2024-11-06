"use client";
import React, { useEffect, useState } from "react";
import { Reveal } from "../../utils/Reveal";
import Image from "next/image";
import { FireApi } from "../../../utils/useRequest";

const UpperTextComponent = () => {
  const [agencyDetails, setAgencyDetails] = useState([]);

  const DigitalAgencyContent = async () => {
    try {
      const res = await FireApi(
        "component/read/?section=digital-agency-content",
        "GET",
      );
      console.log("Response:", res);

      if (res.status === true) {
        setAgencyDetails(res?.data?.components);
      } else {
        console.log("An error occurred");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    DigitalAgencyContent();
  }, []);
  return (
    <>
     <main>
        <div className="m-auto flex-row items-center justify-between pb-10 md:flex md:pb-12 lg:w-[85%]">
          <div className="w-[80%] md:w-[50%]">
            <Reveal>
              {agencyDetails?.map((item) => (
                <h1 key={item._id} className="poppins-medium ct-heading text-5xl">
                  {item?.header}
                </h1>
              ))}
            </Reveal>
          </div>
          <div className="poppins-light mt-6 w-[90%] font-light md:mt-0 md:w-[50%]">
            <Reveal>
              {agencyDetails?.map((item) => (
                <p key={item._id} className="float-right md:w-[60%]">
                  {item?.content}
                </p>
              ))}
            </Reveal>
          </div>
        </div>
      </main>
    </>
  );
};

const Cards = () => {
  return (
    <>
      <main className="card-section m-auto w-full pt-16 lg:w-[85%]">
        <div className="m-auto  w-full px-10">
          <UpperTextComponent />

          <div className="mx-auto flex w-full flex-wrap items-center justify-between px-8 lg:w-[85%] lg:px-0">
            {/* card -one  */}
            <div className="card-css relative z-10 w-[48%] rotate-[-8deg] transform rounded-2xl bg-my-blue-gradient py-12 transition-transform duration-300 hover:rotate-0 hover:scale-110 hover:cursor-pointer hover:shadow-glow lg:w-[16%]">
              <div className="flex translate-x-6 flex-col justify-center gap-4">
                <Image
                  alt="img-alt"
                  src={"/img (1).png"}
                  width={40}
                  height={40}
                />
                <h3 className="poppins-medium card-text">
                  Web Design <br />
                  Development
                </h3>
              </div>

              <h2 className="poppins-bold absolute right-0 top-0 px-[15px] pt-3 text-8xl opacity-[50%]">
                1
              </h2>
            </div>

            <div className="card-css relative w-[48%] translate-y-3 rotate-[5deg] transform rounded-2xl bg-my-green-gradient py-12 transition-transform duration-300 hover:rotate-0 hover:scale-110 hover:cursor-pointer hover:shadow-glow lg:w-[16%]">
              <div className="flex translate-x-6 flex-col justify-center gap-4">
                <Image
                  alt="img-alt"
                  src={"/img (6).png"}
                  width={40}
                  height={40}
                />
                <h3 className="poppins-medium card-text">
                  Search Engine <br />
                  Optimization
                </h3>
              </div>
              <h2 className="poppins-bold absolute right-0 top-0 px-[15px] pt-3 text-8xl opacity-[50%]">
                2
              </h2>
            </div>

            <div className="card-css relative  w-[48%] -translate-y-4 rotate-[-6deg] transform rounded-2xl bg-my-purple-gradient py-12 transition-transform duration-300 hover:rotate-0 hover:scale-110 hover:cursor-pointer hover:shadow-glow lg:w-[16%]">
              <div className="flex translate-x-6 flex-col justify-center gap-4">
                <Image
                  alt="img-alt"
                  src={"/img (5).png"}
                  width={40}
                  height={40}
                />
                <h3 className="poppins-medium card-text">
                  Photography & <br />
                  Videography
                </h3>
              </div>
              <h2 className="poppins-bold absolute right-0 top-0 px-[15px] pt-3 text-8xl opacity-[50%]">
                3
              </h2>
            </div>

            <div className="card-css relative z-10 w-[48%] translate-y-3 rotate-[8deg] transform rounded-2xl bg-my-blue-gradient py-12 transition-transform duration-300 hover:rotate-0 hover:scale-110 hover:cursor-pointer hover:shadow-glow lg:w-[16%]">
              <div className="flex translate-x-6 flex-col justify-center gap-4">
                <Image
                  alt="img-alt"
                  src={"/img (4).png"}
                  width={40}
                  height={40}
                />
                <h3 className="poppins-medium card-text w-[50%] md:w-full">
                  Online <br />
                  Reputation <br />
                  Management
                </h3>
              </div>
              <h2 className="poppins-bold absolute right-0 top-0 px-[15px] pt-3 text-8xl opacity-[50%]">
                4
              </h2>
            </div>

            <div className="card-css relative  w-[48%] -translate-y-3 rotate-[-6deg] transform rounded-2xl bg-my-green-gradient py-12 transition-transform duration-300 hover:rotate-0 hover:scale-110 hover:cursor-pointer hover:shadow-glow lg:w-[16%]">
              <div className="flex translate-x-6 flex-col justify-center gap-4">
                <Image
                  alt="img-alt"
                  src={"/img (3).png"}
                  width={40}
                  height={40}
                />
                <h3 className="poppins-medium card-text">
                  Branding <br />
                  Packages
                </h3>
              </div>
              <h2 className="poppins-bold absolute right-0 top-0 px-[15px] pt-3 text-8xl opacity-[50%]">
                5
              </h2>
            </div>

            <div className="card-css relative w-[48%] translate-y-4 rotate-[8deg] transform rounded-2xl bg-my-purple-gradient py-12 transition-transform duration-300 hover:rotate-0 hover:scale-110 hover:cursor-pointer hover:shadow-glow lg:w-[16%]">
              <div className="flex translate-x-6 flex-col justify-center gap-4">
                <Image
                  alt="img-alt"
                  src={"/img (2).png"}
                  width={40}
                  height={40}
                />
                <h3 className="poppins-medium card-text">
                  Mobile App <br />
                  Development
                </h3>
              </div>
              <h2 className="poppins-bold absolute right-0 top-0 px-[15px] pt-3 text-8xl opacity-[50%]">
                6
              </h2>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cards;
