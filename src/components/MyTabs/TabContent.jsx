import React from "react";
import Image from "next/image";

const TabContent = (props) => {
  return (
    <>
      <main className="w-full flex flex-row justify-between items-center py-10">
        <div className="w-[40%] ">
          {/* content will here */}
          {/* heading parent */}
          <div className="relative flex items-center my-[-3rem]">
            <h2 className="text-[200px] opacity-[15%] poppins-bold">
              {props.heading}
            </h2>
            <div className="absolute">
              <h4 className="poppins-bold text-[55px]">{props.headingChild}</h4>
            </div>
          </div>
          {/* my text para content  */}
          <div className="w-full flex">
            <div className="w-[8%] mt-3 mr-2">
              <Image src={"/line.png"} alt="line" width={100} height={100} />
            </div>
            <div className="w-[80%]">
              <p className="poppins-light text-[14px]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using &apos;Content
                here, content&apos;.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[60%] flex items-right">
          <Image src={"/laptop 1.png"} alt="laptop" width={1000} height={1000} />
        </div>
      </main>
    </>
  );
};

export default TabContent;