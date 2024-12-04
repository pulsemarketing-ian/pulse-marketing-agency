"use client";
import { Reveal } from "@/utils/Reveal";
import React from "react";

const OtherContent = () => {
  const data = [
    {
      heading: "Privacy Statement",
      content:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book. It has survived not only fivecenturies, but also the leap into electronic typesetting, remainingessentially unchanged.",
      content2:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      heading: "Availability",
      content:
        " Our team operates Monday to Friday from 9:00 AM to 6:00 PM. Requests outside these hours will be addressed on the next working day.",
      content2:
        "Delays: While we strive to meet agreed deadlines, certain factors beyond our control, such as technical issues or third-party delays, may affect availability.",
    },
    {
      heading: "Cookies",
      content:
        " Our website uses cookies to improve user experience and analyze website traffic. By using our website, you consent to the use of cookies in accordance with our cookie policy.",
      content2:
        " You can disable cookies in your browser settings, but doing so may affect website functionality.",
    },
    {
      heading: "Links to this website",
      content:
        " Permission: You may link to our website provided it is done in a way that is fair and legal and does not damage our reputation.",
      content2:
        "Prohibited Uses: Linking in a manner that suggests endorsement or association without our consent is strictly prohibited.",
    },
    {
      heading: "Notification of changes",
      content:
        " Updates We reserve the right to update these terms and conditions at any time. Changes will be posted on this page with a revised date.",
      content2:
        "Acceptance of Changes Continued use of our services after changes are made constitutes your acceptance of the updated terms.",
    },
  ];

  return (
    <main className="pb-8 md:pb-0">
      {data.map((item, index) => (
        <div
          key={index._id}
          style={{
            backgroundImage: "url('/images/app_page_images/radial.png)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          className="mx-auto flex md:w-[70%] px-6 md:px-0 flex-col items-center justify-center gap-3 text-center pt-16"
        >
          {" "}
          <Reveal>
             <h2 className=" text-xl md:text-4xl font-bold tracking-wide">{item.heading}</h2>
          </Reveal>
          <Reveal>
            <p>{item.content}</p>
          </Reveal>
          <Reveal>
            <p>{item.content2}</p>
          </Reveal>
        </div>
      ))}
    </main>
  );
};

export default OtherContent;
