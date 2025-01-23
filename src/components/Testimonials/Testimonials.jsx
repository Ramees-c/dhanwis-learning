import React from "react";

import testimonials_img1 from "../../assets/images/testimonials/testmonials.jpg";

import { RiDoubleQuotesR } from "react-icons/ri";

import Slider from "react-slick";

function Testimonials() {
  const TestimonialsData = [
    {
      id: 1,
      profile_photo: "imga1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam id ea doloribus voluptatem autem, aspernatur maiores sapiente voluptatibus culpa doloremque minus dignissimos dolorem! Nulla, at eveniet minima officiis quae omnis?",
    },
    {
      id: 2,
      profile_photo: "imga1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam id ea doloribus voluptatem autem, aspernatur maiores sapiente voluptatibus culpa doloremque minus dignissimos dolorem! Nulla, at eveniet minima officiis quae omnis?",
    },
    {
      id: 3,
      profile_photo: "imga1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam id ea doloribus voluptatem autem, aspernatur maiores sapiente voluptatibus culpa doloremque minus dignissimos dolorem! Nulla, at eveniet minima officiis quae omnis?",
    },
  ];
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div>
      <div className="container pt-20">
        {/* Header section */}
        <div className="space-y-4 p-6 max-w-[2000px] text-center mx-auto mb-5">
          <h1 className="uppercase font-bold text-3xl text-primary font-titleFont">
            Why Choose Us
          </h1>
        </div>
      </div>

      <div className="container pb-10">
        {/* Content section */}
        <div>
          <Slider {...settings}>
            {TestimonialsData.map((data) => (
              <div key={data.id}>
                <div className="w-full overflow-hidden h-auto p-8 space-y-10 group rounded-3xl hero-bg-color">
                  <p className="text-base">{data.content}</p>
                  <div className="w-full flex items-center justify-between ">
                    <div className="flex items-center gap-3">
                      <img
                        className="w-12 h-12 object-center object-cover rounded-full border"
                        src={testimonials_img1}
                        alt=""
                      />
                      <div className="space-y-1">
                        <p className="text-base font-semibold">Name</p>
                        <p className="text-xs font-normal italic">Company</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
