import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";

const blogs = [
  {
    id: "1",
    image: "/assets/health.jpg",
    title: "Is Your Diet Hurting You? Common Nutrition Myths Debunked",
    date: "November 4, 2024",
    content: "This is the full content of the blog post about nutrition myths.",
  },
  {
    id: "2",
    image: "/assets/healthedu.jpg",
    title: "The Truth About Sugar: What Every Health-Conscious Person Should Know",
    date: "October 31, 2024",
    content: "This is the full content of the blog post about sugar.",
  },
  {
    id: "3",
    image: "/assets/healthservice.png",
    title: "Why Sleep Is the Secret Ingredient to Your Wellness Routine",
    date: "October 8, 2024",
    content: "This is the full content of the blog post Sleep.",
  },
  {
    id: "4",
    image: "/assets/counseling.jpg",
    title: "How to Beat Stress: 7 Science-Backed Techniques That Work",
    date: "October 8, 2024",
    content: "This is the full content of the blog post about stress management.",
  },
  {
    id: "5",
    image: "/assets/eduPromotion.jpg",
    title: "Top 5 Superfoods for Boosting Your Energy Naturally",
    date: "October 8, 2024",
    content: "This is the full content of the blog post about Superfoods.",
  },
  {
    id: "6",
    image: "/assets/healthservice.jpg",
    title: "The Ultimate Guide to Staying Fit with Just 15 Minutes a Day",
    date: "October 8, 2024",
    content: "This is the full content of the blog post about Ultimate Guide to Staying Fit.",
  },
  {
    id: "7",
    image: "/images/contact-image.jpg",
    title: "10 Surprising Benefits of Drinking Water You Didn’t Know About",
    date: "October 8, 2024",
    content: "This is the full content of the blog post about Surprising Benefits of Drinking Water.",
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <p>Blog not found!</p>;
  }

  return (
   <>
   <Navbar/>
    <div className="blog-detail flex flex-col justify-center items-center ">
      <div className="">
      <img src={blog.image} alt={blog.title} width={800} height={200} className="rounded-[20px]"/>
      </div>
      <h1>{blog.title}</h1>
      <p>{blog.date}</p>
      <p>{blog.content}</p>
    </div>
    <Footer/>
   </>
  );
};

export default BlogDetail;
