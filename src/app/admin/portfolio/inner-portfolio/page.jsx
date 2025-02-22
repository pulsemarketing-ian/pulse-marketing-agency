"use client";
import React, { useEffect, useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { baseURL, FireApi, token } from "../../../../../utils/useRequest";
import { Box, Modal } from "@mui/material";

const Page = () => {
  const [selectedPage, setSelectedPage] = useState("");
  const [pages, setPages] = useState([]);
  const [readComponents, setReadComponents] = useState([]);
  const [componentId, setComponentId] = useState("");
  const [editCompProfileId, setEditCompProfileId] = useState("");
  const [imageComp, setImage] = useState("");
  // for form
  const [name, setName] = useState("");
  const [sectionKey, setSectionKey] = useState("");
  const [sectionHeading, setSectionHeading] = useState("");
  const [content, setContent] = useState("");
  const [pictures, setPictures] = useState([]);
  const [open, setOpen] = useState(false);
  const [childId, setChildId] = useState("");

  const getPageData = async () => {
    try {
      const res = await FireApi("page/read", "GET");
      setPages(res?.data?.pages || []);
    } catch (err) {
      console.error("Error fetching pages:", err);
    }
  };

  const getComponentProfileById = async () => {
    try {
      const res = await FireApi(`component/read/${editCompProfileId}`, "GET");
      console.log(res?.data?.component?.child_components, "faakjajaja");
      setName(res?.data?.component?.child_components[0]?.name || "");
      setSectionHeading(
        res?.data?.component?.child_components[0]?.header || "",
      );
      setSectionKey(res?.data?.component?.child_components[0]?.section || "");
      setContent(res?.data?.component?.child_components[0]?.content || "");
      setImage(res?.data?.component?.child_components[0]?.pictures[0] || "");
      setChildId(res?.data?.component?.child_components[0]?._id || "");

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
      id: childId,
      section: sectionKey,
      content: form.get("content"),
      page: selectedPage,
    };

    try {
      const res = await FireApi("component/update", "PUT", formData);
      window.location.reload();
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeletePortfolio = async (e) => {
    e.preventDefault();
    const res = FireApi(`component/delete/${childId}`, "DELETE");
    console.log(res);
  };

  useEffect(() => {
    if (editCompProfileId) {
      getComponentProfileById();
    }
  }, [editCompProfileId]);

  useEffect(() => {
    getPageData();
  }, []);

  useEffect(() => {
    if (selectedPage) {
      getComponentData();
    }
  }, [selectedPage]);

  const getComponentData = async () => {
    try {
      const res = await FireApi(`component/read?page=${selectedPage}`, "GET");
      setReadComponents(res?.data?.components || []);
    } catch (err) {
      console.error("Error fetching pages:", err);
    }
  };

  const handleFileChange = (e) => {
    setPictures(e.target.files);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    formData.append("is_child", true);
    formData.append("component_id", componentId);

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

      if (response.ok) {
        const data = await response.json();
        alert("Form submitted successfully:", data);
        setSelectedPage("");
        setName("");
        setSectionKey("");
        setSectionHeading("");
        setContent("");
        setPictures([]);
        setComponentId("");
      } else {
        console.log("Error submitting form:", response.error);
      }
    } catch (err) {
      alert("Error submitting form:", err.message);
      // console.log('Error submitting form:', err);
    }
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Portfolio" />

      <div className="flex w-full items-center justify-center">
        <div className="mx-auto rounded-md bg-white p-6 shadow-2 lg:w-[60%]">
          <h2 className="mb-4 text-lg font-bold text-black">
            Add Portfolio Inner Page
          </h2>
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            {/* Dropdown for Page Selection */}
            <div>
              <label className="text-gray-700">Select Tab Name:</label>
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
                onChange={(e) => setComponentId(e.target.value)}
                value={componentId}
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
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Section Identity Key */}
            <div>
              <label className="text-gray-700">Section:</label>
              <input
                type="text"
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
              <label className="text-gray-700">Section:</label>
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
              <label className="text-gray-700">Header Section:</label>
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
              <label className="text-gray-700">Content</label>
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

export default Page;