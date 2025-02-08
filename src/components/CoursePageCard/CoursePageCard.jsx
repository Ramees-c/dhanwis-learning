import React from "react";

import flutter_img from "../../assets/images/courses/flutter1.jpg";


function CoursePageCard() {

  const CardData = [
    {
      course: "Flutter",
      image: flutter_img,
      title1: "One-on-One Instruction",
      title2: "Lesson Packages",
      title3: "Flexible Scheduling",
      title4: "Dang this much!",
      title5: "Something else cool",
      aosDelay: "0",
    },
    {
      course: "MERN",
      image: flutter_img,
      title1: "One-on-One Instruction",
      title2: "Lesson Packages",
      title3: "Flexible Scheduling",
      title4: "Dang this much!",
      title5: "Something else cool",
      aosDelay: "200",
    },
    {
      course: "PYTHON",
      image: flutter_img,
      title1: "One-on-One Instruction",
      title2: "Lesson Packages",
      title3: "Flexible Scheduling",
      title4: "Dang this much!",
      title5: "Something else cool",
      aosDelay: "400",
    },
    {
      course: "Digital Marketting",
      image: flutter_img,
      title1: "One-on-One Instruction",
      title2: "Lesson Packages",
      title3: "Flexible Scheduling",
      title4: "Dang this much!",
      title5: "Something else cool",
      aosDelay: "600",
    },
    
  ]

  return (
    <div className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 place-items-center cursor-pointer">
       

       {
        CardData.map((data,index) => (
          <div  data-aos="fade-up"
          data-aos-delay="{data.aosDelay}"
          key={index} className="h-full shadow-xl rounded-3xl hero-bg-color overflow-hidden hover:shadow-2xl hover:dark:shadow-gray-800 transition-shadow duration-300">
          <header>
          <img
              src={data.image}
              className="lg:h-68 md:h-38 w-full object-cover object-center"
              alt=""
            />
          </header>
          <div className="flex flex-col p-6 border-t">
          <h1 className="text-2xl font-bold mb-3 text-black/85 dark:text-white/85">{data.course}</h1>
            <div className="flex-1 inline-flex items-center mb-3">
              <div className="bg-yellow-300 mr-3 p-1 rounded-full">
                <svg
                  className="h-3 w-3 text-yellow-800 fill-current"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <polygon points="0 11 2 9 7 14 18 3 20 5 7 18"></polygon>
                </svg>
              </div>
              <p className="text-xs">{data.title1}</p>
            </div>
            <div className="flex-1 inline-flex items-center mb-3">
              <div className="bg-yellow-300 mr-3 p-1 rounded-full">
                <svg
                  className="h-3 w-3 text-green-800 fill-current"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <polygon points="0 11 2 9 7 14 18 3 20 5 7 18"></polygon>
                </svg>
              </div>
              <p className="text-xs">{data.title2}</p>
            </div>
            <div className="flex-1 inline-flex items-center mb-3">
              <div className="bg-yellow-300 mr-3 p-1 rounded-full">
                <svg
                  className="h-3 w-3 text-green-800 fill-current"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <polygon points="0 11 2 9 7 14 18 3 20 5 7 18"></polygon>
                </svg>
              </div>
              <p className="text-xs">{data.title3}</p>
            </div>
            <div className="flex-1 inline-flex items-center mb-3">
              <div className="bg-yellow-300 mr-3 p-1 rounded-full">
                <svg
                  className="h-3 w-3 text-green-800 fill-current"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <polygon points="0 11 2 9 7 14 18 3 20 5 7 18"></polygon>
                </svg>
              </div>
              <p className="text-xs">{data.title4}</p>
            </div>
            <div className="flex-1 inline-flex items-center">
              <div className="bg-yellow-300 mr-3 p-1 rounded-full">
                <svg
                  className="h-3 w-3 text-green-800 fill-current"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <polygon points="0 11 2 9 7 14 18 3 20 5 7 18"></polygon>
                </svg>
              </div>
              <p className="text-xs">{data.title5}</p>
            </div>
          </div>
        </div>
        ))
       }

        

        
      </div>

      
    </div>
  );
}

export default CoursePageCard;
