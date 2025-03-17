"use client";
import { Box, Modal, TextField } from "@mui/material";
import React from "react";
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
// import { Reveal } from "@/utils/Reveal";
import Image from "next/image";
import Navbar from "../Navbar";

const DownloadBook = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div
        className="flex w-full flex-col-reverse items-center gap-5 px-5 pb-20 pt-20 md:flex-row md:justify-between md:px-40"
        style={{
          backgroundImage: "url('/images/app_page_images/radial.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="z-10 md:mt-6 md:px-4">
          <h2 className="mb-6 text-2xl font-bold tracking-wide md:text-4xl">
            Download Your Free eBook <br />
            to Brand Like a Boss
          </h2>

          <PrimaryBtn text={"Download Now"} onClick={() => setOpen(true)} />
          <DownloadModal open={open} handleClose={() => setOpen(false)} />
        </div>

        <Image
          src={"/images/brand like a boss book mokcup.png"}
          width={400}
          height={400}
          alt="Brand Like a Boss eBook"
        />
      </div>
    </>
  );
};

const DownloadModal = ({ open, handleClose }) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/images/book-img.pdf";
    link.download = "book-img.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <h2 className="mb-4 text-center text-xl font-bold text-black-2">
          Download Your Free eBook
        </h2>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          margin="normal"
        />
        <div className="mt-3 flex justify-center gap-3">
          <PrimaryBtn text={"Cancel"} onClick={handleClose} />
          <PrimaryBtn text={"Submit Details"} onClick={handleDownload} />
        </div>
      </Box>
    </Modal>
  );
};

const HeroSection = () => {
  return (
    <>
      <main
        style={{
          backgroundImage: "url('/about-banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
        className="relative pb-[150px]"
      >
        <div className="absolute inset-0 bg-black/30 bg-opacity-50"></div>

        <Navbar />
        <div className="relative flex h-[90vh] w-full flex-col items-center justify-center md:h-[105vh]">
          <div className="z-10 flex translate-y-[-2rem] flex-col items-center md:translate-y-[-4rem]">
            <div className="-ml-[20px] mb-2 flex items-center justify-center gap-1 md:-ml-[45px]">
              <Image
                src="/images/services_page_images/blue-dot.png"
                alt="blue-dot"
                width={20}
                height={20}
              />
              <h2>About us</h2>
            </div>

            <h2
              className="pb-2 text-3xl font-bold capitalize text-white md:text-5xl"
              style={{ lineHeight: "1.2" }}
            >
              Driving Growth <br />
              Fueling Success.
            </h2>

            <p className="mx-auto mt-2 w-[80%] font-medium text-center text-gray-200 md:w-[60%]">
              We help businesses scale faster through revenue-focused
              strategies, cutting-edge web development, and data-driven
              marketing solutions.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroSection;
