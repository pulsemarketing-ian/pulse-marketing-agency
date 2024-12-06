"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React, { useEffect, useState } from "react";
import { baseURL, FireApi, token } from "../../../../utils/useRequest";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Modal, Box, Button } from "@mui/material";
import { FaWindows } from "react-icons/fa";

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const [pages, setPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState("");
  const [name, setName] = useState("");
  const [sectionKey, setSectionKey] = useState("");
  const [sectionHeading, setSectionHeading] = useState("");
  const [content, setContent] = useState("");
  const [pictures, setPictures] = useState([]);
  const [imageComp, setImage] = useState("");

  // for compoennt update
  const [readComponents, setReadComponents] = useState([]);
  // const [readComponentId, setReadComponentId] = useState("");
  const [editCompProfileId, setEditCompProfileId] = useState("");

  console.log(editCompProfileId, "fffffffffffffff");
  const getPageData = async () => {
    try {
      const res = await FireApi("page/read", "GET");
      setPages(res?.data?.pages || []);
    } catch (err) {
      console.error("Error fetching pages:", err);
    }
  };

  useEffect(() => {
    getPageData();
  }, []);

  const handleFileChange = (e) => {
    setPictures(e.target.files);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!name || !sectionKey || !sectionHeading) {
      alert("All fields are required.");
      return;
    }

    const formData = new FormData();

    formData.append("page", selectedPage);
    formData.append("name", name);
    formData.append("section", sectionKey);
    formData.append("header", sectionHeading);
    formData.append("content", content);
    formData.append("is_child", false);

    for (let i = 0; i < pictures.length; i++) {
      formData.append("file", pictures[i]);
    }

    try {
      const response = await fetch(`${baseURL}/component/add`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status >= 200 && response.status < 300) {
        const data = await response.json();
        alert("Your form has been Added successfully:", data);
        setSelectedPage("");
        setName("");
        setSectionKey("");
        setSectionHeading("");
        setContent("");
        setPictures([]);
      } else {
        console.log("Error submitting form:", response.error);
        alert("Something Went Wrong! Please try again.");
      }
    } catch (err) {
      alert("Something Went Wrong! Please try again:", err.message);
      // console.log('Error submitting form:', err);
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getComponentData = async () => {
    try {
      const res = await FireApi(`component/read?page=${selectedPage}`, "GET");
      setReadComponents(res?.data?.components || []);
    } catch (err) {
      console.error("Error fetching pages:", err);
    }
  };

  console.log(editCompProfileId, "hjhjhj");
  const getComponentProfileById = async () => {
    try {
      const res = await FireApi(`component/read/${editCompProfileId}`, "GET");
      console.log(res?.data?.component?.name, "jajaja");
      setName(res?.data?.component?.name || "");
      setSectionHeading(res?.data?.component?.header || "");
      setSectionKey(res?.data?.component?.section || "");
      setContent(res?.data?.component?.content || "");
      setImage(res?.data?.component?.pictures[0] || "");

      console.log(res);
    } catch (err) {
      console.error("Error fetching pages:", err);
    }
  };

  const handleUpdatePortfolio = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const formData = {
      name: form.get("name"),
      id: editCompProfileId,
      content: form.get("content"),
      section:form.get("section")

    };

    try {
      const res = await FireApi("component/update", "PUT", formData);
      window.location.reload();
      handleClose();
      alert("Updated Successfully");
    } catch (error) {
      console.log(error);
      alert('Error updating component, Something went wrong!');
    }
  };

  const handleDeletePortfolio = async (e) => {
    e.preventDefault();
    const res = FireApi(`component/delete/${editCompProfileId}`, "DELETE");
    console.log(res);
    handleClose();
    alert("Deleted Successfully");
    window.location.reload();
  };

  useEffect(() => {
    if (editCompProfileId) {
      getComponentProfileById();
    }
  }, [editCompProfileId]);

  useEffect(() => {
    if (selectedPage) {
      getComponentData();
    }
  }, [selectedPage]);

  const hasRequiredPages = (pages) => 
    pages.some(page => page.name.startsWith("Portfolio")) &&
    pages.some(page => page.name.startsWith("testimonials")) &&
    pages.some(page => page.name.startsWith("Blog"));
  
  const filteredPages = hasRequiredPages(pages)
    ? pages.filter((page) => 
        page.name.startsWith("Portfolio") || 
        page.name.startsWith("testimonials") || 
        page.name.startsWith("Blog")
      )
    : [];

  return (
    <DefaultLayout>
      <Breadcrumb pageName="component" />
      <div className="flex w-full items-center justify-center">
        <div className="mx-auto rounded-md bg-white p-6 shadow-2 lg:w-[60%]">
          <h2 className="mb-4 text-lg font-bold text-black">
            Add Your Components
          </h2>
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            {/* Dropdown for Portfolio Categories */}
            <div>
              <label className="text-gray-700">
                Select Portfolio Category:
              </label>
              <select
    className="mt-1 w-full rounded border p-2"
    onChange={(e) => setSelectedPage(e.target.value)}
    value={selectedPage}
  >
    {filteredPages.length > 0 ? (
      filteredPages.map((page) => (
        <option key={page._id} value={page._id}>
          {page.name}
        </option>
      ))
    ) : (
      <option disabled>Portfolio, Testimonials, or Blog is missing</option>
    )}
  </select>
            </div>

            {/* Project Name */}
            <div>
              <label className="text-gray-700">Project Name:</label>
              <input
                type="text"
                className="mt-1 w-full rounded border p-2"
                placeholder="Enter Project Name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Section Identity Key */}
            <div>
              <label className="text-gray-700">Section:</label>
              <input
                type="text"
                name="section"
                className="mt-1 w-full rounded border p-2"
                placeholder="Enter Section Key..."
                value={sectionKey}
                onChange={(e) => setSectionKey(e.target.value)}
              />
            </div>

            {/* Section Identity Heading */}
            <div>
              <label className="text-gray-700">Header Section:</label>
              <input
                type="text"
                name="section"
                className="mt-1 w-full rounded border p-2"
                placeholder="Enter Section Heading..."
                value={sectionHeading}
                onChange={(e) => setSectionHeading(e.target.value)}
              />
            </div>

            {/* Content */}
            <div>
              <label className="text-gray-700">Content:</label>
              <textarea
              name="content"
                className="mt-1 w-full rounded border p-2"
                placeholder="Enter content..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="text-gray-700">Upload Pictures:</label>
              <input
                type="file"
                multiple
                className="mt-1 w-full rounded border p-2"
                onChange={handleFileChange}
              />
            </div>

            <span
              className="mr-2 rounded border border-blue-500 px-4 py-2 text-blue-500"
              onClick={handleOpen}
            >
              Edit Portfolio
            </span>

            <button
              type="submit"
              className="rounded bg-blue-500 px-4 py-2 text-white"
            >
              Save
            </button>
          </form>
        </div>
      </div>

      {/* update modal form  */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            border: "none",
            outline: "none",
            boxShadow: 24,
            p: 4,
            width: 650,
            height: 500,
            overflow: "auto",
          }}
        >
          <form onSubmit={handleUpdatePortfolio} className="space-y-4">
            {/* Dropdown for Portfolio Categories */}
            <div>
              <label className="text-gray-700">
                Select Portfolio Category:
              </label>
              <select
                className="mt-1 w-full rounded border p-2"
                onChange={(e) => setSelectedPage(e.target.value)}
                value={selectedPage}
              >
                {pages.length > 0 ? (
                  pages
                    .filter((page) => page.name.startsWith("Portfolio"))
                    .map((page) => (
                      <option key={page._id} value={page._id}>
                        {page.name}
                      </option>
                    ))
                ) : (
                  <option disabled>Loading...</option>
                )}
              </select>
            </div>

            {/* Dropdown for Component Selection */}
            <div>
              <label className="text-gray-700">Select Portfolio:</label>
              <select
                className="mt-1 w-full rounded border p-2"
                onChange={(e) => setEditCompProfileId(e.target.value)}
                value={editCompProfileId}
              >
                {readComponents.length > 0 ? (
                  readComponents.map((page) => (
                    <option key={page._id} value={page._id}>
                      {page.name}
                    </option>
                  ))
                ) : (
                  <option disabled>Loading...</option>
                )}
              </select>
            </div>

            {/* Project Name */}
            <div>
              <label className="text-gray-700">Project Name:</label>
              <input
                type="text"
                className="mt-1 w-full rounded border p-2"
                placeholder="Enter Project Name..."
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Section Identity Key */}
            <div>
              <label className="text-gray-700">Section Identity Key:</label>
              <input
                type="text"
                className="mt-1 w-full rounded border p-2"
                placeholder="Enter Section Key..."
                value={sectionKey}
                name="sectionId"
                onChange={(e) => setSectionKey(e.target.value)}
              />
            </div>

            {/* Section Identity Heading */}
            <div>
              <label className="text-gray-700">Section Identity Heading:</label>
              <input
                type="text"
                className="mt-1 w-full rounded border p-2"
                placeholder="Enter Section Heading..."
                value={sectionHeading}
                name="seeactionHead"
                onChange={(e) => setSectionHeading(e.target.value)}
              />
            </div>

            {/* Content */}
            <div>
              <label className="text-gray-700">Content (optional):</label>
              <textarea
                className="mt-1 w-full rounded border p-2"
                placeholder="Enter content..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                name="content"
              />
            </div>

            {/* File Upload */}
            <div>
              <img
                src={imageComp}
                alt=""
                style={{ height: "70px", width: "70px" }}
              />
              <label className="text-gray-700">Upload Pictures:</label>
              <input
                type="file"
                multiple
                className="mt-1 w-full rounded border p-2"
                onChange={handleFileChange}
              />
            </div>

            <button
              className="mr-2 rounded border border-blue-500 px-4 py-2 text-blue-500"
              onClick={handleClose}
            >
              Close
            </button>

            <button
              type="submit"
              className="rounded bg-blue-500 px-4 py-2 text-white"
            >
              Update Portfolio
            </button>
            <button
              onClick={handleDeletePortfolio}
              className="my-2 rounded bg-red-500 px-4 py-2 text-white"
            >
              Delete Portfolio
            </button>
          </form>
        </Box>
      </Modal>
    </DefaultLayout>
  );
};

export default Portfolio;