import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import CareersCard from "../../components/CareersCard/CareersCard";
import WhatsappIcon from "../../components/WhatsappIcon/WhatsappIcon";
import CallIcon from "../../components/CallIcon/CallIcon";

function CareerPage() {
  const jobOpenings = [
    {
      id: 1,
      title: "Python Developer",
      company: "Dhanwis Techinfo Solutions",
      location: "Kannur",
      JobType: "Full-time",
      description:
        "We are seeking a talented and experienced Python Developer to design, develop, and maintain web applications. The ideal candidate will have a strong background in Python programming, web frameworks, and database management. You will work closely with our team of developers, designers, and project managers to deliver robust and scalable web solutions.",
    },
    {
      id: 2,
      title: " MERN Stack Developer",
      company: "Dhanwis Techinfo Solutions",
      location: "Kannur",
      JobType: "Full-time",
      description:
        "We are seeking a talented and experienced MERN Stack Developer to design, develop, and maintain web applications. The ideal candidate will have a strong background in MongoDB, Express.js, React.js, and Node.js and a passion for building scalable, user-friendly web applications. You will work closely with our team of developers, designers, and project managers to deliver robust and innovative solutions.",
    },
    {
      id: 3,
      title: "Digital Marketing Specialist",
      company: "Dhanwis Techinfo Solutions",
      location: "Kannur",
      JobType: "Full-time",
      description:
        "We are seeking a creative and results-driven Digital Marketing Specialist to develop and execute marketing strategies that promote our web development services. The ideal candidate will have a strong understanding of digital marketing channels, analytics, and tools, as well as experience working with web development teams. You will work closely with our developers, designers, and sales teams to create campaigns that attract and engage our target audience.",
    },
  ];

  return (
    <div>
      <div className="container">
        {/* page header */}
        <PageHeader title="Careers" />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 place-items-center pb-20">
          {jobOpenings.map((item) => (
            <CareersCard
              key={item.id}
              title={item.title}
              company={item.company}
              location={item.location}
              description={item.description}
              JobType={item.JobType}
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
