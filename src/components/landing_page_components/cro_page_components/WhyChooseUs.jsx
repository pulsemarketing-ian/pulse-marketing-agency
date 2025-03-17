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
import { IoArrowDownOutline } from "react-icons/io5";
import Image from "next/image";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { Reveal } from "@/utils/Reveal";
import { motion } from "motion/react";

const darkTheme = createTheme({
  palette: {},
  typography: {
    fontFamily: "inherit",
  },
});

export default function WhyChooseUs() {
  const [expanded, setExpanded] = useState("panel1");

  const handleAccordionChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <main
    className="md:mt-0 mt-32"
      style={{
        backgroundImage: "url('/images/app_page_images/radial.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Box
          sx={{
            color: "white",
            py: { xs: 0, md: 4 },
            px: 2,
            mt: { xs: -6, md: 0 },
          }}
        >
          <Box sx={{ px: { xs: 2, md: 6 } }}>
            <div className="mt-18 flex justify-center md:mt-3">
              <h2 className="mb-2 w-full text-center text-2xl font-bold tracking-wide md:text-4xl">
                Why Choose Pulse for CRO?
              </h2>
            </div>

            <Grid 
            className="md:flex md:justify-center"
              container
              spacing={2}
              alignItems="flex-end"
              sx={{ mt: { xs: 0, md: 4 } }}
            >
              {/* <Grid item xs={12} lg={5}>
                <div>
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
                      src="/images/cro_page_images/choose-pulse.png"
                      alt="choose-pulse us"
                      layout="fill"
                      objectFit="cover"
                    />
                  </Box>
                </div>
              </Grid> */}

              <Grid item xs={12} lg={7} sx={{ pl: { xs: 0, md: 4 } }}>
                {[
                  {
                    panel: "panel1",
                    title: "Proven Expertise in Shopify and E-commerce Expertise",
                    content:
                      "We have extensive experience optimizing Shopify stores and other leading e-commerce platforms like WooCommerce, Magento, and BigCommerce. Our team understands the unique challenges of each platform and applies tailored strategies to maximize conversions.",
                  },
                  {
                    panel: "panel2",
                    title: "Data-Driven Optimization",
                    content:
                      "Our CRO strategies are backed by in-depth analytics and user behavior insights. We identify patterns, test variations, and implement data-driven improvements that enhance user experience, increase engagement, and drive measurable growth.",
                  },
                  {
                    panel: "panel3",
                    title: "Customized Strategies for Maximum Impact",
                    content:
                      "No two businesses are the same, and neither are our strategies. We develop tailored CRO solutions aligned with your business goals, ensuring a seamless and personalized approach that maximizes conversions and long-term success.",
                  },
                  {
                    panel: "panel4",
                    title: "End-to-End CRO Solutions",
                    content:
                      "From data analysis and strategy development to implementation and continuous optimization, we handle the entire CRO process. Our full-service approach ensures that every aspect of your website is optimized for higher conversions, better user engagement, and sustainable growth.",
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
                      expandIcon={
                        <IoArrowDownOutline
                          style={{
                            color: "white",
                            backgroundColor: "#0a91bc",
                            borderRadius: "50%",
                            padding: "5px",
                            fontSize: "23px",
                          }}
                        />
                      }
                    >
                      <Typography variant="h5">{title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{content}</Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Grid>
            </Grid>
            <div className="mt-18 flex justify-center md:mt-5">
                <h2 className="md:text-md text-sm ">Want to unlock your site's full revenue potential? <strong>Let’s optimize your conversions today.</strong></h2>
            </div>
          </Box>
        </Box>
      </ThemeProvider>
    </main>
  );
}
