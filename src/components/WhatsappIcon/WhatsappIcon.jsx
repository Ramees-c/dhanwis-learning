import React from "react";

import whatsapp_icon from "../../assets/images/logo/whatsapp_logo.png";

function WhatsappIcon() {
  return (
    <div>
      <a
        href="https://wa.me/+918086487219"
        target="_blank"
        className="fixed bottom-20 right-4"
      >
        <img src={whatsapp_icon} alt="whatsapp" className="w-[50px]" />
      </a>
    </div>
  );
}

export default WhatsappIcon;
