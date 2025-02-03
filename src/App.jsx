import React, { useEffect } from "react";
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import AboutPage from "./pages/AboutPage/AboutPage";

import AOS from "aos";
import "aos/dist/aos.css";

// react router dom
import { Routes, Route } from "react-router-dom";
import CoursesPage from "./pages/CoursesPage/CoursesPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/gallery" element={<GalleryPage/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
