import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import ContactPage from "../Components/ContactPage/page"
// import ScrollToTop from "../ScrollUp"
const index = () => {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default index;
