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
              container
              spacing={2}
              alignItems="flex-start"
              sx={{ mt: { xs: 0, md: 4 } }}
            >
              <Grid item xs={12} lg={5}>
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
              </Grid>

              <Grid item xs={12} lg={7} sx={{ pl: { xs: 0, md: 4 } }}>
                {[
                  {
                    panel: "panel1",
                    title: "Proven Expertise in Shopify and Beyond",
                    content:
                      "We are seasoned pros at optimizing Shopify stores, as well as platforms like WooCommerce, Magento, and BigCommerce.",
                  },
                  {
                    panel: "panel2",
                    title: "Data-Driven Decisions",
                    content:
                      "Pulse empowers businesses to make data-driven decisions by leveraging advanced analytics and user behavior insights. Our approach ensures optimized conversion rates, improved user experiences, and measurable growth. Partner with Pulse to unlock your full potential through tailored CRO strategies.",
                  },
                  {
                    panel: "panel3",
                    title: "Customized Strategies",
                    content:
                      "Pulse crafts tailored CRO solutions to meet your unique business goals. Our personalized strategies focus on maximizing conversions, enhancing user engagement, and driving sustainable growth for your brand.",
                  },
                  {
                    panel: "panel4",
                    title: "Full-Service Approach",
                    content:
                      "Pulse offers end-to-end CRO solutions, including data analysis, strategy development, implementation, and continuous optimization. Our comprehensive approach ensures seamless execution and measurable results for your business.",
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
                            backgroundColor: "grey",
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
          </Box>
        </Box>
      </ThemeProvider>
    </main>
  );
}
