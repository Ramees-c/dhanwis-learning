import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import CoursePageCard from "../../components/CoursePageCard/CoursePageCard";
import WhatsappIcon from "../../components/WhatsappIcon/WhatsappIcon";
import CallIcon from "../../components/CallIcon/CallIcon";

function CoursesPage() {
  return (
    <div>
      <div className="container">
        {/* Page Header */}
        <PageHeader title="Courses" />
        <div>
          <CoursePageCard />
        </div>
      </div>

      {/* Whatsapp icon */}
      <WhatsappIcon />

      {/* Call Icon */}
      <CallIcon />
    </div>
  );
}

export default CoursesPage;
