import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";

import { TbDeviceVisionPro } from "react-icons/tb";
import AboutPageAboutSection from "../../components/AboutPageAboutSection/AboutPageAboutSection";
import WhatsappIcon from "../../components/WhatsappIcon/WhatsappIcon";
import CallIcon from "../../components/CallIcon/CallIcon";
import { FaHandsHelping, FaRoute, FaTrophy } from "react-icons/fa";


import About_page_image from '../../assets/images/page_header/about_page.jpg'

function AboutPage() {
  const ServiceData = [
    {
      id: 1,
      icon: <TbDeviceVisionPro className="bg-[#0062ff]" />,
      title: "Vision",
      desc: "Empowering aspiring IT professionals with cutting-edge skills, industry knowledge, and hands-on training for a successful digital future.",
      aosDelay: "0",
    },
    {
      id: 2,
      icon: <FaTrophy className="bg-[#73bc00]" />,
      title: "Mission",
      desc: "Our mission is to provide industry-focused IT training, hands-on experience, and career support to build future-ready professionals.",
      aosDelay: "200",
    },
    {
      id: 3,
      icon: <FaRoute className="bg-[#fa6400]" />,
      title: "Educational Approach",
      desc: "Flexible learning, hands-on training, real-world projects, skill assessments, and access to industry-standard tools for career growth.",
      aosDelay: "400",
    },
    {
      id: 4,
      icon: <FaHandsHelping className="bg-[#fe6baa]" />,
      title: "Career Development & Support",
      desc: "Earn industry-recognized certifications, get resume and interview support, internships, job-focused training, and network with IT professionals.",
      aosDelay: "600",
    },
  ];

  return (
    <div className="pt-5">
      

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
              className="space-y-4 p-6 rounded-xl dark:bg-gray-800 shadow-[0_0_22px_rgba(0,0,0,0.15)] hover:shadow-xl hover:dark:shadow-gray-800 transition-shadow duration-300"
            >
              {/* Icon section */}
              <div className="w-10 h-10 rounded-lg flex justify-center text-white">
                <div className="text-4xl">{data.icon}</div>
              </div>
              <p className="font-semibold">{data.title}</p>
              <p className="text-sm text-gray-500 dark:text-white/70 text-justify [word-spacing:0px]">
                {data.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Whatsapp icon */}
      <WhatsappIcon />

      {/* Call iocn */}
      <CallIcon />
    </div>
  );
}

export default AboutPage;

// vistion mission quality statement
