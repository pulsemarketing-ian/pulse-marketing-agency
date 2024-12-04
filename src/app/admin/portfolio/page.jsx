'use client';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import React, { useEffect, useState } from 'react';
import { FireApi } from '../../../../utils/useRequest';

const Portfolio = () => {
  const [pages, setPages] = useState([]); // Pages data from API
  const [selectedPage, setSelectedPage] = useState(''); // Selected page's _id

  // Fetch pages data from API
  const getPageName = async () => {
    try {
      const res = await FireApi('page/read', "GET");
      const data = await res.json();
      if (data.status) {
        // No need to filter, just set all pages
        setPages(data.data.pages);
      } else {
        console.error('Failed to fetch pages');
      }
    } catch (err) {
      console.error('Error fetching pages:', err);
    }
  };

  useEffect(() => {
    getPageName(); // Call API on component mount
  }, []);

  // Handle dropdown selection
  const handleDropdownChange = (e) => {
    const selectedId = e.target.value;
    setSelectedPage(selectedId);
    console.log('Selected Page _id:', selectedId); // Log selected _id
  };

  return (
    <DefaultLayout>
      <div className='w-full flex items-center justify-center'>
        <div className='bg-white lg:w-[60%] mx-auto rounded-md shadow-2 p-6'>
          <h2 className='text-black text-lg font-bold mb-4'>Manage Your Portfolio</h2>
          <form className='space-y-4'>
            {/* Dropdown for Portfolio Categories */}
            <div>
              <label className='text-gray-700'>Select Portfolio Category:</label>
              <select
                className='w-full p-2 border rounded mt-1'
                onChange={handleDropdownChange}
                value={selectedPage} // Controlled component
              >
                <option value="" disabled>
                  Select a Portfolio
                </option>
                {pages.map((page) => (
                  <option key={page._id} value={page._id}>
                    {page.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Rest of the form remains the same */}
            <div>
              <label className='text-gray-700'>Heading:</label>
              <input
                type='text'
                name='name'
                className='w-full p-2 border rounded mt-1'
                placeholder='Enter header...'
              />
            </div>

            <div>
              <label className='text-gray-700'>Content:</label>
              <textarea
                className='w-full p-2 border rounded mt-1'
                placeholder='Enter content...'
              />
            </div>

            <button
              type='submit'
              className='bg-blue-500 text-white px-4 py-2 rounded'
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Portfolio;