"use client"
import React from 'react'
import { Typography, Grid, Accordion, AccordionSummary, AccordionDetails, Container, Box } from '@mui/material'
import { MdArrowDropDown } from "react-icons/md";
import Image from 'next/image'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Reveal } from '@/utils/Reveal';
import {motion} from 'motion/react';

const darkTheme = createTheme({
  palette: {
    // mode: 'dark',
    // primary: {
    //   main: '#ffffff',
    // },
  },
  typography: {
    fontFamily: 'inherit',
  },
})

export default function DigitalAgency() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{  color: 'white', py: { xs: 8, md: 4 }, px: 2 }}>
        <Box sx={{px:6}}>
         
        <div className="flex justify-center mt-3">
        <Reveal>
          <h2 className="text-2xl md:text-4xl font-bold tracking-wide text-center w-full">
          A Full Service <br/> Creative Digital Agency
          </h2>
        </Reveal>
      </div>

          <Grid container spacing={2} alignItems="flex-start" sx={{mt: { xs: 0, md: 4 }}}>
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
                  position: 'relative',
                  aspectRatio: '1/1',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transform: 'scale(1)',
                  transition: 'transform 0.7s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
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
            
            <Grid item xs={12} lg={7} sx={{bgImage: 'url(/images/app_page_images/radial.png)'}}>
            
              <Accordion sx={{bgcolor: 'transparent', color:'white', borderBottom:'1px solid white'}}>
                <AccordionSummary expandIcon={<MdArrowDropDown style={{color:'white'}} />}>
                  <Typography variant="h6">Tailored Solutions</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{bgcolor: 'transparent', color:'white', borderBottom:'1px solid white'}}>
                <AccordionSummary expandIcon={<MdArrowDropDown style={{color:'white'}} />}>
                  <Typography variant="h6">Cutting-Edge Technology</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Our team leverages the latest technologies and frameworks to build robust, scalable solutions that keep you ahead
                    of the competition.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{bgcolor: 'transparent', color:'white', borderBottom:'1px solid white'}}>
                <AccordionSummary expandIcon={<MdArrowDropDown style={{color:'white'}} />}>
                  <Typography variant="h6">User-Centric Design</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    We create intuitive and engaging user experiences that drive engagement and convert visitors into customers.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{bgcolor: 'transparent', color:'white', borderBottom:'1px solid white'}}>
                <AccordionSummary expandIcon={<MdArrowDropDown style={{color:'white'}} />}>
                  <Typography variant="h6">SEO Optimization</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Improve your online visibility with our comprehensive SEO strategies designed to boost your search engine
                    rankings.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{bgcolor: 'transparent', color:'white', borderBottom:'1px solid white'}}>
                <AccordionSummary expandIcon={<MdArrowDropDown style={{color:'white'}} />}>
                  <Typography variant="h6">Continuous Evolution</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    We continuously monitor, optimize, and evolve your digital presence to ensure sustained growth and success.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{bgcolor: 'transparent', color:'white', borderBottom:'1px solid white'}}>
                <AccordionSummary expandIcon={<MdArrowDropDown style={{color:'white'}} />}>
                  <Typography variant="h6">Elevate Your Online Presence</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Transform your digital footprint with our comprehensive suite of services designed to maximize your online
                    impact.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  )
}