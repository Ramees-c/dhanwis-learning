import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";

import img1 from "../../assets/images/gallery/g1.jpg";
import img2 from "../../assets/images/gallery/g2.jpg";
import img3 from "../../assets/images/gallery/g3.jpg";
import img4 from "../../assets/images/gallery/g4.jpg";
import img5 from "../../assets/images/gallery/g5.jpg";

import spinner from "../../assets/images/loading_spinner/loading_spinner.gif";
import WhatsappIcon from "../../components/WhatsappIcon/WhatsappIcon";

function GalleryPage() {
  const [isLoading, setIsLoading] = useState(false);

  const Images = [img1, img2, img3, img4, img5];

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 4000);
  }, []);

  return !isLoading ? (
    <div className="loading_spinner">
      <img src={spinner} alt="" />
    </div>
  ) : (
    <div>
      <div className="container">
        {/* page header */}
        <PageHeader title="Gallery" />

        <div className="columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4">
          {Images.map((image, index) => (
            <div key={index} className="mb-4 break-inside-avoid">
              <img
                src={image}
                alt="image"
                className="w-full object-cover rounded-lg cursor-pointer hover:scale-110 duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Page */}
      <WhatsappIcon />
    </div>
  );
}

export default GalleryPage;
