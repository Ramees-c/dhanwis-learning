import React from "react";

function PageHeader({ title, headerImg }) {
  return (
    <div className="pt-3 pb-20" data-aos="fade-right">
      <div
        className={`min-h-[200px] rounded-3xl sm:min-h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${headerImg})` }}
      >
        <div>
          <h1 className="text-primary text-7xl font-titleFont font-bold">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
