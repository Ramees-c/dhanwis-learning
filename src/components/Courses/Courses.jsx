import React from "react";
import CourseCard from "../CourseCard/CourseCard";

function Courses() {
  return (
    <div>
      <div className="container py-20">
        {/* Header section */}
        <div className="space-y-4 p-6 text-center max-w-[2000px] mx-auto mb-5">
          <h1 className="uppercase font-bold text-2xl xl:text-4xl text-primary font-titleFont">
            Our Offline Courses are out of The ordinary
          </h1>
          <p className="font-semibold text-sm lg:text-xl text-black/85 dark:text-white">
            You don't have to struggle alone, you've got our assistance and
            help.
          </p>
        </div>
        {/* Body section */}
        <div>
          <CourseCard />
        </div>
      </div>
    </div>
  );
}

export default Courses;
