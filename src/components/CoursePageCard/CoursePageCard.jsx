import React from "react";

import flutter_img from "../../assets/images/courses/1.png";
import mern_img from "../../assets/images/courses/2.png";
import python_img from "../../assets/images/courses/3.png";
import digital_img from "../../assets/images/courses/4.png";
import react_img from "../../assets/images/courses/react.png"

function CoursePageCard() {
  const CardData = [
    // {
    //   course: "Flutter",
    //   image: flutter_img,
    //   duration: "4 Months",
    //   title1: "Learn Flutter, Dart, Firebase, APIs",
    //   title2: "One-on-one training with expert mentors",
    //   title3: "Real-world project experience during training",
    //   title4: "Internship & certification provided",
    //   title5: "Placement assistance until you secure a job",
    //   title6: "Build cross-platform mobile apps for iOS & Android",
    //   aosDelay: "0",
    // },
    {
      course: "MERN",
      image: mern_img,
      duration: "5 Months",
      title1: "Covers MongoDB, Express.js, React.js, Node.js",
      title2: "One-on-one training with flexible timing",
      title3: "Live project exposure with real clients",
      title4: "Internship & course certification",
      title5: "Placement assistance until you get hired",
      title6: "Industry-based curriculum* for full-stack development",
      aosDelay: "0",
    },
    {
      course: "REACT",
      image: react_img,
      duration: "3 Months",
      title1: "One-on-one training with expert mentors",
      title2: "Real-world project experience during training",
      title3: "Internship & certification provided",
      title4: "Placement assistance until you secure a job",
      title5: "Build dynamic, responsive web applications for desktop & mobile",
      title6: "Master essential tools like React Router, Hooks, and Context API",
      aosDelay: "200",
    },
    
    {
      course: "PYTHON",
      image: python_img,
      duration: "4 Months",
      title1: "Covers React, REST API, Python, Django, Database",
      title2: "One-on-one training with flexible timing",
      title3: "Hands-on live projects with our production team",
      title4: "Internship & course certificate provided",
      title5: "Placement assistance until you get a job",
      title6: "Industry-oriented training for real-world skills",
      aosDelay: "400",
    },
    {
      course: "Digital Marketting",
      image: digital_img,
      duration: "3 Months",
      title1: "Learn SMM, SEO, WordPress, Photoshop",
      title2: "One-on-one training with flexible hours",
      title3: "Live project experience with our team",
      title4: "Internship & certification provided",
      title5: "Job placement support available",
      title6: "Practical, industry-relevant skills",
      aosDelay: "600",
    },
  ];

  return (
    <div className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 place-items-center">
        {CardData.map((data, index) => (
          <div
            data-aos="fade-up"
            data-aos-delay="{data.aosDelay}"
            key={index}
            className="h-full shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl dark:bg-gray-800 hover:dark:shadow-gray-800 transition-shadow duration-300 border-2 dark:border-none" 
          >
            <header>
              <img
                src={data.image}
                className="lg:h-68 md:h-38 w-full object-cover object-center"
                alt=""
              />
            </header>
            <div className="flex flex-col p-6 border-t">
              <h1 className="text-2xl font-bold mb-2 text-black/85 dark:text-white/95">
                {data.course}
              </h1>
              <h2 className="mb-5 text-black/85 dark:text-white/85">
                {data.duration}
              </h2>
              <div className="flex-1 inline-flex items-center mb-7">
                <div className="bg-yellow-300 mr-3 p-1 rounded-full">
                  <svg
                    className="h-3 w-3 text-yellow-800 fill-current"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <polygon points="0 11 2 9 7 14 18 3 20 5 7 18"></polygon>
                  </svg>
                </div>
                <p className="text-sm text-black/85 dark:text-white/95">
                  {data.title1}
                </p>
              </div>
              <div className="flex-1 inline-flex items-center mb-7">
                <div className="bg-yellow-300 mr-3 p-1 rounded-full">
                  <svg
                    className="h-3 w-3 text-green-800 fill-current"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <polygon points="0 11 2 9 7 14 18 3 20 5 7 18"></polygon>
                  </svg>
                </div>
                <p className="text-sm text-black/85 dark:text-white/95">
                  {data.title2}
                </p>
              </div>
              <div className="flex-1 inline-flex items-center mb-7">
                <div className="bg-yellow-300 mr-3 p-1 rounded-full">
                  <svg
                    className="h-3 w-3 text-green-800 fill-current"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <polygon points="0 11 2 9 7 14 18 3 20 5 7 18"></polygon>
                  </svg>
                </div>
                <p className="text-sm text-black/85 dark:text-white/95">
                  {data.title3}
                </p>
              </div>
              <div className="flex-1 inline-flex items-center mb-7">
                <div className="bg-yellow-300 mr-3 p-1 rounded-full">
                  <svg
                    className="h-3 w-3 text-green-800 fill-current"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <polygon points="0 11 2 9 7 14 18 3 20 5 7 18"></polygon>
                  </svg>
                </div>
                <p className="text-sm text-black/85 dark:text-white/95">
                  {data.title4}
                </p>
              </div>
              <div className="flex-1 inline-flex items-center mb-7">
                <div className="bg-yellow-300 mr-3 p-1 rounded-full">
                  <svg
                    className="h-3 w-3 text-green-800 fill-current"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <polygon points="0 11 2 9 7 14 18 3 20 5 7 18"></polygon>
                  </svg>
                </div>
                <p className="text-sm text-black/85 dark:text-white/95">
                  {data.title5}
                </p>
              </div>
              <div className="flex-1 inline-flex items-center">
                <div className="bg-yellow-300 mr-3 p-1 rounded-full">
                  <svg
                    className="h-3 w-3 text-green-800 fill-current"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <polygon points="0 11 2 9 7 14 18 3 20 5 7 18"></polygon>
                  </svg>
                </div>
                <p className="text-sm text-black/85 dark:text-white/95">
                  {data.title6}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursePageCard;
