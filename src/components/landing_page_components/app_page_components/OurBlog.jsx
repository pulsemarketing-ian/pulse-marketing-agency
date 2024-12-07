'use client';
import React from 'react';
import PrimaryBtn from '../PrimaryBtns/PrimaryBtn';
import Image from 'next/image';
import { Reveal } from '@/utils/Reveal';
import Pagination from '@mui/material/Pagination';
import { FireApi } from '../../../../utils/useRequest';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const OurBlog = () => {
  const router = useRouter();

  const [blogComponent, setBlogComponent] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const blogsPerPage = 3; 

  const getComponentData = async () => {
    try {
      const blogPageId = '6751ba6ea80e78a9b6e139aa';
      const res = await FireApi(`component/read?page=${blogPageId}`, 'GET');
      setBlogComponent(res?.data?.components || []);
    } catch (err) {
      console.error('Error fetching pages:', err);
    }
  };

  React.useEffect(() => {
    getComponentData();
  }, []);

  // Pagination logic
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleBlogClick = (componentId) => {
    console.log(componentId, 'componentId');
    localStorage.setItem('blogId', componentId);
    router.push(`/blog_details`);
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogComponent.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <main className="max-w-[1200px] mx-auto py-6 px-4">
      {/* Top Heading */}
      <div className="flex flex-col lg:flex-row justify-between items-baseline gap-5 md:gap-0">
        <div className="flex-col gap-3">
          <Reveal>
            <p>
              <span className="text-[#CD0DCE] mr-2">•</span> Our Blog
            </p>
          </Reveal>
          <Reveal>
            <h2 className="text-2xl md:text-4xl font-semibold leading-tight mb-2">
              What is New <br /> in Our Blogs
            </h2>
          </Reveal>
        </div>

        <Link href="/blog" className='mt-3'>
        <PrimaryBtn text={'View All Blogs'} />
        </Link>
      </div>

      {/* Blog Content */}
      <div className="flex flex-wrap justify-between my-4 gap-4">
        {currentBlogs.map((item, index) => (
          <div
            key={index}
            className="flex flex-col space-y-2 w-full sm:w-[45%] md:w-[30%] lg:w-[30%] cursor-pointer mb-6 md:mb-0"
            onClick={() => handleBlogClick(item?._id)}
          >
            <div className="transform transition-transform duration-700 ease-in-out hover:scale-105">
              <Image
                src={item?.pictures[0]}
                alt=""
                width={350}
                height={350}
                className="rounded-lg object-cover h-[250px] w-full"
              />
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <Reveal>
                <h2 className="text-xl font-semibold mt-2">
                  {item?.name?.split(' ').slice(0, 4).join(' ')}...
                </h2>
              </Reveal>
              <Reveal>
                <p>
                  {item?.section?.split(' ').slice(0, 20).join(' ')}...
                </p>
              </Reveal>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {/* <div className="flex justify-center mt-6">
        <Pagination
          count={Math.ceil(blogComponent.length / blogsPerPage)} 
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </div> */}
    </main>
  );
};

export default OurBlog;
