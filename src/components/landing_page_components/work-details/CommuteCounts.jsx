"use client";
import React from "react";
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
// import { Reveal } from "@/utils/Reveal";
import Image from "next/image";
import { motion } from "motion/react";

const CommuteCounts = () => {
  return (
    <main
      className="w-full pt-10 md:mx-auto md:w-[1200px] md:pb-16 md:pt-0"
      style={{
        backgroundImage: "url('/images/app_page_images/radial.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full flex-col px-6 md:w-[50%] md:px-0">
        <div className="mb-2 flex w-auto items-center gap-1">
          <Image
            src="/images/services_page_images/blue-dot.png"
            alt="blue-dot"
            width={20}
            height={20}
          />
          <p>About This Project</p>
        </div>

        {/* heading main  */}
        <div className="flex flex-wrap items-center gap-6 ">
          <h2 className=" w-auto text-xl font-bold leading-tight text-white md:text-5xl">
            Every commute counts.
          </h2>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry is standard dummy text
            ever since the 1500s, when an unknown printer took
          </p>
        </div>
      </div>

      <div className="mt-10 flex h-auto w-full flex-wrap justify-between gap-4 px-4 md:h-[60vh] md:gap-0 md:px-0">
        {/* left box */}
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
          className="h-[100%] w-full rounded-2xl bg-[#120E28] p-10 md:w-[48%]"
        >
          <h2 className="mb-3 text-2xl font-bold">Overview</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem.
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
          className="flex w-full justify-end rounded-2xl md:w-[48%]"
        >
          <Image
            src={"/images/work-details/about-project.png"}
            alt="about-project"
            width={550}
            height={550}
          />
        </motion.div>
      </div>
    </main>
  );
};

export default CommuteCounts;
