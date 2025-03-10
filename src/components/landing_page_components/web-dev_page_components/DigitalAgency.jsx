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
// import { Reveal } from "@/utils/Reveal";
import { motion } from "motion/react";

const darkTheme = createTheme({
  palette: {},
  typography: {
    fontFamily: "inherit",
  },
});

export default function DigitalAgency() {
  const [expanded, setExpanded] = useState("panel1");

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ color: "white", py: { xs: 8, md: 4 }, px: 2 }}>
        <Box sx={{ px:{xs:2, md:6} }}>
          <div className="flex justify-center mt-3">
              <h2 className="text-2xl md:text-5xl font-bold tracking-wide text-center w-full mb-2">
                A Full Service <br /> Creative Digital Agency
              </h2>
          </div>

          <Grid
            container
            spacing={2}
            alignItems="flex-start"
            sx={{ position:'relative', zIndex: 99, mt: { xs: 0, md: 4 } }}   
          >
            <Grid item xs={12} lg={5}>
              <div
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
              </div>
            </Grid>

            <Grid item xs={12} lg={7}>
              {[
                {
                  panel: "panel1",
                  title: "Tailored Solutions",
                  content:
                    "At Pulse, we specialize in delivering tailored web development solutions that cater to the unique needs of your business...",
                },
                {
                  panel: "panel2",
                  title: "Cutting-Edge Technology",
                  content:
                    "At Pulse, we leverage cutting-edge technology to deliver innovative web development solutions...",
                },
                {
                  panel: "panel3",
                  title: "User-Centric Design",
                  content:
                    "At Pulse, we prioritize user-centric design to create websites that provide an exceptional experience...",
                },
                {
                  panel: "panel4",
                  title: "SEO Optimization",
                  content:
                    "At Pulse, we understand the importance of SEO optimization in driving organic traffic...",
                },
                {
                  panel: "panel5",
                  title: "Continuous Evolution",
                  content:
                    "At Pulse, we believe in continuous evolution to keep your website ahead of the competition...",
                },
                {
                  panel: "panel6",
                  title: "Elevate Your Online Presence",
                  content:
                    "At Pulse, we specialize in helping businesses elevate their online presence through custom web solutions...",
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