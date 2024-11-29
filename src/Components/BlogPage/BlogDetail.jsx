import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`https://web-api-775r.onrender.com/post/details/${id}`);
        setBlog(response.data[0]); // Assuming the API returns an array with one blog.
      } catch (err) {
        setError("Failed to fetch blog details. Please try again later.");
      }
    };

    fetchBlog();
  }, [id]);

  const handleImageError = (e) => {
    e.target.src = "/assets/healthservice.jpg"; 
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <div className="blog-detail flex flex-col justify-center items-center my-5">
        <div data-aos="zoom-in">
          <img
            src={blog.image}
            alt={blog.title}
            width={800}
            height={200}
            className="rounded-[20px]"
            onError={handleImageError}
          />
        </div>
        <section className="flex flex-col justify-center items-center w-[95%] mx-auto">
          <p className="font-bold text-4xl">{blog.title}</p>
        <p className="text-teal-500 font-bold">{new Date(blog.created_at).toDateString()}</p>
        <p data-aos="fade-up" data-aos-duration="1500">{blog.content}</p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;
