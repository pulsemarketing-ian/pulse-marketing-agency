"use client";
// import { Reveal } from "@/utils/Reveal";
import React from "react";

const OtherContent = () => {
  
  const data = [
    {
      heading: "Service refers to the Website.",
      content:
        "Terms and Conditions (also referred as; Terms mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.",
      content2:
        "Third-party Social Media Service means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.",
    },
    {
      heading: "Website refers to pulse, accessible from pulse.io.",
      content: "You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.Acknowledgment These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service. Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.",
      content2:"By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service. You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service. Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.",
    },
    {
      heading: "Links to Other Websites",
      content: "Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.. The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.",
      content2: "We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.",
    },
  ];

  return (
    <main className="pb-8 mt-18 md:pb-0">
      {data.map((item, index) => (
        <div
          key={index._id}
          style={{
            backgroundImage: "url('/images/app_page_images/radial.png)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          className="mx-auto flex md:w-[65%] px-6 md:px-0 flex-col items-center justify-center gap-3 text-center pt-16"
        >
          {" "}
          
             <h2 className=" text-xl md:text-4xl font-bold tracking-wide">{item.heading}</h2>
         
            <p>{item.content}</p>
         
            <p className="mb-0">{item.content2}</p>
          
        </div>
      ))}
    </main>
  );
};

export default OtherContent;
