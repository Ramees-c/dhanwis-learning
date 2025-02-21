import React from "react";

import about_img from "../../assets/images/about/about2.jpg";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../Shared/Button";

import { Link, useNavigate } from "react-router-dom";

function About() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="container">
        <div className="p-5">
          {/* Header section */}
          <div className=" p-6 text-center max-w-[2000px] mx-auto mb-5">
            <h1 className="uppercase font-bold text-2xl xl:text-4xl text-primary font-titleFont">
              Achieve your Goals with Dhanwis
            </h1>
            <p className="font-semibold mt-3 text-sm lg:text-xl text-black/85 dark:text-white/95">
              Whether you're looking to enhance your technical skills or drive
              your business forward with cutting-edge IT solutions, we are here
              to help you achieve your goals.
            </p>
          </div>

          <div className="max-w-[1320px] lg:py-[80] py-5 flex xl:flex-row flex-col justify-center items-center mx-auto">
            {/* Content section */}
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              className="basis-[45%]"
            >
              <img
                src={about_img}
                className="w-full rounded-xl mb-10 xl:mb-0"
                alt=""
              />
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="500"
              className="basis-[45%] ml-0 xl:ml-10"
            >
              <h1 className="uppercase font-semibold text-2xl text-primary mb-3">
                Empowering Futures Through Software Development and Digital
                Marketing Excellence.
              </h1>
              <p className="mb-5 text-black/85 dark:text-white text-justify [word-spacing:0.1rem]	">
                Our academy is a hub for mastering Full Stack Web Development,
                Mobile App Development, and Digital Marketing. We provide
                industry-driven training programs tailored to meet the demands
                of the ever-evolving tech world. With hands-on projects,
                real-time case studies, and expert guidance, we ensure you gain
                practical skills and in-depth knowledge. Whether you're starting
                your journey or upgrading your expertise, our mission is to
                empower you with the tools to succeed in software development
                and digital marketing. Let’s build your future together!
              </p>

              <div className="flex flex-col justify-center items-start gap-4">
                <p className="flex justify-center items-center gap-4 font-bold">
                  <FaCheckCircle className="text-primary size-6 " /> Expert
                  Trainers
                </p>
                <p className="flex justify-center items-center gap-4 font-bold">
                  <FaCheckCircle className="text-primary size-6" /> Live
                  Industry Based training
                </p>
                <p className="flex justify-center items-center gap-4 font-bold">
                  <FaCheckCircle className="text-primary size-6" /> Learn the
                  latest skills
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-duration="500"
            data-aos-delay="300"
            className="flex justify-center mt-5"
          >
            <Link to="/about" onClick={handleClick}>
              <Button
                text="View More"
                bgColor="bg-primary"
                textColor="text-black"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
