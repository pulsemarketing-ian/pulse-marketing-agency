'use client';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import React, { useEffect, useState } from 'react';
import { baseURL, FireApi, token } from '../../../../utils/useRequest';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import { Modal, Box, Button } from "@mui/material";

const Portfolio = () => {
  const [open, setOpen] = useState(false)
  const [pages, setPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState('');
  const [name, setName] = useState('');
  const [sectionKey, setSectionKey] = useState('');
  const [sectionHeading, setSectionHeading] = useState('');
  const [content, setContent] = useState('');
  const [pictures, setPictures] = useState([]);

  // for compoennt update 
  const [readComponents, setReadComponents] = useState([]);
  const [readComponentId, setReadComponentId] = useState('');
  const getPageData = async () => {
    try {
      const res = await FireApi('page/read', 'GET');
      setPages(res?.data?.pages || []);
    } catch (err) {
      console.error('Error fetching pages:', err);
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

    formData.append('page', selectedPage);
    formData.append('name', name);
    formData.append('section', sectionKey);
    formData.append('header', sectionHeading);
    formData.append('content', content);
    formData.append('is_child', false);

    for (let i = 0; i < pictures.length; i++) {
      formData.append('file', pictures[i]);
    }

    try {
      const response = await fetch(`${baseURL}/component/add`, {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
    if (response.status >= 200 && response.status < 300) {
      const data = await response.json();
      alert('Form submitted successfully:', data);
      setSelectedPage('');
      setName('');
      setSectionKey('');
      setSectionHeading('');
      setContent('');
      setPictures([]);
    } else {
      console.log('Error submitting form:', response.error);
    }
    } catch (err) {
      alert('Error submitting form:', err.message);
      // console.log('Error submitting form:', err);
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getComponentData = async () => {
    try {
      const res = await FireApi(`component/read?page=${selectedPage}`, 'GET');
      setReadComponents(res?.data?.components || []);
    } catch (err) {
      console.error('Error fetching pages:', err);
    }
  };

  useEffect(() => {
    if (selectedPage) {
      getComponentData();
    }
  }, [selectedPage]);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Portfolio" />
      <div className="w-full flex items-center justify-center">
        <div className="bg-white lg:w-[60%] mx-auto rounded-md shadow-2 p-6">
          <h2 className="text-black text-lg font-bold mb-4">Manage Your Portfolio</h2>
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            {/* Dropdown for Portfolio Categories */}
            <div>
              <label className="text-gray-700">Select Portfolio Category:</label>
              <select
                className="w-full p-2 border rounded mt-1"
                onChange={(e) => setSelectedPage(e.target.value)}
                value={selectedPage}
              >
                {pages.length > 0 ? (
                  pages
                    .filter((page) => page.name.startsWith('Portfolio'))
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

            {/* Project Name */}
            <div>
              <label className="text-gray-700">Project Name:</label>
              <input
                type="text"
                className="w-full p-2 border rounded mt-1"
                placeholder="Enter Project Name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Section Identity Key */}
            <div>
              <label className="text-gray-700">Section Identity Key:</label>
              <input
                type="text"
                className="w-full p-2 border rounded mt-1"
                placeholder="Enter Section Key..."
                value={sectionKey}
                onChange={(e) => setSectionKey(e.target.value)}
              />
            </div>

            {/* Section Identity Heading */}
            <div>
              <label className="text-gray-700">Section Identity Heading:</label>
              <input
                type="text"
                className="w-full p-2 border rounded mt-1"
                placeholder="Enter Section Heading..."
                value={sectionHeading}
                onChange={(e) => setSectionHeading(e.target.value)}
              />
            </div>

            {/* Content */}
            <div>
              <label className="text-gray-700">Content (optional):</label>
              <textarea
                className="w-full p-2 border rounded mt-1"
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
                className="w-full p-2 border rounded mt-1"
                onChange={handleFileChange}
              />
            </div>

            <span
              className="border border-blue-500 text-blue-500 px-4 py-2 rounded mr-2"
              onClick={handleOpen}
            >
              Edit Portfolio
            </span>


            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
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
            border:"none",
            outline: "none",
            boxShadow: 24,
            p: 4,
            width: 650,
            height: 500,
            overflow: "auto",
          }}
        >
          <form className="space-y-4" >
            {/* Dropdown for Portfolio Categories */}
            <div>
              <label className="text-gray-700">Select Portfolio Category:</label>
              <select
                className="w-full p-2 border rounded mt-1"
                onChange={(e) => setSelectedPage(e.target.value)}
                value={selectedPage}
              >
                {pages.length > 0 ? (
                  pages
                    .filter((page) => page.name.startsWith('Portfolio'))
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
                className="w-full p-2 border rounded mt-1"
                onChange={(e) => setReadComponentId(e.target.value)}
                value={readComponentId}
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
                className="w-full p-2 border rounded mt-1"
                placeholder="Enter Project Name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Section Identity Key */}
            <div>
              <label className="text-gray-700">Section Identity Key:</label>
              <input
                type="text"
                className="w-full p-2 border rounded mt-1"
                placeholder="Enter Section Key..."
                value={sectionKey}
                onChange={(e) => setSectionKey(e.target.value)}
              />
            </div>

            {/* Section Identity Heading */}
            <div>
              <label className="text-gray-700">Section Identity Heading:</label>
              <input
                type="text"
                className="w-full p-2 border rounded mt-1"
                placeholder="Enter Section Heading..."
                value={sectionHeading}
                onChange={(e) => setSectionHeading(e.target.value)}
              />
            </div>

            {/* Content */}
            <div>
              <label className="text-gray-700">Content (optional):</label>
              <textarea
                className="w-full p-2 border rounded mt-1"
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
                className="w-full p-2 border rounded mt-1"
                onChange={handleFileChange}
              />
            </div>

            <button
              className="border border-blue-500 text-blue-500 px-4 py-2 rounded mr-2"
              onClick={handleClose}
            >
              Close
            </button>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Update Portfolio
            </button>
          </form>
        </Box>
      </Modal>
      
    </DefaultLayout>
  );
};

export default Portfolio;
