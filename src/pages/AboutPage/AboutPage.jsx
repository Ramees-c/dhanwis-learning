import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";

import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";
import AboutPageAboutSection from "../../components/AboutPageAboutSection/AboutPageAboutSection";
import WhatsappIcon from "../../components/WhatsappIcon/WhatsappIcon"

function AboutPage() {
  const ServiceData = [
    {
      id: 1,
      icon: <GrYoga className="bg-[#0062ff]" />,
      title: "Vision",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, quibusdam sapiente dolorum cum ea dicta quos? Quibusdam exercitationem voluptates corrupti?",
      aosDelay: "0",
    },
    {
      id: 2,
      icon: <FaDumbbell className="bg-[#73bc00]" />,
      title: "1 to 1 Support",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, quibusdam sapiente dolorum cum ea dicta quos? Quibusdam exercitationem voluptates corrupti?",
      aosDelay: "200",
    },
    {
      id: 3,
      icon: <GiGymBag className="bg-[#fa6400]" />,
      title: "Job Placement assistance",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, quibusdam sapiente dolorum cum ea dicta quos? Quibusdam exercitationem voluptates corrupti?",
      aosDelay: "400",
    },
    {
      id: 4,
      icon: <GiGymBag className="bg-[#fe6baa]" />,
      title: "Extra skill Development training",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, quibusdam sapiente dolorum cum ea dicta quos? Quibusdam exercitationem voluptates corrupti?",
      aosDelay: "600",
    },
  ];

  return (
    <div>
      <div className="container">
        {/* Page header */}
        <PageHeader title="About Us" />
      </div>

      <div className="mb-20">
        <AboutPageAboutSection />
      </div>

      <div className="container mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {ServiceData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)] hover:shadow-xl hover:dark:shadow-gray-800 transition-shadow duration-300 cursor-pointer"
            >
              {/* Icon section */}
              <div className="w-10 h-10 rounded-lg flex justify-center text-white">
                <div className="text-4xl">{data.icon}</div>
              </div>
              <p className="font-semibold">{data.title}</p>
              <p className="text-sm text-gray-500 dark:text-white/70">
                {data.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Whatsapp icon */}
      <WhatsappIcon />
    </div>
  );
}

export default AboutPage;

// vistion mission quality statement
