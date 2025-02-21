import React from "react";

import call_icon from "../../assets/images/logo/call_icon.png";

function CallIcon() {
  return (
    <div>
      <a href="tel:+919961487219" className="fixed bottom-5 right-4">
        <img src={call_icon} alt="call" className="w-[50px]" />
      </a>
    </div>
  );
}

export default CallIcon;
