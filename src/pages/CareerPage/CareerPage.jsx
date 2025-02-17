import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import CareersCard from "../../components/CareersCard/CareersCard";
import WhatsappIcon from "../../components/WhatsappIcon/WhatsappIcon";
import CallIcon from "../../components/CallIcon/CallIcon";

function CareerPage() {
  const jobOpenings = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Dhanwis Techinfo Solutions",
      location: "Kannur",
      description:
        "Develop responsive and interactive web applications, Optimize UI/UX for seamless user experiences, Collaborate with designers and backend developers,  Stay updated with the latest web trends and technologies",
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Dhanwis Techinfo Solutions",
      location: "Kannur",
      description:
        "Develop responsive and interactive web applications, Optimize UI/UX for seamless user experiences, Collaborate with designers and backend developers,  Stay updated with the latest web trends and technologies",
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Dhanwis Techinfo Solutions",
      location: "Kannur",
      description:
        "Develop responsive and interactive web applications, Optimize UI/UX for seamless user experiences, Collaborate with designers and backend developers,  Stay updated with the latest web trends and technologies",
    },
  ];

  return (
    <div>
      <div className="container">
        {/* page header */}
        <PageHeader title="Careers" />

        <div>
          {jobOpenings.map((item) => (
            <CareersCard
              key={item.id}
              title={item.title}
              company={item.company}
              location={item.location}
              description={item.description}
              
            />
          ))}
        </div>
      </div>

      {/* Whatsapp icon */}
      <WhatsappIcon />

      {/* Call Icon */}
      <CallIcon />
    </div>
  );
}

export default CareerPage;
