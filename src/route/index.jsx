import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import ContactPage from "../Components/ContactPage/page"
import AboutPage from "../Components/AboutPage/page"
// import ScrollToTop from "../ScrollUp"
const index = () => {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about-us" element={<AboutPage />} />
      </Routes>
    </>
  );
};

export default index;
