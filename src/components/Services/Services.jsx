import React from "react";

import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";

const ServiceData = [
  {
    id: 1,
    icon: <GrYoga className="bg-[#0062ff]" />,
    title: "Real time Industry based training",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, quibusdam sapiente dolorum cum ea dicta quos? Quibusdam exercitationem voluptates corrupti?",
  },
  {
    id: 2,
    icon: <FaDumbbell className="bg-[#73bc00]" />,
    title: "1 to 1 Support",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, quibusdam sapiente dolorum cum ea dicta quos? Quibusdam exercitationem voluptates corrupti?",
  },
  {
    id: 3,
    icon: <GiGymBag className="bg-[#fa6400]" />,
    title: "Job Placement assistance",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, quibusdam sapiente dolorum cum ea dicta quos? Quibusdam exercitationem voluptates corrupti?",
  },
  {
    id: 4,
    icon: <GiGymBag className="bg-[#fe6baa]" />,
    title: "Extra skill Development training",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, quibusdam sapiente dolorum cum ea dicta quos? Quibusdam exercitationem voluptates corrupti?",
  },
];

function Services() {
  return (
    <div>
      <div className="container py-24">
        {/* Header section */}
        <div className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
          <h1 className="uppercase font-semibold text-2xl text-primary">
            Why an scholercity out of The ordinary
          </h1>
          <p className="font-semibold">
            You don't have to struggle alone, you've got our assistance and
            help.
          </p>
        </div>
        {/* Card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {ServiceData.map((data) => (
            <div className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]">
              {/* Icon section */}
              <div className="w-10 h-10 rounded-lg flex justify-center text-white">
                <div className="text-4xl">{data.icon}</div>
              </div>
              <p className="font-semibold">{data.title}</p>
              <p className="text-sm text-gray-500">{data.desc}</p>
              <p></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;