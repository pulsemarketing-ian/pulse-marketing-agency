"use client";
import { Reveal } from "@/utils/Reveal";
import React from "react";

const OtherContent = () => {
  const data = [
    {
      heading: "Cookies",
      content:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book. It has survived not only fivecenturies, but also the leap into electronic typesetting, remainingessentially unchanged.",
      content2:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
          className="mx-auto flex md:w-[70%] px-6 md:px-0 flex-col items-center justify-center gap-3 text-center pb-16"
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
