"use client";
import React from "react";
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
import Image from "next/image";
// import { Reveal } from '@/utils/Reveal';
import Pagination from "@mui/material/Pagination";
import { FireApi } from "../../../../utils/useRequest";
import { useRouter } from "next/navigation";
import Link from "next/link";

const OurBlog = () => {
  const router = useRouter();

  const [blogComponent, setBlogComponent] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const blogsPerPage = 3;

  const getComponentData = async () => {
    try {
      const blogPageId = "6751ba6ea80e78a9b6e139aa";
      const res = await FireApi(`component/read?page=${blogPageId}`, "GET");
      setBlogComponent(res?.data?.components || []);
    } catch (err) {
      console.error("Error fetching pages:", err);
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
    console.log(componentId, "componentId");
    localStorage.setItem("blogId", componentId);
    router.push(`/blog_details`);
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogComponent.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <main className="mx-auto max-w-[1200px] md:mt-0 -mt-16 px-6 py-6 md:px-0">
      {/* Top Heading */}
      <div className="flex flex-col items-baseline justify-between gap-5 md:gap-0 lg:flex-row">
        <div className="flex-col gap-3">
          <p>
            <span className="mr-2 text-[#CD0DCE]">•</span> Insights
          </p>

          <h2 className="mb-2 text-3xl font-semibold leading-tight md:text-4xl">
            What is New <br /> in Insights
          </h2>
        </div>

        <Link href="/blog" className="mt-3">
          <PrimaryBtn text={"View All Insights "} />
        </Link>
      </div>

      {/* Blog Content */}
      <div className="my-4 flex flex-wrap justify-between gap-4">
        {currentBlogs.map((item, index) => (
          <div
            key={index}
            className="mb-6 flex w-full cursor-pointer flex-col space-y-2 sm:w-[45%] md:mb-0 md:w-[30%] lg:w-[30%]"
            onClick={() => handleBlogClick(item?._id)}
          >
            <div className="transform transition-transform duration-700 ease-in-out hover:scale-105">
              <Image
                src={item?.pictures[0]}
                alt=""
                width={350}
                height={350}
                className="h-[250px] w-full rounded-lg object-cover"
              />
            </div>
            <div className="mt-3 flex flex-col gap-3">
              <h2 className="mt-2 text-xl font-semibold">{item?.name}</h2>

              <p>{item?.section}</p>
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
