'use client';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import React, { useEffect, useState } from 'react';
import { FireApi } from '../../../../utils/useRequest';
import { toast } from 'react-toastify';

const Page = () => {
    const [content, setContent] = useState(null);
    const [header, setHeader] = useState(null);
    const [headData, setHeadData] = useState([]);

    const GettingHeaderData = async () => {
        try {
            const res = await FireApi('component/read/?section=something-great', "GET");
            if (res.status === true) {
                const contentData = res?.data?.components[0]?.content || ''; 
                const headerData = res?.data?.components[0]?.header || ''; 
                setContent(contentData);
                setHeader(headerData);
                setHeadData(res?.data?.components[0]);
            } else {
                toast.error('Failed to fetch data.');
            }
        } catch (error) {
            toast.error('Error fetching data: ' + error.message);
        }
    };

    const EditHeaderData = async () => {
        try {
            const updatedData = {
                id: headData._id,
                header: header,
                // name: name,
                content: content
            };
            const res = await FireApi('component/update', "PUT", updatedData);
            if (res.status === true) {
                setHeadData(res?.data?.components[0]);
                alert("Data updated successfully!");
            } else {
                toast.error('Failed to update data.');
            }
        } catch (error) {
            toast.error('Error updating data: ' + error.message);
        }
    };

    useEffect(() => {
        GettingHeaderData();
    }, []);

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleHeaderChange = (e) => {
        setHeader(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        EditHeaderData();  
    };

    return (
        <DefaultLayout>
            <div className='w-full flex items-center justify-center'>
                <div className='bg-white lg:w-[60%] mx-auto rounded-md shadow-2 p-6'>
                    <h2 className='text-black text-lg font-bold mb-4'>Manage Your Portfolio Content</h2>
                    <form onSubmit={handleSubmit} className='space-y-4'>
                        <div>
                            <label className='text-gray-700'>Heading:</label>
                            <input
                                type='text'
                                value={header}
                                onChange={handleHeaderChange}
                                className='w-full p-2 border rounded mt-1'
                                placeholder='Enter header...'
                            />
                        </div>
                     

                        <div>
                            <label className='text-gray-700'>Content:</label>
                            <textarea
                                value={content}
                                onChange={handleContentChange}
                                className='w-full p-2 border rounded mt-1'
                                placeholder='Enter content...'
                            />
                        </div>

                        {/* <div>
                            <label className='text-gray-700'>Logo Image:</label>
                            <input
                                type='file'
                                onChange={handleImageChange}
                                accept='image/*'
                                className='w-full p-2 border rounded mt-1'
                            />
                            {imageURL && (
                                <div className='mt-4'>
                                    <img src={imageURL} alt="Logo Preview" className='w-32 h-32 object-cover' />
                                </div>
                            )}
                        </div> */}
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

export default Page;
