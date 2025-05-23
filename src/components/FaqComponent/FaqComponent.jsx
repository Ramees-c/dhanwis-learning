import React, { useState } from "react";

import about_img from "../../assets/images/about/about1.jpg"

function FaqComponent() {
  const FaqData = [
    {
      id: 1,
      question: " Are the courses beginner-friendly?",
      answer:
        "Yes, our courses are designed for beginners and professionals, covering fundamentals to advanced concepts with real-world projects.",
    },
    {
      id: 2,
      question: "Do you offer certifications?",
      answer:
        "Yes, upon successful course completion, you will receive an industry-recognized certification.",
    },
    {
      id: 3,
      question: "Do you provide online courses?",
      answer: "No, we only offer offline courses at our academy.",
    },
    {
      id: 4,
      question: "Do you offer placement assistance?",
      answer:
        "Yes, we provide job placement support, including resume building and interview preparation.",
    },
  ];

  //   state
  const [showSelectedQ, setSelectedQ] = useState(null);

  const showAnswer = (index) => {
    setSelectedQ(index === showSelectedQ ? null : index);
  };
  console.log();
  return (
    <div>
      <div className="container py-20">
        {/* Header section */}
        <div className="space-y-4 p-6 max-w-[2000px] text-center mx-auto mb-5">
          <h1 className="uppercase font-bold text-2xl xl:text-4xl text-primary font-titleFont">
            Frequently Asked Questions
          </h1>
        </div>

        {/* Content section */}
        <div className="max-w-[1320px] lg:py-[80] gap-10 py-5 flex xl:flex-row flex-col justify-center items-center mx-auto">
          <div
            data-aos="fade-right"
            data-aos-duration="500"
            className="basis-[45%]"
          >
            <img
              src={about_img}
              className="w-full rounded-xl mb-10 xl:mb-0"
              alt=""
            />
          </div>

          <div className="basis-[45%]">
            {FaqData.map((data, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className="border-b border-black/15 dark:border-white/15 last:border-b-0 overflow-hidden"
              >
                <div
                  className="flex justify-between gap-8 cursor-pointer items-start text-2xl py-4"
                  onClick={() => showAnswer(index)}
                >
                  <h1 className="text-xl text-black/85 dark:text-white/95">
                    {data.question}
                  </h1>
                  <span
                    className={`text-2xl text-primary font-bold ${
                      showSelectedQ === index ? "rotate-180" : ""
                    } ease-in-out duration-500`}
                  >
                    {showSelectedQ === index ? "-" : "+"}
                  </span>
                </div>
                <p
                  className={`text-lg opacity-75 ease-in-out duration-500 ${
                    showSelectedQ === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {data.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqComponent;
