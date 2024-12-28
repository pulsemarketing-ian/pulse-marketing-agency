"use client";
import React, { useState } from "react";
import {
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Box,
} from "@mui/material";
import { MdArrowDropDown } from "react-icons/md";
import Image from "next/image";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Reveal } from "@/utils/Reveal";
import { motion } from "motion/react";

const darkTheme = createTheme({
  palette: {},
  typography: {
    fontFamily: "inherit",
  },
});

export default function DigitalAgency() {
  const [expanded, setExpanded] = useState("panel1"); 

  const handleAccordionChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ color: "white", py: { xs: 8, md: 4 }, px: 2 }}>
        <Box sx={{ px: 6 }}>
          <div className="flex justify-center mt-3">
            <Reveal>
              <h2 className="text-2xl md:text-4xl font-bold tracking-wide text-center w-full mb-2">
                A Full Service <br /> Creative Digital Agency
              </h2>
            </Reveal>
          </div>

          <Grid
            container
            spacing={2}
            alignItems="flex-start"
            sx={{ mt: { xs: 0, md: 4 } }}
          >
            <Grid item xs={12} lg={5}>
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
              >
                <Box
                  sx={{
                    position: "relative",
                    aspectRatio: "1/1",
                    borderRadius: "16px",
                    overflow: "hidden",
                    transform: "scale(1)",
                    transition: "transform 0.7s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <Image
                    src="/images/web-dev_page_images/accordin.png"
                    alt="Digital analytics visualization"
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} lg={7}>
              {[
                {
                  panel: "panel1",
                  title: "Tailored Solutions",
                  content:
                    "At Pulse, we specialize in delivering tailored web development solutions that cater to the unique needs of your business. Whether you're looking to create a stunning website, improve user experience, or integrate complex functionalities, our team ensures that every aspect is customized to match your vision. We believe in a collaborative approach, understanding your goals to create websites that are not only visually appealing but also highly functional. Our cutting-edge technologies and expert developers work together to build scalable, responsive, and secure websites that drive results and support your business growth",
                },
                {
                  panel: "panel2",
                  title: "Cutting-Edge Technology",
                  content:
                    "At Pulse, we leverage cutting-edge technology to deliver innovative web development solutions that stay ahead of the curve. By incorporating the latest tools, frameworks, and best practices, we ensure that your website is not only modern and visually appealing but also fast, secure, and scalable. From responsive design to advanced back-end development, our team utilizes the most up-to-date technologies to create a seamless user experience across all devices. Our commitment to staying on the forefront of digital trends guarantees that your business benefits from the most efficient and effective web solutions available",
                },
                {
                  panel: "panel3",
                  title: "User-Centric Design",
                  content:
                    "At Pulse, we prioritize user-centric design to create websites that provide an exceptional experience for your visitors. By focusing on usability, intuitive navigation, and seamless interaction, we ensure that every element of your website is designed with your audience in mind. Our team conducts thorough research to understand user behavior and preferences, crafting designs that are both functional and visually engaging. Whether it is a simple landing page or a complex platform, we aim to create designs that not only captivate users but also drive engagement, conversions, and lasting relationships with your brand",
                },
                {
                  panel: "panel4",
                  title: "SEO Optimization",
                  content:
                    "At Pulse, we understand the importance of SEO optimization in driving organic traffic and increasing your online visibility. Our expert team utilizes the latest SEO strategies to enhance your website's performance on search engines, ensuring it ranks higher and reaches the right audience. From keyword research to on-page optimization and technical SEO, we take a holistic approach to improve your website's searchability. By optimizing every aspect of your site, we help you achieve better rankings, attract more qualified leads, and ultimately, grow your business online with lasting impact",
                },
                {
                  panel: "panel5",
                  title: "Continuous Evolution",
                  content:
                    "At Pulse, we believe in continuous evolution to keep your website ahead of the competition. The digital landscape is constantly changing, and so are the needs of your users. Our team is committed to ongoing improvements, regularly updating your website is design, functionality, and performance to adapt to new trends and technologies. By monitoring analytics and gathering user feedback, we ensure your website evolves to meet the demands of the market and deliver the best possible user experience. With our approach, your online presence remains dynamic, relevant, and primed for future growth.",
                },
                {
                  panel: "panel6",
                  title: "Elevate Your Online Presence",
                  content:
                    "At Pulse, we specialize in helping businesses elevate their online presence through custom web solutions designed to make an impact. Whether you need a sleek, modern website or a comprehensive digital strategy, our team ensures your brand stands out. By focusing on user-friendly design, optimized performance, and cutting-edge technology, we create websites that not only look great but also drive engagement and conversions. Our goal is to help you connect with your audience, build credibility, and grow your brand in today is competitive digital landscape.",
                },
              ].map(({ panel, title, content }) => (
                <Accordion
                  key={panel}
                  expanded={expanded === panel}
                  onChange={handleAccordionChange(panel)}
                  sx={{
                    bgcolor: "transparent",
                    color: "white",
                    borderBottom: "1px solid white",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<MdArrowDropDown style={{ color: "white" }} />}
                  >
                    <Typography variant="h6">{title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{content}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
