import React from "react";

import { PiChalkboardTeacherDuotone } from "react-icons/pi";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { FaHandsHelping } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";

const ServiceData = [
  {
    id: 1,
    icon: <PiChalkboardTeacherDuotone className="bg-[#0062ff]" />,
    title: "Real time Industry based training",
    desc: "Real-time industry-based training provides hands-on experience, practical skills, and live projects to prepare professionals for real-world challenges.",
    aosDelay: "0",
  },
  {
    id: 2,
    icon: <LiaUserFriendsSolid className="bg-[#73bc00]" />,
    title: "1 to 1 Support",
    desc: "1-to-1 support offers personalized guidance, tailored learning, and individual attention to help students achieve their academic goals effectively.",
    aosDelay: "200",
  },
  {
    id: 3,
    icon: <FaHandsHelping className="bg-[#fa6400]" />,
    title: "Job Placement assistance",
    desc: "Job placement assistance provides career guidance, resume building, and interview prep to help students secure rewarding job opportunities seamlessly.",
    aosDelay: "400",
  },
  {
    id: 4,
    icon: <BsPersonWorkspace className="bg-[#fe6baa]" />,
    title: "Extra skill Development training",
    desc: "Extra skill development training enhances IT expertise, boosts career growth, and equips professionals with advanced, industry-relevant technical skills.",
    aosDelay: "600",
  },
];

function Services() {
  return (
    <div>
      <div className="container py-20">
        {/* Header section */}
        <div className="space-y-4 p-6 max-w-[2000px] text-center mx-auto mb-5">
          <h1 className="uppercase font-bold text-2xl xl:text-4xl text-primary font-titleFont">
            Why an scholercity out of The ordinary
          </h1>
          <p className="font-semibold text-sm lg:text-xl text-black/85 dark:text-white">
            You don't have to struggle alone, you've got our assistance and
            help.
          </p>
        </div>
        {/* Card section */}
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
              <p className="text-sm text-gray-500 dark:text-white/70 text-justify [word-spacing:0.1rem]">
                {data.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
