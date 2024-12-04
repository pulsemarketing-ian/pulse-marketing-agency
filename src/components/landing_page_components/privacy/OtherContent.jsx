"use client";
import { Reveal } from "@/utils/Reveal";
import React from "react";

const OtherContent = () => {
  const data = [
    {
      heading: "Cookies",
      content:
        " Our website uses cookies to enhance your browsing experience and to analyze website traffic. These cookies help us.",
      content2:
        "You can control or disable cookies through your browser settings. However, doing so may impact the functionality of certain features on our site.",
    },
   
  ];

  return (
    <React.Fragment>
      {data.map((item, index) => (
        <div
          key={index._id}
          style={{
            backgroundImage: "url('/images/app_page_images/radial.png)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          className="mx-auto flex md:w-[70%] px-6 md:px-0 flex-col items-center justify-center gap-3 text-center py-16 "
        >
          {" "}
          <Reveal>
             <h2 className="text-xl md:text-4xl font-bold tracking-wide">{item.heading}</h2>
          </Reveal>
          <Reveal>
            <p>{item.content}</p>
          </Reveal>
          <Reveal>
            <p>{item.content2}</p>
          </Reveal>
        </div>
      ))}
    </React.Fragment>
  );
};

export default OtherContent;
