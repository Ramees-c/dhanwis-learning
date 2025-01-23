import React from "react";

import flutter_img from "../../assets/images/courses/flutter1.jpg";
import mern_img from "../../assets/images/courses/mern3.jpg";
import python_img from "../../assets/images/courses/python1.png";
import digital_img from "../../assets/images/courses/digital.jpg";

function CourseCard() {
  const CourseData = [
    {
      id: 1,
      course: "Flutter",
      image: flutter_img,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, soluta.",
    },
    {
      id: 2,
      course: "MERN",
      image: flutter_img,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, soluta.",
    },
    {
      id: 3,
      course: "PYTHON",
      image: flutter_img,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, soluta.",
    },
    {
      id: 4,
      course: "Digital Marketting",
      image: flutter_img,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, soluta.",
    },
  ];

  return (
   <div className="flex flex-wrap -m-4">
    {CourseData.map((data) => (
        <div className="p-4 sm:w-1/3 lg:w-1/4">
        <div className="h-full shadow-xl rounded-3xl hero-bg-color overflow-hidden">
        <img src={data.image} className="lg:h-68 md:h-38 w-full object-cover object-center" alt="" />
        <div className="p-6  transition duration-300 ease-in h-full">
            <h1 className="text-2xl font-bold mb-3">{data.course}</h1>
            <p className="leading-relaxed mb-3">{data.desc}</p>
            <div className="flex items-end flex-wrap justify-center">
                <a href="" className="text-primary md:mb-2 lg:mb-0 font-bold">Learn More</a>
            </div>
        </div>
        </div>
        </div>
    ))}
   </div>


//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
//     {
//       CourseData.map((data) => (
//         <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//     <a href="#">
//         <img className="rounded-t-lg" src={data.image} alt="" />
//     </a>
//     <div className="p-5">
//         <a href="#">
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.course}</h5>
//         </a>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.desc}</p>
//         <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-primary rounded-lg focus:ring-4 focus:outline-none">
//             Read more
//              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//             </svg>
//         </a>
//     </div>
// </div>
//       ))
//     }
//   </div>


  );
}

export default CourseCard;



{/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
{CourseData.map((data) => (
  <div
    key={data.id}
    className="w-60 p-3 rounded-3xl bg-gradient-to-r from-gray-300/50bg-gradient-to-r from-gray-300/80  to-gray-100 dark:from-gray-900 dark:to-gray-800 dark:text-white shadow-[0_0_22px_rgba(0,0,0,0.11)]"
  >
    <img
      src={data.image}
      className="h-[140px] w-[260px] object-cover rounded-xl"
      alt=""
    />
    <div className="p-2">
      <h2 className="font-bold text-lg my-1">{data.course}</h2>
      <p className="text-sm text-gray-500">{data.desc}</p>
    </div>
    <div className="text-center">
      <a role="button" className="text-primary font-bold">
        Learn More
      </a>
    </div>
  </div>
))}
</div> */}