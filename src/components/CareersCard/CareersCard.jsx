import React from "react";

import Swal from "sweetalert2";

function CareersCard({ title, company, location, description }) {
  const notify = () => {
    Swal.fire({
      text: "Send your CV to info@dhanwis.com",
      customClass: {
        popup: "hero-bg-color rounded-lg shadow-lg",
        confirmButton: "bg-primary font-bold py-2 px-4 text-black rounded",
      },
    });
  };

  return (
    <div className="pb-20">
      <div
        className="rounded-xl p-6 shadow-[0_0_22px_rgba(0,0,0,0.15)] hover:dark:shadow-gray-800 transition-shadow duration-300"
        data-aos="fade-up"
      >
        <h2 className="text-xl font-semibold text-black/85 dark:text-white/85">
          {title}
        </h2>
        <p className="text-black/85 dark:text-white/85 text-sm mt-1">
          {company} - {location}
        </p>
        <p className="text-black/85 dark:text-white/85 text-sm mt-3 line-clamp-3">
          {description}
        </p>
        <div className="mt-4">
          <p
            className="inline-block text-primary text-md font-bold cursor-pointer"
            onClick={notify}
          >
            Apply Now
          </p>
        </div>
      </div>
    </div>
  );
}

export default CareersCard;
