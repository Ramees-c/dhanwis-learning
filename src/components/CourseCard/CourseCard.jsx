import React from "react";

import flutter_img from "../../assets/images/courses/1.png";
import mern_img from "../../assets/images/courses/2.png";
import python_img from "../../assets/images/courses/3.png";
import digital_img from "../../assets/images/courses/4.png";
import { Link } from "react-router-dom";

function CourseCard() {
  const CourseData = [
    {
      id: 1,
      course: "Flutter",
      image: flutter_img,
      desc: "Master Flutter development and build stunning cross-platform mobile apps.",
      aosDelay: "0",
    },
    {
      id: 2,
      course: "MERN",
      image: mern_img,
      desc: "Master MERN Stack and build dynamic, full-stack web applications effortlessly.",
      aosDelay: "200",
    },
    {
      id: 3,
      course: "PYTHON",
      image: python_img,
      desc: "Master Python Full Stack Development with hands-on, industry-focused training.",
      aosDelay: "400",
    },
    {
      id: 4,
      course: "Digital Marketting",
      image: digital_img,
      desc: "Master digital marketing to boost your online presence and growth.",
      aosDelay: "600",
    },
  ];

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-5 place-items-center">
      {CourseData.map((data) => (
        <div
          data-aos="fade-up"
          data-aos-delay="{data.aosDelay}"
          key={data.id}
          className="p-4 h-full"
        >
          <div className="h-full shadow-xl rounded-3xl dark:bg-gray-800 overflow-hidden hover:shadow-2xl hover:dark:shadow-gray-800 transition-shadow duration-300 border-2 dark:border-none">
            <img
              src={data.image}
              className="lg:h-48 md:h-38 w-full object-cover object-center"
              alt=""
            />
            <div className="p-6 transition duration-300 ease-in h-full">
              <h1 className="text-2xl font-bold mb-3 text-black/85 dark:text-white/95">
                {data.course}
              </h1>
              <p className="leading-relaxed mb-3 text-black/85 dark:text-white/95">
                {data.desc}
              </p>
              <div className="flex items-end flex-wrap justify-center">
                <Link
                  to="/courses"
                  className="text-primary md:mb-2 lg:mb-0 font-bold hover:text-black dark:hover:text-white duration-300"
                  onClick={handleClick}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CourseCard;
