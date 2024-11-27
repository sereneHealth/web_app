import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import ContactPage from "../Components/ContactPage/page"
import AboutPage from "../Components/AboutPage/page"
import BlogPage from "../Components/BlogPage/BlogPage";
import BlogDetail from "../Components/BlogPage/BlogDetail";
// import ScrollToTop from "../ScrollUp"
const index = () => {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </>
  );
};

export default index;
