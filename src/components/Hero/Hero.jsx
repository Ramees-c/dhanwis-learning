import React from "react";
import Slider from "react-slick";

import slider_img_1 from "../../assets/images/hero/bannner_image4.png";
import slider_img_2 from "../../assets/images/hero/banner_img5.png"
import slider_img_3 from "../../assets/images/hero/nanner_image5.png"
import Button from "../Shared/Button";

const HeroData = [
  {
    id: 1,
    img: slider_img_1,
    subtitle: "Learn & Achieve",
    title: "Discover the perfect mentor for you.",
    description:
      "Connect with us and cultural institutions sharing their experience.",
  },

  {
    id: 2,
    img: slider_img_2,
    subtitle: "Unlock Your Future",
    title: "Learn from industry leaders.",
    description:
      "Reach your career goals with a supportive growth community.",
  },

  {
    id: 3,
    img: slider_img_3,
    subtitle: "From Beginner to Pro",
    title: "Start Your IT Career with Confidence.",
    description:
      "Build a strong foundation for a rewarding career in IT.",
  },
];

function Hero() {
  const settings = {
    dots: false,
    arrows : false,
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
    <div className="container">
      {/* Hero section */}
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex items-center justify-center">
        <div className="container pb-8 sm:pb-0 overflow-hidden">
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div key={data.id} className="grid grid-cols-1 xl:grid-cols-2">
                  {/* text content section */}
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 xl:order-1 relative z-10">
                    <h1 data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-1xl sm:text-5xl lg-text-1xl font-bold text-primary">
                      {data.subtitle}
                    </h1>
                    <h1 data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true" 
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3">
                      {data.title}
                    </h1>
                    <h1 data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true" 
                    className="text-1xl dark:text-white mb-5">
                      {data.description}
                    </h1>
                    <div data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="500"
                    data-aos-delay="300">
                      <Button
                        text="Ready to begin?"
                        bgColor="bg-primary"
                        textColor="text-black"
                      />
                    </div>
                  </div>

                  {/* image section */}
                  <div className="order-1 xl:order-2">
                    <div
                    data-aos="zoom-in"
                    data-aos-once="true" 
                    >
                      <img
                        src={data.img}
                        alt=""
                        className=" mb-5 lg:mb-0 w-[400px] h-[200px] md:h-[500px] sm-h-[450px] sm:w-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto"
                      />
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

export default Hero;
