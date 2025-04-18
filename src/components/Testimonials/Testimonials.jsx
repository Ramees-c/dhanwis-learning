import React from "react";

import sruthi_profile from "../../assets/images/testimonials/sruthi.jpeg";
import adarsh_profile from "../../assets/images/testimonials/adarsh.jpg";
import vaishnav_profile from "../../assets/images/testimonials/vaishanav.jpg";

import avatar_boy_img from "../../assets/images/testimonials/avatarb.jpg";
import avatar_girl_img from "../../assets/images/testimonials/avatarg.jpg"

import Slider from "react-slick";

function Testimonials() {
  const TestimonialsData = [
    {
      id: 1,
      profile_photo: sruthi_profile,
      name: "Sruthi",
      company: "Student @Dhanwis Academy",
      content:
        "I recently completed a 3-month React course at Dhanwis Techinfo Solutions and had a fantastic experience. Thanks to trainers like Shamal, Ajina, and the entire team of developers, I found complex concepts easy to grasp. The real-time project experience was invaluable, and I secured a placement soon after completing the course. I highly recommend Dhanwis Techinfo Solutions for anyone looking to advance their tech career.",
    },
    {
      id: 2,
      profile_photo: adarsh_profile,
      name: "Adarsh",
      company: "Student @Dhanwis Academy",
      content:
        "Dhanwis Learning Hub has been a game-changer. The Python course was detailed and well-structured, with knowledgeable instructors always ready to help. The hands-on projects solidified my understanding and boosted my confidence. Highly recommend!",
    },
    {
      id: 3,
      profile_photo: vaishnav_profile,
      name: "Vaishnav",
      company: "Student @Dhanwis Academy",
      content:
        "I highly endorse the Python course at Dhanwis Learning Hub. The curriculum was thorough, and the instructors were always helpful. The practical projects made learning engaging and effective. I now feel confident in my programming abilities.",
    },
    {
      id: 4,
      profile_photo: avatar_boy_img,
      name: "Muzammil",
      company: "Student @Dhanwis Academy",
      content:
        "I am incredibly grateful for the knowledge and skills I gained during the digital marketing course. The practical approach and in-depth training have equipped me with confidence to excel in the industry. The supportive mentors and hands-on projects have been truly valuable.",
    },
    {
      id: 5,
      profile_photo: avatar_boy_img,
      name: "Dhyan",
      company: "Student @Dhanwis Academy",
      content:
        "I completed the Python course at Dhanwis Academy, and it was an outstanding learning experience. The course covered everything from basics to advanced concepts, with clear and practical examples. The instructors were highly knowledgeable and always ready to help. I gained a strong foundation in Python, which has greatly boosted my coding skills.",
    },
    {
      id: 6,
      profile_photo: avatar_boy_img,
      name: "Akash",
      company: "Student @Dhanwis Academy",
      content:
        "Honing skills in digital marketing at DHANWIS ACADEMY was one of the best decisions I’ve made. The course covered everything in digital marketing, with practical assignments that mirrored real-life scenarios. The Instructors was supportive and provided great mentorship.",
    },
    {
      id: 7,
      profile_photo: avatar_girl_img,
      name: "Amitha V",
      company: "Student @Dhanwis Academy",
      content:
        "Studying at DHANWIS ACADEMY was an incredible experience. The curriculum was up-to-date with current digital marketing trends and included hands-on projects. Professors with industry experience made learning practical and engaging. The access to real-world tools and internships helped me build confidence in my skills.",
    },
  ];
  const settings = {
    dots: false,
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
          <h1 className="uppercase font-bold text-2xl xl:text-4xl text-primary font-titleFont">
            Why Choose Us
          </h1>
        </div>
      </div>

      <div className="container pb-10">
        {/* Content section */}
        <div>
          <Slider {...settings}>
            {TestimonialsData.map((data) => (
              <div data-aos="fade-up" key={data.id}>
                <div className="w-full overflow-hidden h-[500px] md:h-auto p-8 space-y-10 group rounded-3xl hero-bg-color flex flex-col justify-between">
                  <p className="text-base text-justify text-black/85 dark:text-white/95">
                    {data.content}
                  </p>
                  <div className="w-full flex items-center justify-between ">
                    <div className="flex items-center gap-3">
                      <img
                        className="w-12 h-12 object-center object-cover rounded-full border"
                        src={data.profile_photo}
                        alt=""
                      />
                      <div className="space-y-1">
                        <p className="text-base font-semibold">{data.name}</p>
                        <p className="text-xs font-normal italic">
                          {data.company}
                        </p>
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
