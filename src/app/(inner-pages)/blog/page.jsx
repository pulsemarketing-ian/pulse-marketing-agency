"use client";
import Navbar from '@/components/landing_page_components/Navbar'
import { Reveal } from '@/utils/Reveal'
import Image from 'next/image'
import React from 'react'
import { FireApi } from '../../../../utils/useRequest';
import { useRouter } from 'next/navigation';
import PrimaryBtn from '@/components/landing_page_components/PrimaryBtns/PrimaryBtn';
import Footer from '@/components/layout/Footer';
import { Pagination, styled } from '@mui/material';
const BlogPage = () => {

  const CustomPagination = styled(Pagination)(({ theme }) => ({
    "& .MuiPaginationItem-root": {
      color: "white", // Default color
      fontWeight: "bold",
    },
    "& .MuiPaginationItem-root.Mui-selected": {
      color: "black", // Active page text color
      backgroundColor: "#1DA1F2", // Active page background color
      fontWeight: "bold",
    },
    "& .MuiPaginationItem-root:hover": {
      backgroundColor: "#1DA1F2", // Hover background color
      color: "white", // Hover text color
    },
  }));

  const router = useRouter();

  const [blogComponent, setBlogComponent] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const blogsPerPage = 9; 

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

  // Slice current blogs
  const currentBlogs = blogComponent.slice(indexOfFirstBlog, indexOfLastBlog);


  return (
    <main className="theme_bg_color">

      {/* hero section of blog page  */}
         <main
        style={{
          backgroundImage: "url('/images/blog_page_images/blog.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative md:pb-[150px]"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <Navbar />
        <div className="relative flex h-[85vh] w-full flex-col items-center justify-center md:h-[100vh]">
          <div className="z-10 flex flex-col items-center md:translate-y-[-4rem]">
            {/* Service heading */}
            <div className="mb-2 flex items-center justify-center gap-1">
              <Image
                src="/images/services_page_images/blue-dot.png"
                alt="blue-dot"
                width={20}
                height={20}
              />
              <p>Insights</p>
            </div>

            {/* Heading main */}
            <Reveal>
              <h2
                className="text-3xl font-bold capitalize text-white md:text-5xl text-center"
                style={{ lineHeight: "1.2" }}
              >
                Explore The World  <br />
                Of Creativity.
              </h2>
            </Reveal>

            <Reveal>
              <p className="mx-auto mt-2 w-[80%] text-center text-gray-200 md:w-[45%]">
              Step into a world of meaningful stories and transformative ideas. This blog uncovers 7 key aspects of life, work, and creativity, offering you the tools and motivation to succeed. Whether you are here to learn, reflect, or find new inspiration, each post is designed to spark your curiosity and empower you to grow.
              </p>
            </Reveal>
          </div>

          {/* <div className="absolute bottom-[4.5rem] md:bottom-6 right-6 z-10 rounded-full bg-my-blue-gradient p-3">
            <Image
              src={"/images/services_page_images/inbox.png"}
              alt="inbox"
              width={15}
              height={15}
            />
          </div> */}
        </div>
         </main>

        {/* blog section  */}
         <main className="relative pb-32 md:pb-0 md:-mt-[250px] w-full">
    <div
      style={{
        backgroundImage: "url('/images/services_page_images/circle.png/')",
        backgroundSize: "cover",
        // transform: "translateY(-100%)",
      }}
      className="h-[50vh] md:h-[37rem] transform translate-y-[-43%] md:translate-y-[-50%]"
    />
    <div
      className="absolute top-0 z-10 flex w-full flex-col items-center justify-center md:top-12 "
      style={{
        backgroundImage: "url('/images/app_page_images/radial.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="z-10 text-center md:mt-16">
        <Reveal>
          <h1 className="mb-2 text-xl font-bold tracking-wide md:text-5xl">
          Your Weekly Dose of  <br />
          Knowledge and Creativity
          </h1>
        </Reveal>
      </div>
    </div>
        </main>

        <div className="flex flex-wrap justify-between my-4 md:my-0 gap-4 max-w-[1200px] mx-auto pt-6 px-4 transform translate-y-[-10%] md:translate-y-[-20%]">
        {currentBlogs.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between space-y-2 w-full sm:w-[45%] md:w-[30%] lg:w-[30%] cursor-pointer md:mt-8"
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
            <div
              className="flex flex-col justify-between gap-3 mt-3"
              style={{
                minHeight: '200px', 
              }}
            >
              <Reveal>
                <h2 className="text-xl font-bold line-clamp-2">
                  {item?.name?.split(' ').slice(0, 4).join(' ')}...
                </h2>
              </Reveal>
              <Reveal>
                <p className="line-clamp-3 text-gray-400">
                  {item?.section?.split(' ').slice(0, 20).join(' ')}...
                </p>
              </Reveal>
              <div>
                <PrimaryBtn text={"Read More"} className="mt-auto" onClick={() => handleBlogClick(item?._id)}/>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* pagination  */}
      <div className="flex justify-center -mt-[22rem] md:-mt-[12%] mb-20">
        <CustomPagination
          count={Math.ceil(blogComponent.length / blogsPerPage)} // Total pages
          page={currentPage}
          onChange={handlePageChange}
        />
      </div>

        <div className='-mt-12'>
        <Footer/>
        </div>
    </main>
  )
}

export default BlogPage