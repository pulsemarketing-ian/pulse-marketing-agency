"use client";
import React from "react";
import { Reveal } from "@/utils/Reveal";
import Image from "next/image";
import { motion } from "motion/react";

const AboutText = () => {
  return (
    // <main
    //   className="w-full pt-10 md:mx-auto md:w-[1200px] md:pb-16 md:pt-20"
    //   style={{
    //     backgroundImage: "url('/images/app_page_images/radial.png')",
    //     backgroundSize: "contain",
    //     backgroundRepeat: "no-repeat",
    //   }}
    // >
    //   <div className="w-full flex-col px-6 md:w-[50%] md:px-0">
    //     <div className="mb-2 flex w-auto items-center gap-1">
    //       <Image
    //         src="/images/services_page_images/blue-dot.png"
    //         alt="blue-dot"
    //         width={20}
    //         height={20}
    //       />
    //       <p>About This Project</p>
    //     </div>

    //     {/* heading main  */}
    //     <div className="flex flex-wrap items-center gap-6 ">
    //       <Reveal>
    //         <h2 className=" w-auto text-xl font-bold leading-tight text-white md:text-5xl mb-2">
    //         Unity in Diversity <br/> Strength in Teamwork
    //         </h2>
    //       </Reveal>

    //       <Reveal>
    //         <p>
    //         Innovation is our ethos, and teamwork is our superpower. Join us at Pulse Marketing, where every individual is expertise fuels our collective success in IT solutions.</p>
    //       </Reveal>
    //     </div>
    //   </div>

    //   <div className="mt-10 flex h-auto w-full flex-wrap justify-between gap-4 px-4 md:h-[60vh] md:gap-0   md:px-0">
    //     {/* left box */}
    //     <motion.div
    //       initial={{
    //         x: -300,
    //         opacity: 0,
    //       }}
    //       whileInView={{
    //         x: 0,
    //         opacity: 1,
    //       }}
    //       transition={{
    //         delay: 0.5,
    //         duration: 0.5,
    //         ease: "easeInOut",
    //       }}
    //       viewport={{ once: false, amount: 0.2 }}
    //       className="h-[100%] w-full rounded-2xl bg-[#120E28] p-10 md:w-[48%] "
    //     >
    //       <h2 className="mb-3 text-2xl font-bold">Why We Rock</h2>
    //       <p>
    //       Welcome to Pulse Marketing Inc, a Vancouver-based marketing firm with years of experience serving over 8,000 clients from various industries. We have successfully completed more than 25,000 projects, offering comprehensive services from AI consulting, website and app development, ORM, branding, to digital marketing and more.

    //     Our highly skilled team applies the latest marketing strategies to meet our clients goals, including increasing brand awareness, lead generation and sales growth.

    //     Thanks for considering Pulse Marketing Inc. for your marketing needs. We are committed to helping you reach your goals and propelling your business forward.
    //       </p>
    //     </motion.div>

    //     {/* right box  */}
    //     <motion.div
    //       initial={{
    //         x: 300,
    //         opacity: 0,
    //       }}
    //       whileInView={{
    //         x: 0,
    //         opacity: 1,
    //       }}
    //       transition={{
    //         delay: 0.5,
    //         duration: 0.5,
    //         ease: "easeInOut",
    //       }}
    //       viewport={{ once: false, amount: 0.2 }}
    //       className="flex w-full justify-end rounded-2xl md:w-[48%] h-full "
    //     >
    //       <Image
    //         src={"/images/work-details/about-project.png"}
    //         alt="about-project"
    //         width={550}
    //         height={550}
    //       />
    //     </motion.div>
    //   </div>
    // </main>


    
    <main className="relative w-full pb-32 md:pb-0">
    <div
      style={{
        backgroundImage: "url('/images/services_page_images/circle.png/')",
        backgroundSize: "cover",
        transform: "translateY(-50%)",
      }}
      className="h-[50vh] md:h-[100vh]"
    />
    <div
      className="absolute top-0 z-10 flex w-full flex-col items-center justify-center md:top-12 "
      style={{
        backgroundImage: "url('/images/app_page_images/radial.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="z-10 text-center md:-mt-4">
        <Reveal>
          <h1 className="mb-2 text-xl font-bold tracking-wide md:text-5xl">
            Unity in Diversity <br />
            Strength in Teamwork
          </h1>
        </Reveal>
      </div>

      {/* inner content  */}
      <div className="mt-6 flex-col overflow-hidden px-6 md:mx-auto md:flex  md:w-[1200px] md:items-center md:justify-between md:px-0 lg:flex-row ">
        {/* left box  */}
        <motion.div
          initial={{
            x: -300,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: false, amount: 0.2 }}
          className="h-[100%] w-full rounded-2xl bg-[#120E28] p-10 md:w-[48%] "
        >
          <h2 className="mb-3 text-2xl font-bold">Why We Rock</h2>
          <p>
            Welcome to Pulse Marketing Inc, a Vancouver-based marketing firm
            with years of experience serving over 8,000 clients from various
            industries. We have successfully completed more than 25,000
            projects, offering comprehensive services from AI consulting,
            website and app development, ORM, branding, to digital marketing
            and more. Our highly skilled team applies the latest marketing
            strategies to meet our clients goals, including increasing brand
            awareness, lead generation and sales growth. Thanks for
            considering Pulse Marketing Inc. for your marketing needs. We
            are committed to helping you reach your goals and propelling
            your business forward.
          </p>
        </motion.div>

        {/* right box  */}
        <motion.div
          initial={{
            x: 300,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex h-full w-full justify-end rounded-2xl md:w-[48%] "
        >
          <Image
            src={"/images/work-details/about-project.png"}
            alt="about-project"
            width={550}
            height={550}
          />
        </motion.div>
      </div>
    </div>
  </main>
  );
};

export default AboutText;
