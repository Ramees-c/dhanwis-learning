import React from "react";
import Slider from "react-slick";

import slider_img_1 from "../../assets/images/hero/banner_img_2.png";
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
    id: 1,
    img: slider_img_1,
    subtitle: "Learn & Achieve",
    title: "Discover the perfect mentor for you.",
    description:
      "Connect with us and cultural institutions sharing their experience.",
  },

  {
    id: 1,
    img: slider_img_1,
    subtitle: "Learn & Achieve",
    title: "Discover the perfect mentor for you.",
    description:
      "Connect with us and cultural institutions sharing their experience.",
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
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div key={data.id} className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text content section */}
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1 className="text-1xl sm:text-6xl lg-text-1xl font-bold text-primary">
                      {data.subtitle}
                    </h1>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-5">
                      {data.title}
                    </h1>
                    <h1 className="text-1xl dark:text-white mb-5">
                      {data.description}
                    </h1>
                    <div>
                      <Button
                        text="Ready to begin?"
                        bgColor="bg-primary"
                        textColor="text-black"
                      />
                    </div>
                  </div>

                  {/* image section */}
                  <div className="order-1 sm:order-2">
                    <div>
                      <img
                        src={data.img}
                        alt=""
                        className="w-[400px] h-[800px] sm-h-[450px] sm:w-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]"
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
