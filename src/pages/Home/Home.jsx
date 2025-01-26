import React from "react";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import About from "../../components/About/About";
import Courses from "../../components/Courses/Courses";
import Testimonials from "../../components/Testimonials/Testimonials";
import FaqComponent from "../../components/FaqComponent/FaqComponent";

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Courses />
      <Testimonials />
      <FaqComponent />
    </div>
  );
}

export default Home;
