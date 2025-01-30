import React from "react";

import about_img from "../../assets/images/about/about2.jpg";
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
              <h1 className="uppercase font-semibold text-2xl text-justify text-primary mb-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, impedit.
              </h1>
              <p className="mb-5 text-justify text-black/85 dark:text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                laudantium ullam vero! Fugit obcaecati praesentium error facere
                omnis ipsa eveniet laudantium perferendis. Alias, quam maxime,
                quasi qui debitis voluptatibus dignissimos quas fugit eligendi
                minima natus molestias porro aut error voluptate exercitationem
                dolor neque rem, nulla dolore placeat nobis? Aliquam delectus
                eveniet incidunt asperiores optio dignissimos, debitis maxime,
                blanditiis explicabo nobis velit in quia quis rerum fugiat
                aperiam consectetur corrupti similique distinctio molestias.
                Rerum adipisci eos harum assumenda officia iusto est labore vel
                in
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
              <h1 className="uppercase font-semibold text-2xl text-justify text-primary mb-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, impedit.
              </h1>
              <p className="mb-5 text-justify text-black/85 dark:text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                laudantium ullam vero! Fugit obcaecati praesentium error facere
                omnis ipsa eveniet laudantium perferendis. Alias, quam maxime,
                quasi qui debitis voluptatibus dignissimos quas fugit eligendi
                minima natus molestias porro aut error voluptate exercitationem
                dolor neque rem, nulla dolore placeat nobis? Aliquam delectus
                eveniet incidunt asperiores optio dignissimos, debitis maxime,
                blanditiis explicabo nobis velit in quia quis rerum fugiat
                aperiam consectetur corrupti similique distinctio molestias.
                Rerum adipisci eos harum assumenda officia iusto est labore vel
                in
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
                src={about_img}
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
