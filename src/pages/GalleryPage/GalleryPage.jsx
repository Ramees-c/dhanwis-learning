import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";

import img1 from "../../assets/images/gallery/1.jpg";
import img2 from "../../assets/images/gallery/2.jpg";
import img3 from "../../assets/images/gallery/3.jpg";
import img4 from "../../assets/images/gallery/4.jpg";
import img5 from "../../assets/images/gallery/5.jpg";

import img6 from "../../assets/images/gallery/6.jpg";
import img7 from "../../assets/images/gallery/7.jpg";
import img8 from "../../assets/images/gallery/8.jpg";
import img9 from "../../assets/images/gallery/9.jpg";
import img10 from "../../assets/images/gallery/10.jpg";

import img11 from "../../assets/images/gallery/11.jpg";
import img12 from "../../assets/images/gallery/12.jpg";
import img13 from "../../assets/images/gallery/13.jpg";
import img14 from "../../assets/images/gallery/14.jpg";

import WhatsappIcon from "../../components/WhatsappIcon/WhatsappIcon";

import CallIcon from "../../components/CallIcon/CallIcon";

function GalleryPage() {
  const Images = [
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
  ];

  return (
    <div>
      <div className="container">
        

        <div className="columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4">
          <div speed={500} plugins={[]} mode="lg-fade" download={false}>
            {Images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="image"
                className="w-full object-cover rounded-lg cursor-pointer h-full mb-4 break-inside-avoid transition duration-300 ease-in-out hover:scale-110"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Page */}
      <WhatsappIcon />

      {/* Call Icon */}
      <CallIcon />
    </div>
  );
}

export default GalleryPage;
