import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";

import img1 from "../../assets/images/gallery/g1.jpg";
import img2 from "../../assets/images/gallery/g2.jpg";
import img3 from "../../assets/images/gallery/g3.jpg";
import img4 from "../../assets/images/gallery/g4.jpg";
import img5 from "../../assets/images/gallery/g5.jpg";

import WhatsappIcon from "../../components/WhatsappIcon/WhatsappIcon";

import CallIcon from "../../components/CallIcon/CallIcon";

function GalleryPage() {
  const Images = [img1, img2, img3, img4, img5];

  return (
    <div>
      <div className="container">
        {/* page header */}
        <PageHeader title="Gallery" />

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
