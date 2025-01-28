import React, { useState } from "react";

function FaqComponent() {
  const FaqData = [
    {
      id: 1,
      question:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, alias?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa itaque sit excepturi quibusdam. Odit, dicta explicabo quas eum fugiat, molestias perferendis voluptas doloremque officiis ipsa adipisci consectetur sit totam.",
    },
    {
      id: 1,
      question:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, alias?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa itaque sit excepturi quibusdam. Odit, dicta explicabo quas eum fugiat, molestias perferendis voluptas doloremque officiis ipsa adipisci consectetur sit totam.",
    },
    {
      id: 1,
      question:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, alias?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa itaque sit excepturi quibusdam. Odit, dicta explicabo quas eum fugiat, molestias perferendis voluptas doloremque officiis ipsa adipisci consectetur sit totam.",
    },
    {
      id: 1,
      question:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, alias?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa itaque sit excepturi quibusdam. Odit, dicta explicabo quas eum fugiat, molestias perferendis voluptas doloremque officiis ipsa adipisci consectetur sit totam.",
    },
    {
      id: 1,
      question:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, alias?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa itaque sit excepturi quibusdam. Odit, dicta explicabo quas eum fugiat, molestias perferendis voluptas doloremque officiis ipsa adipisci consectetur sit totam.",
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
        <div>
          {FaqData.map((data, index) => (
            <div 
            data-aos="fade-up"
            key={index} className="border-b border-black/15 dark:border-white/15 last:border-b-0 overflow-hidden">
              <div
                className="flex justify-between gap-8 cursor-pointer items-start text-2xl py-4"
                onClick={() => showAnswer(index)}
              >
                <h1 className="text-xl">{data.question}</h1>
                <span
                  className={`text-2xl ${
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
  );
}

export default FaqComponent;
