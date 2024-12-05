'use client'
import React, { useEffect, useState } from 'react'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import { baseURL, FireApi, token } from '../../../../../utils/useRequest'

const page = () => {

  const [selectedPage, setSelectedPage] = useState('');
  const [pages, setPages] = useState([]);
  const [readComponents, setReadComponents] = useState([]);
  const [componentId, setComponentId] = useState('');
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

  useEffect(() => {
    if (selectedPage) {
      getComponentData();
    }
  }, [selectedPage]);

  const getComponentData = async () => {
    try {
      const res = await FireApi(`component/read?page=${selectedPage}`, 'GET');
      setReadComponents(res?.data?.components || []);
    } catch (err) {
      console.error('Error fetching pages:', err);
    }
  };


    // for form 
    const [name, setName] = useState('');
    const [sectionKey, setSectionKey] = useState('');
    const [sectionHeading, setSectionHeading] = useState('');
    const [content, setContent] = useState('');
    const [pictures, setPictures] = useState([]);
  
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
      formData.append('is_child', true);
      formData.append('component_id', componentId);
  
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
    
      if (response.ok) {
        const data = await response.json();
        alert('Form submitted successfully:', data);
        setSelectedPage('');
        setName('');
        setSectionKey('');
        setSectionHeading('');
        setContent('');
        setPictures([]);
        setComponentId('');
      } else {
        console.log('Error submitting form:', response.error);
      }
      } catch (err) {
        alert('Error submitting form:', err.message);
        // console.log('Error submitting form:', err);
      }
    };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Portfolio" />

      <div className="w-full flex items-center justify-center">
        <div className="bg-white lg:w-[60%] mx-auto rounded-md shadow-2 p-6">
          <h2 className="text-black text-lg font-bold mb-4">Add Portfolio Inner Page</h2>
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            {/* Dropdown for Page Selection */}
            <div>
              <label className="text-gray-700">Select Tab Name:</label>
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
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>

          </form>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default page