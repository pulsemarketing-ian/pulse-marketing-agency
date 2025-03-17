"use client";
import React from "react";
import { FireApi } from "../../../../utils/useRequest";
import Navbar from "@/components/landing_page_components/Navbar";
import Image from "next/image";
// import { Reveal } from "@/utils/Reveal";
import { motion } from "motion/react";
import { Box, Modal, TextField, Typography } from "@mui/material";
import Footer from "@/components/layout/Footer";
import PrimaryBtn from "@/components/landing_page_components/PrimaryBtns/PrimaryBtn";
import { IoCloseSharp } from "react-icons/io5";

const Page = () => {
  const [blogInner, setBlogInner] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const token = localStorage.getItem("blogId");

  const getBlogContent = async () => {
    try {
      const res = await FireApi(`component/read/${token}`, "GET");
      setBlogInner(res?.data);
    } catch (err) {
      console.error("Error fetching pages:", err);
    }
  };

  React.useEffect(() => {
    if (token) {
      getBlogContent();
    }
  }, []);

  return (
    <>
      <main className="theme_bg_color">
        <main
          key={blogInner._id}
          className="relative md:pb-[250px]"
          style={{
            backgroundImage: `url(${blogInner?.component?.pictures})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            objectFit: "contain",
          }}
        >
          {/* Overlay div */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <Navbar />
          <div className="relative flex h-[100vh] w-full flex-col items-center justify-center md:h-[100vh]">
            <div className="item-center translate-y-[-4rem] flex-col">
              {/* Service heading */}
              <div className="mb-2 flex items-center justify-center gap-1">
                <Image
                  src="/images/services_page_images/blue-dot.png"
                  alt="blue-dot"
                  width={20}
                  height={20}
                />
                <p>Insights Details</p>
              </div>

              {/* Heading main */}

              <h2
                className="text-center text-3xl font-bold text-white md:text-5xl"
                style={{ lineHeight: "1.2" }}
              >
                {blogInner?.component?.name
                  ?.split(" ")
                  .reduce((result, word, index, array) => {
                    if (index % 3 === 0)
                      result.push(array.slice(index, index + 3));
                    return result;
                  }, [])
                  .map((group, index) => (
                    <React.Fragment key={index}>
                      {group.join(" ")}
                      <br />
                    </React.Fragment>
                  ))}
              </h2>
            </div>
          </div>
        </main>

        {/* circle image and section text  */}
        <main className="relative z-30 w-full pb-32 md:pb-0">
          <div
            style={{
              backgroundImage:
                "url('/images/services_page_images/circle.png/')",
              backgroundSize: "cover",
            }}
            className="h-[52vh] translate-y-[-50%] transform md:mt-[-180px] md:h-[39rem]  md:translate-y-[-60%]"
          />
          {/* <div
            className="absolute top-0 z-10 flex w-full flex-col items-center justify-center md:top-12 "
            style={{
              backgroundImage: "url('/images/app_page_images/radial.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="z-10 text-center md:mt-6 md:px-4">
              <h2 className="mb-6 text-2xl font-bold tracking-wide md:text-4xl">
                Download Your Free eBook <br />
                to Brand Like a Boss
              </h2>

              <PrimaryBtn text={"Download Now"} onClick={() => setOpen(true)} />
              <DownloadModal open={open} handleClose={() => setOpen(false)} />
            </div>
          </div> */}
        </main>

        {/* main content  */}
        <div className="mx-auto -mt-[20rem] max-w-[1200px] md:pb-8">
          <p className="md:text-md mb-6 translate-y-[1vh]  text-center text-[16px] tracking-wide md:mx-auto md:mb-6 md:w-[60%] md:-translate-y-12 lg:mb-18">
            {blogInner?.component?.section}
          </p>
          <div
            dangerouslySetInnerHTML={{ __html: blogInner?.component?.content }}
            className="content-style px-4 "
          />
        </div>

        <Footer />
      </main>
    </>
  );
};

export default Page;

// const DownloadModal = ({ open, handleClose }) => {
//   const [formData, setFormData] = React.useState({
//     name: "",
//     email: "",
//     phone: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = "/images/book-img.pdf";
//     link.download = "/images/book-img.pdf";
//     link.click();
//     handleClose();
//   };

//   return (
//     <Modal
//       open={open}
//       onClose={handleClose}
//       sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
//     >
//       <Box
//         sx={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           width: 400,
//           bgcolor: "background.paper",
//           boxShadow: 24,
//           p: 4,
//           borderRadius: 2,
//         }}
//       >
//         <h2 className="mb-4 text-center text-xl font-bold text-black-2">
//           Download Your Free eBook
//         </h2>
//         <TextField
//           fullWidth
//           label="Name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           margin="normal"
//         />
//         <TextField
//           fullWidth
//           label="Email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           margin="normal"
//         />
//         <TextField
//           fullWidth
//           label="Phone Number"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           margin="normal"
//         />
//         <div className="mt-3 flex justify-center gap-3">
//           <PrimaryBtn text={"Cancel"} onClick={handleClose} />
//           <PrimaryBtn text={"Submit Details"} onClick={handleDownload} />
//         </div>
//       </Box>
//     </Modal>
//   );
// };
