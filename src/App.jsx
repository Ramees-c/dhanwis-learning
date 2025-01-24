import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Courses from "./components/Courses/Courses";
import Testimonials from "./components/Testimonials/Testimonials";
import FaqComponent from "./components/FaqComponent/FaqComponent";
import Footer from "./components/Footer/Footer";

import AOS from "aos";
import "aos/dist/aos.css"

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    })
    AOS.refresh();
  }, [])
  


  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Courses />
      <Testimonials />
      <FaqComponent />
      <Footer />
    </div>
  );
}

export default App;
