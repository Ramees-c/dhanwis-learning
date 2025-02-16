import React from "react";

import about_img1 from "../../assets/images/about/4.jpg"
import about_img2 from "../../assets/images/about/2.jpg"
import about_img3 from "../../assets/images/about/3.jpg"
import about_img4 from "../../assets/images/about/1.jpg"


import { FaCheckCircle } from "react-icons/fa";
import Button from "../Shared/Button";

function AboutPageAboutSection() {
  return (
    <div>
      <div className="container">
        <div className="rounded-3xl hero-bg-color p-5">
          {/* Header section */}
          <div className=" p-6 text-center max-w-[2000px] mx-auto mb-5">
            <h1 className="uppercase font-bold text-2xl xl:text-4xl text-primary font-titleFont">
              Achieve your Goals with Dhanwis
            </h1>
            <p className="font-semibold mt-3 text-sm lg:text-xl text-black/85 dark:text-white">
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
                src={about_img1}
                className="w-full rounded-xl mb-10 xl:mb-0"
                alt=""
              />
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="500"
              className="basis-[45%] ml-0 xl:ml-10"
            >
              <h1 className="uppercase font-semibold text-2xl text-primary mb-1">
                Learn Flutter from Industry Experts & Build Real Apps
              </h1>
              <p className="mb-5 text-black/85 dark:text-white text-justify [word-spacing:0.1rem]">
                Learn Flutter from industry experts and build real-world
                applications with hands-on experience. Master cross-platform
                development using Flutter and Dart to create high-performance
                mobile apps for Android and iOS. Gain in-depth knowledge, best
                practices, and practical skills to turn your ideas into reality
                and kickstart your career in app development.
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

          <div className="mt-16 max-w-[1320px] lg:py-[80] py-5 flex xl:flex-row flex-col justify-center items-center mx-auto">
            {/* Content section */}

            <div
              data-aos="fade-left"
              data-aos-duration="500"
              className="basis-[45%] mr-0 xl:mr-10"
            >
              <h1 className="uppercase font-semibold text-2xl text-primary mb-1">
                Learn MERN Stack & Build Real-World Projects
              </h1>
              <p className="mb-5 text-black/85 dark:text-white text-justify [word-spacing:0.1rem]">
                Learn MERN Stack from industry experts and build real-world
                projects with hands-on experience. Master MongoDB, Express.js,
                React, and Node.js to develop dynamic, full-stack web
                applications. Gain practical skills, follow best practices, and
                launch your career as a full-stack developer with in-depth
                training and real-world project-based learning.
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

            <div
              data-aos="fade-right"
              data-aos-duration="500"
              className="basis-[45%]"
            >
              <img
                src={about_img2}
                className="w-full rounded-xl mt-10 xl:mt-0"
                alt=""
              />
            </div>
          </div>

          <div className="mt-10 max-w-[1320px] lg:py-[80] py-5 flex xl:flex-row flex-col justify-center items-center mx-auto">
            {/* Content section */}
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              className="basis-[45%]"
            >
              <img
                src={about_img3}
                className="w-full rounded-xl mb-10 xl:mb-0"
                alt=""
              />
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="500"
              className="basis-[45%] ml-0 xl:ml-10"
            >
              <h1 className="uppercase font-semibold text-2xl text-primary mb-1">
                Learn Python Full Stack & Build Real-World Projects
              </h1>
              <p className="mb-5 text-black/85 dark:text-white text-justify [word-spacing:0.1rem]">
                Learn Python Full Stack development from industry experts and
                build real-world projects with hands-on experience. Master
                front-end and back-end technologies using Python, Django, React,
                and databases. Gain practical skills, follow best practices, and
                become a proficient full-stack developer ready to create
                scalable, high-performance web applications.
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

          <div className="mt-16 max-w-[1320px] lg:py-[80] py-5 flex xl:flex-row flex-col justify-center items-center mx-auto">
            {/* Content section */}

            <div
              data-aos="fade-left"
              data-aos-duration="500"
              className="basis-[45%] mr-0 xl:mr-10"
            >
              <h1 className="uppercase font-semibold text-2xl text-primary mb-1">
                Learn Digital Marketing & Build Your Career
              </h1>
              <p className="mb-5 text-black/85 dark:text-white text-justify [word-spacing:0.1rem]">
                Learn digital marketing from industry experts and build a
                successful career with hands-on training. Master SEO, social
                media marketing, PPC, content marketing, and more. Gain
                practical skills, work on real-world projects, and stay ahead in
                the competitive digital landscape. Start your journey today and
                grow your career in digital marketing.
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

            <div
              data-aos="fade-right"
              data-aos-duration="500"
              className="basis-[45%]"
            >
              <img
                src={about_img4}
                className="w-full rounded-xl mt-10 xl:mt-0"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPageAboutSection;
